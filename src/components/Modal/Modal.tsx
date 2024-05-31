import { Button } from "@components/Button/Button";
import "./Modal.css";
import { useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";
import { useTranslation } from "react-i18next";

interface IModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, closeModal, children }: IModalProps) => {
  const ref = useRef<HTMLDialogElement | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    // Detect click outside of the modal
    function handleClickOutside(event: MouseEvent) {
      const rect = ref?.current?.getBoundingClientRect();
      if (
        rect &&
        (event.clientY < rect.top ||
          event.clientY > rect.bottom ||
          event.clientX < rect.left ||
          event.clientX > rect.right)
      ) {
        handleClosing();
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const handleClosing = () => {
    ref.current?.close();
    closeModal();
  };

  useEffect(() => {
    if (isOpen) {
      console.log("show modal");
      ref.current?.showModal();
    } else {
      handleClosing();
    }
  }, [isOpen, ref]);

  return (
    <dialog ref={ref} className="modal" onCancel={closeModal}>
      <Button
        onClick={() => closeModal()}
        iconBefore={<FiX />}
        iconSize={24}
        className="modal__close"
        variant="ghost"
        size="icon-only"
        aria-label={t("closeModal")}
      ></Button>
      <div className="modal__content">{children}</div>
    </dialog>
  );
};
