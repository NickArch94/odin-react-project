function List(props) {
    return (
        <>
            {!props.smoothness ? (
                <div>Loading...</div>
            ) : props.smoothness && props.smoothness.length > 0 ? (
                <ul>
                    {props.smoothness.map((smoothItem) => {
                        return <li key={smoothItem.id}>{smoothItem.name} - {smoothItem.smoothness}</li>
                    })}
                </ul>
            ) : (
            <div>No items found.</div>
            )}
        </>
    )
}

let Button = ({text = "Click Here to Win!", color = "red", fontSize = 34, handleClick }) => {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + 'px',
    }

    return (
        <button onClick={handleClick} style={buttonStyle}>{text}</button>
    )

}

function ButterySmoothLists() {
    const smoothness = [
        {id: 2, name: 'Marble Flooring', smoothness: 'Extremely Smooth'},
        {id: 3, name: "Einstein Bros Shmear", smoothness: 'Super Smooth'},
        {id: 4, name: 'operator', smoothness: 'Smooth'}]

    const handleButtonClick = () => {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }

    return (
        <div>
            <h1>Smoothness List:</h1>
                <List smoothness={smoothness} />
            <Button handleClick={handleButtonClick}/>
            <Button text="Don't click me! I'm malware (very scary, very evil)" handleClick={() => alert("You have been hacked! Just kidding, but seriously don't click random buttons on the internet.")} color="green" fontSize={16} />
        </div>
    )
  }

export default ButterySmoothLists;



