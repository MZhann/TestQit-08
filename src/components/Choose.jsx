import React, { useState } from "react";
import Ingredient from "./Ingredient"; 
import StoryOptions from "./StoryOptions";

const Choose = () => {

    const [textFromOptionsComponent, setTextFromOptionsComponent] = useState();

    

    const collectChooses = () => {
        let text = 'сгенерируй мне блюдо с этими ингредиентами: ' + gtpPromptText.toString() + '. И с вот такими опциями: ' + textFromOptionsComponent;
        // console.log(text);
        return text;
    }

    const ingredientsData = [
        { name: "Meat", imageSrc: "/images/meat.png" },
        { name: "Apple", imageSrc: "/images/apple.png" },
        { name: "Banana", imageSrc: "/images/banana.png" },
        { name: "Carrot", imageSrc: "/images/carrot.png" },
    ];

    // console.log('error')
  
    const [gtpPromptText, setGtpPromptText] = useState([]);
    const [imageUrl, setImageUrl] = useState('');
    

    const handleIngredientClick = (ingredient) => {
        setGtpPromptText([...gtpPromptText, ingredient.name]);
    };

   

    const generateImage = async (prompt) => {
        const options = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${apikey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                prompt: prompt,
                
                n: 1,
                size: "512x512",
            }),
        };

        try {
            console.log('generation started')
            console.log('promt text: ', prompt)
            const response = await fetch(
                "https://api.openai.com/v1/images/generations",
                options
            );
            const data = await response.json();
            console.log("data of generatedImage is below: ", data);
            setImageUrl(data.data[0].url);


        } catch (error) {
            console.error(error);
        }
    };



    return (
        <div className="flex flex-wrap">
            {ingredientsData.map((ingredient, index) => (
                <Ingredient
                    key={index}
                    imageSrc={ingredient.imageSrc}
                    // isSelected={selectedIngredients.includes(ingredient)}
                    onClick={() => handleIngredientClick(ingredient)}
                />
            ))}
            <div>
                <h3>Selected Ingredients:</h3>
                <ul>
                    {gtpPromptText.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>
            <img src={imageUrl} alt="image" width={400} />
            <button onClick={()=>generateImage(collectChooses())} className="px-4 h-[50px] m-4 rounded-2xl bg-indigo-400">Generate Dish</button>


                <p>from OPtions component: {textFromOptionsComponent}</p>
             <StoryOptions setTextFromOptionsComponent={setTextFromOptionsComponent} />
        </div>
    );
};

export default Choose;
