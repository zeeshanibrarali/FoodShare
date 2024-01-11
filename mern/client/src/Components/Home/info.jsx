import { useState } from 'react'
import ScrollTrigger from "react-scroll-trigger";
import Countup from "react-countup";
import '../../App.css'
import { donorpng } from "../../assets";

export default function Info() {

    const [CounterOn, setCounterOn] = useState(false);

    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className='full-info'>
                <section className="info">

                    <div className='container'>
                        <div className="info-row">
                            <div className="info-col">
                                <img src={donorpng} alt="" />
                                <p className='info-p'>{CounterOn && <Countup start={0} end={700} duration={2} delay={0} />}+</p>
                                <h3>Donors</h3>
                            </div>
                            <div className="info-col">
                                <img src={donorpng} alt="" />
                                <p className='info-p'>{CounterOn && <Countup start={0} end={1000} duration={2} delay={0} />}+</p>
                                <h3>Volunteers</h3>
                            </div>
                            <div className="info-col">
                                <img src={donorpng} alt="" />
                                <p className='info-p'>{CounterOn && <Countup start={0} end={10000} duration={2} delay={0} />}+</p>
                                <h3>Rescued Food</h3>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </ScrollTrigger>
    )
}
