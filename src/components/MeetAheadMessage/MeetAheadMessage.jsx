import { Stack } from "@mui/material";
import purple_ghost from '../../assets/images/purple_ghost.png';
import sun_image from '../../assets/images/sun_image_2.png';
import flower_image from '../../assets/images/flower_image_2.png';
import green_leaf_image from '../../assets/images/green_leaf_image_2.png';
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const MeetAheadMessage = () => {

    const targetRef = useRef(null);
    const inView = useInView(targetRef);
    const { scrollYProgress } = useScroll()

    console.log(scrollYProgress);

    return (
        <>
            <Stack
                ref={targetRef}
                direction={'row'} style={{ backgroundColor: '#fef6f1' }}
                height={'70vh'} padding={'100px 10px 10px 10px'} borderRadius={'32px'}
                margin={'200px 40px 100px'}
                position={'relative'}
            >
                <motion.img
                    animate={{
                        // rotate: inView ? scrollYProgress : 0,
                    }}
                    transition={{
                        // duration: 2,
                        // repeat: 3,
                        // repeatType: 'loop',
                        // ease: 'linear',
                    }}
                    src={flower_image}
                    alt="flower_image"
                    style={{
                        position: 'absolute',
                        top: '-7%',
                        right: '100px',
                        width: '90px',
                        height: '90px',
                        // scaleX: scrollYProgress,
                    }}
                />
                <img
                    src={green_leaf_image}
                    alt="green_leaf_image"
                    style={{
                        width: '120px',
                        height: '100px',
                        position: 'absolute',
                        top: '10%',
                        right: '150px',
                        rotate: '0deg',
                        scale: '0.7',
                    }}
                />

                <Stack
                    position={'relative'}
                    width={'50%'}
                    spacing={2}
                    padding={'0 0 0 30px'}
                >
                    <motion.div

                        initial={{
                            opacity: 0,
                            x: -600,
                            scaleY: 0.5,
                            // gap: '0.5rem',
                        }}
                        animate={{
                            opacity: inView ? 1 : 0,
                            x: inView ? 0 : -600,
                            scaleY: inView ? 1 : 0.5,
                        }}
                        transition={{
                            delay: 0,
                            type: "spring",
                            stiffness: 50,
                            damping: 10,
                            ease: 'easeInOut',
                        }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                        }}
                    >
                        <p style={{ fontFamily: 'catamaran', fontWeight: 500, paddingLeft: '6px' }}>Built out of frustration</p>
                        <h1 style={{ fontSize: '50px', lineHeight: '100%', wordWrap: 'wrap' }}>Meet the ahead App</h1>
                    </motion.div>
                    <div style={{
                        position: 'absolute',
                        top: '30%',
                        left: '20%',
                        width: '220px',
                        height: '220px',
                        borderRadius: '50%',
                        backgroundColor: '#f6f6f6',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '180px',
                                height: '180px',
                                borderRadius: '50%',
                                backgroundColor: '#ffffff',
                            }}
                        >
                            <motion.img
                                initial={{
                                    y: 100,
                                    scale: 0.5,
                                }}
                                animate={{
                                    y: inView ? 0 : 100,
                                    scale: inView ? 1 : 0.5,
                                    when: "afterChildren"
                                }}
                                transition={{
                                    delay: 1.5,
                                    type: "spring",
                                    stiffness: 130,
                                    velocity: 2,
                                }}

                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    mixBlendMode: 'multiply',
                                }}

                                src={sun_image}
                                alt="sun_image"
                            />
                            <motion.img
                                initial={{
                                    rotate: 60,
                                    scale: 0.5,
                                }}
                                animate={{
                                    rotate: inView ? 0 : 60,
                                    scale: inView ? 1 : 0.5,
                                    when: "afterChildren"
                                }}
                                transition={{
                                    delay: 1,
                                    duration: 1,
                                }}

                                src={purple_ghost}
                                alt="purple_ghost"
                            />
                        </div>
                    </div>
                </Stack>
                <motion.div
                    initial={{
                        originX: 0,
                        scaleX: 0.3,
                        scaleY: 0.3,

                    }}
                    animate={{
                        originX: 0,
                        scaleX: inView ? 1 : 0.3,
                        scaleY: inView ? 1 : 0.3,
                    }}
                    transition={{
                        delay: 1,
                        // duration: 1,
                        // bounce: 10,
                        type: "spring",
                    }}

                    style={{
                        width: '40%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '3rem',
                        paddingLeft: '20px',
                    }}

                >
                    <p
                        style={{
                            fontFamily: 'catamaran',
                            fontWeight: 500,
                            fontSize: '20px',
                            opacity: 0.8,
                            width: '70%',
                        }}
                    >
                        A personalized pocket coach that provides bite-
                        sized, science-driven tools to boost emotional
                        intelligence.
                    </p>
                    <p
                        style={{
                            fontFamily: 'catamaran',
                            fontWeight: 500,
                            fontSize: '20px',
                            opacity: 0.8,
                            width: '70%',
                        }}
                    >
                        Think of it as a pocket cheerleader towards a
                        better, more fulfilling.
                    </p>
                </motion.div>
            </Stack >
        </>
    );
}

export default MeetAheadMessage;