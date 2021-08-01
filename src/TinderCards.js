import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card';
import databate from './firebase';
import './TinderCard.css';

function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        //this is where the code runs...

        //this will run ONCE when the compo loads,and never again
        const unsubscribe = databate
            .collection('people')
            .onSnapshot(snapshot => (
                setPeople(snapshot.docs.map(doc => doc.data()))
            ));

        return () => {
            //this is the cleanup...
            unsubscribe();
        };

    }, []);

    //BAD
    // const people = [];
    // people.push('sony', 'qazi')

    //GOOD(Push to an array inREACT)
    // setPeople([...people, 'sony', 'qazi'])
    return (
        <div>
            <div className="tinderCards__cardContainer">
                {people.map(person => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}

                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})` }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards;
