
import './header.css'
import { useSelector } from 'react-redux'

function Header() {

    useSelector(store => {
        console.log(store)
    })

    return (
        <header>
            <div className="logo-container">
                <p className='company-name'>Bankarg</p>
            </div>
            <div className='menu-container'>
                <i class='bx bx-menu'></i>
            </div>
        </header>
    )
}

export default Header