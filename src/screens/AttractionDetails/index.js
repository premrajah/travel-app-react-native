import React from 'react'
import { ImageBackground, SafeAreaView, Text } from "react-native"
import styles from "./styles"
import { useNavigation } from "@react-navigation/native";


const AttractionDetailsScreen = ({ route }) => {
    const { item } = route?.params || {};
    const mainImage = item?.images?.length ? item?.images[0] : null;
    const navigation = useNavigation();

    const onBack = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={{ uri: mainImage }}
                imageStyle={{ borderRadius: 20 }}
                style={styles.mainImage}
            >
                <Text onPress={() => onBack()} style={{ margin: 34 }}>BACK</Text>
            </ImageBackground>
            <Text>{item.name}</Text>
        </SafeAreaView>
    )
}

export default React.memo(AttractionDetailsScreen)