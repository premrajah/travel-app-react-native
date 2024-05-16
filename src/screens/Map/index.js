import React from 'react'
import { Image, Text, View } from "react-native"
import styles from "./styles"
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import { TouchableOpacity } from "react-native-gesture-handler";


const MapScreen = ({ route }) => {
    const { item } = route?.params || {};
    const navigation = useNavigation();
    const coords = {
        latitude: item?.coordinates?.lat,
        longitude: item?.coordinates?.lon,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009,

    }

    const goBack = () => {
        navigation.goBack();
    }

    return (
        <View>
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

            <View style={styles.backContainer}>
                <View>
                    <TouchableOpacity onPress={goBack}>
                        <Image source={require("../../assets/back.png")} style={styles.backImage} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.backText} >{`${item?.name}, ${item?.city}`}</Text>
                </View>
            </View>
        </View>
    )
}

export default React.memo(MapScreen)