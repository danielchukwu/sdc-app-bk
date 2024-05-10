import z from 'zod';

export const OffenderSchema = z.object({
  name: z.string().min(1, 'Required').max(50).default(''),
  email: z.string().min(1, 'Required').max(50).default(''),
  matricNo: z.string().min(1, 'Required').max(30).default(''),
  statement: z.string().min(1, 'Required').max(250).default(''),
});
export type TOffenderSchema = z.infer<typeof OffenderSchema>;

export const CaseSchema = z.object({
  title: z.string().min(1, 'Required').max(100, 'Title is too long'),
  location: z.string().min(1, 'Required').max(50, 'Location is too long'),
  description: z.string().min(1, 'Required').max(2000, 'description is too long').default(''),
  type: z.string().min(1, 'Select a case type').max(10, 'Type is too long').default(''),
  offenders: z.array(OffenderSchema).nonempty('Please provide 1 or more offenders'),
});
export type TCaseSchema = z.infer<typeof CaseSchema>;