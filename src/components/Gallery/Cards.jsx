import { Stack } from "@mui/material";

const Cards = ({ bgColor }) => {
    return (
        <>
            <Stack spacing={2} minWidth={'300px'} height={'180px'} style={{ backgroundColor: bgColor }} padding={'40px'} borderRadius={'16px'}>
                <p style={{ fontSize: '20px' }}>😠</p>
                <h6 style={{ fontSize: '20px' }}>You argue with a colleague</h6>
                <p style={{ wordWrap: 'wrap', fontFamily: 'catamaran' }}>You get angry and defensive, instead of
                    staying open and working towards
                    common ground.</p>
            </Stack>
        </>
    );
}

export default Cards;