import {useMemo} from "react";

export const useCharacters = (searchQuery, characterList) => {
    const foundCharacters = useMemo(() => {
        if (searchQuery) {
            return characterList.filter(characterItem =>
                characterItem.name.toLowerCase().includes(searchQuery.toLowerCase()));
        }
        return characterList;
    }, [searchQuery, characterList]);
    return foundCharacters;
};