import { Stack } from "@mui/material";

const HomeInfoFooter = () => {
    return (
        <>
            <Stack direction={'row'} padding="100px 60px 100px" height={'200px'} spacing={50} justifyContent={'space-around'} margin={'10px 40px'}>
                <p style={{ fontSize: '50px', fontWeight: 600 }}>EQ beats IQ</p>
                <Stack direction='row' spacing={15} width={'50%'}>
                    <Stack>
                        <p style={{ wordWrap: 'wrap', fontFamily: 'catamaran', fontSize: '20px' }}>People with high emotional
                            intelligence (EQ) live more fulfilled
                            lives. They tend to be happier and
                            have healthier relationships.</p>
                    </Stack>
                    <Stack>
                        <p style={{ wordWrap: 'wrap', fontFamily: 'catamaran', fontSize: '20px' }} >They are more successful in their
                            pursuits and make for inspiring
                            leaders. According to science, they
                            earn $29k a year.</p>
                    </Stack>
                </Stack>
            </Stack >
        </>
    );
}

export default HomeInfoFooter;