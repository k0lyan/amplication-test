import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
} from "react-admin";

export const SupplierCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="contacts" multiline source="contacts" />
        <TextInput label="name" source="name" />
        <TextInput label="notes" multiline source="notes" />
        <TextInput label="pricelistType" source="pricelistType" />
        <TextInput label="slug" source="slug" />
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "NEW", value: "NEW" },
            { label: "ACTIVE", value: "ACTIVE" },
            { label: "BLOCKED", value: "BLOCKED" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
