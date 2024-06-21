import React, { useState } from "react";
import TaskInput from "../../components/taskInput";
import TaskList from "../../components/taskList";



const Home = () => {
    const [data, setData] = useState();
    const [formData, setFormData] = useState([]);
    const [editItemId, setEditItemId] = useState();
    const [edit, setEdit] = useState(false);

    console.log(data, "data")

    const handleAddTodo = (value) => {
        if (edit) {
            const updatedFormData = formData.map((v) => {
                if (v?.id === editItemId) {
                    return { ...v, name: value?.name };
                } else {
                    return v;
                }
            });

            setFormData(updatedFormData);
            setEdit(false);
        } else {
            setFormData([...formData, value]);
        }
        setData({ name: "" });
    }


    const handleDelete = (id) => {
        const deleteData = formData?.filter((v) => v?.id != id)
        setFormData(deleteData)
    }

    const handleEdit = (data) => {
        setEdit(true);
        setData(data);
        setEditItemId(data?.id);
    }

    return <>

        <TaskInput handleAddTodo={handleAddTodo} setData={setData} data={data} edit={edit}></TaskInput>
        <TaskList formData={formData} handleDelete={handleDelete} handleEdit={handleEdit} />

    </>
}
export default Home;