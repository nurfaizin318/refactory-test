import React, { useState, useEffect } from 'react';
import { Image, View, ScrollView, TouchableOpacity } from 'react-native';
import { Header, Button, Icon, Left, Right, Body, Text, Drawer, Input, Item } from "native-base";
import icon from '../../Assets/Icon/refactory.png';
import DrawerContent from '../../Component/Drawer';
import { TextInputs, Buttons } from '../../Component/'


const ListCourse = (props) => {

    const [drawer, setDrawer] = useState(false)


    const List = [
        {
            "id": 1,
            "photo_url": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/CTT7UaWkTcmvZwIk1tp7",
            "title": "HTML & CSS",
            "short_description": "Mempelajari bahasa pemrograman HTML & CSS sebagai dasar dalam pengembangan web",
            "link_url": "https://course.refactory.id/p/html-css-introduction",
            "user": {
                "user_id": 1,
                "photo_url": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:30,height:30/https://www.filepicker.io/api/file/KI6yume5Q6Cav3jEJBGi",
                "name": "Harlita Keni Damonti"

            }
        }, {
            "id": 1,
            "photo_url": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/CTT7UaWkTcmvZwIk1tp7",
            "title": "HTML & CSS",
            "short_description": "Mempelajari bahasa pemrograman HTML & CSS sebagai dasar dalam pengembangan web",
            "link_url": "https://course.refactory.id/p/html-css-introduction",
            "user": {
                "user_id": 1,
                "photo_url": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:30,height:30/https://www.filepicker.io/api/file/KI6yume5Q6Cav3jEJBGi",
                "name": "Harlita Keni Damonti"

            }
        }, {
            "id": 1,
            "photo_url": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/CTT7UaWkTcmvZwIk1tp7",
            "title": "HTML & CSS",
            "short_description": "Mempelajari bahasa pemrograman HTML & CSS sebagai dasar dalam pengembangan web",
            "link_url": "https://course.refactory.id/p/html-css-introduction",
            "user": {
                "user_id": 1,
                "photo_url": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:30,height:30/https://www.filepicker.io/api/file/KI6yume5Q6Cav3jEJBGi",
                "name": "Harlita Keni Damonti"

            }
        }, {
            "id": 1,
            "photo_url": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/CTT7UaWkTcmvZwIk1tp7",
            "title": "HTML & CSS",
            "short_description": "Mempelajari bahasa pemrograman HTML & CSS sebagai dasar dalam pengembangan web",
            "link_url": "https://course.refactory.id/p/html-css-introduction",
            "user": {
                "user_id": 1,
                "photo_url": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:30,height:30/https://www.filepicker.io/api/file/KI6yume5Q6Cav3jEJBGi",
                "name": "Harlita Keni Damonti"

            }
        }

    ]






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
                    <View style={{ width: '100%', height: 70, flexDirection: 'row', padding: 10 }}>
                        <View style={{ width: '70%' }}>
                            <TextInputs placeholder='Serach' style={{ width: '90%' }} />

                        </View>
                        <Buttons title="Search" />

                    </View>
                    <View style={{ width: '100%', alignItems: 'center', paddingBottom: 20 }}>
                        {List.map((data, index) => {
                            return (
                                <View style={{ width: '90%', backgroundColor: 'white', marginTop: 10, elevation: 4, padding: 20 }} key={index}>
                                    <Image source={{ uri: data.photo_url }} style={{ width: '100%', height: 300 }} />
                                    <Text style={{ marginTop: 20 }}>{data.title}</Text>
                                    <Text style={{ marginTop: 20 }}>{data.short_description}</Text>

                                    <View style={{ width: '100%', height: 100, flexDirection: 'row', marginTop: 50, justifyContent: 'space-around', }}>
                                        <Image source={{ uri: data.user.photo_url }} style={{ height: 50, width: 50, borderRadius: 25 }} />
                                        <Text style={{ marginTop: 20 }}>{data.user.name}</Text>
                                    </View>

                                </View>

                            )
                        })}

                    </View>

                </View>
                <View style={{ width: '100%', height: 100, backgroundColor: '#00BCD4', justifyContent: 'center', padding: 20 }}>
                    <Text style={{ textAlign: 'center',color:"white" }}>
                        © 2020 Refactory - All Rights Reserved -
                        Terms of Services / Privacy Policy
                     </Text>
                </View>


            </ScrollView>
        </Drawer>

    );
}

export default ListCourse;

const styles = {
    row1: {
        flex: 1,
        width: '100%',
        backgroundColor: 'white',
        textAlign: 'center',
        paddingVertical: 20,
    },

}