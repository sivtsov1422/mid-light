import Contact from "./Contact/Contact"
import styled from "./index.module.css"
import Logo from "./Logo/Logo"


const Header = () => {
    return (
        <header className={styled.header}>
            <Logo />
            <Contact />
        </header>
    )
}
export default Header