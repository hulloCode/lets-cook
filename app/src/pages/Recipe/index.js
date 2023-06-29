import React from "react";
import { Text, View, FlatList, Image, ImageBackground, Pressable, ScrollView } from "react-native";
import SimilarRecipes from "../../components/SimilarRecipes";
import RecipeInformationButton from "../../components/RecipeInformationButton";
import { LinearGradient } from 'expo-linear-gradient';
import styles from "./style";


export default function Recipe({ route, navigation }) {  
    
    const recipe = route.params;

    const blocks = [
        {
            title: "Information",
            page: "Info"
        },
        {
            title: "Ingredients",
            page: "Ingredients"
        },
        {
            title: "Instructions",
            page: "Instructions"
        },
    ]

    navigation.setOptions({ title: route.params.title })

    return (
        <View>
            <View>
                <View style={styles.container}>
                    <Image source={{ uri: recipe.image }} style={styles.image}></Image>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerTitle} numberOfLines={2}>{recipe.title}</Text>
                        <View style={{ marginTop: 5 }}>
                            <Text style={styles.headerInformation}>{recipe.servings} servings</Text>
                            <Text style={styles.headerInformation}>{recipe.readyInMinutes} minutes</Text>
                        </View>
                    </View>
                </View>

                <FlatList
                    style={styles.blocks}
                    horizontal={true}
                    data={blocks}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (<RecipeInformationButton navigation={navigation} title={item.title} data={recipe} page={item.page}></RecipeInformationButton>)}
                    ItemSeparatorComponent={<View style={{ height: "100%", width: 20 }} />}
                />

            </View>
            <SimilarRecipes id={recipe.id}>

            </SimilarRecipes>
        </View>
    );
}