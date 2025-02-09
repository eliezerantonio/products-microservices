import * as joi from 'joi'

import 'dotenv/config'

interface EnvVars {
      PORT: number
}


const envsSchema = joi.object({
      PORT: joi.number().required()
})
.unknown(true)

const { error, value } = envsSchema.validate(process.env)

if (error) {
      throw new Error(`Config validation error: ${error.message}`)
}

const envVars: EnvVars = value

export const env = { port: envVars.PORT, }