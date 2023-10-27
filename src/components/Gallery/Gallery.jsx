import { Stack, duration } from "@mui/material";
import Cards from "./Cards";
import { cubicBezier, motion, useTransform, useScroll, useInView } from 'framer-motion';
import { useRef } from "react";



const Gallery = () => {

    const targetRef = useRef(null);
    const headingRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // console.log(scrollYProgress);
    // const x = useTransform(scrollYProgress, [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0], [0, -200, -300, -350, -500, -500, -700, -800, -900, -1000, - 1100]);
    const x = useTransform(scrollYProgress, [1, 0.1], ["0px", "-1100px"], { clamp: false });

    // console.log(scrollYProgress);
    // console.log(x);

    const inView = useInView(headingRef);



    return (
        <>
            <div
                ref={targetRef}
                style={{
                    padding: '0 0 100px 0',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <motion.h1
                    ref={headingRef}
                    initial={{
                        opacity: 0,
                        fontSize: '0px',
                        x: -100,
                    }}
                    animate={{
                        opacity: inView ? 1 : 0,
                        fontSize: inView ? '60px' : 0,
                        x: inView ? 0 : -100,
                    }}
                    transition={{
                        duration: 0.9, ease: cubicBezier(.42, 0, .58, 1),
                    }}
                    style={{ padding: "0px 50px 30px", fontWeight: 1000 }}
                >
                    Does this sound familiar...
                </motion.h1>
                <motion.div
                    transition={{
                        type: 'spring',
                        duration: 8,
                        damping: 100,
                        ease: "easeInOut"
                    }}
                    style={{
                        x,
                        minWidth: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '3rem',
                        position: 'sticky',
                        top: 0,
                        padding: '0 50px',
                    }}
                    className="gallery"

                >
                    <Cards bgColor={'#daf3ff'} />
                    <Cards bgColor={'#eeebfe'} />
                    <Cards bgColor={'#6341ef'} />
                    <Cards bgColor={'#ffefd7'} />
                    <Cards bgColor={'#daf3ff'} />
                    <Cards bgColor={'#eeebfe'} />
                </motion.div>
            </div>
        </>
    );
}

export default Gallery;