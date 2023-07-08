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
async function getModels() {
    const models = await openaiInterface.listModels();
    console.log(models.data);
    return models;
}

module.exports = { openaiInterface, getEngines, getModels };
