import { Stack } from "@mui/material";

const QualityListingCards = ({ item }) => {
    return (
        <>
            <Stack
                backgroundColor={'#fff'}
                borderRadius={'16px'}
                padding={'30px 30px 30px 30px'}
                spacing={1}
                width={'250px'}
            >
                <p
                    style={{
                        fontSize: '18px',
                        lineHeight: '100%',
                        wordWrap: 'wrap',
                        fontWeight: 'bold',
                    }}
                >
                    {item.heading}
                </p>
                <p
                    style={{
                        fontFamily: 'catamaran',
                        fontWeight: 500,
                        lineHeight: '150%',
                        fontSize: '15px',
                        wordWrap: 'wrap',
                        opacity: '0.8',
                    }}
                >
                    {item.description}
                </p>
            </Stack>
        </>
    );
}

export default QualityListingCards;