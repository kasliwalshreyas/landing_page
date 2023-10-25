import { Button, Stack, makeStyles } from "@mui/material";
import AppleIcon from '@mui/icons-material/Apple';
import StarIcon from '@mui/icons-material/Star';
import smartPhone_black from '../../assets/images/smartPhone_black.svg';
import pink_ghost from '../../assets/images/pink_ghost.png';
import red_ghost from '../../assets/images/red_ghost.png';
import blue_crying_ghost from '../../assets/images/blue_crying_ghost.png';
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { motion, useInView } from "framer-motion";


const Home = () => {
    const landingRef = useRef(null);
    const ref = useRef(null);
    const isInView = useInView(ref);

    // useLayoutEffect(() => {

    //     const ctx = gsap.context(() => {
    //         const animation1 = gsap.to(".heading", { opacity: 1, duration: 3, ease: "power1.out" });
    //         // const animation2 = gsap.to(".heading", { opacity: 1, delay: 1, duration: 2, ease: "power2.out" });
    //         const animation2 = gsap.to(".starContainer", { opacity: 1, delay: 1, duration: 1, ease: "none" });

    //         const animation3 = gsap.fromTo(".pink_ghost", { x: 0, y: 0, duration: 4, ease: "power1.out" }, { x: 10, y: 100, rotation: 180, duration: 4, ease: "power5.out" });

    //     }, landingRef);

    //     return () => {
    //         ctx.revert();
    //     }
    // }, []);


    return (
        <>
            <Stack direction={'row'} style={{ backgroundColor: '#eeebfe' }} alignItems={'center'}
                width={'calc(100%-80px)'} height={'80vh'} padding={'0px 10px 10px 10px'} borderRadius={'32px'}
                ref={landingRef} margin={'10px 40px'}>
                <Stack width={'40%'} padding={'50px 0'} spacing={5}>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{
                            // opacity: isInView ? 1 : 0,
                            // x: isInView ? 0 : -100,
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{ duration: 1 }}
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
                            <motion.div
                                initial={{ opacity: 0, x: 0 }}
                                animate={{
                                    // opacity: isInView ? 1 : 0,
                                    // x: isInView ? 0 : -100,
                                    opacity: 1,
                                    x: 0,
                                }}
                                transition={{ delay: 1, duration: 2 }}
                                style={{ position: "relative", left: 0 }}
                            >
                                <Stack direction={'row'} spacing={1} className="starContainer">
                                    <StarIcon color='golden' />
                                    <StarIcon color='golden' />
                                    <StarIcon color='golden' />
                                    <StarIcon color='golden' />
                                    <StarIcon color='golden' />
                                </Stack>
                            </motion.div>
                            <p style={{ display: 'inline-block', fontSize: '20px' }}>100+ AppStore reviews</p>

                        </Stack>
                    </Stack>
                </Stack >


                <Stack width={'60%'} alignItems={'center'} justifyContent={'center'}>
                    <motion.div
                        initial={{ scale: 0, x: 0, y: 0, rotate: 0 }}
                        animate={{ scale: 1, x: 0, y: 0, rotate: 360 }}
                        transition={{ duration: 1.2, ease: 'easeInOut' }}
                    >
                        <Stack position='relative' width={'450px'} height={'450px'} borderRadius={'50%'} border={'dashed white'} alignItems={'center'} justifyContent={'center'}>
                            {/* <motion.div
                            initial={{ position: 'absolute', top: '30px', left: '30px', width: '50px', transform: 'rotate(-0deg)' }}
                            animate={{
                                position: 'absolute',
                                bottom: '26px',
                                left: '37px',
                                width: '70px',
                                transform: 'rotate(360deg)',
                            }}
                            transition={{ duration: 1 }}
                            style={{
                                position: 'absolute',
                                bottom: '26px',
                                left: '37px',
                                width: '70px',
                                transform: 'rotate(-360deg)',
                            }}
                        > */}
                            {/* <img className='pink_ghost' src={pink_ghost} alt="pink_ghost" /> */}
                            {/* </motion.div> */}
                            {/* <img className='red_ghost' src={red_ghost} alt="red_ghost" /> */}
                            {/* <img className='blue_crying_ghost' src={blue_crying_ghost} alt="blue_crying_ghost" /> */}
                            <Stack width={'60%'} height={'60%'} backgroundColor={'violet'}>
                                <img src={smartPhone_black} alt="smartphone" />
                            </Stack>
                        </Stack>
                    </motion.div>
                </Stack>

            </Stack >
        </>
    );
}


//circle
// background
// phone
export default Home;