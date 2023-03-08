import { createContext, useState } from 'react';

export const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <ModalContext.Provider value={[modalOpen, setModalOpen]}>{children}</ModalContext.Provider>
    );
};

export default ModalContextProvider;
