import React from 'react';
import { Input, Item } from 'native-base';


const TextInputs = (props) => {
    return (
        <Item regular>
            <Input
                onChange={props.onChange}
                placeholder={props.placeholder}
                style={styles.input}
            />
        </Item>
    );
}

export default TextInputs;

const styles = {
    input: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'gray',
        height:40

    }
}