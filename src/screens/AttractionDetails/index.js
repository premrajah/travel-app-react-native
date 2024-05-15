import React from 'react'
import { Image, ImageBackground, Pressable, SafeAreaView, Text, View } from "react-native"
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
                style={styles.mainImage}>
                <View style={styles.header}>
                    <Pressable hitSlop={8} onPress={() => onBack()}>
                        <Image style={styles.icon} source={require("../../assets/back.png")} />
                    </Pressable>
                    <Pressable hitSlop={8}>
                        <Image style={styles.icon} source={require("../../assets/share.png")} />
                    </Pressable>
                </View>

                <View style={styles.footer}>
                    {item?.images?.length ? item?.images?.map((image, index) => (
                        <Image key={index} source={{ uri: image }} style={styles.minImages} />
                    )) : null}
                </View>

            </ImageBackground>
            <Text>{item.name}</Text>
        </SafeAreaView>
    )
}

export default React.memo(AttractionDetailsScreen)