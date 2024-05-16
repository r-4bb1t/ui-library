import { create } from "zustand";

import type { ModalType, ToastType } from "@/types/modalType";

interface ContextState {
  toasts: ToastType[];
  addToast: (toast: ToastType) => void;
  removeToast: (id: string) => void;

  modal: ModalType | null;
  openModal: (modal: ModalType) => void;
  closeModal: () => void;
}

export const useContextStore = create<ContextState>((set) => ({
  toasts: [],
  addToast: (toast: ToastType) =>
    set((state: ContextState) => ({
      toasts: [...state.toasts, { id: Math.random().toString(12), ...toast }],
    })),
  removeToast: (id: string) =>
    set((state: ContextState) => ({
      toasts: state.toasts.filter((alert) => alert.id !== id),
    })),

  modal: null,
  openModal: (modal) =>
    set(() => ({
      modal: {
        id: Math.random().toString(12),
        ...modal,
      },
    })),
  closeModal: () =>
    set(() => ({
      modal: null,
    })),
}));
