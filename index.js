const { GoogleGenerativeAI } = require('@google/generative-ai')
require ('dotenv').config()

const genAi =new GoogleGenerativeAI(process.env.API_KEY)

const model = genAi.getGenerativeModel({model: "gemini-pro"})

console.log(model)
