import { create } from "zustand";

const useModifyModal = create((set) => ({
  isOpen: false,
  additionalData: null,
  onOpen: (data) => set({ isOpen: true,additionalData: data  }),
  onClose: () => set({ isOpen: false, additionalData: null }),
}));

export default useModifyModal;
