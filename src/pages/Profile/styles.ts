import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
  position: relative;
`;

export const BackButton = styled.TouchableOpacity`
  position: ${Platform.OS === 'android' ? 'absolute' : ''};
  top: ${Platform.OS === 'android' ? '70px' : ''};
  left: ${Platform.OS === 'android' ? '20px' : ''};
  margin-top: ${Platform.OS === 'ios' ? '40px' : '0'};
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0;
  text-align: left;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 54px;
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 98px;
  margin-top: 64px;
  align-self: center;
`;
