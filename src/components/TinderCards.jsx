import { Person } from '@material-ui/icons';
import React from 'react'
import TinderCard from './TinderCard';
import './tinderCard.css'

function Tinder() {
    const [persons, setPersons] = useState([
        {
            name : "Random Ghost",
            url : ""
        },
        {
            name : "Horor Ghost",
            url : ""
        }
    ]);
    return (
        <div className="tinderCards">
            {persons.map((person) =>(
                <div>
                    <TinderCard
                    name = {person.name}
                    link = {person.link}
                    />
                </div>
            ))}
        </div>  
    )
}

export default Tinder
