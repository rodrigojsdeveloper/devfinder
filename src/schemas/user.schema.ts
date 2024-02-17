import z from 'zod'

export const userSchema = z.object({
  owner: z.string(),
})
