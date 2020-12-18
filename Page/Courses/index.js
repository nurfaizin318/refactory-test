import React, { useState, useEffect } from 'react';
import { Image, View, ScrollView, TouchableOpacity } from 'react-native';
import { Header, Button, Icon, Left, Right, Body, Text, Drawer } from "native-base";
import icon from '../../Assets/Icon/refactory.png';
import DrawerContent from '../../Component/Drawer';


const Courses = (props) => {

    const [drawer, setDrawer] = useState(false)
    const [alumniData, setAlumniData] = useState([])




    useEffect(() => {
        const dataAlumni = fetch('https://raw.githubusercontent.com/cahyo-refactory/RSP-DataSet-SkilTest-FE/main/alumni-report.json', {
            method: 'get',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(dataAlumni)
        }).then(function (response) {
            return response.json(); //response.json() is resolving its promise. It waits for the body to load
        }).then(function (responseData) {
            setAlumniData(responseData.data)
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
            <ScrollView>
                <View style={styles.row1}>
                    <Text style={{ fontSize: 25, textAlign: "center", marginTop: 150, color: 'white' }} >
                        Tingkatkan skill pemrograman
                        kapan pun, dimana pun.
                </Text>
                    <View style={{ marginHorizontal: 20, marginTop: 70, }}>
                        <Text style={{ fontSize: 15, textAlign: "center", color: 'white' }} >
                            We’re a brand of passionate software engineers and educators with an engaging curriculum backed by real-world software projects ready to boost your career.
                </Text>
                    </View>
                    <View style={{ margin: 20 }}>
                        <Button block primarry>
                            <Text>Masuk dan mulai Belajar</Text>
                        </Button>
                    </View>
                    <View style={{ margin: 20 }}>
                        <Button block warning>
                            <Text>Daftar Sekarang</Text>
                        </Button>
                    </View>
                </View>
                <View style={{ width: '100%', height: 600, backgroundColor: 'white', }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center', margin: 20 }}>
                        Bagaimana Refactory Course membantu meningkatkan skill anda.
                        </Text>
                    <View style={{alignSelf:'center'}}>
                        <Button rounded warning >
                            <Text>Pelajari lebih</Text>
                        </Button>
                    </View>

                    <View style={{ width: '100%', height: 100, flexDirection: 'row', justifyContent: 'space-around', marginTop: 50 }}>
                        <View>
                            <Text>
                                Imersive
                            </Text>
                            <Text>
                                online trainig
                            </Text>
                        </View>
                        <View>
                            <Text>
                                24/7 Akses
                            </Text>
                            <Text>
                                Materi
                            </Text>
                        </View>
                    </View>
                    <View style={{ width: '100%', height: 100, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View>
                            <Text>
                                Bahasa
                            </Text>
                            <Text>
                                Indonesia
                            </Text>
                        </View>
                        <View>
                            <Text>
                                Pilihann kelas
                            </Text>
                            <Text>
                                Variatif
                            </Text>
                        </View>
                    </View>
                    <View style={{ width: '100%', height: 100, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View>
                            <Text>
                                Konsultasi
                            </Text>
                            <Text>
                                Regular meeting
                            </Text>
                        </View>
                        <View>
                            <Text>
                                mentor {'\n'}
                             berpengalaman
                            </Text>
                            <Text>
                                Training Project
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{ width: '100%', height: 1300, backgroundColor: 'white', alignItems: 'center', marginTop: 40 }}>
                    <View style={{ width: '90%', height: 400, backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={icon} style={{ width: 100, height: 100 }} resizeMode='contain' />
                    </View>
                    <Text style={{ textAlign: 'left', margin: 20 }}>
                        Refactory Course dirancang untuk memudahkan setiap orang mampu meningkatkan keahlian dalam software engineering tanpa dibatasi oleh kesulitan akses, kesulitan waktu, batasan keahlian, ataupun usia.
                        {'\n'}
                        {'\n'}
                        Dengan pembelajaran berdasarkan pengalaman nyata pengerjaan project, bagi pelajar/mahasiswa, Refactory Course akan melengkapi keahlian yang sudah diperoleh dalam studi sehingga dapat membuka kesempatan tak terbatas pada karir software engineering.
                        {'\n'}
                        {'\n'}
                        Bagi karyawan atau tenaga profesional, Refactory Course dapat meningkatkan keahlian software engineer dalam menunjang menyelesaikan tugas pekerjaannya tanpa khawatir dengan keterbatasan waktu.
                        {'\n'}
                        {'\n'}
                        Masyarakat secara luas juga dapat memanfaatkan pembelajaran untuk meningkatkan keahlian sehingga mampu berkarya dan mendapat keuntungan karir tanpa khawatir mahalnya belajar.
                    </Text>
                    <Button rounded warning style={{ alignSelf: 'center' }}>
                        <Text>Daftar Sekarang</Text>
                    </Button>
                    <Text style={{ marginTop: 20 }}>
                        MEET OR GRADUATE
                    </Text>
                    <Text style={{ marginTop: 20, fontWeight: 'bold' }}>
                        Review
                    </Text>
                    <Text style={{ marginTop: 20 }}>
                        Read what our alumni said on Course Report
                    </Text>
                </View>
                <View style={{ width: '100%', alignItems: 'center', paddingBottom: 20 }}>
                    {alumniData.map((data, index) => {
                        return (
                            <View style={{ width: '90%', backgroundColor: 'white', marginTop: 10, elevation: 4, padding: 20 }} key={index}>
                                <Image source={{ uri: data.user.photo_url }} style={{ width: '100%', height: 300 }} />
                                <Text style={{ marginTop: 20 }}>{data.user.name}</Text>
                                <Text style={{ marginTop: 20 }}>{data.user.from}</Text>
                                <Text style={{ marginTop: 20 }}> Star {data.star}</Text>
                                <Text style={{ marginTop: 40 }}>{data.title}</Text>
                                <Text style={{ marginTop: 40 }}>{data.description}</Text>
                            </View>

                        )
                    })}

                </View>
                <View style={{ width: '100%', height: 200, backgroundColor: '#00BCD4', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 20 }}>Ready To Learn ?</Text>
                    <Button rounded warning style={{ alignSelf: 'center', marginTop: 20 }}>
                        <Text>Daftar Sekarang</Text>
                    </Button>
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
                        <View style={{ width: '50%', height: 100, alignItems: 'center', padding: 10 }}>
                            <Text style={{ color: "white", fontSize: 20 }}>Company</Text>
                            <Text style={{ marginLeft: 20, color: 'white', marginTop: 20 }}>
                                marketing@refactory.id
                                +62 8122 8203 381

                                Dewita: 0857 2582 7222
                                Septin: 0878 2080 0206
                            </Text>
                        </View>

                    </View>
                    <View style={{ width: '100%', height: 100, backgroundColor: 'white', justifyContent: 'center', padding: 20 }}>
                        <Text style={{ textAlign: 'center' }}>© 2020 Refactory - All Rights Reserved -
                                Terms of Services / Privacy Policy</Text>
                    </View>

                </View>


            </ScrollView>
        </Drawer>

    );
}

export default Courses;

const styles = {
    row1: {
        flex: 1,
        width: '100%',
        height: 700,
        backgroundColor: '#26A69A',
        textAlign: 'center',
        paddingVertical: 20,
    },

}