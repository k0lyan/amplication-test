import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SupplierWhereInput = {
  contacts?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  notes?: StringNullableFilter;
  pricelistType?: StringFilter;
  slug?: StringFilter;
  status?: "NEW" | "ACTIVE" | "BLOCKED";
};
