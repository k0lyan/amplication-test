export type SupplierUpdateInput = {
  contacts?: string | null;
  name?: string;
  notes?: string | null;
  pricelistType?: string;
  slug?: string;
  status?: "NEW" | "ACTIVE" | "BLOCKED" | null;
};
