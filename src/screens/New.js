import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
// import jsonData from "../reusables/data.json"
import axios from "axios"

const New = () => {
    const [data, setData] = useState([null]);
    // console.log("JSON DATA", jsonData);
    useEffect(() => {
        // axios.get(`https://jsonplaceholder.typicode.com/users`)
        //     .then(res => {
        //         const persons = res.data;
        //         // console.log("API DATA CHECK", persons);
        //         setData(persons)
        //     })

        axios.get('./data.json')
            .then((res) => {
                console.log(res.data);
                setData(res.data)
            }).catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <View>
            {data ?
                data.map((data, index) => {
                    return (
                        <View>
                            <Text key={index}>{data.name}</Text>
                        </View>
                    )
                })
                : ""
            }
            <Text>New</Text>
        </View>
    )
}

export default New
