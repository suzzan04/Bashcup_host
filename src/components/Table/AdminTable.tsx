"use client";
import { Edit as FaEdit, Eye as FaEye, Trash as FaTrash } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";
import { TableProps } from "@/@types/TableProps";

const Table: React.FC<TableProps<any>> = ({
  data,
  columns,
  actionIconColor,
  actions,
  disableActions,
  loading,
  selectedData,
}) => {
  const [currentData, setCurrentData] = useState<Array<any>>([]);

  useEffect(() => {
    if (data) {
      setCurrentData(data);
      // console.log(data);
    }
  }, [data]);
  return (
    <div className="w-full flex items-center justify-center text-gray-400 border-collapse overflow-auto rounded ">
      <div className="w-full relative border-collapse max-w-[1500px] flex flex-col items-center justify-center  gap-2">
        <div className="w-full px-2 bg-[var(--light-background)] ">
          <div className="w-full  flex justify-start gap-5 items-center overflow-auto  ">
            {!!actions?.checkFn && !disableActions && (
              <div className="w-[30px]">
                <input
                  onChange={(event) => {
                    if (!actions.checkAllFn) return;
                    actions.checkAllFn(event.target.checked);
                  }}
                  className="w-4 accent-slate-900 h-4 cursor-pointer"
                  type="checkbox"
                />
              </div>
            )}
            {columns?.map((item, index) => (
              <div
                className="flex items-center  justify-center font-bold  py-5 "
                key={index}
              >
                {typeof item?.fieldName === "string" ? (
                  <div style={item.colStyle}> {item?.fieldName}</div>
                ) : React?.isValidElement(item?.fieldName) ? (
                  item?.fieldName
                ) : (
                  ""
                )}
              </div>
            ))}
            {!!actions?.editFn && !disableActions && (
              <div className="w-[100px]"></div>
            )}
            {!!actions?.deleteFn && !disableActions && (
              <div className="w-[100px]"></div>
            )}
            {!!actions?.viewFn && !disableActions && (
              <div className="w-[200px] text-start">View</div>
            )}
          </div>
        </div>

        <div className="w-full overflow-auto flex items-start justify-start flex-col flex-nowrap">
          {loading ? (
            <div className="w-full">
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </div>
          ) : (
            <>
              {currentData && currentData?.length <= 0 ? (
                <div className="flex w-full flex-col items-center justify-center p-10">
                  <div className="text-[24px] text-[var(--dark-text)] mb-4">
                    No Data Found
                  </div>
                  <div className="text-[16px] text-[var(--dark-secondary-text)] mb-6">
                    We could not find any data to display here.
                  </div>
                  <div
                    className="bg-[var(--primary-color)] text-white px-4 py-2 rounded-md hover:bg-[var(--primary-light)]"
                    onClick={() => window.location.reload()} // Replace with a function to fetch data if needed
                  >
                    Refresh
                  </div>
                </div>
              ) : (
                currentData &&
                currentData.map((item, index) => (
                  <div
                    className={`border-b-[1px] overflow-x-auto overflow-y-clip border-[var(--dark-border)]  px-2 py-5  hover:bg-[var(--light-background)]   w-full flex items-center justify-start gap-5  flex-nowrap`}
                    key={(item?.id ? item.id : item?.uid) || index}
                  >
                    {!!actions?.checkFn && !disableActions && (
                      <div className="w-[30px]">
                        <input
                          checked={selectedData?.includes(item?.id)}
                          onChange={(event) => {
                            if (actions.checkFn) {
                              actions.checkFn(item.id, event.target.checked);
                            }
                            // actions.checkFn &&
                            //   actions.checkFn(
                            //     item.id || item.uid,
                            //     event.target.checked
                            //   );
                          }}
                          className="w-4 h-4 accent-slate-900 cursor-pointer"
                          type="checkbox"
                        />
                      </div>
                    )}
                    {columns?.map(({ render }, index) => (
                      <div className="table-body-content" key={index}>
                        {render ? render(item) : "Default"}
                      </div>
                    ))}
                    {!!actions?.editFn && !disableActions && (
                      <div
                        className="w-[100px]"
                        onClick={() => {
                          if (actions.editFn) {
                            actions?.editFn(item.id ? item.id : item.uid);
                          }
                        }}
                      >
                        <div className="flex  items-center bg-[var(--primary-color)] cursor-pointer hover:bg-[var(--primary-light)] justify-center p-2 px-3  rounded-lg tracking-wide text-[var(--light-text)] dark:text-[var(--dark-text)] gap-2">
                          <FaEdit />
                          <div className="text-[16px]  tracking-wide">Edit</div>
                        </div>
                      </div>
                    )}
                    {!!actions?.deleteFn && !disableActions && (
                      <div
                        className="w-[100px]"
                        onClick={() => {
                          if (actions.deleteFn) {
                            actions?.deleteFn(item.id ? item.id : item.uid);
                          }
                        }}
                      >
                        <div className="flex  items-center bg-[var(--danger-bg)] cursor-pointer hover:bg-[var(--danger-text)] justify-start p-2  px-3 rounded-lg tracking-wide dark:text-[var(--dark-text)] text-[var(--light-text)] gap-2">
                          <FaTrash />
                          <div className="text-[16px]  tracking-wide ">
                            Delete
                          </div>
                        </div>
                      </div>
                    )}
                    {!!actions?.viewFn && !disableActions && (
                      <div
                        className="w-[120px]"
                        onClick={() => {
                          if (actions.viewFn) {
                            actions?.viewFn(item.id ? item.id : item.uid);
                          }
                        }}
                      >
                        <div
                          className="w-full rounded-lg cursor-pointer hover:bg-[var(--danger-text)] duration-150 font-semibold bg-[var(--danger-bg)] p-2 flex items-center justify-center gap-3"
                          style={{
                            color: actionIconColor ? actionIconColor : "white",
                          }}
                        >
                          <FaEye className=" size-5 " />
                          <td className="text-[15px] text-white ">View</td>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Table;
