import { PropsWithChildren } from "react";
import { ZapIcon } from "@primer/octicons-react";

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

        <div className="mb-8 rounded border p-2">
          <h1 className="mb-1 text-sm font-bold">Search 3 (no properties)</h1>

          <table>
            <thead>
              <tr>
                <th>
                  <div className="flex justify-between">
                    <div>results</div>
                    <div>
                      <button className="text-xs font-normal text-gray-500">
                        <ZapIcon />
                      </button>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <mark className="bg-yellow-100">example</mark>
                </td>
              </tr>
              <tr>
                <td>
                  <mark className="bg-yellow-100">other example</mark>
                </td>
              </tr>
              <tr>
                <td>
                  <mark className="bg-yellow-100">the last example</mark>
                </td>
              </tr>
              <tr>
                <td>
                  <mark className="bg-yellow-100">the first example</mark>
                </td>
              </tr>
              <tr>
                <td>
                  <mark className="bg-yellow-100">no example</mark>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mb-8 rounded border p-2">
          <h1 className="mb-1 text-sm font-bold">Search 2</h1>

          <table>
            <thead>
              <tr>
                <th>
                  <div className="flex justify-between">
                    <div>results</div>
                    <div>
                      <button className="text-xs font-normal text-gray-500">
                        <ZapIcon />
                      </button>
                    </div>
                  </div>
                </th>
                <th className="font-mono font-normal text-gray-500">
                  <div className="flex justify-between">
                    <div>propertyA</div>
                    <div>
                      <button className="text-xs font-normal text-gray-500">
                        <ZapIcon />
                      </button>
                    </div>
                  </div>
                </th>
                <th className="font-mono font-normal text-gray-500">
                  <div className="flex justify-between">
                    <div>propertyB</div>
                    <div>
                      <button className="text-xs font-normal text-gray-500">
                        <ZapIcon />
                      </button>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <mark className="bg-yellow-100">example</mark>
                </td>
                <td className="font-mono text-gray-500">0</td>
                <td className="font-mono text-gray-500">2</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="rounded border p-2">
          <h1 className="mb-1 text-sm font-bold">Search 1</h1>

          <table>
            <thead>
              <tr>
                <th>
                  <div className="flex justify-between">
                    <div>results</div>
                    <div>
                      <button className="text-xs font-normal text-gray-500">
                        <ZapIcon />
                      </button>
                    </div>
                  </div>
                </th>
                <th className="font-mono font-normal text-gray-500">
                  <div className="flex justify-between">
                    <div>propertyA</div>
                    <div>
                      <button className="text-xs font-normal text-gray-500">
                        <ZapIcon />
                      </button>
                    </div>
                  </div>
                </th>
                <th className="font-mono font-normal text-gray-500">
                  <div className="flex justify-between">
                    <div>propertyB</div>
                    <div>
                      <button className="text-xs font-normal text-gray-500">
                        <ZapIcon />
                      </button>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <mark className="bg-yellow-100">example</mark>
                </td>
                <td className="font-mono text-gray-500">0</td>
                <td className="font-mono text-gray-500">2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Stage>
  );
}

export default App;
