import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { addTodo, completedTodo } from "../redux/Slice/todoSlice";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { TiPencil } from "react-icons/ti";
import moment from "moment";
const AddTaskPage: React.FC = () => {
  //Config title
  const [title, setTitle] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const { todoList } = useSelector((state: RootState) => state.todos);
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
    };
    dispatch(addTodo(todoItem));
    setTitle("");
  };
  //Handle Completed
  const handleCompleted = (idTodo: string): void => {
    dispatch(completedTodo(idTodo));
  };
  return (
    <div className="flex flex-col h-screen items-center">
      <div className="text-2xl font-bold">
        Your have <span>{todoList.length}</span> task today
      </div>
      <div className="w-full flex flex-col items-center gap-8">
        {todoList.map((todoItem) => {
          return (
            <div
              className={
                todoItem.isCompleted
                  ? "w-[80%] grid grid-cols-5 line-through items-start"
                  : "w-[80%] grid grid-cols-5 items-start"
              }>
              <TiPencil />
              <div className="break-words whitespace-normal w-[160px]">
                {todoItem.title}
              </div>
              <div>Pending</div>
              <div>{moment(todoItem.createDate).format("LLL")}</div>
              <button
                onClick={() => {
                  handleCompleted(todoItem.id);
                }}
                className="bg-green-500 text-white w-[120px] px-4 py-2 rounded hover:bg-green-600 cursor-pointer">
                Completed
              </button>
            </div>
          );
        })}
      </div>
      <div className="border border-solid h-24 w-[40%] flex flex-col items-center space-y-3">
        <div className="w-full">
          <input
            value={title}
            onChange={handleInputTodo}
            className="w-full border border-solid"
            type="text"
            placeholder="Add task here"
          />
        </div>
        <button
          className="border-2 border-dashed hover:cursor-pointer"
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
