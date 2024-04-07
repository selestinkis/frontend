import React, { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';


function RecepiesPage() {

    const [recipes, setRecipes] = useState([]);
    let { state } = useLocation();

    useEffect(() => {
        let list_ids = state.listids;
        console.log(list_ids);
        let request = '?ingredient_ids='
        for (let i = 0; i < list_ids.length; i++) {
            request += (list_ids[i]+',')
        }
        request = request.slice(0, -1);
        fetch(`recipes/recipes_by_ingredients/${request}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setRecipes(data);
            console.log(recipes);
        })
    }, [])

    return (
        <div>
            <h1 className='logo'>Ваши рецепты!!</h1>
            {
                recipes ? recipes.map((r, index)=> {
                    return (
                        <div key = {index} className='recipes'>
                            <h1>{r.name_recipe}</h1>
                            <p>{r.description}</p>
                        </div>
                    )
                }) : <></>
            }
        </div >

    );

}

export default RecepiesPage;