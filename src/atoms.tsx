import { atom, selector } from "recoil";

interface IToDoState {
  [key: string]: string[];
}

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    "To Do": ["운동하기", "강아지산책하기", "헬스하기", "샤워하기", "잠자기"],
    Doing: ["공부하기"],
    Done: ["청소하기"],
  },
});
