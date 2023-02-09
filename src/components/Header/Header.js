import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPlus } from '@fortawesome/free-solid-svg-icons';
import siteLogo from '../../assets/images/logo.png';

function Header() {
    return (
        <Head>
            <FontAwesomeIcon icon={faBars} />
            <Site>
                <div>
                    <img src={siteLogo} alt="siteLogo.png" />
                </div>
                <span>Instagoraeng</span>
            </Site>
            <FontAwesomeIcon icon={faPlus} />
        </Head>
    );
}

export default Header;

const Head = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #a3daff;
`;

const Site = styled.div`
    display: flex;

    & > div > img {
        width: 30px;
        height: 30px;
    }

    & span {
        font-size: 20px;
        font-family: 'googleKalam';
    }
`;
