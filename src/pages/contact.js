import './css/contact.css';

function Contacts(){
    return(
        <section class="contact" id="contact">
        <h2 class="heading">Contact Us</h2><br/>
        <section class="about">
            <div class="contentBox bg2">
                <form class="form" data-center-center="opacity:1;left:0;" 
                data-0-bottom="opacity:0;left:-400px;">
                    <div class="inputBox">
                        <input id ="fullname" type="text" name="" placeholder="fullname"/>
                    </div>
                    <div class="inputBox">
                        <input id ="email" type="email" name="" placeholder="email"/>
                    </div>
                    <div class="inputBox">
                        <input id ="phone" type="phone" name="" placeholder="phone"/>
                    </div>
                    <div class="inputBox">
                        <textarea id ="message" placeholder="message"></textarea>
                    </div>
                    <button class="btn" type="Submit">Send</button>
                </form>
            </div>
            <div class="imgBox2">
                <div data-center-center="opacity:1;right:0;" 
                data-0-bottom="opacity:0;right:-400px;">
                    <p>At Trek Mate, the sky’s the limit in terms of creating your next travel itinerary. 
                        Our knowledgeable and experienced agents are waiting to plan every last detail of your upcoming trip, 
                        so all that’s left for you is to enjoy it. We work M-F: 8am-8pm, but you can send us an email and we’ll get back to you as soon as possible.
                        <br/><br/>
                        mytrekmate@gmail.com
                        <br/><br/>
                        +977-9843820849
                    </p>
                </div>

            </div>
        </section>
    </section>
    )
}

export default Contacts;