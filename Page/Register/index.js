import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { TextInputs, Buttons } from '../../Component';
import ImagePicker from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = (props) => {

    const [photo, setPhoto] = useState('');
    const [loginStory, setLoginStory] = useState([]);
    const [email, setemail] = useState('')




    //insert data
    const storeData = async () => {

       
        //check data on storage
        try {
            const value = await AsyncStorage.getItem('loginStory')
            if (value !== null) {
                setLoginStory(JSON.parse(value))
            }
        } catch (e) {
           alert(e)
        }
        //search index on storage
        const index = loginStory.findIndex(value => value.email === email);
        //if data null > insert new user
        if (await index < 0) {
            setLoginStory(prev => [...prev, { email: email, count: 0 }])

        }
        //if data !== null > add count login and save to storage
        else {

            const lastDataLogin = [...loginStory];

            lastDataLogin[index].count += 1;
            
            setLoginStory(lastDataLogin)
            try {
                await AsyncStorage.setItem('loginStory', JSON.stringify(loginStory))
            } catch (e) {
                alert(e)
            }
            alert(`anda login ke ${loginStory[index].count}`)


        }

        return

    }
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('loginStory')
            if (value !== null) {
                console.log(JSON.parse(value))

            }
        } catch (e) {
            // error reading value
        }


    }

    const selectFile = () => {
        var options = {
            title: 'Select Image',
            customButtons: [
                {
                    name: 'customOptionKey',
                    title: 'Choose file from Custom Option'
                },
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, res => {

            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                alert(res.customButton);
            } else {
                let source = res;
                setPhoto(source)
            }
        });
    };



    useEffect(() => {


    }, [loginStory])

    return (
        <View style={styles.container}>
            <View style={styles.title.container}>
                <Text style={styles.title.text}>Register</Text>
            </View>
            <View style={styles.form.container}>
                <View style={styles.form.rowemail}>
                    <Text style={{ marginTop: 10 }}>Username</Text>
                    <View style={{ width: '70%' }}>
                        <TextInputs />
                    </View>
                </View>
                <View style={styles.form.rowPhoto}>
                    <Text style={{ marginTop: 10 }}>photo</Text>

                    {photo === null ? null :
                        <View style={{ width: 100, height: 100, borderWidth: 1, borderColor: 'black', marginLeft: 40 }}>
                            <Image source={{ uri: photo === null ? '' : photo.uri }} style={{ width: 100, height: 100 }} />
                        </View>
                    }
                    <Buttons title='upload' onPress={selectFile} />
                </View>
                <View style={styles.form.rowEmail}>
                    <Text style={{ marginTop: 10 }}>Email</Text>
                    <View style={{ width: '70%' }}>
                        <TextInputs onChangeText={(text) => setemail(text)} />
                    </View>
                </View>
                <View style={styles.form.rowPassword}>
                    <Text style={{ marginTop: 10 }}>Password</Text>
                    <View style={{ width: '70%' }}>
                        <TextInputs />
                    </View>
                </View>
            </View>
            <View style={styles.button.container}>
                <Buttons title='Login' onPress={getData} />
                <Buttons title='Register' onPress={storeData} />
            </View>
            <View style={styles.location.container}>
                <Text style={styles.location.text}>Latitude   :{props.route.params.location.lat}  </Text>
                <Text style={styles.location.text}>Longitude :  {props.route.params.location.long}</Text>
            </View>


            <Image source={{
                uri: photo.uri,
            }} style={{ width: 100, height: 100 }}

            />


        </View>
    );
}

export default Register;

const styles = {
    container: {
        flex: 1,
        padding: 15

    },
    title: {
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '10%',
        },
        text: {
            fontSize: 30,
        }
    },
    form: {
        container: {
            width: '100%',
            height: '60%',
            backgroundColor: '#CFD8DC',
            justifyContent: 'center',
            paddingHorizontal: 20
        },
        rowemail: {
            flexDirection: 'row',
            justifyContent: 'space-between'

        },
        rowPassword: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20
        },
        rowPhoto: {
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        rowEmail: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20
        },
    },
    button: {
        container: {
            width: '100%',
            height: '10%',
            flexDirection: 'row',
            justifyContent: 'space-around',
            padding: 10
        }
    },
    location: {
        container: {
            width: '100%',
            height: '30%',
            justifyContent: 'center'
        },
        text: {
            fontSize: 18
        }
    }
}