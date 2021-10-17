import React from 'react'
import {get} from 'lodash'
import PropTypes from "prop-types";
import { toast } from 'react-toastify';

function getSign(value, threshold) {
  const dataValue = Number(value);
  const thresholdValue = Number(threshold);
  return dataValue>thresholdValue && <i className="fas fa-arrow-up text-red-500 mr-4"></i>;
  
}

const Table = ({ fields, data, showModal, threshold }) => {

  function removeAll(){
     toast.dismiss();
  }

  console.log(threshold);
  return React.useMemo(() => {
    return (
      <div>
        <section className="py-1 bg-blueGray-50">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
              <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3 className="font-semibold text-base text-blueGray-700">
                      US States
                    </h3>
                  </div>
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                    <i
                      onClick={showModal}
                      className="fas fa-cog hover:cursor-pointer "
                    ></i>
                    &nbsp;&nbsp;
                    <i
                      onClick={removeAll}
                      class="fas fa-broom hover:cursor-pointer "
                    ></i>
                  </div>
                </div>
              </div>

              <div className="block w-full overflow-x-auto">
                <table className="items-center bg-transparent w-full border-collapse ">
                  <thead>
                    <tr>
                      {fields.map((field) => (
                        <th
                          key={field.value}
                          className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                        >
                          {field.value}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {(data || []).map((value) => {
                      return (
                        <tr key={get(value, "state", Math.random())}>
                          {fields.map((field) => {
                            return field.isValue ? (
                              <td
                                key={
                                  field.value +
                                  get(value, "state", Math.random().toString())
                                }
                                className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                              >
                                {getSign(
                                  get(value, field.field, "0"),
                                  get(threshold, field.field,"0")
                                )}
                                {get(value, field.field, "---")}
                              </td>
                            ) : (
                              <th
                                key={
                                  field.value +
                                  get(value, "state", Math.random().toString())
                                }
                                className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                              >
                                {get(value, field.field, "---")}
                              </th>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }, [data, fields, threshold]);
};

Table.propTypes = {
  fields: PropTypes.array,
  data: PropTypes.array,
  showModal: PropTypes.func
};

export default Table;
