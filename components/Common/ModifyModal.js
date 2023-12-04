import React from "react";
import useModifyModal from "./Hooks/useModifyModal";
import Modal from "./Modal";
import HotelBody from "./Body/HotelBody";
import BusBody from "./Body/BusBody";
import TrainBody from "./Body/TrainBody";


const ModifyModal = () => {
  const modifyModal = useModifyModal();
  console.log(modifyModal.additionalData);
  let bodyContent;
  if (modifyModal.additionalData === "Hotel Search Modify") {
    bodyContent = (
     <HotelBody></HotelBody>
    )
  }
  if (modifyModal.additionalData === "Bus Modify") {
    bodyContent = (
     <BusBody></BusBody>
    )
  }
  if (modifyModal.additionalData === "Train Modify") {
    bodyContent = (
     <TrainBody></TrainBody>
    )
  }


  return (
    <Modal
      isOpen={modifyModal.isOpen}
      title="Modify your search"
      // actionLabel={actionLabel}
      // onSubmit={onSubmit}
      // secondaryActionLabel={secondaryActionLabel}
      // secondaryAction={step === STEPS.LOCATION ? undefined : onBack}
      onClose={modifyModal.onClose}
      body={bodyContent}
    />
  );
};

export default ModifyModal;
