import logo from '../../assets/logo/bankarglogo.png'

function Header() {
    return (
        <header>
            <div className="logo-container">
                <img src={logo} alt="" />
            </div>
            <div className='menu-container'>
                <i class='bx bx-menu'></i>
            </div>
        </header>
    )
}

export default Header