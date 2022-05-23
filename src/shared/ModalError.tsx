/* eslint-disable react/jsx-no-constructed-context-values */
import { SetStateAction } from 'react';
import { IoAlertCircleSharp } from 'react-icons/io5'
import { IconContext } from 'react-icons/lib';
import { ButtonModal, Message, Modal } from '../styles/ModalStyle';

interface PropsModal{
    message: string;
    setModal: SetStateAction<boolean>;
}

export default function ModalError({ message, setModal }: PropsModal) {
    return (
        <Modal>
            <Message>
                <IconContext.Provider value={ { size: '60px', color: '#C44536', className: 'global-class-name' } }>
                    <div>
                        <IoAlertCircleSharp />
                    </div>
                </IconContext.Provider>

                <h1>{ message }</h1>
                <ButtonModal onClick={() => setModal(false)}>OK</ButtonModal>
            </Message>
        </Modal>
    );
}