import React from 'react'

type CardProjectProps = {
    isOpen: any
    closeModal: any
    content: string
}

const ModalPage = ({ isOpen, closeModal, content }: CardProjectProps)  => {

    return (
        <div className={`modal ${isOpen ? 'block' : 'hidden'} fixed inset-0 h-screen w-screen z-50 bg-black bg-opacity-50 flex items-center justify-center`}>
          <div className="modal-content bg-white p-6 rounded-md">
            <h2 className="text-2xl font-bold mb-4">Ma Modale</h2>
            <p>{content}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md" onClick={closeModal}>
              Fermer la modale
            </button>
          </div>
        </div>
      );
    };

export default ModalPage