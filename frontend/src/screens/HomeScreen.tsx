import React from 'react';
import SlideShow from "../components/Slideshow";

import './Home/Home.css';

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