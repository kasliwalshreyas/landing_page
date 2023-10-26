import { Stack } from "@mui/material";

const ColorfulSlider = () => {
    return (
        <>
            <Stack
                style={{ backgroundColor: '#ffffff' }}
                width={'42rem'}
                height={'15rem'}
                borderRadius={'2rem'}
                padding={'0px 10px 0px 10px'}
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
                        left: '2.5rem',
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
                        top: '2.5rem',
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
                        left: '12rem',
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
                        left: '12rem',
                        bottom: '2.5rem',
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
                        right: '17rem',
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
                        right: '8rem',
                        top: '2.5rem',
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
                        right: '2.5rem',
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
                        right: '-6.5rem',
                        bottom: '2.5rem',
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