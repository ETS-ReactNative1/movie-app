import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { movieApi } from '../api';

export default () => {
  const [movies, setMovies] = useState({
    results: [],
    error: null
  });
  const getData = async () => {
    const [results, error] = await movieApi.discover();
    setMovies({
      results,
      error
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: '#be2465' }}>
      <Text style={{ color: 'white' }}>{movies.results.length}</Text>
    </View>
  );
};
