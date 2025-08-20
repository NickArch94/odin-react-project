function List (props) {
    return (
        <ul>
            {props.smoothness.map((smoothItem) => {
                return smoothItem.startsWith("G") && <li key={smoothItem.name}>{smoothItem}</li>
            })}
        </ul>
    )
}



function ButterySmoothLists() {
    let smoothness = [
    {id: 1, name: 'Granite Countertops', smoothness: 'Very Smooth'},
    {id: 2, name: 'Marble Flooring', smoothness: 'Extremely Smooth'},
    {id: 3, name: "Einstein Bros Shmear", smoothness: 'Super Smooth'},
    {id: 4, name: 'operator', smoothness: 'Smooth'},]

    return (
        <div>
            <h1>Smoothness List:</h1>
                <List smootList={smoothness} />
        </div>
    )
  }



