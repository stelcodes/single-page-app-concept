import React from 'react';
import './Home.css';

function Home(props) {
    return (
        <div id='home'>
            <div id='main-banner'>
                <div className='container'>
                    <div className='level'>
                        <div className='level-item'>
                            <h1>Liquids<br/>For<br/>Life</h1>
                        </div>
                        <div className='level-item'>
                            <img id='infographic'src='https://res.cloudinary.com/dnjb78yop/image/upload/v1519684354/Liquids_for_Life_Header_stcqkn.png' alt='liquids for life'/>
                        </div>
                    </div>
                </div>
            </div>
            <div id='secondary-banner' className='is-orange'>
                <div className='container'>
                    <h1>Brew. Happiness.</h1>
                    <div id='steps'className='columns'>
                        <div className='column step'>
                            <h2>Learn</h2>
                            <p>about healthy drinks like kombucha, kefir, and tea</p>
                        </div>
                        <div className='column step'>
                            <h2>Create</h2>
                            <p>healthy, delicious drinks with our recipes</p>
                        </div>
                        <div className='column step'>
                            <h2>Share</h2>
                            <p>your experiences, recipes, and love with others</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;