/* eslint-disable react/jsx-no-constructed-context-values */
import { IoShieldCheckmarkSharp } from 'react-icons/io5'
import { IconContext } from 'react-icons/lib';
import { Message, Modal } from '../styles/ModalStyle';

export default function ModalSuccess({ message }: { message: string; }) {
    return (
        <Modal>
            <Message>
                <IconContext.Provider value={ { size: '60px', color: '#ed2590', className: 'global-class-name' } }>
                    <div>
                        <IoShieldCheckmarkSharp />
                    </div>
                </IconContext.Provider>

                {
                    message !== ''
                        ? <h1>{ message }</h1>
                        : ''
                }
            </Message>
        </Modal>
    );
}
