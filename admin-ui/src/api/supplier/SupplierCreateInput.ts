export type SupplierCreateInput = {
  contacts?: string | null;
  name: string;
  notes?: string | null;
  pricelistType: string;
  slug: string;
  status?: "NEW" | "ACTIVE" | "BLOCKED" | null;
};
