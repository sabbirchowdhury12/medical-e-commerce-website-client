import CustomImage from "@/components/image/customImage";
import FlexBetween from "@/components/layout/flexBetween";
import FlexBox from "@/components/layout/flexbox";
import Button from "@/components/ui/button";
import { Modal } from "flowbite-react";
import { motion } from "framer-motion";
import { BookOpenCheckIcon, CircleCheck } from "lucide-react";

type ModalProps = {
  openModal?: boolean;
  setOpenModal?: any;
  product?: any;
  message?: string;
  button?: any;
};

const CustomModal: React.FC<ModalProps> = ({
  openModal,
  setOpenModal,
  product,
  button,
  message,
}) => {
  return (
    <Modal
      size={"xl"}
      dismissible
      show={openModal}
      onClose={() => setOpenModal(false)}
      className="pt-40 "
      popup
    >
      <Modal.Header />
      <FlexBetween className="pt-10 pb-20 gap-10 font-sans">
        <div className="">
          <CustomImage
            src={product.photos[0]}
            alt=""
            className="h-28 bg-section_bg_1 "
          />
        </div>
        <div className="flex-1">
          <p className="font-bold text-xl font-sans">{product.name}</p>
          <FlexBox className="my-6 justify-start items-center gap-2 font-sans text-lg text-paragraph ">
            <CircleCheck color="#0a9a73" /> {message}
          </FlexBox>
          <Button>{button.title}</Button>
        </div>
      </FlexBetween>
    </Modal>
  );
};

export default CustomModal;
