import React from 'react'
import {get} from 'lodash'
import SETTINGS from '../../app/settings/index.json'

function getInitialData(){
   const localData = JSON.parse(localStorage.getItem('settings'));

   let initialState = {};

   SETTINGS.OBSERVERS.forEach((field) => {
      if(field.isValue){
         initialState[get(field, "field", "")] = get(
           localData,
           get(field, "field", ""),
           ""
         );
      }
   })

   return initialState;
}

const SettingModal = ({ closeModal, setThrushold }) => {
  const [data, setData] = React.useState(getInitialData());

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  function handleSave() {
    localStorage.removeItem('settings')
    localStorage.setItem('settings', JSON.stringify(data))
    setThrushold(data);
    closeModal();
  }

  return (
    <div>
      <div
        className="fixed z-10 inset-0 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-white-100 sm:mx-0 sm:h-10 sm:w-10">
                  <i className="fas fa-cog"></i>
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-title"
                  >
                    Setup Threshold
                  </h3>
                  <br />
                  {SETTINGS.OBSERVERS.map((field) => {
                    return (
                      field.isValue && (
                        <div
                          className="mb-4"
                          key={"setting" + get(field, "value", "")}
                        >
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor={get(field, "field", "")}
                          >
                            {get(field, "value", "---")}
                          </label>
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name={get(field, "field", "")}
                            placeholder="0"
                            value={get(data, get(field, "field", ""), "")}
                            onChange={handleChange}
                          />
                        </div>
                      )
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                onClick={handleSave}
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-black-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Save
              </button>
              <button
                onClick={closeModal}
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingModal
