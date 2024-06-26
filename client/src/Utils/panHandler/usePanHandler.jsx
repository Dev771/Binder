import { useRef, useState } from "react"
import { Alert, Animated, PanResponder } from "react-native"

const usePanHandler = () => {
    
    const [choiceMade, setChoiceMade] = useState(false);
    const position = useRef(new Animated.ValueXY()).current;
    const rotation = position.x.interpolate({
        inputRange: [-200, 0, 200],
        outputRange: ["-50deg", "0deg", "50deg"]
    });
    
    const panResponse = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderStart: () => {
            },
            onPanResponderGrant: () => {
            }, 
            onPanResponderMove: (evt, gestureState) => {
                position.setValue({ x: (gestureState.dx*2.2), y: Math.abs(gestureState.dx * 2) });
            },
            onPanResponderRelease: (evt, gestureState) => {
                Animated.spring(position, {
                    toValue: { x: 0, y: 0 },
                    useNativeDriver: false
                }).start()

                if(Math.abs(gestureState.dx) > 150) {
                    setChoiceMade(true);
                }
                setTimeout(() => setChoiceMade(false), 1000);
            },
            onPanResponderTerminate: () => {
                Animated.spring(position, {
                    toValue: { x: 0, y: 0 },
                    useNativeDriver: false
                }).start()
            }
        })
    ).current;

    return { panHandler: panResponse.panHandlers, position, rotation, choiceMade };

}

export default usePanHandler;