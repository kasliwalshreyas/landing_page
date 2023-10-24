import { Stack } from "@mui/material";
import Cards from "./Cards";

const Gallery = () => {
    return (
        <>
            <Stack padding={'0 0 100px'}>
                <h1 style={{ padding: "0px 50px 30px", fontSize: '60px', fontWeight: 1000 }}>Does this sound familiar...</h1>
                <Stack direction={'row'} spacing={5} flexWrap={'wrap'}>
                    <Cards bgColor={'#daf3ff'} />
                    <Cards bgColor={'#eeebfe'} />
                    <Cards bgColor={'#6341ef'} />
                    <Cards bgColor={'#ffefd7'} />
                </Stack>
            </Stack >

        </>
    );
}

export default Gallery;