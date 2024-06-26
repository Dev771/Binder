import React from 'react'
import { View } from 'react-native'

import styles from './styles'

const ImageCarasoulBar = ({ Images, currentImage }) => {
    return (
        <View style={styles.ImageCarasoulBar} >
            {   Images.map((a, i) => (
                    <View style={[styles.ImageTab, i === currentImage ? styles.active : null]} key={i}></View>
                ))
            }
        </View>
    )
}

export default ImageCarasoulBar