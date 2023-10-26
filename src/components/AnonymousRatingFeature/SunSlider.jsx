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
                    width: '62.5rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '50px 0px 150px',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        width: '50px',
                        height: '50px',
                        position: 'absolute',
                        top: '-0.8rem',
                        left: '8rem',
                    }}
                >
                    <img
                        src={sun_mark_1}
                        alt="sun_mark_1"

                    />
                    <p
                        style={{
                            wordWrap: 'wrap',
                            width: '18.75rem',
                            textAlign: 'center',
                            fontWeight: 600,
                            fontFamily: 'catamaran',
                            // position: 'absolute',
                            // left: '100px',
                            // top: '30px',
                        }}
                    >
                        {marks[0]}
                    </p>
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        width: '60px',
                        height: '50px',
                        position: 'absolute',
                        top: '0.15rem',
                        // left: '8rem',
                    }}
                >

                    <img
                        src={sun_mark_2}
                        alt="sun_mark_2"
                    // style={{
                    //     width: '60px',
                    //     height: '50px',
                    //     position: 'absolute',
                    // }} 
                    />
                    <p
                        style={{
                            wordWrap: 'wrap',
                            width: '18.75rem',
                            textAlign: 'center',
                            fontWeight: 600,
                            fontFamily: 'catamaran',
                            // position: 'absolute',
                            // top: '30px',
                        }}
                    >
                        {marks[1]}
                    </p>
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        width: '60px',
                        height: '50px',
                        position: 'absolute',
                        top: '0rem',
                        right: '8rem',
                    }}
                >

                    <img
                        src={sun_mark_3}
                        alt="sun_mark_3"
                    // style={{
                    //     width: '60px',
                    //     height: '50px',
                    //     position: 'absolute',
                    //     right: '8rem',
                    // }}
                    />
                    <p
                        style={{
                            wordWrap: 'wrap',
                            width: '18.75rem',
                            textAlign: 'center',
                            fontWeight: 600,
                            fontFamily: 'catamaran',
                            // position: 'absolute',
                            // right: '100px',
                            // top: '30px',
                        }}
                    >
                        {marks[2]}
                    </p>
                </div>
                <div
                    style={{
                        // height: 5,
                        width: '70%',
                        border: 'dashed orange 1px',
                    }}
                ></div>

            </div >
        </>
    );
}

export default SunSlider;