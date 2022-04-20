import { atom, selector } from "recoil";

export const minuteState = atom({
  key: "minutes",
  default: 0,
});

export const hourSelector = selector<number>({
  key: "hours",
  get: ({ get }) => {
    const hours = get(minuteState);
    return hours / 60;
  },
  set: ({ set }, newValue) => {
    const minutes = Number(newValue) * 60;
    set(minuteState, minutes);
  },
});
