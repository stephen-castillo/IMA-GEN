const openai = require('openai');
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
async function getImage() {
    const aiImage = await openaiInterface.createImage( { prompt: 'Once upon a time' });
    console.log(aiImage.data);
    return aiImage;
}
async function makePrompt() {
    const aiprompt = await openaiInterface.createImage()
    console.log(aiprompt);
    return aiprompt;
}

module.exports = { openaiInterface, getEngines, listModels, getImage, makePrompt };
