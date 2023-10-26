import { useRef } from "react";
import sun_mark_1 from "../../assets/images/sun_mark_1.png";
import sun_mark_2 from "../../assets/images/sun_mark_2.png";
import sun_mark_3 from "../../assets/images/sun_mark_3.png";
import { motion, useInView } from "framer-motion";

const marks = [
    "Answer questions on your social skills",
    "Let others anonymously answer the same questions about you",
    "Find out where you and others see things the some way - and where not!"
]

const SunSlider = () => {

    const targetRef = useRef();
    const inView = useInView(targetRef);

    return (
        <>
            <div
                ref={targetRef}
                style={{
                    position: 'relative',
                    width: '62.5rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '50px 0px 150px',
                }}
            >
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0,
                    }}
                    animate={{
                        opacity: inView ? 1 : 0,
                        scale: inView ? 1 : 0,
                    }}
                    transition={{
                        duration: 1,
                        ease: 'easeInOut',
                    }}


                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        width: '50px',
                        height: '50px',
                        position: 'absolute',
                        top: '-0.8rem',
                        left: '8rem',
                    }}
                >
                    <img
                        src={sun_mark_1}
                        alt="sun_mark_1"

                    />
                    <p
                        style={{
                            wordWrap: 'wrap',
                            width: '18.75rem',
                            textAlign: 'center',
                            fontWeight: 600,
                            fontFamily: 'catamaran',
                            // position: 'absolute',
                            // left: '100px',
                            // top: '30px',
                        }}
                    >
                        {marks[0]}
                    </p>
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0,
                    }}
                    animate={{
                        opacity: inView ? 1 : 0,
                        scale: inView ? 1 : 0,
                    }}
                    transition={{
                        duration: 1,
                        ease: 'easeInOut',
                    }}

                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        width: '60px',
                        height: '50px',
                        position: 'absolute',
                        top: '0.15rem',
                        // left: '8rem',
                    }}
                >

                    <img
                        src={sun_mark_2}
                        alt="sun_mark_2"
                    // style={{
                    //     width: '60px',
                    //     height: '50px',
                    //     position: 'absolute',
                    // }} 
                    />
                    <p
                        style={{
                            wordWrap: 'wrap',
                            width: '18.75rem',
                            textAlign: 'center',
                            fontWeight: 600,
                            fontFamily: 'catamaran',
                            // position: 'absolute',
                            // top: '30px',
                        }}
                    >
                        {marks[1]}
                    </p>
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0,
                    }}
                    animate={{
                        opacity: inView ? 1 : 0,
                        scale: inView ? 1 : 0,
                    }}
                    transition={{
                        duration: 1,
                        ease: 'easeInOut',
                    }}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        width: '60px',
                        height: '50px',
                        position: 'absolute',
                        top: '0rem',
                        right: '8rem',
                    }}
                >

                    <img
                        src={sun_mark_3}
                        alt="sun_mark_3"
                    // style={{
                    //     width: '60px',
                    //     height: '50px',
                    //     position: 'absolute',
                    //     right: '8rem',
                    // }}
                    />
                    <p
                        style={{
                            wordWrap: 'wrap',
                            width: '18.75rem',
                            textAlign: 'center',
                            fontWeight: 600,
                            fontFamily: 'catamaran',
                            // position: 'absolute',
                            // right: '100px',
                            // top: '30px',
                        }}
                    >
                        {marks[2]}
                    </p>
                </motion.div>
                <div
                    style={{
                        // height: 5,
                        width: '70%',
                        border: 'dashed orange 1px',
                    }}
                ></div>

            </div >
        </>
    );
}

export default SunSlider;