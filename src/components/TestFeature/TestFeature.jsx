import { Button, Stack } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TestFeature = () => {

    const targetRef = useRef(null);
    const inView = useInView(targetRef);

    return (
        <>
            <Stack
                alignItems={'center'} justifyContent={'center'}
                width={'calc(100%-80px)'} height={'80vh'} padding={'0px 10px 10px 10px'} borderRadius={'32px'}
                margin={'10px 40px 100px'}
            >
                <p
                    style={{
                        fontFamily: 'catamaran',
                        fontWeight: 500,
                        fontSize: '20px',
                    }}
                >
                    We take privacy seriously
                </p>
                <h1
                    style={{
                        fontSize: '30px',
                        lineHeight: '100%',
                        wordWrap: 'wrap',
                        margin: '20px 0',
                    }}
                >
                    Before you get started
                </h1>
                <p
                    style={{
                        fontFamily: 'catamaran',
                        fontWeight: 500,
                        fontSize: '20px',
                        marginBottom: '20px',
                        wordWrap: 'wrap',
                        width: '550px',
                        textAlign: 'center',
                        opacity: '0.8',
                    }}
                >
                    "We won't share your answers with anyone (and won't ever tell
                    you which friends said what about you)"
                </p>
                <p
                    style={{
                        fontFamily: 'catamaran',
                        fontWeight: 500,
                        fontSize: '20px',
                    }}
                >
                    with love, Ahead team
                </p>
                <motion.div
                    initial={{
                        y: 25,
                    }}
                    animate={{
                        y: inView ? 0 : 25,
                    }}
                    transition={{
                        delay: 0.5,
                        duration: 0.5
                    }}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >

                    <motion.div
                        ref={targetRef}
                        initial={{
                            scale: 0.5,
                            // y: 25,
                            opacity: 0
                        }}
                        animate={{
                            scale: inView ? 1 : 0.5,
                            // y: inView ? [25, 25, 25, 25, 15, 0] : 25,
                            opacity: inView ? 1 : 0
                        }}
                        transition={{ duration: 1.5, type: 'spring' }}
                    >
                        <Button
                            ref={targetRef}
                            variant="contained" disableElevation style={{
                                marginTop: "30px", borderRadius: '32px', backgroundColor: 'black', fontFamily: 'catamaran', fontWeight: 500, fontSize: '12px', color: 'white', padding: '12px 20px'
                            }}>
                            Start a test
                        </Button>
                    </motion.div>
                    <p
                        style={{
                            fontFamily: 'catamaran',
                            fontWeight: 1000,
                            fontSize: '12px',
                            marginTop: '10px',
                            opacity: '0.5',
                        }}
                    >
                        Take only 5 minutes
                    </p>
                </motion.div>
            </Stack >
        </>
    );
}

export default TestFeature;