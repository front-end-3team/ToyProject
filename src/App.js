import Header from './components/Header/Header';
import ModalContextProvider from './context/ModalOpen';
import Index from './pages';

function App() {
    return (
        <ModalContextProvider>
            <Header />
            <Index />
        </ModalContextProvider>
    );
}

export default App;
