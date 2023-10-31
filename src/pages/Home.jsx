import React from 'react';
import Header from '../composants/Header';
import Searchbar from '../composants/Searchbar';
import Recieptslist from '../composants/Recieptslist';
import Navbar from '../composants/Navbar';
import Start from '../composants/Start';
import { useState } from 'react';
import "./Home.css"
const Home = () => {
    const [openmodal, setOpenmodal] = useState(true);
    return (
        <div className='home'>
            <Navbar/>
            <Header/>
            <Searchbar/>
            <Recieptslist/>
            {openmodal && <Start setopen={setOpenmodal}/>}
        </div>
    );
};

export default Home;