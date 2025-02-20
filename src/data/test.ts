export const test_camel = {
  fullName: "Rishab",
  primaryEmail: "test@gmail.com",
  meta: {
    pageNumber: 1,
    pageSize: 10,
    bigIdioticNamingConvention: "asdf",
    id: 1,
    testId: 1,
    deepOneLevel: {
      testTwo: {
        pageTransitionEvent: [
          {
            test1: true,
          },
          {
            test1: true,
          },
          {
            test1: true,
          },
        ],
      },
    },
  },
};

export const test_snake = {
  full_name: "Rishab",
  primary_email: "test@gmail.com",
  meta: {
    page_number: 1,
    page_size: 10,
    big_idiotic_naming_convention: "asdf",
    id: 1,
    test_id: 1,
    deep_one_level: {
      test_two: {
        page_transition_event: [
          {
            test_1: true,
          },
          {
            test_1: true,
          },
          {
            test_1: true,
          },
        ],
      },
    },
  },
};
