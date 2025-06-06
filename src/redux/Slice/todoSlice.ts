import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITodoItem {
  id: string;
  title: string;
  createDate: string;
  isCompleted: boolean;
  endDate: string;
}
interface TodoState {
  todoList: ITodoItem[];
}

const initialState: TodoState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodoItem>) => {
      state.todoList.push(action.payload);
    },
    completedTodo: (state, action: PayloadAction<string>) => {
      const index = state.todoList.findIndex((item) => {
        return item.id == action.payload;
      });
      if (index !== -1) {
        state.todoList[index].isCompleted = true;
        const endTaskTime = Date.now();
        state.todoList[index].endDate = endTaskTime.toString();
      }
    },
  },
});

export const { addTodo, completedTodo } = todoSlice.actions;
export default todoSlice.reducer;
