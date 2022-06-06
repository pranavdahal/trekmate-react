import './css/services.css';
function Services(){
    return(
        <section class="services" id="services">
        <h1 class="heading" data-center-center="opacity:1;left:0;" 
        data-0-bottom="opacity:0;left:500px;">Our Services</h1>
        <p class="text" data-center-center="opacity:1;right:0;" 
        data-0-bottom="opacity:0;right:500px;">We provide clients to choose from a variety of activities.
                        We are at your service for any outdoor entertainment you seek for.
                        From mountain to sea, adventure to cozy trips, trust us for any of your travel destination. 
                        You think of taking a vacation, we'll do the rest.
        </p>
        <div class="container">
            <div class="serviceBox" data-center-center="opacity:1;left:0;" 
            data-0-bottom="opacity:0;left:-300px;">
                <div class = "img1">
                    {/* <img src={"./images/trek.png"} alt=""/> */}
                    <h2>Trekking</h2>
                </div>
            </div>
            <div class="serviceBox" data-center-center="opacity:1;bottom:0;" 
            data-0-bottom="opacity:0;bottom:-300px;">
                <div>
                    {/* <img src={"./images/tour.png"} alt=""/> */}
                    <h2>Tour</h2>
                </div>
            </div>
            <div class="serviceBox" data-center-center="opacity:1;right:0;" 
            data-0-bottom="opacity:0;right:-300px;">
                <div>
                    {/* <img src={"./images/camping.png"} alt=""/> */}
                    <h2>Camping</h2>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Services;