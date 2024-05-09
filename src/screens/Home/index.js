import React from 'react'
import { SafeAreaView, View, Text } from "react-native"
import Title from "../../components/Title"

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View>
                <Title text="My First Title" />
                <Title />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen