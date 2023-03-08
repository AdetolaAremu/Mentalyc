import React from "react";

const modal = ({
  modal,
  onClose,
  onSubmit,
  handleChange,
  input,
  validation,
}) => {
  return (
    <div>
      <div
        className="fixed inset-0 z-40"
        style={{ display: modal ? "block" : "none" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-75"></div>
        <div className="flex flex-col items-center justify-center w-screen h-screen">
          <div className="relative animodal-inner">
            <div className="rounded-lg bg-white border w-[300px] lg:w-[500px] border-stone-500 overflow-hidden px-5 py-5">
              <div
                onClick={onClose}
                className="text-black flex justify-end cursor-pointer"
              >
                x
              </div>
              <div className="font-bold text-lg text-center">
                Complete Your Upload
              </div>

              <div className="mt-1 text-gray-400 text-center">
                Fill in the details below to complete your upload
              </div>

              {validation !== "" && (
                <div className="mt-3 bg-red-600 text-white p-1 rounded text-center">
                  {validation}
                </div>
              )}

              <form className="mt-3" onSubmit={onSubmit}>
                <select
                  onChange={handleChange}
                  value={input.type}
                  name="type"
                  type="text"
                  className="bg-gray-300 w-full py-2 rounded-md pl-3"
                >
                  <option value="" disabled defaultValue={""}>
                    Select Note
                  </option>
                  <option value="Progress Note">Progress Note</option>
                  <option value="Progress Note - 80 left">
                    Progress Note - 80 left
                  </option>
                  <option value="EDMR note - 80 left">
                    EDMR note - 80 left
                  </option>
                  <option value="Couples therapy note - 80 left">
                    Couples therapy note - 80 left
                  </option>
                  <option value="Family therapy note - 80 left">
                    Family therapy note - 80 left
                  </option>
                </select>

                <input
                  onChange={handleChange}
                  value={input.name}
                  name="name"
                  type="text"
                  className="bg-gray-300 w-full py-2 rounded-md pl-3 mt-6 mb-6"
                  placeholder="Enter client's name e.g John Doe"
                />

                <div className="flex justify-center">
                  <button className="bg-gradient-to-r from-[#731054] to-[#DE0D6F] w-full text-white font-bold py-1 rounded-md">
                    Finish Upload
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default modal;
