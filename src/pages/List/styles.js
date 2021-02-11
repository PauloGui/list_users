import styled from 'styled-components/native';

export const Card = styled.View`
  margin: 10px;
  border-radius: 10px;
  background: #389ba6;
  padding: 20px;

  flex-direction: row;
`;

export const ImageProfile = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin: 0 20px;
`;

export const ContainerText = styled.View``;

export const Strong = styled.Text`
  font-size: 22px;
  color: #fff;
  font-weight: bold;
`;

export const Span = styled.Text`
  color: #fff;
  font-size: 16px;
`;

// MODAL

export const ViewModal = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
`;

export const ModalView = styled.View`
  margin: 20px;
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;
  align-items: center;
  shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 2px;
  }
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  elevation: 5;
`;

export const PressableClose = styled.Pressable`
  background-color: #2196f3;
  border-radius: 20px;
  padding: 10px;
  elevation: 3;
  margin: 10px;
`;

export const ImageModal = styled.Image`
  width: 300px;
  height: 250px;
  border-radius: 10px;
`;

export const StrongModal = styled.Text`
  font-size: 22px;
  color: #000;
  font-weight: bold;
  margin-top: 10px;
`;

export const SpanModal = styled.Text`
  color: #000;
  font-size: 16px;
`;

export const ExpModal = styled.View`
  width: 100%;
  align-self: flex-start;
  margin: 10px 0;
  flex-direction: row;
`;

export const TitleExp = styled.Text`
  font-weight: bold;
  font-size: 14px;
  padding: 10px 0;
  align-self: flex-start;
`;

export const TitleCia = styled.Text`
  font-weight: bold;
  color: #000;
`;

export const TitleJob = styled.Text``;
