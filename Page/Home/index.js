import React, { useState, useEffect } from 'react';
import { Image, View, ScrollView, TouchableOpacity } from 'react-native'
import { Header, Button, Icon, Left, Right, Body, Text, Drawer } from "native-base";
import icon from '../../Assets/Icon/refactory.png';
import DrawerContent from '../../Component/Drawer';


const Home = (props) => {

    const [drawer, setDrawer] = useState(false)
    const [partner, setPartner] = useState([])
    const [asSeen, setAsSeen] = useState([])


    useEffect(() => {
        const dataPertner = fetch('https://raw.githubusercontent.com/cahyo-refactory/RSP-DataSet-SkilTest-FE/main/partner.json', {
            method: 'get',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(dataPertner)
        }).then(function (response) {
            return response.json(); //response.json() is resolving its promise. It waits for the body to load
        }).then(function (responseData) {
            setPartner(responseData.data)
        });

        const dataSeen = fetch('https://raw.githubusercontent.com/cahyo-refactory/RSP-DataSet-SkilTest-FE/main/seen_on.json', {
            method: 'get',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(dataSeen)
        }).then(function (response) {
            return response.json(); //response.json() is resolving its promise. It waits for the body to load
        }).then(function (responseData) {
            setAsSeen(responseData.data)
        });

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
            <ScrollView >
                <View style={styles.row1}>
                    <Text style={{ fontSize: 25, textAlign: "center", marginTop: 150, color: 'white' }} >
                        Empowering People Through Programming
                </Text>
                    <View style={{ marginHorizontal: 20, marginTop: 70, }}>
                        <Text style={{ fontSize: 15, textAlign: "center", color: 'white' }} >
                            Refactory adalah perusahaan edukasi dan teknologi yang menyediakan layanan lengkap berupa course maupun custom training yang materinya dapat disesuaikan dengan kebutuhan teknologi dan bisnis perusahaan Anda.
                </Text>
                    </View>
                    <View style={{ margin: 20 }}>
                        <Button block primarry>
                            <Text>Temukan Solusi Anda</Text>
                        </Button>
                    </View>
                    <View style={{ margin: 20 }}>
                        <Button block warning>
                            <Text>Tingkatkan Skill Anda</Text>
                        </Button>
                    </View>
                    <Text style={{ textAlign: 'center', marginTop: 80, color: 'white' }}>Partner Exclusive Kami</Text>


                </View>
                <View style={styles.partner.container}>
                    <ScrollView horizontal pagingEnabled>
                        {partner.map((items, index) => {
                            return (
                                <>
                                    <View style={styles.partner.items} key={index}>
                                        <Image source={{ uri: items.photo_url }} style={{ width: 70, height: 70 }} resizeMode="contain" />
                                    </View>
                                </>
                            )
                        })}
                    </ScrollView>
                </View>
                <View style={{ height: "100%", height: 700, backgroundColor: "white", padding: 20 }}>
                    <Text style={{ textAlign: 'center', fontSize: 30 }}>
                        Apa Yang Refactory Dapat Bantu?
                    </Text>
                    <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 20 }}>
                        Memperkuat Tim Engineer Anda
                    </Text>
                    <Text style={{ textAlign: 'center', fontSize: 15, marginTop: 20, color: 'grey' }}>
                        Bisnis di jaman modern membutuhkan keterampilan pengembangan terbaik untuk meningkatkan skala produk. Kami dapat mempersiapkan course dan juga dapat menyediakan tim yang menangani kebutuhan digital Anda.
                    </Text>
                    <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 20 }}>
                        Wujudkan Software Impian Anda
                    </Text>
                    <Text style={{ textAlign: 'center', fontSize: 15, marginTop: 20, color: 'grey' }}>
                        Kami adalah perusahaan One-Stop IT Solution untuk proyek Anda, membantu di setiap tahap mulai dari menyusun ide, melalui desain dan pengembangan aplikasi seluler, situs web dan aplikasi desktop, hingga peluncuran produk.
                    </Text>
                    <Text style={{ textAlign: 'center', fontSize: 15, marginTop: 20, color: 'grey' }}>
                        INSIGHT TERBARU
                    </Text>
                    <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 20 }}>
                        Knowledge Sharing
                    </Text>
                    <Button bordered warning style={{ alignSelf: 'center', marginTop: 20 }} onPress={() => console.log(partner)}>
                        <Text style={{ color: 'orange' }}>Lihat Semua</Text>
                    </Button>


                </View>
                <View style={styles.asSeen.container}>
                    {asSeen.map((data, index) => {
                        return (
                            <Image key={index} source={{ uri: data.photo_url }} style={{ width: 70, height: 70 }} resizeMode="contain" />
                        )
                    })}
                </View>
                <View style={{ width: '100%', height: 900 }}>
                    <View style={{ width: '100%', height: 300, backgroundColor: '#1A237E', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ width: '33%', height: '100%', alignItems: 'center', padding: 10 }}>
                            <Text style={{ color: "white", fontSize: 20 }}>Site Map</Text>
                            <Text style={{ marginLeft: 20, color: 'white', marginTop: 20 }}>
                                Home
                                Bootcamp
                                Software Development
                                Courses
                                Custom Trainings
                                Blog
                            </Text>
                        </View>
                        <View style={{ width: '33%', height: '100%', alignItems: 'center', padding: 10 }}>
                            <Text style={{ color: "white", fontSize: 20 }}>Company</Text>
                            <Text style={{ marginLeft: 20, color: 'white', marginTop: 20 }}>
                                About Us
                                Career We’re Hiring
                                Press Kit
                                FAQ

                            </Text>
                        </View>
                        <View style={{ width: '33%', height: '100%', alignItems: 'center', padding: 10 }}>
                            <Text style={{ color: "white", fontSize: 20 }}>Connect</Text>
                            <Text style={{ marginLeft: 20, color: 'white', marginTop: 20 }}>
                                Facebook
                                Instagram
                                Youtube
                                LinkedIn
                            </Text>
                        </View>

                    </View>
                    <View style={{ width: '100%', height: 100, backgroundColor: '#1A237E', flexDirection: 'row', justifyContent: 'space-around' }}>
                        {['in', 'f', 'you', 'ig'].map((data, index) => {
                            return (
                                <TouchableOpacity key={index} style={{ width: 60, height: 60, backgroundColor: '#03A9F4', justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>{data}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                    <View style={{ width: '100%', height: 400, backgroundColor: '#1A237E', flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View style={{ width: '33%', height: '100%', alignItems: 'center', padding: 10 }}>
                            <Text style={{ color: "white", fontSize: 20 }}>
                                Company Address
                            </Text>
                            <Text style={{ marginLeft: 20, color: 'white', marginTop: 20 }}>
                                Jln. Palagan Tentara Pelajar
                                Km. 9,8
                                Ngaglik, Kab. Sleman
                                DI Yogyakarta 55581
                            </Text>
                        </View>
                        <View style={{ width: '50%', height: 100, alignItems: 'center', padding: 10}}>
                            <Text style={{ color: "white", fontSize: 20 }}>Company</Text>
                            <Text style={{ marginLeft: 20, color: 'white', marginTop: 20 }}>
                                marketing@refactory.id
                                +62 8122 8203 381

                                Dewita: 0857 2582 7222
                                Septin: 0878 2080 0206
                            </Text>
                        </View>
                        
                    </View>
                    <View style={{width:'100%',height:100,backgroundColor:'white',justifyContent:'center',padding:20}}>
                            <Text style={{textAlign:'center'}}>© 2020 Refactory - All Rights Reserved - 
                                Terms of Services / Privacy Policy</Text>
                        </View>

                </View>

            </ScrollView>
        </Drawer>

    );
}

export default Home;
const styles = {
    row1: {
        flex: 1,
        width: '100%',
        height: 700,
        backgroundColor: '#26A69A',
        textAlign: 'center',
        paddingVertical: 20,
    },
    partner: {
        container: {
            width: '100%',
            height: 100,
            backgroundColor: '#00897B',
        },
        items: {
            width: 80,
            height: 80,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            marginHorizontal: 50,
            elevation: 1
        },

    },
    asSeen: {
        container: {
            width: '100%',
            height: 100,
            backgroundColor: '#ECEFF1',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center'
        }
    }

}