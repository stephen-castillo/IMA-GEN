const openai = require('openai');
require('dotenv').config();

const configuration = new openai.Configuration({
    organization: process.env.OPENAI_ORGANIZATION,
    apiKey: process.env.OPENAI_API_KEY,
});
const openaiInterface = new openai.OpenAIApi(configuration);

// Wrap the async operation in a function
async function getEngines() {
    const response = await openaiInterface.listEngines();
    console.log(response);
    return response;
}
async function listModels() {
    const models = await openaiInterface.listModels();
    console.log(models.data);
    return models;
}
async function getImage(prompt) {
    const aiPrompt = await openaiInterface.createImage( { 
        prompt: prompt,
        n: 4,
        size: '1024x1024',
        response_format: 'b64_json',
    });
    console.log(aiPrompt.data);
    const aiImage = aiPrompt.data.data[0].b64_json;
    return aiImage;
}
async function makePrompt() {
    const aiprompt = await openaiInterface.createImage({
        prompt: 'Once upon a time',
        n: 4,
        size: '1024x1024',
        response_format: 'b64_json',
    })
    console.log(aiprompt);
    const aiImage = aiprompt.data.data[0].b64_json;
    return aiImage;
}

module.exports = { openaiInterface, getEngines, listModels, getImage, makePrompt };
