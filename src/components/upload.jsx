import React from "react";

function NotesInProgress({ lists, handleDelete }) {
  return (
    <>
      {lists.length > 0 ? (
        <div>
          <div className="bg-white shadow-lg border border-gray-300 flex mt-6 p-2 rounded-lg">
            <div className="rounded-full bg-[#DE0D6F] text-white mr-4 px-3 py-1">
              {lists.length}
            </div>
            <div className="mt-1 text-sm lg:text-base">Notes in progress</div>
          </div>

          <div>
            <table id="staffList" className="mt-5 w-full">
              <thead className="shadow-lg">
                <tr className="text-left text-black">
                  <th className="px-4 py-2 text-sm lg:text-md font-extrabold">
                    Client
                  </th>
                  <th className="px-4 py-2 text-sm lg:text-md font-extrabold hidden lg:block">
                    Type
                  </th>
                  <th className="px-4 py-2 text-sm lg:text-md font-extrabold">
                    ETA
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {lists.map((list) => (
                  <tr
                    key={list.id}
                    className="rounded-lg border border-green-500"
                  >
                    <td>{list.client}</td>
                    <td className="hidden lg:table-cell">{list.type}</td>
                    <td className="flex items-center">
                      <div className="relative w-full h-3 bg-gray-300 rounded-full mt-1">
                        <div
                          className="absolute top-0 left-0 h-full bg-green-500 rounded-full"
                          style={{ width: `${list.eta}%` }}
                        ></div>
                      </div>
                      <div className="ml-2">{list.eta}%</div>
                      <button
                        onClick={() => handleDelete(list)}
                        className="ml-8"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          style={{ color: "red", height: "20px" }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
export default NotesInProgress;
