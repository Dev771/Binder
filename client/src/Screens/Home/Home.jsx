import { useEffect, useRef, useState } from 'react'
import { View, PanResponder, Text, Animated, Button, Pressable, Image } from 'react-native'

import ViewProfile from '../../Components/ViewProfile/ViewProfile';
import TinderPng from '../../public/img/TinderIconColored.png';
import styles from './styles';
import usePanHandler from '../../Utils/panHandler/usePanHandler';
import UserPrefrence from '../../enums/UserPrefrence';

const Home = ({ navigation }) => {

  const [ProfileList, setProfileList] = useState(["1", "2", "3"]);
  const [userPrefrence, setUserPrefrence] = useState(UserPrefrence.UNDECIDED);

  const { panHandler, position, rotation, choiceMade } = usePanHandler();


  useEffect(() => {
    if(position) {
      var id = position.addListener((value) => {
        if(value.x > 10) {
          setUserPrefrence(UserPrefrence.LIKE);
        } else if(value.x < -10) {
          setUserPrefrence(UserPrefrence.DISLIKE);
        } else {
          setUserPrefrence(UserPrefrence.UNDECIDED);
        }
      })

      return () => {
          position.removeListener(id);
      }
    }
  }, [position]);

  useEffect(() => {
    if(choiceMade) {
      setProfileList(prevList => prevList.slice(1));
    }
  }, [choiceMade])

  return (
    <View style={styles.main}>
      {/* <Button title='Back' onPress={() => navigation.goBack()} ></Button> */}
      <Image resizeMode='contain' style={styles.Image} source={TinderPng} alt='Tinder'/>
      <View style={styles.container}>
        { ProfileList.map((a, i) => (
            <ViewProfile 
              panHandler={i===0 ? panHandler : {}} 
              userPrefrence={i=== 0 ? userPrefrence : UserPrefrence.UNDECIDED} 
              position={i===0 ? position : useRef(new Animated.ValueXY()).current} 
              rotation={i===0 ? rotation : '0deg'} 
              zIndex={10-i} 
              key={a}
              name={a} 
            />
          ))
        }
      </View>
    </View>
  )
}

export default Home