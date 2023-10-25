import { Stack } from "@mui/material";

const EQInfo = ({ info }) => {
    return (
        <>
            <Stack direction={'row'} padding="100px 60px 100px" height={'200px'} spacing={20} justifyContent={'space-around'} margin={'10px 40px'}>
                <p style={{ fontSize: '50px', fontWeight: 600, wordWrap: 'wrap', lineHeight: '100%', minWidth: '400px', maxWidth: '400px' }}>{info.heading}</p>
                <Stack direction='row' spacing={10} marginLeft={'200px'}>
                    <Stack>
                        <p style={{ wordWrap: 'wrap', fontFamily: 'catamaran', fontSize: '20px', fontWeight: 400 }}>
                            {info.info1}
                        </p>
                    </Stack>
                    <Stack>
                        <p style={{ wordWrap: 'wrap', fontFamily: 'catamaran', fontSize: '20px', fontWeight: 400 }} >
                            {info.info2}
                        </p>
                    </Stack>
                </Stack>
            </Stack >
        </>
    );
}

export default EQInfo;