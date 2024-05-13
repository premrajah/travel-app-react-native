import React, { useState } from 'react'
import { SafeAreaView, View, Text } from "react-native"
import Title from "../../components/Title"
import styles from "./styles"
import Categories from "../../components/Categories"
import AttractionCard from "../../components/AttractionCard"

const HomeScreen = () => {

    const [selectedCategory, setSelectedCategory] = useState("All")

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Title text="Where do" style={{ fontWeight: "normal" }} />
                <Title text="you want to go?" />

                <Title text="Explore Attractions" style={styles.subtitle} />

                <Categories
                    selectedCategory={selectedCategory}
                    categories={["All", "Popular", "Historical", "Tourist", "Low Cost", "Exclusive"]}
                    onCategoryPress={setSelectedCategory} />

                <View style={styles.row}>
                    <AttractionCard imageSrc="https://fullsuitcase.com/wp-content/uploads/2021/01/Best-things-to-do-in-London-top-sights-and-attractions.jpg.webp" title="Tower Bridge" subtitle="London" />
                    <AttractionCard imageSrc="https://fullsuitcase.com/wp-content/uploads/2021/01/Best-things-to-do-in-London-top-sights-and-attractions.jpg.webp" title="Tower Bridge" subtitle="France" />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen