import { PropsWithChildren } from "react";
import { MixerHorizontalIcon, Pencil1Icon } from "@radix-ui/react-icons";
import * as Popover from "@radix-ui/react-popover";

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
                          <Popover.Root>
                            <Popover.Anchor>
                              <div>
                                <input type="checkbox" defaultChecked={true} />{" "}
                                {property.name}
                              </div>
                            </Popover.Anchor>

                            <Popover.Trigger>
                              <span className="text-xs font-normal text-gray-500">
                                <MixerHorizontalIcon />
                              </span>
                            </Popover.Trigger>

                            <Popover.Content align="start" side="top">
                              <div className="w-[320px] rounded bg-white p-1 shadow-lg">
                                <div>
                                  <span className="font-medium italic">
                                    f(x)
                                  </span>
                                  <span>
                                    The formula used to populate the property
                                  </span>
                                </div>
                                <textarea
                                  className="block w-full rounded border-2 border-blue-500 p-1 font-mono outline-none"
                                  defaultValue={`=MATCH_REGEX("FOO")`}
                                />
                                <div className="mt-2">
                                  <div>
                                    <input type="checkbox" checked={true} />{" "}
                                    Display in document
                                  </div>
                                  <div>
                                    Display:{" "}
                                    <select>
                                      <option>Gutter</option>
                                      <option>Superscript</option>
                                      <option>Inline</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </Popover.Content>
                          </Popover.Root>
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
