import React from 'react';
import icon from '../../Assets/Icon/refactory.png'
import {View,Text,Image,TouchableOpacity} from 'react-native'

const DrawerContent = (props) => {
    return ( 
            <View style={styles.container}>
                <View style={styles.image.container}>
                    <Image source={icon} style={styles.image.icon} />
                </View>
                <View>
                    <TouchableOpacity 
                    onPress={()=>props.navigation.navigate('Home')}
                    style={styles.menu}>
                        <Text>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  
                    onPress={()=>props.navigation.navigate('Courses')}
                    
                    style={styles.menu}>
                        <Text>Courses</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>props.navigation.navigate('ListCourse')}
                    
                    style={styles.menu}>
                        <Text>List Course</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={()=>props.navigation.navigate('CourseDetail')}
                    style={styles.menu}>
                        <Text>Case Studies</Text>
                    </TouchableOpacity>
                    
                </View>

            </View>
     );
}

export default DrawerContent;

const styles = {
    container:{
        flex:1,
        backgroundColor:'white'
    },
    image:{
        container:{
            width:'100%',
            height:'30%',
            backgroundColor:'grey',
            justifyContent:'center',
            alignItems:'center'

        },
        icon:{
            width:100,
            height:50
            
        },
       

    },
    menu:{
        width:'100%',
        height:60,
        borderBottomColor:'grey',
        borderBottomWidth:1,
        justifyContent:'center',padding:20
    }
}