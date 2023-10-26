import { Stack } from "@mui/material";
import SunSlider from "./SunSlider";
import ColorfulSlider from "./ColorfulSlider";

const AnonymousRatingFeature = () => {
    return (
        <>
            <Stack style={{ backgroundColor: '#e6f1f7' }} alignItems={'center'} justifyContent={'center'}
                width={'calc(100%-80px)'} height={'80vh'} padding={'40px 10px 40px 10px'} borderRadius={'32px'}
                margin={'10px 40px 100px'}>
                <p
                    style={{
                        fontFamily: 'catamaran',
                        fontWeight: 500,
                        fontSize: '1.5rem',
                        marginBottom: '1.5rem',
                    }}
                >
                    Let your friends, family, and co-workers (anonymously) rate your social skills.
                </p>
                <h1
                    style={{
                        fontSize: '350%',
                        lineHeight: '100%',
                        wordWrap: 'wrap'
                    }}
                >
                    Ever wondered what others think of you?
                </h1>
                <SunSlider />
                <ColorfulSlider />

            </Stack>
        </>
    );
}

export default AnonymousRatingFeature;