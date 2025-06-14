import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { getWork, postDeleteApi } from '../../api/callApi';
import { WorkData } from '../../api/interface';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../../App';
import { useStyles } from './useStyles';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

const WorkScreen = () => {
  const styles = useStyles();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [data, setData] = useState<WorkData[]>([]);

  const getWorkList = async () => {
    const response = await getWork();
    console.log('取得結果:', response.data);
    if (response?.data) {
      setData(response.data);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getWorkList();
    }, [])
  );

  const handleRowClick = (work: WorkData, isEdit: boolean) => {
    navigation.navigate('Detail', { work, isEdit });
  };

  const handleDelete = async (work: WorkData) => {
    if (work.workId) {
      await postDeleteApi(work.workId);
      getWorkList();
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.root}>
      <TouchableOpacity onPress={() => handleRowClick({ workName: '', workNote: '' }, false)}>
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
          <Text style={styles.workText}>{work.workNote}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default WorkScreen;
