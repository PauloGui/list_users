import React, {useState, Fragment} from 'react';
import {
  SafeAreaView,
  FlatList,
  Pressable,
  Alert,
  Text,
  Modal,
} from 'react-native';

import {
  Card,
  ImageProfile,
  ContainerText,
  Strong,
  Span,
  ViewModal,
  CenteredView,
  ModalView,
  PressableClose,
  ImageModal,
  StrongModal,
  SpanModal,
  ExpModal,
  TitleExp,
  TitleCia,
  TitleJob,
} from './styles';

const users = [
  {
    id_user: 1,
    name: 'Paulo Sousa',
    email: 'paulo@email.com',
    photo:
      'https://avatars.githubusercontent.com/u/18484968?s=460&u=34bd09cf09ce881107031c526e541caf1bca01c9&v=4',
    experiences: [
      {
        id_exp: 1,
        company: 'Google',
        occupation: 'Analista de Dados',
      },
      {
        id_exp: 2,
        company: 'Magalu',
        occupation: 'Gerente de Vendas',
      },
      {
        id_exp: 3,
        company: 'Supermercado 2 Filhos',
        occupation: 'Advogado',
      },
    ],
  },
  {
    id_user: 2,
    name: 'Pedro Otoniel',
    email: 'pedro@email.com',
    photo:
      'https://avatars.githubusercontent.com/u/52642924?s=460&u=a430df843a4b32667354d3413de59cc4a7f278ae&v=4',
    experiences: [
      {
        id_exp: 1,
        company: 'Lojas Americanas',
        occupation: 'Psicólogo',
      },
      {
        id_exp: 2,
        company: 'Lenovo',
        occupation: 'Pedreiro',
      },
      {
        id_exp: 3,
        company: 'Apple',
        occupation: 'Costureiro',
      },
    ],
  },
];

const List = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectUser, setSelectUser] = useState([]);
  return (
    <SafeAreaView>
      <FlatList
        data={users}
        keyExtractor={(item) => String(item.id_user)}
        renderItem={({item}) => (
          <Fragment>
            <Card>
              <ImageProfile source={{uri: item.photo}} />
              <ContainerText>
                <Strong>{item.name}</Strong>
                <Span>{item.email}</Span>
                <Pressable
                  onPress={() => {
                    setSelectUser(item);
                    setModalVisible(true);
                  }}>
                  <Text>Ver perfil</Text>
                </Pressable>
              </ContainerText>

              <Modal
                selectUser
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                  setModalVisible(!modalVisible);
                }}>
                <ViewModal>
                  <CenteredView>
                    <ModalView>
                      <ImageModal source={{uri: selectUser.photo}} />
                      <StrongModal>{selectUser.name}</StrongModal>
                      <SpanModal>{selectUser.email}</SpanModal>

                      <TitleExp>Experiências:</TitleExp>
                      {!!modalVisible &&
                        selectUser.experiences.map((exp) => (
                          <ExpModal key={exp.id_exp}>
                            <TitleCia>{exp.company}</TitleCia>
                            <TitleJob>- {exp.occupation}</TitleJob>
                          </ExpModal>
                        ))}

                      <PressableClose
                        onPress={() => {
                          setSelectUser([]);
                          setModalVisible(!modalVisible);
                        }}>
                        <Span>Fechar</Span>
                      </PressableClose>
                    </ModalView>
                  </CenteredView>
                </ViewModal>
              </Modal>
            </Card>
          </Fragment>
        )}
        refreshing
      />
    </SafeAreaView>
  );
};

export default List;
