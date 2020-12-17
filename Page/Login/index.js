import React, { useEffect, useState } from 'react';
import { View, Text, PermissionsAndroid } from 'react-native';
import { TextInputs, Buttons } from '../../Component';
import Geolocation from 'react-native-geolocation-service';

const Login = (props) => {


    const [location, setLocation] = useState({ long: '', lat: '' })


    //get permision and location
    const checkPermision = async () => {

        if (Platform.OS !== 'android')
            Geolocation.requestAuthorization()
        else {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        title: ' Location Permission',
                        message:'Needs access to your camera ',
                        buttonNegative: 'Cancel',
                        buttonPositive: 'OK'
                    }
                )
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    Geolocation.getCurrentPosition(
                        (position) => {
                            setLocation({ ...location, lat: position.coords.latitude, long: position.coords.longitude })
                        },
                        (error) => {
                            // See error code charts below.
                            console.log(error.code, error.message);
                        },
                        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
                    );
                } else {
                    alert('permision denied')
                }
            }
            catch (err) {
                console.warn(err);
            }
        }
  
    }


    useEffect(() => {
        checkPermision();
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.title.container}>
                <Text style={styles.title.text}>Login</Text>
            </View>
            <View style={styles.form.container}>
                <View style={styles.form.rowUsername}>
                    <Text style={{ marginTop: 10 }}>Username</Text>
                    <View style={{ width: '70%' }}>
                        <TextInputs />
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
                <Buttons title='Login' onPress={()=>alert("A")}/>
                <Buttons title='Register' onPress={()=>props.navigation.navigate('Register',{location:location})}/>
            </View>
            <View style={styles.location.container}>
                <Text style={styles.location.text}>Latitude   : {location.lat} </Text>
                <Text style={styles.location.text}>Longitude :{location.long}</Text>
            </View>
        </View>
    );
}

export default Login;

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
            height: '30%',
        },
        text: {
            fontSize: 30,
            color: 'white',
        }
    },
    form: {
        container: {
            width: '100%',
            height: '30%',
            backgroundColor: '#CFD8DC',
            justifyContent: 'center',
            paddingHorizontal: 20
        },
        rowUsername: {
            flexDirection: 'row',
            justifyContent: 'space-between'

        },
        rowPassword: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20


        }
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