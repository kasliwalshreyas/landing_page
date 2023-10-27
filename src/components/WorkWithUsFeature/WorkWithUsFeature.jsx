import { Stack, decomposeColor } from "@mui/material";
import work_with_us_ghost from '../../assets/images/work_with_us_ghost.png';
import QualityListingCards from "./QualityListingCards";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const data = [
    {
        heading: `Power through, even when the
        going gets tough`,
        description: `We help you spot and work around
        whatever stands in the way, be it bad
        habits, fears. etc.`
    },
    {
        heading: `Learn more about who you are
        and where you want to go`,
        description: `We ask the right questions to help you
        better understand why you do things the
        way you do.
        `
    },
    {
        heading: `Play and grow together with
        others on the same journey`,
        description: `Ahead feels like a game, not like a chore.
        See yourself grow every day towards
        achieving your goals!`
    },
    {
        heading: `Master how to make it happen
        in real life`,
        description: `We support you towards ninja-level skills
        with sleek tools such os dry-runs, quizzes,
        and flashcards.`
    },
    {
        heading: `Learn about practical skills that
        you can actually use in real life`,
        description: `We teach you smart psychological
        techniques and habit-forming strategies
        that are easy to apply.`
    }

]

const WorkWithUsFeature = () => {

    const targetRef = useRef(null);
    const inView = useInView(targetRef);
    const imageRef = useRef(null);
    const imageInView = useInView(imageRef);

    return (
        <>
            <Stack
                backgroundColor='#f3f1ff'
                justifyContent={'flex-end'}
                width={'calc(100%-80px)'}
                height={'100vh'}
                padding={'40px 40px 0px 40px'}
                borderRadius={'32px'}
                margin={'10px 40px 100px'}
                spacing={'40px'}
            >
                <Stack
                    ref={targetRef}
                    direction={'row'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    spacing={5}
                    width={'100%'}
                    height={'10%'}
                >
                    <motion.h1
                        initial={{
                            opacity: 0,
                            x: -600,
                        }}
                        animate={{
                            opacity: inView ? 1 : 0,
                            x: inView ? 0 : -600,
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 100,
                            damping: 15,
                            velocity: 2,
                        }}

                        style={{
                            fontSize: '50px',
                            lineHeight: '100%',
                            wordWrap: 'wrap'
                        }}
                    >
                        Work with us
                    </motion.h1>
                    <motion.h1
                        initial={{
                            opacity: 0,
                            x: 150,
                        }}
                        animate={{
                            opacity: inView ? 1 : 0,
                            x: inView ? 0 : 150,
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 100,
                            damping: 15,
                            velocity: 2,
                        }}

                        style={{
                            fontSize: '50px',
                            lineHeight: '100%',
                            wordWrap: 'wrap',
                            color: '#6542f1',
                            marginRight: '100px',
                        }}
                    >
                        ahead
                    </motion.h1>
                </Stack>
                <Stack
                    direction={'row'}
                    justifyContent={'space-between'}
                    maxHeight={'calc(100% - 80px - 10%)'}
                >
                    <Stack
                        backgroundColor={'#fff'}
                        borderRadius={'16px'}
                        width={'600px'}
                        padding={'0'}
                        height={'400px'}
                        ref={imageRef}
                    >
                        <Stack
                            margin={'30px 50px 30px 30px'}
                            spacing={1}
                        >
                            <motion.img
                                initial={{
                                    rotate: 40,
                                    scale: 0.5,
                                    origin: 0,
                                }}
                                animate={{
                                    rotate: imageInView ? [40, 0, -40, 0] : 40,
                                    scale: imageInView ? [0.5, 1, 0.5, 1] : 0.5,
                                }}
                                transition={{
                                    duration: 3,
                                    ease: 'easeInOut',

                                }}

                                style={{
                                    width: '60px',
                                }}
                                src={work_with_us_ghost}
                                alt="work_with_us_ghost"

                            />
                            <p
                                style={{
                                    fontSize: '20px',
                                    lineHeight: '100%',
                                    wordWrap: 'wrap',
                                    fontWeight: 'bold',

                                }}
                            >
                                About
                            </p>
                            <p
                                style={{
                                    fontFamily: 'catamaran',
                                    fontWeight: 500,
                                    lineHeight: '150%',
                                    fontSize: '20px',
                                    wordWrap: 'wrap',
                                    opacity: '0.8',
                                }}
                            >
                                At ahead our goal is to make self-
                                improvement fun and lasting. We know there's
                                a way how to make it work. And that's what
                                aHead is all about!
                            </p>
                        </Stack>
                        <Stack
                            backgroundColor={'#fef7f1'}
                            borderRadius={'32px'}
                            margin={'0 0 0 0'}
                        >
                            <Stack
                                margin={'30px 50px 30px 30px'}
                                spacing={1}
                            >
                                <p
                                    style={{
                                        fontSize: '20px',
                                        lineHeight: '100%',
                                        wordWrap: 'wrap',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Product
                                </p>
                                <p
                                    style={{
                                        fontFamily: 'catamaran',
                                        fontWeight: 500,
                                        lineHeight: '150%',
                                        fontSize: '20px',
                                        wordWrap: 'wrap',
                                        opacity: '0.8',
                                    }}
                                >
                                    Sure, you could spend ages reading books or
                                    sitting in seminars on how to become a better
                                    spouse, parent, or manager - like we did...
                                </p>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack
                        className="pretty-scrollbar"
                        padding={'10px 100px 100px 0px'}
                        spacing={5}
                        width={'calc(100% - 600px - 100px)'}
                        alignItems={'flex-end'}

                    >
                        {
                            data.map((item, index) => {
                                return (
                                    <QualityListingCards item={item} key={index} />
                                )
                            })
                        }
                    </Stack>
                </Stack>

            </Stack >
        </>
    );
}

export default WorkWithUsFeature;