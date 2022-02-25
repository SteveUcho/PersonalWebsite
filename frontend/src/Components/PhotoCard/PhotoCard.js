import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import './PhotoCard.css'

function PhotoCard(props) {
    const [show, setShow] = useState(false);
    
    return (
        <>
        <div className="photo-card" style={{backgroundImage: "url("+props.backgroundImage+")"}} onClick={() => setShow(true)}/>
        <Modal
            show={show}
            size="lg"
            onHide={() => setShow(false)}
            dialogClassName="modal-class"
            aria-labelledby="image-large"
            centered
        >
            <Modal.Header closeButton/>
            <Modal.Body>
                <div className="modal-card" style={{backgroundImage: "url("+props.backgroundImage+")"}}/>
            </Modal.Body>
        </Modal>
        </>
    );
}

export default PhotoCard