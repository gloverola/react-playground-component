import React, {useEffect} from 'react';

import './app.css'
import {useSelector, useDispatch} from 'react-redux';
import {recipeSelector, fetchRecipes} from './features/recipeSlice'

const App = () => {

    const {recipes, hasErrors, loading} = useSelector(recipeSelector);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRecipes())
    }, [dispatch])

    if (loading) return <p>Loading recipes...</p>;
    if (hasErrors) return <p>Cannot display recipes...</p>;

    return (
        <div>
            recipeSelector
        </div>
    )
}

export default App;
