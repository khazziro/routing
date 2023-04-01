import { useState } from "react";
import Modal from "../components/Modal.jsx";
import Button from "../components/button.jsx";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && <Modal />}
    </div>
  );
};

export default ModalPage;
