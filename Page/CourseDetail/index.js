import React, { useState, useEffect } from 'react';
import { Image, View, ScrollView, TouchableOpacity } from 'react-native';
import { Header, Button, Icon, Left, Right, Body, Text, Drawer, Input, Item } from "native-base";
import icon from '../../Assets/Icon/refactory.png';
import DrawerContent from '../../Component/Drawer';
import { TextInputs, Buttons } from '../../Component/'
import { useLinkProps } from '@react-navigation/native';


const CourseDetail = (props) => {

    const [drawer, setDrawer] = useState(false)
    const [course, setCourse] = useState([])



    useEffect(() => {
        const dataCourse = fetch('https://raw.githubusercontent.com/cahyo-refactory/RSP-DataSet-SkilTest-FE/main/detail-course.json', {
            method: 'get',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(dataCourse)
        }).then(function (response) {
            return response.json(); //response.json() is resolving its promise. It waits for the body to load
        }).then(function (responseData) {
            setCourse(responseData)
        })

    }, [])
    return (
        <Drawer
            open={drawer}
            content={<DrawerContent navigation={props.navigation} />}
        >
            <Header noLeft>
                <Left>
                    <Image source={icon} style={{ width: 'auto', height: 'auto' }} />
                </Left>
                <Body>
                    <Image source={icon} style={{ width: 70, height: 30, marginBottom: 10 }} />
                </Body>
                <Right>
                    <Button transparent onPress={() => setDrawer(!drawer)}>
                        <Icon type="FontAwesome" name="bars" />
                    </Button>
                </Right>
            </Header>
            <ScrollView>
                <View style={styles.row1}>
                    <Text style={{ fontSize: 30, textAlign: "center", marginTop: 150, color: 'white' }} >
                        HTML & CSS Introduction
                     </Text>
                    <View style={{ marginHorizontal: 20, marginTop: 70, }}>
                        <Text style={{ fontSize: 15, textAlign: "center", color: 'white' }} >
                            HTML dan CSS adalah materi dasar untuk pengembangan web. Setiap web developer harus memiliki pengetahuan dasar setidaknya HTML dan CSS.
                         </Text>
                    </View>
                    <View style={{ margin: 20, alignSelf: 'center' }}>
                        <Button rounded warning onPress={() => console.log(course['materi course'])}>
                            <Text>Mulai Belajar</Text>
                        </Button>
                    </View>
                    <View style={{ width: '100%', height: 500, backgroundColor: 'white', padding: 20 }}>
                        <Text style={{ fontSize: 30, textAlign: "center", marginTop: 150 }} >
                            Tentang Course
                     </Text>
                        <Text style={{ textAlign: "center", marginTop: 20 }}>
                            {course['short-description']}
                        </Text>

                    </View>
                    <View style={{ width: '100%' }}>

                        {/* {course['materi course'] !== '' ? course['materi course'].map((data, index) => {
                            return (
                                <View key={index} style={{ width: '100%', height: 230, marginTop: 20, padding: 10 }}>
                                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>{data.section}</Text>
                                    {data.data.map((data, index) => {
                                        return (
                                            <View style={{ width: '100%', height: 50, marginTop: 5, backgroundColor: "white", justifyContent: "center", padding: 10, flexDirection: "row", justifyContent: 'space-between' }}>
                                                <Text key={index}>{data.title}</Text>
                                                <Text>Start</Text>
                                            </View>
                                        )
                                    })}
                                    
                                </View>
                            )
                        })
                    :null
                    } */}
                    </View>
                </View>
                <View style={{ width: '100%', height: 100, backgroundColor: '#00BCD4', justifyContent: 'center', padding: 20 }}>
                    <Text style={{ textAlign: 'center', color: "white" }}>
                        © 2020 Refactory - All Rights Reserved -
                        Terms of Services / Privacy Policy
                     </Text>
                </View>
            </ScrollView>
        </Drawer>
    );
}

export default CourseDetail;

const styles = {
    row1: {
        flex: 1,
        width: '100%',
        backgroundColor: '#26A69A',
        textAlign: 'center',
        paddingVertical: 20,
    },

}