import { PropsWithChildren } from "react";
import { ZapIcon } from "@primer/octicons-react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { searches } from "./searches";

const Stage = ({ children }: PropsWithChildren) => (
  <div className="grid h-screen w-screen place-items-center">{children}</div>
);

function App() {
  return (
    <Stage>
      <div className="w-3/4">
        <div className="mb-8">
          <input
            className="block w-full rounded border p-2"
            placeholder="New Search..."
            type="text"
          />
        </div>

        {searches.map((search, i) => (
          <div className="mb-8 rounded border p-2" key={i}>
            <h1 className="mb-1 text-sm font-bold">
              {search.name} <span className="text-blue-500">Edit</span>
            </h1>

            <table>
              <thead>
                <tr>
                  <th></th>

                  {search.results.map((result, j) =>
                    result.properties.map((property, k) => (
                      <th
                        className="font-mono font-normal text-gray-500"
                        key={j + k}
                      >
                        <div className="flex justify-between">
                          <PopoverPrimitive.Root>
                            <PopoverPrimitive.Anchor>
                              <div>{property.name}</div>
                            </PopoverPrimitive.Anchor>

                            <PopoverPrimitive.Trigger>
                              <span className="text-xs font-normal text-gray-500">
                                <ZapIcon />
                              </span>
                            </PopoverPrimitive.Trigger>

                            <PopoverPrimitive.Content align="start" side="top">
                              <div className="rounded bg-white shadow">
                                <textarea
                                  className="block w-[320px] p-1 font-mono"
                                  defaultValue={`=MATCH_REGEX("FOO")`}
                                />
                              </div>
                            </PopoverPrimitive.Content>
                          </PopoverPrimitive.Root>
                        </div>
                      </th>
                    ))
                  )}
                </tr>
              </thead>
              <tbody>
                {search.results.map((result, j) => (
                  <tr key={j}>
                    <td>
                      <mark className="bg-yellow-100">{result.match}</mark>
                    </td>

                    {result.properties.map((property, k) => (
                      <td className="font-mono text-gray-500" key={k}>
                        {property.value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </Stage>
  );
}

export default App;
