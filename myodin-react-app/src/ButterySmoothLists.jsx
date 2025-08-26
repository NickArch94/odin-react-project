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


function ButterySmoothLists() {
    const smoothness = [
        {id: 2, name: 'Marble Flooring', smoothness: 'Extremely Smooth'},
        {id: 3, name: "Einstein Bros Shmear", smoothness: 'Super Smooth'},
        {id: 4, name: 'operator', smoothness: 'Smooth'}]

    return (
        <div>
            <h1>Smoothness List:</h1>
                <List smoothness={smoothness} />
        </div>
    )
  }

export default ButterySmoothLists;



