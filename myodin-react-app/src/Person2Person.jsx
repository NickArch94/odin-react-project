import {useState} from "react";

function Person() {
    const [person, setPerson] = useState({ name: 'Jon Crockley', age: 35 });

const updatePersonAge = () => {console.log("Getting older! (before 'setPerson' is called): ", person)
    setPerson((priorPerson) => ({ ...priorPerson, age: person.age + 1 }))
    console.log("Getting older! (after 'setPerson' is called): ", person)
}

console.log("during render, person is: ", person)

return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <button onClick={updatePersonAge}>Get Older!</button>
    </>
 )
}

function UsersVictim() {
    const [victim, setVictim] = useState("")
    const [age, setAge] = useState(0)

    const updateVictimAge = () => {
        setAge((prevAge) => prevAge + 1)
    }

    return (
        <div>
            <h1>Create Your Own Victim to Age!</h1>
            <label htmlFor="victimName">Victim Name:</label>
            <input
                id="victimName"
                type="text"
                value={victim}
                onChange={e => setVictim(e.target.value)}
                placeholder="Enter victim's name"
            />
            <h2>{victim}</h2>
            <h3>Age: {age}</h3>
            <button onClick={updateVictimAge}>Get Older!</button>
        </div>
    )
}


export {
    Person,
    UsersVictim
}
