import React, { useEffect, useState } from 'react'
import "./Hero.scss"

const Hero = () => {
    const [counter1, setCounter1] = useState(8000);
    const [counter2, setCounter2] = useState(1950);
    const [counter3, setCounter3] = useState(20);

    useEffect(() => {
       const interval1 = setInterval(() => {
        setCounter1((precounter) => {
            if(precounter >= 9000){
                clearInterval(interval1)
                return precounter;
            }
            return precounter + 100
        })
        }, 500);
       const interval2 = setInterval(() => {
        setCounter2((precounter) => {
            if(precounter >= 2000){
                clearInterval(interval2)
                return precounter;
            }
            return precounter + 10
        })
        }, 500);
       const interval3 = setInterval(() => {
        setCounter3((precounter) => {
            if(precounter >= 30){
                clearInterval(interval3)
                return precounter;
            }
            return precounter + 1
        })
        }, 500);
        return () => {clearInterval(interval1);
            clearInterval(interval2);
            clearInterval(interval3)
        }
    },[])
    return (
        <div className='hero-wrap'>
            <div className='paddings innerWidth flexCenter hero-container'>
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-circle"></div>
                        <h1> Discover<br />
                            Most Suitable<br />
                            Property</h1>
                    </div>
                    <div className="flexColStart secondaryText hero-des">
                        <span>Find a variety of properties that suit you very easilty</span>
                        <span>Forget all difficulties in finding a residence for you</span>
                    </div>

                    <div className="flexCenter search-bar ">
                        <img src="/hero/placeholder.png" alt="" />
                        <input type="text" />
                        <button className="button">Search</button>
                    </div>
                    <div className='flexCenter stats'>
                    <div className='flexColCenter stat'>
                       <span> {counter1} <span>+</span></span>
                        <span className='secondaryText'>Premium Product</span>
                    </div>
                    <div className='flexColCenter stat'>
                        <span>
                        {counter2} <span>+</span></span>
                        <span className='secondaryText'>Happy Customer</span>
                    </div>
                    <div className='flexColCenter stat'>
                       <span> {counter3} <span>+</span></span>
                        <span className='secondaryText'>Awards Winning</span>
                    </div>
                    </div>
                </div>
                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src="/hero/hero-image.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero