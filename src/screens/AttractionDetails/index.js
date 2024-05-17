import React from 'react'
import { Image, ImageBackground, Pressable, SafeAreaView, Text, View } from "react-native"
import styles from "./styles"
import { useNavigation } from "@react-navigation/native";
import Title from "../../components/Title";
import InfoCard from "../../components/InfoCard";
import MapView, { Marker } from 'react-native-maps';
import { ScrollView } from "react-native-gesture-handler";
import Share from 'react-native-share';
import ImgToBase64 from 'react-native-image-base64';


const AttractionDetailsScreen = ({ route }) => {
    const { item } = route?.params || {};
    const mainImage = item?.images?.length ? item?.images[0] : null;
    const slicedImages = item?.images?.length ? item?.images?.slice(0, 5) : null;
    const diffImages = item?.images?.length - slicedImages?.length;
    const navigation = useNavigation();
    const openingTime = `Open: ${item?.opening_time} - Close: ${item?.closing_time}`;
    const coords = {
        latitude: item?.coordinates?.lat,
        longitude: item?.coordinates?.lon,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009,

    }


    const onBack = () => {
        navigation.goBack();
    }

    const onGalleryNavigate = () => {
        navigation.navigate("Gallery", { images: item?.images })
    }

    const onShare = async () => {

        try {
            const imageWithoutExtension = mainImage?.split('?')[0];
            const imageParts = imageWithoutExtension.split('.');
            const imageExtension = imageParts[imageParts?.length - 1];

            const base64Image = await ImgToBase64.getBase64String(mainImage);
            const shareOpen = await Share.open({
                title: item?.name,
                message: "Check this out",
                url: `data:image/${imageExtension || 'jpg'};base64,${base64Image}`
            });
        } catch (error) {
            console.log("Sharing error ", error);
        }


    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ImageBackground
                    source={{ uri: mainImage }}
                    imageStyle={{ borderRadius: 20 }}
                    style={styles.mainImage}>
                    <View style={styles.header}>
                        <Pressable hitSlop={8} onPress={() => onBack()}>
                            <Image style={styles.icon} source={require("../../assets/back.png")} />
                        </Pressable>
                        <Pressable hitSlop={8} onPress={onShare}>
                            <Image style={styles.icon} source={require("../../assets/share.png")} />
                            { }
                        </Pressable>
                    </View>

                    <Pressable onPress={onGalleryNavigate} style={styles.footer}>
                        {slicedImages?.map((image, index) => (
                            <View key={index}>
                                <Image source={{ uri: image }} style={styles.miniImage} />
                                {(diffImages > 0) && (index === slicedImages?.length - 1)
                                    ? <View style={styles.moreImageWrapper}>
                                        <Text style={styles.moreImages}>{`+${diffImages}`}</Text>
                                    </View>
                                    : null}
                            </View>
                        ))}
                    </Pressable>
                </ImageBackground>


                <View style={styles.headerContainer}>
                    <View style={styles.textContainer}>
                        <Title style={[styles.title, { maxWidth: "70%" }]} text={item?.name} />
                        <Title style={styles.title} text={item?.entry_price} />
                    </View>
                    <Text style={styles.city}>{item?.city}</Text>
                </View>

                <InfoCard text={item?.address} icon={require("../../assets/map.png")} />
                <InfoCard text={openingTime} icon={require("../../assets/time.png")} />

                <MapView
                    style={styles.map}
                    initialRegion={coords}

                >
                    <Marker
                        coordinate={coords}
                        title={item?.name}
                        description={item?.city}
                    />
                </MapView>

                <Text style={styles.mapText} onPress={() => navigation.navigate("Map", { item })}>Show Fullscreen Map</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(AttractionDetailsScreen)