import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { getWork, postDeleteApi } from '../../api/callApi';
import { WorkData } from '../../api/interface';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../../App';
import { useStyles } from './useStyles';

const WorkScreen = () => {
  const styles = useStyles();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [data, setData] = useState<WorkData[]>([]);

  const getWorkList = async () => {
    const response = await getWork();
    console.log('取得結果:', response.data); // ←追加
    if (response?.data) {
      setData(response.data);
    }
  };

  useEffect(() => {
    getWorkList();
  }, []);

  const handleRowClick = (work: WorkData, isEdit: boolean) => {
    navigation.navigate('Detail', { work, isEdit });
  };

  const handleDelete = async (work: WorkData) => {
    if (work.id) {
      await postDeleteApi(work.id);
      getWorkList();
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.root}>
      <Text style={styles.header}>メモ帳</Text>
      <TouchableOpacity onPress={() => handleRowClick({ workName: '', text: '' }, false)}>
        <Icon name="add-circle-outline" size={30} color="black" />
      </TouchableOpacity>
      {data.map((work, index) => (
        <View key={index} style={styles.workList}>
          <View style={styles.workTitle}>
            <Text style={styles.titleText}>{work.workName}</Text>
            <View style={styles.iconRow}>
              <TouchableOpacity onPress={() => handleRowClick(work, true)}>
                <Icon name="edit" size={20} color="gray" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDelete(work)}>
                <Icon name="delete" size={20} color="gray" />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.workText}>{work.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default WorkScreen;
