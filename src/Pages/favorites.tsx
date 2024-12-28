import { useFavorites } from "@/Hooks/useFavorite"

const Favorites = () => {
    const {favorites} = useFavorites();
    console.log(favorites)
    return <>
    Hola
    </>
}

export default Favorites
