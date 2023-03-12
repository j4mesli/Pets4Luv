import React, { useState } from 'react';
import Slideshow from '../../components/HomeComponents/Slideshow/Slideshow';
import Info from '../../components/HomeComponents/Info/Info';
import Contribution from '../../components/HomeComponents/Contribution/Contribution';
import BlogPreview from '../../components/HomeComponents/BlogPreview/BlogPreview';

function Home() {


    return (
        <div className="Home">
            <Slideshow />
            <BlogPreview />
            <Info />
            <Contribution />
        </div>
    );
}

export default Home;