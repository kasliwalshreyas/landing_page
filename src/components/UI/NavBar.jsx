import { Button, Stack } from '@mui/material';
import square_wink from '../../assets/images/square_wink.png';

const NavBar = () => {
    return (
        <>
            <Stack direction="row" justifyContent="space-between" alignItems="center" padding="0 60px 10px">
                <img src={square_wink} alt="square_wink" style={{ width: '80px' }} />
                <Stack direction="row" spacing={8} fontFamily={'catamaran'} fontWeight={500}>
                    <p>Emotions</p>
                    <p>Manifesto</p>
                    <p>Self-awareness test</p>
                    <p>Work With Us</p>
                </Stack>
                <Button variant="contained" disableElevation style={{
                    borderRadius: '32px', backgroundColor: 'black', fontFamily: 'catamaran', fontWeight: 500, fontSize: '12px', color: 'white', padding: '12px 20px'
                }}>
                    Download App
                </Button>
            </Stack >
        </>
    );
}

export default NavBar;