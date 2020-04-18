import { Animated } from 'react-native';
import { useState, useEffect } from 'react';

export const useSimpleAnimation = ({ doAnimation, duration, delay}) => {
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(animation, {
        toValue: doAnimation ? 1 : 0,
        duration,
      }).start();
    }, delay)

  }, [doAnimation]);

  return animation;
}
