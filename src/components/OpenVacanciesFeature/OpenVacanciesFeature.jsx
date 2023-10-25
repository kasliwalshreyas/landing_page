import { Stack } from "@mui/material";
import JobCard from "./JobCard";
import Footer from "./Footer";

const OpenVacanciesFeature = () => {

    const jobList = [
        {
            role: "Senior Full-Stack Engineer",
            description: "Full-time position",
            location: "Berlin or remote",
            salary: "€65-85k, 0.5-1.50% equity share options"
        },
        {
            role: "Senior Designer",
            description: "Full-time position",
            location: "Berlin or remote",
            salary: "€40-55k, 0.25-0.50% equity share options"
        },
        {
            role: "Superstar Intern",
            description: "Full-time position",
            location: "Berlin or remote",
            salary: "€20-24k, 0.5-1.50% equity share options"
        },

    ]


    return (
        <>
            <Stack
                width={'calc(100%-80px)'} padding="0px 60px 0px" borderRadius={'32px'}
                margin={'0px 40px 0px'}
            >
                <Stack
                    minHeight={'370px'}
                >
                    <h1
                        style={{
                            fontSize: '50px',
                            lineHeight: '100%',
                            wordWrap: 'wrap'
                        }}
                    >
                        Open vacancies
                    </h1>
                    <Stack
                        direction={'row'}
                        justifyContent={'space-around'}
                    >
                        {
                            jobList.map((item, index) => {
                                return (
                                    <JobCard item={item} key={index} />
                                )
                            })
                        }
                    </Stack>


                </Stack>
                <hr></hr>
                <Footer />
            </Stack>
        </>
    );
}

export default OpenVacanciesFeature;