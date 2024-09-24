import { useState, useEffect } from "react";

const StoryOptions = ({setTextFromOptionsComponent}) => {

    
    const [timeFood, setTimeFood] = useState('');
    const [typeOfFood, setTypeOfFood] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [fastFoodType, setFastFoodType] = useState('');
    const [bonusIngredients, setBonusIngredients] = useState('');
    const [banIngredients, setBanIngredients] = useState('');

    const changeTextOptions = () => {
        setTextFromOptionsComponent(`${timeFood}, ${typeOfFood}`);
    }

    useEffect(() => {
        changeTextOptions();
        
    }, [timeFood, typeOfFood])

    const prompToGpt = `Сгенериру мне фото еды в тарелке. Тип еды будет ${timeFood},${typeOfFood} в еде не должно быть ${banIngredients} потому что у меня аллергия, `
    
    return (
        <div className="mx-auto p-4 mt-4 bg-white w-[70%] h-[400px] rounded-3xl flex text-black  flex-col items-center">
            <div className="text-3xl font-bold">Options</div>
            <p>Lorem, ipsum dolor.</p>

            <div className="flex gap-10 mt-10">
                <div>
                    <div className="flex flex-col">
                        <label for='dish'>Select dish you want to cook</label>
                        <select name="dish" id="dish" onChange={(e) => setTimeFood(e.target.value)} className="w-[200px] h-[35px] rounded-3xl border-black border-2">
                            <option value='Завтрак'>Завтрак</option>
                            <option value='Обед'>Обед</option>
                            <option value='Ужин'>Ужин</option>
                            <option value='Перекус'>перекус</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label for='cuisine'>World cuisine</label>
                        <select name="cuisine" id="cuisine" onChange={(e) => setTypeOfFood(e.target.value)} className="w-[200px] h-[35px] rounded-3xl border-black border-2">
                            <option value='Азиатская кухня'>Азиатская кухня</option>
                            <option value='Итальянская кухня'>Итальянская кухня</option>
                            <option value='Европейская кухня'>Евопейская кухня</option>
                            <option value='Американская кухня'>Американская кухня</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Type of Food</p>
                        <select className="w-[200px] h-[35px] rounded-3xl border-black border-2">
                            <option>Вегетарианская</option>
                            <option>Полезная</option>
                            <option>Жирная</option>
                            <option>Супы</option>
                        </select>
                    </div>

                    <div>
                        <p>Fast Food</p>
                        <select className="w-[200px] h-[35px] rounded-3xl border-black border-2">
                            <option>Пицца</option>
                            <option>Бургер</option>
                            <option>Донер</option>
                            <option>Крылышки</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Add extra ingredients</p>
                        <input onChange={(e)=> setBonusIngredients(e.target.value)} placeholder="extra ingredients" className="w-[200px] h-[35px] rounded-3xl border-2 border-black "/>

                    </div>

                    <div>
                        <p>Ban ingredients</p>
                        <input placeholder="ban ingredient" className="w-[200px] h-[35px] rounded-3xl border-2 border-black "/>
                    </div>
                </div>
            </div>
            <p>selected time food: {timeFood}</p>
            <p>selected typeOfFood: {typeOfFood}</p>
            
        </div>
    );
};

export default StoryOptions;




// const handleIsBoy = () => {
//     if (gender.includes("boy")) {
//         setGender(gender.filter((g) => g !== "boy")); // Remove 'boy' if it exists
//     } else {
//         setGender([...gender, "boy"]); // Add 'boy' if it's not there
//     }
// };

// const handleIsGirl = () => {
//     if (gender.includes("girl")) {
//         setGender(gender.filter((g) => g !== "girl")); // Remove 'girl' if it exists
//     } else {
//         setGender([...gender, "girl"]); // Add 'girl' if it's not there
//     }
// };