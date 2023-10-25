import { Button, Stack } from "@mui/material";

const JobCard = ({ item }) => {




    return (
        <>
            <Stack
                className="job-card"
                spacing={2}
            >
                <p
                    style={{
                        fontSize: '18px',
                        lineHeight: '100%',
                        wordWrap: 'wrap',
                        fontWeight: 'bold',
                    }}
                >
                    {item.role}
                </p>
                <ul
                    style={{
                        fontSize: '14px',
                        wordWrap: 'wrap',
                        fontWeight: 600,
                        marginLeft: '16px',
                        lineHeight: '200%',
                    }}

                >
                    <li>{item.description}</li>
                    <li>{item.location}</li>
                    <li>{item.salary}</li>
                </ul>

                <button variant="contained" className="detailButton" disableElevation>
                    See details
                </button>

            </Stack>
        </>
    );
}

export default JobCard;
<>
</>