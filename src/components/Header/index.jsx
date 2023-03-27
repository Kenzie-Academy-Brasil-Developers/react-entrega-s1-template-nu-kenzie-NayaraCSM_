import logo from '../../assets/logo.svg';
import styles from './styles.module.css';

export const Header = () => {
    return(
        <>
            <header className={styles.header}>
                <img className='logo' src={logo} alt="logo do site" />
            </header>
        </>
    );
};