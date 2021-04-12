import { useCallback, useContext, useEffect } from "react";
import { Context } from "./ModalContext";
import { Handler } from "./types";

const useModal = (modal: React.ReactNode, closeOnOverlayClick = true): [Handler, Handler] => {
  const context = useContext(Context);
  const { onPresent, onDismiss, setCloseOnOverlayClick, onPing } = context;

  const onPresentCallback = useCallback(() => {
    console.log("calling onPresentCallback");
    console.log(onPresent);
    onPing();
    onPresent(modal);
  }, [modal, onPing, onPresent]);

  useEffect(() => {
    setCloseOnOverlayClick(closeOnOverlayClick);
  }, [closeOnOverlayClick, setCloseOnOverlayClick]);

  return [onPresentCallback, onDismiss];
};

export default useModal;
