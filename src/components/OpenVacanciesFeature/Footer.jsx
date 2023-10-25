import { Button, Stack } from "@mui/material";
import square_wink from '../../assets/images/square_wink.png';
import AppleIcon from '@mui/icons-material/Apple';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return (
        <>
            <Stack
                justifyContent={'center'}
                alignItems={'center'}
                padding={'30px 30px 30px 30px'}
                spacing={2}
            >
                <Stack
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <img src={square_wink} alt="square_wink" style={{ width: '100px' }} />
                    <p
                        style={{
                            fontSize: '30px',
                            wordWrap: 'wrap',
                            color: '#6542f1',
                            fontWeight: 600,
                        }}
                    >
                        ahead
                    </p>
                </Stack>
                <Stack
                    direction={'row'}
                    justifyContent={'space-around'}
                    width={'40%'}
                >
                    <Stack
                        direction={'row'}
                        spacing={1}
                    >
                        <div
                            style={{
                                backgroundColor: '#9cf0d7',
                                borderRadius: '50%',
                                width: '30px',
                                height: '30px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <LocationOnIcon />
                        </div>
                        <p>
                            Auguststraße 26, 10117 Berlin
                        </p>
                    </Stack>
                    <Stack
                        direction={'row'}
                        spacing={1}
                    >
                        <div
                            style={{
                                backgroundColor: '#9cf0d7',
                                borderRadius: '50%',
                                width: '30px',
                                height: '30px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <EmailIcon />
                        </div>
                        <p>
                            hi@ahead-app.com
                        </p>
                    </Stack>

                </Stack>
                <Button variant="contained" disableElevation startIcon={<AppleIcon color='violet' sx={{ fontSize: '50px' }} />} style={{
                    width: '200px', borderRadius: '8px', backgroundColor: 'black', fontFamily: 'Roboto', padding: '5px'
                }}>
                    <Stack>
                        <p style={{ display: 'inline-block', fontSize: '8px' }}>Download on the</p>
                        <h3 style={{ display: 'inline-block' }}>App Store</h3>
                    </Stack>
                </Button>
                <p>
                    @2022 Ahead app. All right reserved
                </p>




            </Stack >
        </>
    );
}

export default Footer;