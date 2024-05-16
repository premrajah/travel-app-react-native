import React from 'react'
import { FlatList, Image, SafeAreaView, Text, View } from "react-native"
import styles from "./styles"
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";


const GalleryScreen = ({ route }) => {
    const { images } = route.params || {};
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.backContainer}>
                <TouchableOpacity onPress={goBack} hitSlop={32}>
                    <Image source={require("../../assets/back.png")} style={styles.backIcon} />
                </TouchableOpacity>
            </View>
            <View>
                <FlatList style={{ paddingHorizontal: 24, marginBottom: 24 }} data={images} renderItem={({ item }) => (
                    <Image source={{ uri: item }} style={styles.image} />
                )} />
            </View>
        </SafeAreaView>
    )
}

export default React.memo(GalleryScreen)