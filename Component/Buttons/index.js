import React from 'react';
import { Button, Text } from 'native-base';


const Buttons = (props) => {
    return ( 
            <Button onPress={props.onPress}>
                <Text>{props.title}</Text>
            </Button>
     );
}
 
export default Buttons;