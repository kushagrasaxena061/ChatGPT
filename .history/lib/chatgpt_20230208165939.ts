import { Configuration,OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: "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"
})

const openai = new OpenAIApi(configuration)

export default openai