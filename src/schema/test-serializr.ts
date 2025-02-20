import { serializable, alias, primitive, list, object } from "serializr";

class PageTransitionEvent {
  @serializable(alias("test_1", primitive()))
  test1?: boolean;
}

class TestTwo {
  @serializable(alias("page_transition_event", list(object(PageTransitionEvent))))
  pageTransitionEvent?: PageTransitionEvent[];
}

class DeepOneLevel {
  @serializable(alias("test_two", object(TestTwo)))
  testTwo?: TestTwo;
}

class Meta {
  @serializable(alias("page_number", primitive()))
  pageNumber?: number;

  @serializable(alias("page_size", primitive()))
  pageSize?: number;

  @serializable(alias("big_idiotic_naming_convention", primitive()))
  bigIdioticNamingConvention?: string;

  @serializable(alias("id", primitive()))
  ID?: number;

  @serializable(alias("test_id", primitive()))
  testID?: number;

  @serializable(alias("deep_one_level", object(DeepOneLevel)))
  deepOneLevel?: DeepOneLevel;
}

export class TestSerializr {
  @serializable(alias("full_name", primitive()))
  fullName?: string;

  @serializable(alias("primary_email", primitive()))
  primaryEmail?: string;

  @serializable(object(Meta))
  meta?: Meta;
}
