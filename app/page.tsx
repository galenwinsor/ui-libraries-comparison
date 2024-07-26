"use client";

import { Portal, Select as ArkSelect, SelectClearTrigger } from "@ark-ui/react";
import { ChevronDownIcon, InfoIcon } from "lucide-react";
import React from "react";

function Select({
  items,
  label,
  multiple,
}: {
  items: string[];
  label?: string;
  multiple?: boolean;
}) {
  const [selected, setSelected] = React.useState([items[0]]);

  return (
    <ArkSelect.Root
      items={items}
      className="flex gap-4 items-center"
      onValueChange={(e) => setSelected(e.items)}
      multiple={multiple}
    >
      {label ? <ArkSelect.Label>{label}</ArkSelect.Label> : null}
      <ArkSelect.Control>
        <ArkSelect.Trigger className="flex items-center gap-8 py-1 px-3 rounded-lg border border-neutral-300">
          <ArkSelect.ValueText asChild>
            <span className="flex gap-2">
              {selected.map((item, i) => (
                <span
                  key={item}
                  className={multiple ? "bg-neutral-100 px-1 rounded" : ""}
                >
                  {item}
                </span>
              ))}
            </span>
          </ArkSelect.ValueText>
          <ArkSelect.Indicator>
            <ChevronDownIcon strokeWidth="1" width="20" />
          </ArkSelect.Indicator>
        </ArkSelect.Trigger>
      </ArkSelect.Control>
      <Portal>
        <ArkSelect.Positioner>
          <ArkSelect.Content className="bg-white rounded-lg shadow-md">
            <ArkSelect.ItemGroup>
              {items.map((item) => (
                <ArkSelect.Item key={item} item={item}>
                  <ArkSelect.ItemIndicator>✓</ArkSelect.ItemIndicator>
                  <ArkSelect.ItemText className={multiple ? `` : ""}>
                    {item}
                  </ArkSelect.ItemText>
                </ArkSelect.Item>
              ))}
            </ArkSelect.ItemGroup>
          </ArkSelect.Content>
        </ArkSelect.Positioner>
      </Portal>
      <ArkSelect.HiddenSelect />
    </ArkSelect.Root>
  );
}

export default function Home() {
  const items = ["My opportunities"];

  return (
    <main className="w-full h-full flex justify-center items-center">
      <section className="bg-white rounded-xl">
        <div className="px-6 py-4 border-b border-b-neutral-300">
          <Select items={items} label="Attribute" />
        </div>
        <div className="px-6 py-4 border-b-neutral-300 space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <h2>Salesforce fields</h2>
              <InfoIcon width="12" className="stroke-neutral-600" />
            </div>
            <span className="rounded-xl text-xs bg-neutral-100 p-1">
              33 matching record(s)
            </span>
          </div>
          <div className="flex gap-4 items-center">
            <p className="text-neutral-600">Where</p>
            <Select items={["Forecast category"]} />
            <Select items={["is any of"]} />
            <Select items={["Omitted", "haha", "blah"]} multiple />
          </div>
        </div>
      </section>
    </main>
  );
}
