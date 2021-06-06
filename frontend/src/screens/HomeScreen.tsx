import React from 'react';
import './Home/Home.css';

import SlideShow from "../components/Slideshow";

function Home(){
    return(
        <div className="container">
            <section id="body">
                <SlideShow />
            </section>
        </div>
    );
}

export default Home;