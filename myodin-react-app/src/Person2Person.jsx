import {useState} from "react";

function Person() {
    const [person, setPerson] = useState({ name: 'Jon Crockley', age: 35 });

const updatePersonAge = () => {
    console.log("Getting older! (before 'setPerson' is called): ", person)
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

    return (
        <>
          <h1>Create Your Own Victim to Age!</h1>
          <input
            type="text"
            placeholder="Enter victim's name"
            value={victim}
            onChange={(event) => setVictim(event.target.value)}
            />
        </>
    )
}

export {
    Person,
    UsersVictim
}
