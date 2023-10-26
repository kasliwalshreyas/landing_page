import { Stack } from "@mui/material";
import JobCard from "./JobCard";
import Footer from "./Footer";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const jobList = [
    {
        role: "Senior Full-Stack Engineer",
        description: "Full-time position",
        location: "Berlin or remote",
        salary: "€65-85k, 0.5-1.50% equity share options"
    },
    {
        role: "Senior Designer",
        description: "Full-time position",
        location: "Berlin or remote",
        salary: "€40-55k, 0.25-0.50% equity share options"
    },
    {
        role: "Superstar Intern",
        description: "Full-time position",
        location: "Berlin or remote",
        salary: "€20-24k, 0.5-1.50% equity share options"
    },
]


const OpenVacanciesFeature = () => {

    const targetRef = useRef();
    const inView = useInView(targetRef);


    return (
        <>
            <Stack
                width={'calc(100%-80px)'} padding="0px 60px 0px" borderRadius={'32px'}
                margin={'0px 40px 0px'}
            >
                <Stack
                    minHeight={'370px'}
                    ref={targetRef}
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
                            damping: 12,
                            velocity: 2,
                        }}
                        style={{
                            fontSize: '50px',
                            lineHeight: '100%',
                            wordWrap: 'wrap'
                        }}
                    >
                        Open vacancies
                    </motion.h1>
                    <Stack
                        direction={'row'}
                        justifyContent={'space-between'}
                    >
                        {
                            jobList.map((item, index) => {
                                return (
                                    <JobCard item={item} key={index} />
                                )
                            })
                        }
                    </Stack>


                </Stack>
                <hr></hr>
                <Footer />
            </Stack>
        </>
    );
}

export default OpenVacanciesFeature;