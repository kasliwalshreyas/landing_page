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
    const x = useTransform(scrollYProgress, [0, 8], ['1%', '100%']);

    const inView = useInView(headingRef);

    return (
        <>
            <Stack padding={'0 0 100px 0'} ref={targetRef} >
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
                <div style={{ position: 'sticky', top: 0, height: '200px' }}>
                    <Stack
                        direction={'row'}
                        spacing={7}
                        overflow={'hidden'}
                        // position={'sticky'}
                        // top={0}
                        alignItems={'center'}
                        justifyContent={'center'}
                    >
                        <motion.div
                            style={{ x }}
                            className="gallery"
                        >
                            <Cards bgColor={'#daf3ff'} />
                            <Cards bgColor={'#eeebfe'} />
                            <Cards bgColor={'#6341ef'} />
                            <Cards bgColor={'#ffefd7'} />
                            <Cards bgColor={'#daf3ff'} />
                            <Cards bgColor={'#eeebfe'} />
                            <Cards bgColor={'#6341ef'} />
                            <Cards bgColor={'#ffefd7'} />
                        </motion.div>
                    </Stack>
                </div>
            </Stack >
        </>
    );
}

export default Gallery;