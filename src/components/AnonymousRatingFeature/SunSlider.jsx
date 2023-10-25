import sun_mark_1 from "../../assets/images/sun_mark_1.png";
import sun_mark_2 from "../../assets/images/sun_mark_2.png";
import sun_mark_3 from "../../assets/images/sun_mark_3.png";

const SunSlider = () => {

    const marks = [
        "Answer questions on your social skills",
        "Let others anonymously answer the same questions about you",
        "Find out where you and others see things the some way - and where not!"
    ]

    return (
        <>
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '50px 0px 150px',
                }}
            >
                <img
                    src={sun_mark_1}
                    alt="sun_mark_1"
                    style={{
                        width: '50px',
                        height: '50px',
                        position: 'absolute',
                        left: '190px',
                    }}
                />
                <p
                    style={{
                        textAlign: 'center',
                        position: 'absolute',
                        fontWeight: 600,
                        fontFamily: 'catamaran',
                        left: '100px',
                        top: '30px',
                    }}
                >
                    {marks[0]}
                </p>
                <img
                    src={sun_mark_2}
                    alt="sun_mark_2"
                    style={{
                        width: '60px',
                        height: '50px',
                        position: 'absolute',
                    }} />
                <p
                    style={{
                        width: '300px',
                        textAlign: 'center',
                        position: 'absolute',
                        fontWeight: 600,
                        fontFamily: 'catamaran',
                        top: '30px',
                    }}
                >
                    {marks[1]}
                </p>
                <img
                    src={sun_mark_3}
                    alt="sun_mark_3"
                    style={{
                        width: '60px',
                        height: '50px',
                        position: 'absolute',
                        right: '190px',
                    }} />
                <p
                    style={{
                        width: '300px',
                        textAlign: 'center',
                        position: 'absolute',
                        fontWeight: 600,
                        fontFamily: 'catamaran',
                        right: '100px',
                        top: '30px',
                    }}
                >
                    {marks[2]}
                </p>
                <div
                    style={{
                        // height: 5,
                        width: '70%',
                        border: 'dashed orange 1px',
                    }}
                ></div>

            </div>
        </>
    );
}

export default SunSlider;