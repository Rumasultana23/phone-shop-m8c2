import { useEffect, useState } from "react";
// import PhoneCard from "../Phone/PhoneCard";
import FavoritesCard from "./FavoritesCard";


const Favorites = () => {

    const [favorites, setFavorites] = useState([]);
    const [noFound, setNoFound] = useState('');

    const [isShowMore, setIsShowMore] =useState(false);


    useEffect(() => {
        const favoriteItems = JSON.parse(localStorage.getItem('favorites'));

        if (favoriteItems) {
            setFavorites(favoriteItems);
        }
        else {
            setNoFound("No data Found");
        }
    }, []);

    const handleRemove = () => {
        localStorage.clear();
        setFavorites([]);
        setNoFound("No data Found");
    };

    return (
        <div> 
            {noFound ? <p className="h-[80vh] flex justify-center items-center">{noFound}</p> : <div>

                {
                    favorites.length > 0 && <button onClick={() => handleRemove()} className="px-5 bg-green-200 block mx-auto font-semibold py-3 rounded">Delete All Favorites</button>
                }
                <div className="grid grid-cols-2 gap-5 py-10">
                    {
                       isShowMore? favorites?.map(phone => <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>) : favorites?.slice(0,2).map(phone => <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>)
                    }
                </div>

                {favorites.length > 2 && <button onClick={() => setIsShowMore(!isShowMore)} className="px-5 bg-green-200 block mx-auto font-semibold py-3 rounded">{isShowMore ? "See Less" : "See More"}</button>} 
            </div>}
        </div>
    );
};

export default Favorites;