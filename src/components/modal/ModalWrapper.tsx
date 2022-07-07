import { useDispatch, useSelector } from "react-redux";
import { closeModal, modalState } from "../../store/slice/modalSlice";
import Modal from "./Modal";

const ModalWrapper = () =>{
    const modal = useSelector(modalState);
    const dispatch = useDispatch();
    const onCloseModal = (): void => {
        dispatch(closeModal())
    }

    if(modal.isShow){
        return (
            <Modal
                {...modal.contents}
                onCloseModal={onCloseModal}
            >
            </Modal>
        )
    }
    return <>
        
    </>
}

export default ModalWrapper;