import { SortOrder } from "../../util/SortOrder";

export type SupplierOrderByInput = {
  contacts?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  notes?: SortOrder;
  pricelistType?: SortOrder;
  slug?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
