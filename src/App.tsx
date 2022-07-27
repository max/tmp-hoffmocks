import { PropsWithChildren } from "react";
import { MixerHorizontalIcon, Pencil1Icon } from "@radix-ui/react-icons";
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
            className="search-field block w-full rounded p-2 outline-none"
            placeholder="New Search..."
            type="text"
          />
        </div>

        {searches.map((search, i) => (
          <div className="mb-8 rounded border p-4 shadow-sm" key={i}>
            <h1 className="mb-1 text-sm font-bold">
              <span>{search.name}</span>{" "}
              <span className="text-gray-500">
                <Pencil1Icon className="inline" />
              </span>
            </h1>

            <table>
              <thead>
                <tr>
                  <th></th>

                  {search.results.map((result, j) =>
                    result.properties.map((property, k) => (
                      <th
                        className="font-mono text-xs font-normal text-gray-500"
                        key={j + k}
                      >
                        <div className="flex justify-between">
                          <PopoverPrimitive.Root>
                            <PopoverPrimitive.Anchor>
                              <div>{property.name}</div>
                            </PopoverPrimitive.Anchor>

                            <PopoverPrimitive.Trigger>
                              <span className="text-xs font-normal text-gray-500">
                                <MixerHorizontalIcon />
                              </span>
                            </PopoverPrimitive.Trigger>

                            <PopoverPrimitive.Content align="start" side="top">
                              <textarea
                                className="block w-[320px] rounded border-2 border-blue-500 p-1 font-mono shadow-lg outline-none"
                                defaultValue={`=MATCH_REGEX("FOO")`}
                              />
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
