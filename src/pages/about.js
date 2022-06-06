import './css/about.css';
function About(){
    return(
        <section class="about" id="about">
            <div class="contentBox">
                <h2 class="heading" data-center-center="opacity:1;left:0;" 
                data-0-bottom="opacity:0;left:500px;"> About Us</h2>
                <p class="text" data-center-center="opacity:1;left:0;" 
                data-0-bottom="opacity:0;left:-500px;"><br/>Travel Agents Do It Better<br/><br/>
                    Let us show you the beauty of Nepal! At the core of our company, 
                    we believe in creating close ties with each customer to best understand their travel needs and preferences. 
                    Whether you’re getting ready to backpack through the Himalayas or are preparing to take a fun family tour, 
                    planning a trip has never been easier.<br/> 
                    Give us a call and start your journey today!<br/><br/>
                    Get in touch.
                </p>   
            </div>
            <div class="imgBox">
                {/* <img src={"./images/about.jpg"}/> */}
            </div>
        </section>
    )
}

export default About;