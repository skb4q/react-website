import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="home-section">
            <div className="home-top">
                <h1>HI THERE. I'M SOORIYA BOUNYALITH</h1>
                <h2>Currently available on the job market</h2>
                <h3 className="remote">AM OPEN TO REMOTE POSITIONS</h3>
                <p>If you're currently looking for someone with loyalty, you can count on me.</p>
            </div>

            <div className="home-bottom">
                <h2>About me</h2>
                <p>
                    Growing up, I was someone who'd always been fascinated by technology and the inner workings that would make
                    the experience all come together. It was my high school years where I realized that I had the spirit for 
                    programming with all the problem-solving through instant feedback, and were my fondest memories from back then. 
                    <br/> <br/>
                    The next few years after graduating high school to further my studies for programming at Middle Tennessee 
                    State University gave me a glimpse of some of the ups-and-downs when it comes to coding projects on stricter
                    schedules and deadlines, but at least that experience would, in turn, strengthen my resolve and become a more 
                    organized person.
                    <br/> <br/>
                    I am still currently learning React through being purely self-taught and am hoping to grow both my graphic 
                    design and front-end development skills.
                </p>
            </div>
        </div>
    )
}

export default Home;