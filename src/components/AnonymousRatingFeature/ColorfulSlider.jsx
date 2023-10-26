import { Stack } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ColorfulSlider = () => {

    const targetRef = useRef();
    const inView = useInView(targetRef);

    return (
        <>
            <Stack
                ref={targetRef}
                style={{ backgroundColor: '#ffffff' }}
                width={'42rem'}
                height={'15rem'}
                borderRadius={'2rem'}
                padding={'0px 10px 0px 10px'}
                justifyContent={'center'}
                alignItems={'center'}
                position={'relative'}
            >
                <motion.div
                    initial={{
                        opacity: 0.3,
                        scale: 0.5,
                    }}
                    animate={{
                        opacity: inView ? 1 : 0.3,
                        scale: inView ? 1 : 0.5,
                    }}
                    transition={{
                        delay: 0.2,
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        ease: 'easeInOut',
                    }}

                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.2rem',
                        position: 'absolute',
                        left: '2rem',
                        bottom: "6.8rem"
                    }}
                >
                    <div
                        style={{
                            width: 'fit-content',
                            padding: '0px 20px',
                            height: '50px',
                            borderRadius: '10px',
                            backgroundColor: '#6341ef',
                            position: 'absolute',
                            bottom: '2.5rem',
                            right: '0rem',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <p
                            style={{
                                color: '#ffffff',
                                fontSize: '20px',
                                fontWeight: 500,
                            }}

                        >You</p>
                    </div>
                    <div
                        style={{
                            width: '23px',
                            height: '23px',
                            backgroundColor: '#6341ef',
                            // border: 'solid #6341ef 9px',
                            borderRadius: '50%',
                            // position: 'absolute',
                            // left: '2.5rem',
                        }}
                    >
                    </div>

                </motion.div>

                <motion.div
                    initial={{
                        opacity: 0,
                        x: 100,
                        scale: 0.5,
                    }}
                    animate={{
                        opacity: inView ? [0, 0.3, 0.3, 0.3, 0.6, 1] : 0,
                        x: inView ? 0 : 100,
                        scale: inView ? 1 : 0.5,
                    }}
                    transition={{
                        delay: 0.2,
                        type: "spring",
                        // stiffness: 1000,
                        damping: 15,
                        ease: 'easeInOut',
                    }}

                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.2rem',
                        position: 'absolute',
                        left: '12rem',
                        bottom: '2.5rem',
                    }}
                >
                    <div
                        style={{
                            width: '23px',
                            height: '23px',
                            backgroundColor: '#3fc4fa',
                            // border: 'solid #6341ef 9px',
                            borderRadius: '50%',
                            // position: 'absolute',
                            // left: '12rem',
                        }}
                    >
                    </div>
                    <div
                        style={{
                            width: 'fit-content',
                            padding: '0px 20px',
                            height: '50px',
                            borderRadius: '10px',
                            backgroundColor: '#3fc4fa',
                            // position: 'absolute',
                            // left: '12rem',
                            // bottom: '2.5rem',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <p
                            style={{
                                color: '#ffffff',
                                fontSize: '20px',
                                fontWeight: 500,
                            }}

                        >Anonymonos 1</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{
                        opacity: 0,
                        x: 100,
                        scale: 0.5,
                    }}
                    animate={{
                        opacity: inView ? [0, 0.2, 0.2, 0.2, 0.2, 0.6, 1] : 0,
                        x: inView ? 0 : 100,
                        scale: inView ? 1 : 0.5,
                    }}
                    transition={{
                        delay: 0.4,
                        type: "spring",
                        // stiffness: 1000,
                        damping: 15,
                        ease: 'easeInOut',
                    }}

                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.2rem',
                        position: 'absolute',
                        right: '8rem',
                        bottom: "6.8rem"
                    }}
                >
                    <div
                        style={{
                            width: 'fit-content',
                            padding: '0px 20px',
                            height: '50px',
                            borderRadius: '10px',
                            backgroundColor: '#fdb338',
                            // position: 'absolute',
                            // right: '8rem',
                            // top: '2.5rem',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <p
                            style={{
                                color: '#ffffff',
                                fontSize: '20px',
                                fontWeight: 500,
                            }}

                        >Anonymonos 2</p>
                    </div>
                    <div
                        style={{
                            width: '23px',
                            height: '23px',
                            backgroundColor: '#fdb338',
                            // border: 'solid #6341ef 9px',
                            borderRadius: '50%',
                            // position: 'absolute',
                            // right: '17rem',
                        }}
                    >
                    </div>
                </motion.div>




                <motion.div
                    initial={{
                        opacity: 0,
                        x: 300,
                        scale: 0.5,
                    }}
                    animate={{
                        opacity: inView ? [0, 0.2, 0.2, 0.2, 0.2, 0.6, 1] : 0,
                        x: inView ? 0 : 300,
                        scale: inView ? 1 : 0.5,
                    }}
                    transition={{
                        delay: 0.4,
                        type: "spring",
                        // stiffness: 1000,
                        damping: 15,
                        ease: 'easeInOut',
                    }}

                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.2rem',
                        position: 'absolute',
                        right: '-6.7rem',
                        bottom: '2.5rem',
                    }}
                >
                    <div
                        style={{
                            width: '23px',
                            height: '23px',
                            backgroundColor: '#58c896',
                            // border: 'solid #6341ef 9px',
                            borderRadius: '50%',
                            // position: 'absolute',
                            // right: '2.5rem',
                        }}
                    >
                    </div>
                    <div
                        style={{
                            width: 'fit-content',
                            padding: '0px 20px',
                            height: '50px',
                            borderRadius: '10px',
                            backgroundColor: '#58c896',
                            // position: 'absolute',
                            // right: '-6.5rem',
                            // bottom: '2.5rem',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <p
                            style={{
                                color: '#ffffff',
                                fontSize: '20px',
                                fontWeight: 500,
                            }}

                        >Anonymonos 3</p>
                    </div>
                </motion.div>

                <div
                    style={{
                        width: '90%',
                        border: 'solid #d7d7e1 1px',
                    }}
                ></div>

            </Stack >

        </>
    );
}

export default ColorfulSlider;