import React, { useState } from 'react'
import { View, Text } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultList from '../components/ResultsList'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()

    const filterResultsByPrice = price => {
        // price === '$' || '$$' || '$$$'
        return results.filter(results => {
            return results.price === price
        })
    }

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results.</Text>
            <ResultList results={filterResultsByPrice('$')} title="Cost Effective" />
            <ResultList results={filterResultsByPrice('$$')} title="Bit Pricier" />
            <ResultList results={filterResultsByPrice('$$$')} title="Big Spender" />
        </View>
    )
}

export default SearchScreen
