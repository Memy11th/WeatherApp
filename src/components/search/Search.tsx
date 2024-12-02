import { AsyncPaginate } from "react-select-async-paginate";
import React from  'react';
const Search = ({handleChangeOnSearch}:{handleChangeOnSearch:any}) => {
    const [search,setSearch] = React.useState('');
    const handleChange=()=>{
        setSearch('hello');
        console.log(search);
        handleChangeOnSearch(search);
    };

    const loadOptions = ()=>{
        return ({
            options : [
                {latitude:25000},
                {longitude:20000}, 
            ],
            hasMore:false

    })
    }

    return <>
            <AsyncPaginate placeholder="Search for city" loadOptions={loadOptions} onChange={handleChange} value={SearchValue} debounceTimeout={600} />
    </>
}

export default Search
