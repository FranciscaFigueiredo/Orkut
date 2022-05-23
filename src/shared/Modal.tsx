/* eslint-disable react/jsx-no-constructed-context-values */
import { useState } from 'react';
import ReactModal from 'react-modal';
import { IconContext } from 'react-icons/lib';
import { IoAlertCircleSharp } from 'react-icons/io5';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

export function Modal() {
    const [modalIsOpen, setIsOpen] = useState(true);
    let subtitle: any;

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <button type="submit" onClick={ openModal }>Open Modal</button>
            <ReactModal
                isOpen={ modalIsOpen }
                // eslint-disable-next-line react/jsx-no-bind
                onAfterOpen={ afterOpenModal }
                // eslint-disable-next-line react/jsx-no-bind
                onRequestClose={ closeModal }
                style={ customStyles }
                contentLabel="Example Modal"
            >
                <IconContext.Provider value={ { size: '60px', color: '#C44536', className: 'global-class-name' } }>
                    <div>
                        <IoAlertCircleSharp />
                    </div>
                </IconContext.Provider>
                <h2>Hello</h2>
                {/* ref={ (subtitle) => (subtitle = _subtitle) } */}
                <button type="submit" onClick={ closeModal }>close</button>
                <div>I am a modal</div>
                <form>
                    <input />
                    <button type="submit">tab navigation</button>
                    <button type="submit">stays</button>
                    <button type="submit">inside</button>
                    <button type="submit">the modal</button>
                </form>
            </ReactModal>
        </>
    );
}