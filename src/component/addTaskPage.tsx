import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { addTodo, completedTodo } from "../redux/Slice/todoSlice";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { TiPencil } from "react-icons/ti";
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
  };
  console.log(todoList);
  //Handle Completed
  const handleCompleted = (idTodo: string): void => {
    dispatch(completedTodo(idTodo));
  };
  return (
    <div>
      <div>
        <div>
          <input
            onChange={handleInputTodo}
            className="border border-solid"
            type="text"
            placeholder="Add task here"
          />
        </div>
        <button
          className="border-2 border-dashed hover:cursor-pointer"
          onClick={() => {
            handleAddTask();
          }}>
          Add task
        </button>
      </div>
      <div>
        <div className="flex justify-center space-x-1 items-center">
          <TiPencil />
          <div>Quét nhà</div>
          <div>Pending</div>
          <div>Date</div>
          <button className="bg-green-500 p-4">Completed</button>
        </div>
        {todoList.map((todoItem) => {
          return (
            <div
              className={
                todoItem.isCompleted
                  ? "flex justify-center space-x-1 items-center line-through"
                  : "flex justify-center space-x-1 items-center"
              }>
              <TiPencil />
              <div>{todoItem.title}</div>
              <div>Pending</div>
              <div>{todoItem.createDate}</div>
              <button
                onClick={() => {
                  handleCompleted(todoItem.id);
                }}
                className="bg-green-500 p-4">
                Completed
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default AddTaskPage;
