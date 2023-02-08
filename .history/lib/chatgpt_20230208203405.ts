import { Configuration,OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: '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',
})

const openai = new OpenAIApi(configuration)

export default openai