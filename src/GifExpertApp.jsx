import { useState } from 'react';

import React from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
        // categories.push(newCategory);
        // setCategories([...categories, newCategory]);
        // setCategories( cat => [...cat, 'Valorant']); 2 forma
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={ (value) => onAddCategory(value) }
            />

            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category} 
                    />
                ))
            }

        </>
    )
};