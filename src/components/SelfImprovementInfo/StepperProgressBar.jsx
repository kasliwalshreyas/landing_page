import { SelfImprovement } from "@mui/icons-material";
import SelfImprovementCard from "./SelfImprovementCard";

const StepperProgressBar = ({
    steps
}) => {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '1rem',
                    // maxHeight: '60vh',
                    // overflow: 'scroll',
                    position: 'relative',
                    width: '100%',
                    // padding: '0 0 0 0',
                }}
            >
                <div
                    style={{
                        width: '2px',
                        // minHeight: '37.5rem',
                        height: '80%',
                        backgroundColor: '#6242ee',
                        borderRadius: '10px',
                        position: 'absolute',
                        left: '15.1rem',
                        top: '0rem',
                    }}
                ></div>

                {
                    steps.map((step, index) => {
                        return (
                            <SelfImprovementCard step={step} />
                        )
                    })
                }


            </div>
        </>
    );
}

export default StepperProgressBar;      