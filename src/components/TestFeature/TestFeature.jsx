import { Button, Stack } from "@mui/material";

const TestFeature = () => {
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

                <Button variant="contained" disableElevation style={{
                    marginTop: "30px", borderRadius: '32px', backgroundColor: 'black', fontFamily: 'catamaran', fontWeight: 500, fontSize: '12px', color: 'white', padding: '12px 20px'
                }}>
                    Start a test
                </Button>
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
            </Stack >
        </>
    );
}

export default TestFeature;