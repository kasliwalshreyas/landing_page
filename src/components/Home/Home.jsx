import { Button, Stack, makeStyles } from "@mui/material";
import AppleIcon from '@mui/icons-material/Apple';
import StarIcon from '@mui/icons-material/Star';
import smartPhone_black from '../../assets/images/smartPhone_black.svg';
import pink_ghost from '../../assets/images/pink_ghost.png';
import red_ghost from '../../assets/images/red_ghost.png';
import home_blue_crying_ghost from '../../assets/images/home_blue_crying_ghost.png';
import { useEffect, useRef } from "react";
import { animate, motion, stagger, useInView } from "framer-motion";
import home_smartphone from '../../assets/images/home_smartphone.png';
import post_image from '../../assets/images/post_image.png';


const Home = () => {
    const landingRef = useRef(null);
    const ref = useRef(null);

    const inView = useInView(landingRef);


    return (
        <>
            <Stack direction={'row'} style={{ backgroundColor: '#eeebfe' }} alignItems={'center'}
                width={'calc(100%-80px)'} height={'80vh'} padding={'0px 10px 10px 10px'} borderRadius={'32px'}
                ref={landingRef} margin={'10px 40px'}>
                <Stack width={'40%'} padding={'50px 0px 0 50px'} spacing={5}>
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -100
                        }}
                        animate={{
                            opacity: inView ? 1 : 0,
                            x: inView ? 0 : -100
                        }}
                        transition={{
                            type: "tween",
                            duration: 0.7,
                        }}
                        style={{ position: "relative", left: 0 }}
                    >
                        <Stack spacing={3} className="heading" >
                            <p style={{ fontFamily: 'catamaran', fontWeight: 500, paddingLeft: '6px' }}>Ahead app</p>
                            <h1 style={{ fontSize: '80px', lineHeight: '100%', wordWrap: 'wrap' }}>Master your life by mastering emotions</h1>
                        </Stack>
                    </motion.div>
                    <Stack direction={'row'} spacing={5}>
                        <Button variant="contained" disableElevation startIcon={<AppleIcon color='violet' sx={{ fontSize: '50px' }} />} style={{
                            width: '200px', borderRadius: '8px', backgroundColor: 'black', fontFamily: 'Roboto', padding: '5px'
                        }}>
                            <Stack>
                                <p style={{ display: 'inline-block', fontSize: '8px' }}>Download on the</p>
                                <h3 style={{ display: 'inline-block' }}>App Store</h3>
                            </Stack>
                        </Button>
                        <Stack>
                            <Stack direction={'row'} spacing={1}>
                                {/* refactor using staggerChildren Method */}


                                {[0, 1, 2, 3, 4].map((item, index) => {
                                    return (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{
                                                opacity: inView ? 1 : 0,
                                            }}
                                            transition={{
                                                delay: 0.5 + item * 0.1,
                                                duration: 0.5,
                                            }}
                                            style={{ display: "flex", gap: "1rem", position: "relative", left: 0 }}
                                        >
                                            <StarIcon key={index} color="golden" />
                                        </motion.div>
                                    )
                                })}

                            </Stack>
                            <p style={{ display: 'inline-block', fontSize: '20px' }}>100+ AppStore reviews</p>

                        </Stack>
                    </Stack>
                </Stack >


                <Stack
                    width={'60%'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    position={'relative'}
                >

                    <motion.div
                        initial={{
                            scale: 0.3,
                            x: 400,
                            y: 0,
                            rotate: 120
                        }}
                        animate={{
                            x: inView ? [400, 50, 0, 0] : 400,
                            y: inView ? [0, 0, 0, 0] : 0,
                            scale: inView ? [0.3, 0.4, 0.7, 1] : 0,
                            rotate: inView ? [120, 120, 120, 0] : 120,
                        }}
                        transition={{
                            type: "spring",
                            ease: 'easeInOut',
                            // damping: 13,
                            velocity: 0.01,
                            duration: 2,
                        }}
                    >
                        <Stack position='relative' width={'450px'} height={'450px'} borderRadius={'50%'} border={'dashed white'} alignItems={'center'} justifyContent={'center'}>
                            <motion.div
                                initial={{
                                    scale: 0.3,
                                    origin: 0,
                                    opacity: 0,
                                    rotate: 0,
                                }}

                                animate={{
                                    scale: inView ? [0.3, 0.5, 0.7, 1] : 0,
                                    opacity: inView ? [0, 0.4, 1, 1] : 0,
                                    rotate: inView ? [0, 160, 300, 360] : 360,
                                }}

                                style={{
                                    position: 'absolute',
                                    bottom: '0%',
                                    left: '10%',
                                    width: '5rem',
                                    // rotateY: "36deg",
                                    // rotateX: "360deg"
                                }}
                            >
                                <img
                                    className='pink_ghost'
                                    src={pink_ghost}
                                    alt="pink_ghost"
                                    style={{ width: '100%', height: '100%' }}
                                />
                            </motion.div>
                            <motion.div
                                initial={{
                                    scale: 0.3,
                                    origin: 0,
                                    opacity: 0,
                                    rotate: 0,
                                }}

                                animate={{
                                    scale: inView ? [0.3, 0.5, 0.7, 1] : 0,
                                    opacity: inView ? [0, 0.4, 1, 1] : 0,
                                    rotate: inView ? [0, 160, 300, 360] : 360,
                                }}

                                style={{
                                    position: 'absolute',
                                    top: '0%',
                                    left: '8%',
                                    width: '5rem',
                                    // rotateY: "36deg",
                                    // rotateX: "360deg"
                                    transform: 'rotate(90deg)'
                                }}
                            >
                                <img className='home_blue_crying_ghost' src={home_blue_crying_ghost} alt="home_blue_crying_ghost" />
                            </motion.div>
                            <motion.div
                                initial={{
                                    scale: 0.3,
                                    origin: 0,
                                    opacity: 0,
                                    rotate: 0,
                                }}

                                animate={{
                                    scale: inView ? [0.3, 0.5, 0.7, 1] : 0,
                                    opacity: inView ? [0, 0.4, 1, 1] : 0,
                                    rotate: inView ? [0, 160, 300, 360] : 360,
                                }}

                                style={{
                                    position: 'absolute',
                                    top: '30%',
                                    right: '-5%',
                                    width: '3.5rem',
                                    // rotateY: "36deg",
                                    // rotateX: "360deg"
                                    transform: 'rotate(90deg)'
                                }}
                            >
                                <img
                                    className='red_ghost'
                                    src={red_ghost}
                                    alt="red_ghost"
                                    style={{ width: '100%', height: '100%' }}

                                />
                            </motion.div>

                        </Stack>
                    </motion.div>
                    <motion.div
                        initial={{
                            scale: 0.3,
                            x: 400,
                            y: 0,
                        }}
                        animate={{
                            x: inView ? [400, 50, 0, 0] : 400,
                            y: inView ? [0, 0, 0, 0] : 0,
                            scale: inView ? [0.3, 0.6, 1, 1] : 0,
                        }}
                        transition={{
                            type: "spring",
                            ease: 'easeInOut',
                            // damping: 13,
                            velocity: 1,
                            duration: 2,
                        }}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'absolute',
                            height: '70%',
                            // backgroundColor: '#dfd8fa',
                        }}
                    >
                        {/* <Stack
                            direction={'row'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            height={"70%"}
                            backgroundColor={'violet'}
                            position={'absolute'}
                        > */}
                        <div
                            style={{
                                position: 'absolute',
                                // top: '0%',
                                // left: '0%',
                                width: '300px',
                                height: '300px',
                                backgroundColor: '#dfd8fa',
                                borderRadius: '50%',
                                opacity: '0.3'
                            }}
                        >

                        </div>
                        <img
                            src={post_image}
                            alt="post"
                            style={{
                                width: '100%',
                                height: '41%',
                                position: 'absolute',
                                left: '-90%',

                            }}
                        />

                        <img
                            src={home_smartphone}
                            alt="smartphone"
                            style={{ width: '100%', height: '100%' }}
                        />
                        {/* </Stack> */}
                    </motion.div>
                </Stack >

            </Stack >
        </>
    );
}


//circle
// background
// phone
export default Home;