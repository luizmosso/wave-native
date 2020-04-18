import styled from 'styled-components/native'
import { Animated } from 'react-native'

export const Container = styled(Animated.ScrollView)`
  width: 100%;
`;

export const ItemContainer = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
    position: relative;
    justify-content: center;
`;
