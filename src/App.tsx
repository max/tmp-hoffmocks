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

        {searches.map((search) => (
          <div className="mb-8 rounded border p-2">
            <h1 className="mb-1 text-sm font-bold">{search.name}</h1>

            <table>
              <thead>
                <tr>
                  <th>
                    <div className="flex justify-between">
                      <PopoverPrimitive.Root>
                        <PopoverPrimitive.Anchor>
                          <div className="font-bold">results</div>
                        </PopoverPrimitive.Anchor>

                        <PopoverPrimitive.Trigger>
                          <button className="text-xs font-normal text-gray-500">
                            <ZapIcon />
                          </button>
                        </PopoverPrimitive.Trigger>

                        <PopoverPrimitive.Content align="start" side="top">
                          <div className="rounded bg-white shadow">
                            <textarea className="block w-[320px] p-1 font-mono">{`=MATCH_REGEX("FOO")`}</textarea>
                          </div>
                        </PopoverPrimitive.Content>
                      </PopoverPrimitive.Root>
                    </div>
                  </th>

                  {search.results.map((result) =>
                    result.properties.map((property) => (
                      <th className="font-mono font-normal text-gray-500">
                        <div className="flex justify-between">
                          <PopoverPrimitive.Root>
                            <PopoverPrimitive.Anchor>
                              <div>{property.name}</div>
                            </PopoverPrimitive.Anchor>

                            <PopoverPrimitive.Trigger>
                              <button className="text-xs font-normal text-gray-500">
                                <ZapIcon />
                              </button>
                            </PopoverPrimitive.Trigger>

                            <PopoverPrimitive.Content align="start" side="top">
                              <div className="rounded bg-white shadow">
                                <textarea className="block w-[320px] p-1 font-mono">{`=MATCH_REGEX("FOO")`}</textarea>
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
                {search.results.map((result) => (
                  <tr>
                    <td>
                      <mark className="bg-yellow-100">{result.match}</mark>
                    </td>

                    {result.properties.map((property) => (
                      <td className="font-mono text-gray-500">
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
