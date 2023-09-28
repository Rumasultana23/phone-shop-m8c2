import { useEffect, useState } from "react";
import PhoneCard from "../Phone/PhoneCard";


const Favorites = () => {

    const [favorites, setFavorites] = useState([]);
    const [noFound, setNoFound] = useState('')

    useEffect(() => {
        const favoriteItems = JSON.parse(localStorage.getItem('favorites'));

        if (favoriteItems) {
            setFavorites(favoriteItems);
        }
        else {
            setNoFound("No data Found");
        }
    }, []);


    return (
        <div>
            {noFound ? <p className="h-[80vh] flex justify-center items-center">{noFound}</p> : <div>
            <div className="grid grid-cols-2 gap-5">
                {
                    favorites?.map(phone => <PhoneCard key={phone.id} phone={phone}></PhoneCard>)
                }
            </div>
            </div>}
        </div>
    );
};

export default Favorites;