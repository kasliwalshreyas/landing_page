import { Stack, duration } from "@mui/material";
import Cards from "./Cards";
import { cubicBezier, motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from "react";



const Gallery = () => {

    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    console.log(scrollYProgress);
    const x = useTransform(scrollYProgress, [0, 4], ['1%', '100%']);

    return (
        <>
            <Stack padding={'0 0 100px 0'} >
                <motion.h1
                    initial={{ opacity: 0, fontSize: '0px', x: -100 }}
                    animate={{ opacity: 1, fontSize: '30px', x: 0 }}
                    transition={{
                        duration: 0.9, ease: cubicBezier(.42, 0, .58, 1),
                    }}
                    style={{ padding: "0px 50px 30px", fontWeight: 1000 }}
                >
                    Does this sound familiar...
                </motion.h1>
                <div ref={targetRef} style={{ position: 'relative', height: '200px' }}>
                    <Stack
                        direction={'row'}
                        spacing={7}
                        overflow={'hidden'}
                        position={'sticky'}
                        top={0}
                        // minWidth={'100vw'}
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