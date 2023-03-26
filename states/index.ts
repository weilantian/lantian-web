import { atom } from "jotai";

export const navAtom = atom({
  isItemSelected: false,
  showName: true,
});

export const workModalAtom = atom<{
  viewingWorkId: string | null;
}>({
  viewingWorkId: null,
});
