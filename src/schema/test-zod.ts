import z from "zod";

const testSchema = z.object({
  fullName: z.string(),
  primaryEmail: z.string().email(),
  meta: z.object({
    pageNumber: z.number(),
    pageSize: z.number(),
    bigIdioticNamingConvention: z.string(),
    id: z.number(),
    testId: z.number(),
    deepOneLevel: z.object({
      testTwo: z.object({
        pageTransitionEvent: z.array(
          z.object({
            test1: z.boolean(),
          })
        ),
      }),
    }),
  }),
});

type testProps = z.infer<typeof testSchema>;

export { testSchema, type testProps };
