import { Stack } from "@mui/material";

const ColorfulSlider = () => {
    return (
        <>
            <Stack
                style={{ backgroundColor: '#ffffff' }}
                width={'800px'}
                height={'220px'}
                borderRadius={'32px'}
                padding={'0px 10px 10px 10px'}
                justifyContent={'center'}
                alignItems={'center'}
                position={'relative'}
            >
                <div
                    style={{
                        width: '23px',
                        height: '23px',
                        backgroundColor: '#6341ef',
                        // border: 'solid #6341ef 9px',
                        borderRadius: '50%',
                        position: 'absolute',
                        left: '40px',
                    }}
                >
                </div>
                <div
                    style={{
                        width: 'fit-content',
                        padding: '0px 20px',
                        height: '50px',
                        borderRadius: '10px',
                        backgroundColor: '#6341ef',
                        position: 'absolute',
                        left: '-15px',
                        top: '30px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <p
                        style={{
                            color: '#ffffff',
                            fontSize: '20px',
                            fontWeight: 500,
                        }}

                    >You</p>
                </div>
                <div
                    style={{
                        width: '23px',
                        height: '23px',
                        backgroundColor: '#3fc4fa',
                        // border: 'solid #6341ef 9px',
                        borderRadius: '50%',
                        position: 'absolute',
                        left: '250px',
                    }}
                >
                </div>
                <div
                    style={{
                        width: 'fit-content',
                        padding: '0px 20px',
                        height: '50px',
                        borderRadius: '10px',
                        backgroundColor: '#3fc4fa',
                        position: 'absolute',
                        left: '250px',
                        bottom: '40px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <p
                        style={{
                            color: '#ffffff',
                            fontSize: '20px',
                            fontWeight: 500,
                        }}

                    >Anonymonos 1</p>
                </div>
                <div
                    style={{
                        width: '23px',
                        height: '23px',
                        backgroundColor: '#fdb338',
                        // border: 'solid #6341ef 9px',
                        borderRadius: '50%',
                        position: 'absolute',
                        right: '300px',
                    }}
                >
                </div>
                <div
                    style={{
                        width: 'fit-content',
                        padding: '0px 20px',
                        height: '50px',
                        borderRadius: '10px',
                        backgroundColor: '#fdb338',
                        position: 'absolute',
                        right: '160px',
                        top: '30px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <p
                        style={{
                            color: '#ffffff',
                            fontSize: '20px',
                            fontWeight: 500,
                        }}

                    >Anonymonos 2</p>
                </div>
                <div
                    style={{
                        width: '23px',
                        height: '23px',
                        backgroundColor: '#58c896',
                        // border: 'solid #6341ef 9px',
                        borderRadius: '50%',
                        position: 'absolute',
                        right: '40px',
                    }}
                >
                </div>
                <div
                    style={{
                        width: 'fit-content',
                        padding: '0px 20px',
                        height: '50px',
                        borderRadius: '10px',
                        backgroundColor: '#58c896',
                        position: 'absolute',
                        right: '-110px',
                        bottom: '40px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <p
                        style={{
                            color: '#ffffff',
                            fontSize: '20px',
                            fontWeight: 500,
                        }}

                    >Anonymonos 3</p>
                </div>

                <div
                    style={{
                        width: '90%',
                        border: 'solid #d7d7e1 1px',
                    }}
                ></div>

            </Stack>

        </>
    );
}

export default ColorfulSlider;