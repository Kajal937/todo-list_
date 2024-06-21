import React, { useState } from "react";

const TaskInput = ({ handleAddTodo, setData, data, edit }) => {

   return (
      <>
         <div className="mt-4 mx-auto px-4 flex flex-col w-[30%]">
            {/* Add task */}
            <input
               type="text"
               className="border border-gray-400 py-1 px-2 rounded-[4px] focus:outline-none"
               placeholder="Add new task..."
               value={data?.name}
               onChange={(e) => setData({ ...data, name: e.target.value, id: Date.now().toString(36) + Math.random().toString(36) })}
            />
            {/* Select task type */}
            {/* <select className="border border-gray-400 py-1 px-2 rounded-[4px]" style={{ width: "100%", height: "38px" }} value={data?.type} onChange={(e) => setData({ ...data, type: e.target.value })}>
               <option value="" disabled>Select Type</option>
               <option value="high">High</option>
               <option value="medium">Medium</option>
               <option value="low">Low</option>
            </select> */}
            <button className="bg-blue-500 text-white rounded-[4px] py-1 px-2 mt-2" onClick={() => handleAddTodo(data)}>
               {edit ? "Edit Task" : "Add Task"}
            </button>
         </div>
      </>
   );
};

export default TaskInput;
