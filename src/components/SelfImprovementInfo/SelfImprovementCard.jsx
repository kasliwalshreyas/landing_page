const SelfImprovementCard = ({ step }) => {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    // justifyContent: 'center',
                    // alignItems: 'center',
                    gap: '1rem',
                    position: 'relative',
                    padding: '2rem 0 0 0',
                }}
            >
                <div
                    style={{
                        width: '13px',
                        height: '13px',
                        backgroundColor: '#6242ee',
                        borderRadius: '50%',
                        position: 'absolute',
                        left: '-2rem',
                        top: '2.7rem',
                    }}
                ></div>
                <div>
                    <h1
                        style={{
                            fontFamily: 'catamaran',
                            fontWeight: "bold",
                            fontSize: '1.5rem',
                            marginBottom: '10px',
                            wordWrap: 'wrap',
                            width: '450px',
                        }}
                    >
                        {step.heading}
                    </h1>
                    <p

                        style={{
                            fontFamily: 'catamaran',
                            fontWeight: 500,
                            fontSize: '1.2rem',
                            marginBottom: '1.5rem',
                            wordWrap: 'wrap',
                            width: '800px',
                        }}
                    >
                        {step.description}
                    </p>
                </div>
            </div>
        </>
    );
}

export default SelfImprovementCard;