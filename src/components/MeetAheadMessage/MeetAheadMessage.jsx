import { Stack } from "@mui/material";
import purple_ghost from '../../assets/images/purple_ghost.png';
import sun_image from '../../assets/images/sun_image_2.png';
import flower_image from '../../assets/images/flower_image_2.png';
import green_leaf_image from '../../assets/images/green_leaf_image_2.png';

const MeetAheadMessage = () => {
    return (
        <>
            <Stack
                direction={'row'} style={{ backgroundColor: '#fef6f1' }}
                height={'70vh'} padding={'100px 10px 10px 10px'} borderRadius={'32px'}
                margin={'200px 40px 1000px'}
                position={'relative'}
            >
                <img
                    src={flower_image}
                    alt="flower_image"
                    style={{
                        position: 'absolute',
                        top: '-7%',
                        right: '100px',
                        width: '90px',
                        height: '90px',
                    }}
                />
                <img
                    src={green_leaf_image}
                    alt="green_leaf_image"
                    style={{
                        width: '120px',
                        height: '100px',
                        position: 'absolute',
                        top: '10%',
                        right: '150px',
                        rotate: '0deg',
                        scale: '0.7',
                    }}
                />

                <Stack
                    position={'relative'}
                    width={'50%'}
                    spacing={2}
                    padding={'0 0 0 30px'}
                >
                    <p style={{ fontFamily: 'catamaran', fontWeight: 500, paddingLeft: '6px' }}>Built out of frustration</p>
                    <h1 style={{ fontSize: '50px', lineHeight: '100%', wordWrap: 'wrap' }}>Meet the ahead App</h1>
                    <div style={{
                        position: 'absolute',
                        top: '30%',
                        left: '20%',
                        width: '220px',
                        height: '220px',
                        borderRadius: '50%',
                        backgroundColor: '#f6f6f6',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '180px',
                                height: '180px',
                                borderRadius: '50%',
                                backgroundColor: '#ffffff',
                            }}
                        >
                            <img
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    mixBlendMode: 'multiply',
                                }}

                                src={sun_image}
                                alt="sun_image" />
                            <img src={purple_ghost} alt="purple_ghost" />
                        </div>
                    </div>
                </Stack>
                <Stack
                    width={'50%'}
                    paddingLeft={20}
                    spacing={3}
                    justifyContent={'center'}

                >
                    <p
                        style={{
                            fontFamily: 'catamaran',
                            fontWeight: 500,
                            fontSize: '20px',
                            opacity: 0.8,
                            width: '70%',
                        }}
                    >
                        A personalized pocket coach that provides bite-
                        sized, science-driven tools to boost emotional
                        intelligence.
                    </p>
                    <p
                        style={{
                            fontFamily: 'catamaran',
                            fontWeight: 500,
                            fontSize: '20px',
                            opacity: 0.8,
                            width: '70%',
                        }}
                    >
                        Think of it as a pocket cheerleader towards a
                        better, more fulfilling.
                    </p>
                </Stack>
            </Stack >
        </>
    );
}

export default MeetAheadMessage;