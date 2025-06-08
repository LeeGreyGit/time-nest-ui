import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import { postCreateApi, postUpdateApi } from '../../api/callApi';
import { RouteProp } from '@react-navigation/native';
import { useStyles } from './useStyles';

type DetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Detail'
>;

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

const DetailScreen = () => {

  const styles = useStyles();
  const navigation = useNavigation<DetailScreenNavigationProp>();
  const route = useRoute<DetailScreenRouteProp>();
  const { work, isEdit } = route.params;

  const [title, setTitle] = useState(work.title);
  const [text, setText] = useState(work.text);

  const handleSubmit = async () => {
    try {
      if (isEdit) {
        await postUpdateApi({ id: work.id, title, text });
      } else {
        await postCreateApi({ title, text });
      }
      navigation.goBack();
    } catch (error) {
      Alert.alert('エラー', '保存に失敗しました');
    }
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.root}>
      <Text style={styles.header}>{isEdit ? '更新' : '新規'}</Text>

      <Text style={styles.label}>タイトル</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="タイトルを入力"
      />

      <Text style={styles.label}>内容</Text>
      <TextInput
        style={[styles.input, styles.textarea]}
        value={text}
        onChangeText={setText}
        placeholder="内容を入力"
        multiline
        numberOfLines={5}
      />

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.buttonCancel} onPress={handleCancel}>
          <Text style={styles.buttonText}>CANCEL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
          <Text style={styles.buttonText}>SAVE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailScreen;
