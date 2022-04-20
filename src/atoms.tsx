import { atom, selector } from "recoil";

interface IToDoState {
  [key: string]: string[];
}

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    todo: ["운동하기", "강아지산책하기", "헬스하기", "샤워하기", "잠자기"],
    doing: ["공부하기"],
    done: ["청소하기"],
  },
});
