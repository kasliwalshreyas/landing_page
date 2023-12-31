import { Button, Stack } from '@mui/material';
import square_wink from '../../assets/images/square_wink.png';

const NavBar = () => {
    return (
        <>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                padding="10px 100px 10px"
                // margin={'0 40px 10px'}
                position={'fixed'}
                top={0}
                left={0}
                right={0}
                backgroundColor={'white'}
                zIndex={1000}

            >
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