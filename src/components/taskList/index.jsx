import React from "react";

const TaskList = ({ formData, handleDelete, handleEdit }) => {
   return (
      <section>
         <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
               <div className="col">
                  <div className="card rounded-3">
                     <div className="card-body p-4">
                        <table className="table table-hover mb-4">
                           <thead>
                              <tr>
                                 <th scope="col">No.</th>
                                 <th scope="col">Task</th>
                                 <th scope="col" style={{ textAlign: "center" }}>Actions</th>
                              </tr>
                           </thead>
                           <tbody>
                              {formData?.map((v, index) => {
                                 return (
                                    <tr key={index}>
                                       <td scope="row">{index + 1}</td>
                                       <td>{v?.name}</td>
                                       <td className="d-flex gap-2 justify-content-center align-items-center">
                                          <button className="btn btn-success" onClick={() => handleDelete(v?.id)}>
                                             <i className="fa-solid fa-trash-can"></i>
                                          </button>
                                          <button className="btn btn-warning bg-[coral]" onClick={() => handleEdit(v)}>
                                             <i className="fa-solid fa-pen text-white"></i>
                                          </button>
                                       </td>
                                    </tr>
                                 );
                              })}
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default TaskList;
