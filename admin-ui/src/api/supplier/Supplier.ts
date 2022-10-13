export type Supplier = {
  contacts: string | null;
  createdAt: Date;
  id: string;
  name: string;
  notes: string | null;
  pricelistType: string;
  slug: string;
  status?: "NEW" | "ACTIVE" | "BLOCKED" | null;
  updatedAt: Date;
};
