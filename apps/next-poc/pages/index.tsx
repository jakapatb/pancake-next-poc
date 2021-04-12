import React from "react";
import styled from "styled-components";
import { ModalProvider, useWalletModal } from "@jakapatb/pancake-uikit";
const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(
    (payload) => console.log({ payload }),
    () => null,
    "0x86Bd0b6f76D241c3DD77D69A440d2afa84D46CA0"
  );
  return (
    <div>
      <button onClick={onPresentConnectModal}>Open connect modal</button>
      <button onClick={onPresentAccountModal}>Open account modal</button>
    </div>
  );
}

export default Index;
