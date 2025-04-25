import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { addTodo } from "../redux/Slice/todoSlice";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
const AddTaskPage: React.FC = () => {
  //Config title
  const [title, setTitle] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const handleInputTodo = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };
  const handleAddTask = (): void => {
    if (title == "") return alert("Please Add task");
    //Create Task
    const id = uuidv4();
    const now = new Date();
    const createDate = now.toISOString();
    const todoItem = {
      id,
      createDate,
      title,
      isCompleted: false,
      endDate: createDate,
    };
    dispatch(addTodo(todoItem));
    setTitle("");
    alert("Add task completed");
  };
  return (
    <div className="mt-4 w-full flex flex-col h-screen items-center">
      <div className="p-4 border border-gray-100 h-24 w-full sm:w-[40%] flex flex-col justify-around items-center space-y-3 shadow-xl rounded-lg">
        <div className="w-full">
          <input
            value={title}
            onChange={handleInputTodo}
            className="w-full border border-solid border-gray-300 rounded-sm"
            type="text"
            placeholder="Add task here"
          />
        </div>
        <button
          className="px-3 py-1 border-2 border-solid border-gray-100 rounded-lg bg-green-600 hover:bg-green-400 cursor-pointer shadow-xl"
          onClick={() => {
            handleAddTask();
          }}>
          Add
        </button>
      </div>
    </div>
  );
};
export default AddTaskPage;
