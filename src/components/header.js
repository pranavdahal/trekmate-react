import './header.css';

function Header () {
    return(
        <div class="header">
            <a href="#" class ="logo">Trek<span> Mate</span></a>
            <ul>
                <li><a href="#home" onclick="toggle()">Home</a></li>
                <li><a href="#about" onclick="toggle()">About Us</a></li>
                <li><a href="#services" onclick="toggle()">Services</a></li>
                <li><a href="#packages" onclick="toggle()">Special Packages</a></li>
                <li><a href="#contact" onclick="toggle()">Contact</a></li>
            </ul>
            <div class="toggle" onclick="toggle()"></div>
        </div>
    )
    
}

export default Header;