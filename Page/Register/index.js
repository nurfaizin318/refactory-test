import React,{useState} from 'react';
import { View, Text ,Image} from "react-native";
import { TextInputs, Buttons } from '../../Component';
import ImagePicker from 'react-native-image-picker';

const Register = (props) => {

  const [photo,setPhoto] = useState("") 

  const  selectFile = () => {
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
          console.log('Response = ', res);
    
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

    return (
        <View style={styles.container}>
            <View style={styles.title.container}>
                <Text style={styles.title.text}>Register</Text>
            </View>
            <View style={styles.form.container}>
                <View style={styles.form.rowUsername}>
                    <Text style={{ marginTop: 10 }}>Username</Text>
                    <View style={{ width: '70%' }}>
                        <TextInputs />
                    </View>
                </View>
                <View style={styles.form.rowPhoto}>
                    <Text style={{ marginTop: 10 }}>photo</Text>

                    {photo === null ? null :
                    <View style={{ width: 100, height: 100, borderWidth: 1, borderColor: 'black',marginLeft:40 }}>
                        <Image source = {{uri:photo === null ? "" :photo.uri }} style={{width:100 ,height:100}}/>
                    </View>
                    }
                    <Buttons title="upload" onPress={selectFile}/>
                </View>
                <View style={styles.form.rowEmail}>
                    <Text style={{ marginTop: 10 }}>Email</Text>
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
                <Buttons title="Login" />
                <Buttons title="Register" />
            </View>
            <View style={styles.location.container}>
                <Text style={styles.location.text}>Latitude   :{props.route.params.location.lat}  </Text>
                <Text style={styles.location.text}>Longitude :  {props.route.params.location.long}</Text>
            </View>

            
            <Image source = {{uri: photo.uri, 
            }} style={{width:100 ,height:100}}
                
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
            height: '20%',
        },
        text: {
            fontSize: 30,
            color: 'white',
        }
    },
    form: {
        container: {
            width: '100%',
            height: '50%',
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
        },
        rowPhoto: {
            marginTop:20,
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