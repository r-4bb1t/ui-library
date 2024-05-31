import Input from "../components/Form/Input";
import Select from "../components/Form/Select";

import type { Story } from "@ladle/react";

export const TextInput: Story = () => (
  <div className="flex flex-col gap-4">
    {["xs", "sm", "md", "lg"].map((sz) => (
      <>
        <Input
          type="text"
          label={sz}
          sz={sz as "xs" | "sm" | "md" | "lg"}
          required
          placeholder="required"
        />
        <Input
          type="text"
          label={sz}
          sz={sz as "xs" | "sm" | "md" | "lg"}
          placeholder="optional"
        />
        <Input
          type="text"
          sz={sz as "xs" | "sm" | "md" | "lg"}
          required
          placeholder="required"
        />
        <Input
          type="text"
          sz={sz as "xs" | "sm" | "md" | "lg"}
          placeholder="optional"
        />
      </>
    ))}
  </div>
);

export const NumberInput: Story = () => (
  <div className="flex flex-col gap-4">
    {["xs", "sm", "md", "lg"].map((sz) => (
      <>
        <Input
          type="number"
          label={sz}
          sz={sz as "xs" | "sm" | "md" | "lg"}
          required
          placeholder="required"
        />
        <Input
          type="number"
          label={sz}
          sz={sz as "xs" | "sm" | "md" | "lg"}
          placeholder="optional"
        />
        <Input
          type="number"
          sz={sz as "xs" | "sm" | "md" | "lg"}
          required
          placeholder="optional"
        />
        <Input
          type="number"
          sz={sz as "xs" | "sm" | "md" | "lg"}
          placeholder="required"
        />
      </>
    ))}
  </div>
);

export const SelectInput: Story = () => (
  <div className="flex flex-col gap-4">
    {["xs", "sm", "md", "lg"].map((sz) => (
      <>
        <Select
          label={sz}
          sz={sz as "xs" | "sm" | "md" | "lg"}
          options={new Array(24).fill(0).map((_, i) => ({
            value: i.toString(),
            label: `Option ${i}`,
          }))}
        />
      </>
    ))}
  </div>
);
