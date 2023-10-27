import z from 'zod'

const userSchema = z.object({
  owner: z.string(),
})

export default userSchema
