import React from 'react'

import './Header.css'
const List = ({ people }) => {
    return (
        <>
            {people.map((person) => {
                const { id, name, age, image } = person;
                return (
                    <article key={id} className="person">
                        <img className="img" src={image} alt={name}/>
                        <div>
                            <h4>{name}</h4>
                            <p>{age} Years</p><br/>
                        </div>
                    </article>
                );
            })}
        </>
    )
}

export default List
