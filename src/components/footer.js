function Footer(){
    return(
        <div class="footer">
            <div class="left box">
                <h1>External Links</h1>
                <div class ="social">
                    <a href="https://www.facebook.com"> <img src="./images/facebook.svg" alt=""/> </a>
                    <a href="https://www.instagram.com"> <img src="./images/instagram.svg" alt=""/> </a>
                    <a href="https://twitter.com"> <img src="./images/twitter.svg" alt=""/> </a>
                </div>
            </div>
            <div class="right box">
                <h1>Info</h1>
                <div class="content">
                    <div class="place">
                        <span class="fa fa-map-marker" style="font-size:24px; color:#fff; opacity: .8;"></span>
                        <span class="text">Kathmandu, Nepal</span>
                    </div>
                    <div class="phone">
                        <span class="fa fa-phone" style="font-size:24px; color:#fff; opacity: .8;"></span>
                        <span class="text">+977-01-4123104</span>
                    </div>
                    <div class="email">
                        <i class="fa fa-envelope" style="font-size:24px; color:#fff; opacity: .8;"></i>
                        <span class="text">mytrekmate@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;