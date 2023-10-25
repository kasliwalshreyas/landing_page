import { Stack, Step, StepLabel, Stepper } from "@mui/material";

const SelfImprovementInfo = () => {

    const steps = [
        {
            heading: "It's not as easy as 1-2-3.",
            description: "The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know(and nothing else)."
        },
        {
            heading: "Old habits are hard to break.",
            description: "And bad behaviors die hard. Fortunately, we give you great, science-backed techniques to use."
        },
        {
            heading: "You and your motivation don't have along-term relationship.",
            description: "Luckily, we can proactively prepare you for the marathon, not just the race. Effective, memorable exercises will help you stick to your goals."
        }, {
            heading: "Books just don't offer practical solutions.",
            description: "Remember when you learned to ride a bike just by reading? Yeah, we don't either. We help you take concrete small steps towards your goals. Learning just a bit, then immediately springing into action."
        }, {
            heading: "Inspiration is great, but then what.",
            description: "We make sure your energy from all the content you consume does not fizzle out."
        }
    ]


    return (
        <>
            <Stack
                padding="100px 60px 100px"
                // height={'200px'}
                spacing={5}
                justifyContent={'space-around'}
                margin={'10px 40px 100px'}
            >
                <Stack spacing={2}>
                    <p style={{ fontFamily: 'catamaran', fontWeight: 500, paddingLeft: '6px', fontSize: '24px' }}>
                        Wrong with self-improvement & how we're fixing it.
                    </p>
                    <h1 style={{ fontSize: '60px', lineHeight: '100%', wordWrap: 'wrap' }}>
                        Self-improvement. Ugh.
                    </h1>
                </Stack>
                <Stack
                    justifyContent={'center'}
                    alignItems={'center'}

                >
                    <Stack
                        maxWidth={'900px'}
                    >
                        <Stepper activeStep={6} orientation="vertical">
                            {steps.map((step, index) => (
                                <Step key={index}>
                                    <StepLabel
                                        optional={
                                            <p style={{
                                                margin: '15px 0 20px',
                                                fontSize: '20px',
                                                lineHeight: '100%',
                                                wordWrap: 'wrap',
                                                position: 'relative',
                                                top: '15px',
                                            }}>
                                                {step.description}
                                            </p>
                                        }
                                    >
                                        <h3>
                                            {step.heading}
                                        </h3>
                                    </StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Stack>
                </Stack>
            </Stack >

        </>
    );
}

export default SelfImprovementInfo;