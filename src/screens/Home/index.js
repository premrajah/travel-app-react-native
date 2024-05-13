import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Text, ScrollView } from "react-native"
import Title from "../../components/Title"
import styles from "./styles"
import Categories from "../../components/Categories"
import AttractionCard from "../../components/AttractionCard"
import jsonData from "../../data/attrractions.json";

const HomeScreen = () => {

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(jsonData)
    }, [])

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

                <ScrollView contentContainerStyle={styles.row}>
                    {data?.map((item, index) => (
                        <AttractionCard
                            style={(index % 2 === 0) ? { marginRight: 12 } : {}}
                            imageSrc={item.images?.length ? item.images[0] : null}
                            title={item.name}
                            subtitle={item.city} />
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen