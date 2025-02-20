import z from "zod";

const testSchema = z.object({
  name: z.string(),
  primaryEmail: z.string().email(),
  meta: z.object({
    pageNumber: z.number(),
    pageSize: z.number(),
    bigIdioticNamingConvention: z.string(),
  }),
});

type testProps = z.infer<typeof testSchema>;

export { testSchema, type testProps };
