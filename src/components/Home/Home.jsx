import { Button, Stack } from "@mui/material";
import AppleIcon from '@mui/icons-material/Apple';
import StarIcon from '@mui/icons-material/Star';
import smartPhone_black from '../../assets/images/smartPhone_black.svg';
import pink_ghost from '../../assets/images/pink_ghost.png';
import red_ghost from '../../assets/images/red_ghost.png';
import blue_crying_ghost from '../../assets/images/blue_crying_ghost.png';

const Home = () => {
    return (
        <>
            <Stack direction={'row'} style={{ backgroundColor: '#eeebfe' }} alignItems={'center'} width={'calc(100%-80px)'} height={'80vh'} padding={'0px 10px 10px 10px'} borderRadius={'32px'}>
                <Stack width={'40%'} padding={'50px 0'} spacing={5}>
                    <Stack spacing={3}>
                        <p style={{ fontFamily: 'catamaran', fontWeight: 500 }}>Ahead app</p>
                        <h1 style={{ fontSize: '80px', lineHeight: '100%', wordWrap: 'wrap' }}>Master your life by mastering emotions</h1>
                    </Stack>
                    <Stack direction={'row'} spacing={5}>
                        <Button variant="contained" disableElevation startIcon={<AppleIcon color='violet' sx={{ fontSize: '50px' }} />} style={{
                            width: '200px', borderRadius: '8px', backgroundColor: 'black', fontFamily: 'Roboto', padding: '5px'
                        }}>
                            <Stack>
                                <p style={{ display: 'inline-block', fontSize: '8px' }}>Download on the</p>
                                <h3 style={{ display: 'inline-block' }}>App Store</h3>
                            </Stack>
                        </Button>
                        <Stack>
                            <Stack direction={'row'} spacing={1}>
                                <StarIcon color='golden' />
                                <StarIcon color='golden' />
                                <StarIcon color='golden' />
                                <StarIcon color='golden' />
                                <StarIcon color='golden' />
                            </Stack>
                            <p style={{ display: 'inline-block', fontSize: '20px' }}>100+ AppStore reviews</p>

                        </Stack>
                    </Stack>
                </Stack >
                <Stack width={'60%'} alignItems={'center'} justifyContent={'center'}>
                    <Stack position='relative' width={'450px'} height={'450px'} borderRadius={'50%'} border={'dashed white'} alignItems={'center'} justifyContent={'center'}>
                        <img src={pink_ghost} alt="pink_ghost" style={{ position: 'absolute', bottom: '26px', left: '37px', width: '70px' }} />
                        <img src={red_ghost} alt="red_ghost" style={{ position: 'absolute', top: '30%', right: '-20px', width: '50px' }} />
                        <img src={blue_crying_ghost} alt="blue_crying_ghost" style={{ position: 'absolute', top: '30px', left: '30px', width: '60px' }} />
                        <Stack width={'60%'} height={'60%'} backgroundColor={'violet'}>
                            <img src={smartPhone_black} alt="smartphone" />
                        </Stack>
                    </Stack>
                </Stack>
            </Stack >
        </>
    );
}


//circle
// background
// phone
export default Home;