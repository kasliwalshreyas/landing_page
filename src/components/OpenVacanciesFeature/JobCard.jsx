import { Button, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

const JobCard = ({ item }) => {

    const [hover, setHover] = useState(false);

    const handleHover = () => {
        setHover(!hover);
    }

    return (
        <>
            <motion.div
                className="job-card"
                initial={{
                    height: "8rem",
                }}
                whileHover={{
                    height: "12rem",
                }}
                transition={{
                    type: 'tween',
                    duration: 0.5,
                }}
                onHoverStart={handleHover}
                onHoverEnd={handleHover}
            >
                <p
                    style={{
                        fontSize: '24px',
                        lineHeight: '100%',
                        wordWrap: 'wrap',
                        fontWeight: 'bold',
                    }}
                >
                    {item.role}
                </p>
                <ul
                    style={{
                        fontSize: '16px',
                        wordWrap: 'wrap',
                        fontWeight: 600,
                        marginLeft: '16px',
                        lineHeight: '200%',
                    }}

                >
                    <li>{item.description}</li>
                    <li>{item.location}</li>
                    <li>{item.salary}</li>
                </ul>

                <motion.button

                    initial={{
                        origin: 0,
                        opacity: 0,
                        scale: 0.1,
                    }}
                    animate={{
                        opacity: hover ? 1 : 0,
                        scale: hover ? 1 : 0.1,
                    }}
                    transition={{
                        type: 'spring',
                        stiffness: 100,
                        damping: 10,
                        velocity: 1,
                    }}

                    variant="contained"
                    className="detailButton">
                    See details
                </motion.button>

            </motion.div>
        </>
    );
}

export default JobCard;
<>
</>