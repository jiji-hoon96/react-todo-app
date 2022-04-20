import { atom, selector } from "recoil";

export const toDoState = atom({
  key: "toDo",
  default: [
    "먹기",
    "운동하기",
    "청소하기",
    "강아지산책하기",
    "헬스하기",
    "샤워하기",
    "잠자기",
    "공부하기",
  ],
});
