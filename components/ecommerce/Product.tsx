import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import axios from 'react-native-axios';
import CardProduct from './CardProduct';
import { styleEcommerce } from './stylesEcommerce';
const Product = () => {
  // Initialisation des variables locales (state)
  const [dataProducts, setDataProducts] = useState([]); // tableaux de la liste de produits
  const [loading, setLoading] = useState(true);

  // chargement des données de l'api

  const loadData = async () => {
  // lecture de l'api
  

  // Changement de l'état de chargement
  setLoading:(true);

  // requete sur l'api 
  const query =  await axios.get("https://fakestoreapi.com/products")

// chargement de donnée dans l'api
    setDataProducts(query.data) ;

  // fin du chargement

  setLoading(false)

  }


  useEffect(()=>{
    loadData();
  },[]) // [] au chargement du composant


  

  return (
    <View style={styleEcommerce.container}>
      <Text>Products</Text>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={dataProducts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CardProduct product={item} />}
        />
      )}
    </View>
  );
};

export default Product;