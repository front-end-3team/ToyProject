import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPlus } from '@fortawesome/free-solid-svg-icons';
import siteLogo from '../../assets/images/logo.png';
import { useContext } from 'react';
import { ModalContext } from '../../context/ModalOpen';

function Header() {
    const [modalOpen, setModalOpen] = useContext(ModalContext);

    const onClickPlusBtn = () => {
        setModalOpen(true);
    };

    return (
        <Head>
            <FontAwesomeIcon icon={faBars} />
            <Site>
                <div>
                    <img src={siteLogo} alt="siteLogo.png" />
                </div>
                <span>Instagoraeng</span>
            </Site>
            <FontAwesomeIcon icon={faPlus} color="#f1404b" onClick={onClickPlusBtn} />
        </Head>
    );
}

export default Header;

const Head = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #a3daff;
    height: 60px;
    font-size: 30px;
    padding: 0 19px;
`;

const Site = styled.div`
    display: flex;

    & > div > img {
        width: 40px;
        height: 40px;
    }

    & span {
        margin-left: 5px;
        font-size: 30px;
        font-family: 'googleKalam';
    }
`;
