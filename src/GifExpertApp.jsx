import React, { useState } from "react";
import { AddCategory,GrifGrid } from "./components";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["one punch"]);
  const onAddCategory = (newCategory) => {
    const lowerCaseCategory = newCategory.toLowerCase();
    if (categories.includes(lowerCaseCategory)) return;
    setCategories((categories) => [lowerCaseCategory, ...categories]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        //   setCategories={setCategories}
        onNewCategory={onAddCategory}
      />
      <ol>
          {
              categories.map((category) => (
                  <GrifGrid 
                  key={category} 
                  category={category}/>            
              ))
          }
      </ol>
    </>
  );
};
