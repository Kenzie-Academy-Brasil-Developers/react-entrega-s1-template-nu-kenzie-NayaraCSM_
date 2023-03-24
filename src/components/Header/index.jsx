import logo from '../../assets/logo.svg';

export const Header = () => {
    return(
        <>
            <header>
                <img className='logo' src={logo} alt="logo do site" />
                <button>DarkMode</button>
            </header>
        </>
    );
};