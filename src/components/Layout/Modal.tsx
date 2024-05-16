import Button from "../Button";
import cc from "classcat";
import { AnimatePresence, motion } from "framer-motion";

import { useContextStore } from "@/store/contextStore";

export default function Modal({ mobileFirst }: { mobileFirst?: boolean }) {
  const { modal, closeModal } = useContextStore();

  return (
    <AnimatePresence>
      {modal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full fixed inset-0 bg-black/20 flex items-center justify-center z-50 p-8"
          onClick={closeModal}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 30 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7, y: 30 }}
            className={cc([
              "bg-white/80 backdrop-blur p-4 rounded flex flex-col gap-4",
              mobileFirst && "max-w-sm",
            ])}
            onClick={(e) => e.stopPropagation()}
          >
            {modal.children}
            <div className="w-full flex flex-row-reverse justify-between">
              <Button
                onClick={() => {
                  modal.submitButtonAction();
                  closeModal();
                }}
              >
                {modal.submitButtonText}
              </Button>
              {modal.cancelButtonText && modal.cancelButtonAction && (
                <Button
                  onClick={() => {
                    modal.cancelButtonAction!();
                    closeModal();
                  }}
                  ghost
                >
                  {modal.cancelButtonText}
                </Button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
