import { useState } from "react";
import styled from "./style.module.css";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

const GetOffer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={styled.container}>
      <button onClick={() => setIsOpen(true)} className={styled.btn}>Оставить заявку</button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <div className={styled.bgPopup}>
          <DialogPanel className={styled.popup}>
            <DialogTitle>Оставить заявку</DialogTitle>
            <div>Тут будет текст</div>
            <button onClick={() => setIsOpen(false)}>close</button>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
};
export default GetOffer;
