import './css/packages.css'

function Packages() {
    return(
        <section class="packages" id="packages">
            <h1 class="heading" data-center-center="opacity:1;left:0;" 
            data-0-bottom="opacity:0;left:500px;">Special Packages</h1>
            <div class="cards">
                <div class="card">
                    <div class="card-image"></div>
                    <div class="card-text">
                    <span class="date">4 days left</span>
                    <h2>Langtang Circuit</h2>
                    <p>Days: 16-18 <br/>
                        Max. Altitude: 4800m <br/>
                        Meals included <br/>
                        Porter available
                    </p>
                    </div>
                    <div class="card-stats">
                    <div class="stat">
                        <div class="value">Moderate</div>
                        <div class="type">Difficulty</div>
                    </div>
                    <div class="stat border">
                        <div class="value">$700</div>
                        <div class="type">Price</div>
                    </div>
                    <div class="stat">
                        <div class="value">1-12</div>
                        <div class="type">Group Size</div>
                    </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-image card2"></div>
                    <div class="card-text card2">
                    <span class="date">15 days left</span>
                    <h2>Rafting</h2>
                    <p>Location: Trishuli <br/>
                        Includes: Meal, Transport, Stay-in 3-Star Hotel
                    </p>
                    </div>
                    <div class="card-stats card2">
                    <div class="stat">
                        <div class="value">Moderate</div>
                        <div class="type">Difficulty</div>
                    </div>
                    <div class="stat border">
                        <div class="value">$100</div>
                        <div class="type">Price</div>
                    </div>
                    <div class="stat">
                        <div class="value">2-10</div>
                        <div class="type">Group Size</div>
                    </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-image card3"></div>
                    <div class="card-text card3">
                        <span class="date">3 weeks left</span>
                        <h2>Upper Dolpa</h2>
                        <p>Days: 26-28 <br/>
                            Max. Altitude: 5,151m <br/>
                            Porter available <br/>
                        </p>
                    </div>
                    <div class="card-stats">
                        <div class="stat">
                        <div class="value">Hard</div>
                        <div class="type">Difficulty</div>
                        </div>
                        <div class="stat border">
                        <div class="value">$1000</div>
                        <div class="type">Price</div>
                        </div>
                        <div class="stat">
                        <div class="value">1-10</div>
                        <div class="type">Group Size</div>
                        </div>
                    </div>
            </div>
            </div>
        </section>
    )
}

export default Packages;