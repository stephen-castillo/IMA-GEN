const {
  AuthenticationError,
  UserInputError,
} = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../util/auth");
const { dateScalar } = require("./customScalars");
const { openaiInterface, getEngines, listModels, getImage, makePrompt } = require("../util/aiapi");
const Post = require('../models/post');
const cloudinary = require('../util/cloudy');

const resolvers = {
  Date: dateScalar,
  Query: {
    me: async (parent, args, ctx) => {
      // if ctx.user is undefined, then no token or an invalid token was
      // provided by the client.
      if (!ctx.user) {
        throw new AuthenticationError("Must be logged in.");
      }
      return User.findOne({ email: ctx.user.email });
    },
    getEngines: async (parent, args) => {
        const engines = await getEngines();
        return engines;
    },
    listModels: async (parent, args) => {
        const models = await openaiInterface.listModels();
        //console.log(models.data);
        return models.data;
    },
    posts: async () => {
        try {
            const posts = await Post.find({});
            return posts;
        } catch (error) {
            throw new Error('Unable to fetch posts');
        }
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      try {
        const user = await User.create({ ...args });
        const token = await signToken(user);
        return { user, token };
      } catch (error) {
        if (error.name === "MongoError" && error.code === 11000) {
          const [[key, value]] = Object.entries(error.keyValue);
          throw new UserInputError(`${key} "${value}" already exists.`);
        }
        throw error;
      }
    },
    login: async (parent, args) => {
      const { email, password } = args;
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Invalid username or password");
      }
      const authentic = await user.isCorrectPassword(password);
      if (!authentic) {
        throw new AuthenticationError("Invalid username or password");
      }
      const token = await signToken(user);
      user.lastLogin = Date.now();
      await user.save();
      return { token, user };
    },

    getImage: async (parent, args) => {
        //console.log(args);
        const prompt = args.prompt;
        const name = args.name;
        const aiPrompt = await openaiInterface.createImage( { 
            prompt: prompt,
            n: 1,
            size: '512x512',
            response_format: 'url',
        });
        //console.log(aiPrompt.data);
        //console.log(name);
        const photo = aiPrompt.data.data[0].url;
        //console.log(photo);
        return { prompt, name, photo };
    },
    createPost: async (_, { name, prompt, photo }) => {
        try {
            const photo_url = await cloudinary.uploader.upload(photo);
            const newPost = await Post.create({
                name,
                prompt,
                photo: photo_url.url,
            });
            return newPost;
        } catch (error) {
            throw new Error('Unable to create post');
        }
    },
  },
};

module.exports = resolvers;
