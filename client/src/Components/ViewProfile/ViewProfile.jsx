import { Animated, Image, ImageBackground, Pressable, Text, TouchableHighlight, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import ProfileImage from '../../public/img/ProfileImage2.webp';
import ProfileImage2 from '../../public/img/ProfileImage.jpeg';
import SuperCharge from '../../public/img/SuperCharge.png';
import Reverse from '../../public/img/Reverse.png';
import Reject from '../../public/img/Reject.png';
import Star from '../../public/img/Star.png';
import Like from '../../public/img/Like.png';
import styles from './styles';
import { useRef, useState } from 'react';
import ImageCarasoulBar from '../ImageCarasoulBar/ImageCarasoulBar';

import UserPrefrence from '../../enums/UserPrefrence';

const ViewProfile = ({ zIndex, name, panHandler, position, rotation, userPrefrence }) => {
    
    let buttonRef = useRef(null);
    let touchTimeOut = useRef(null);

    const OptionButtons = [
        { type: "Reverse", color: '#F3D677', icon: Reverse },
        { type: "Reject", color: '#EA4080', icon: Reject },
        { type: "Star", color: '#62BAF3', icon: Star },
        { type: "Like", color: '#6DE5B5', icon: Like },
        { type: "SuperCharge", color: '#AA54EA', icon: SuperCharge },
    ]

    const [currentImage, setCurrentImage] = useState(0);
    const [buttonLayout, setButtonLayout] = useState({ width: 0, height: 0 });
    const [longPress, setLongPress] = useState(false);

    const [Images, setImages] = useState([ProfileImage, ProfileImage2, ProfileImage]);

    const handleLayout = (e) => {
        buttonRef.current.measure((x, y, width, height, pageX, pageY) => {
            setButtonLayout({ width, height })
        })
    }

    const handleClick = (e) => {
        if(e.nativeEvent.locationX < buttonLayout.width/2) {
            if(currentImage > 0) {
                setCurrentImage(currentImage-1);
            }
        } else {
            if(currentImage < Images.length-1) {
                setCurrentImage(currentImage+1);
            }
        }
    }

    const handleTouchStart = () => {
        buttonRef.current = setTimeout(() => {
            setLongPress(false);
        }, 10000);
    }

    const handleTouchMove = () => {
        touchTimeOut.current = setTimeout(() => {
            setLongPress(true);
        }, 100);
    }

    const handlePressOut = () => {
        setLongPress(false);
        clearTimeout(touchTimeOut.current);
    }

    return (
        <Animated.View 
            {...(longPress ? panHandler : {})}
            style={[styles.main, { zIndex, padding: 0, transform: [{translateX: position.x}, {translateY: position.y}, { rotateY: rotation }] }]} 
        >
            <Pressable 
                ref={buttonRef} 
                onPress={handleClick}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onPressOut={handlePressOut}
                onLayout={handleLayout} 
                style={{ flex: 1, width: '100%', alignItems: 'center' }} 
            >   
                <View style={[styles.likedislikeDisplay, userPrefrence === UserPrefrence.LIKE ? { left: 20 } : { right: 20 }]}>
                    { userPrefrence === UserPrefrence.LIKE ? (
                        <View style={styles.likeing}>
                            <Text style={{ textTransform: 'uppercase', color: 'green', fontSize: 30 }}>Like</Text>
                        </View>
                    ) : userPrefrence === UserPrefrence.DISLIKE ? (
                        <View style={styles.dislikeing} >
                            <Text style={{ textTransform: 'uppercase', color: 'red', fontSize: 30 }} >DISLIKE</Text>
                        </View>
                    ) : (<></>)}
                </View>
                <ImageCarasoulBar Images={Images} currentImage={currentImage} />
                <ImageBackground resizeMode='cover' source={Images[currentImage]} style={[styles.backImage, { height: "100%" }]}>
                    <LinearGradient colors={["transparent", '#000000']} locations={[.3, 1]} style={{ flex: 1, justifyContent: 'flex-end', paddingHorizontal: 20, paddingVertical: 30, gap: 20 }}>
                        <View>
                            <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 15 }}>
                                <Text style={[styles.text, styles.ProfileUserName]}>{name}</Text>
                                <Text style={[styles.text, styles.ProfilleUserAge]} >29</Text>
                            </View>
                            <View style={{ gap: 3 }}>
                                <Text style={[ styles.text, styles.ProfileMislaniousInfo]} >Lives in Alfama</Text>
                                <Text style={[ styles.text, styles.ProfileMislaniousInfo]} >1 kilometer away</Text>
                            </View>
                        </View>
                        <View style={styles.ButtonGroup}>
                            { OptionButtons.map((button) => (
                                <TouchableHighlight underlayColor={button.color} onPress={() => console.log(button.type)} key={button.type} style={[styles.ActionButtons, { borderColor: button.color }]}>
                                    <Image source={button.icon} alt={button.type} />
                                </TouchableHighlight>
                            ))}
                        </View>
                    </LinearGradient>
                </ImageBackground>
            </Pressable>
        </Animated.View>
    )
}

export default ViewProfile