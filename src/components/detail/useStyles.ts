import { StyleSheet } from 'react-native';

export const useStyles = () =>
  StyleSheet.create({
    root: {
      padding: 20,
    },
    header: {
      fontSize: 20,
      marginBottom: 20,
      fontWeight: 'bold',
    },
    label: {
      fontWeight: 'bold',
      marginBottom: 8,
      marginTop: 16,
    },
    input: {
      borderColor: '#C3C3C3',
      borderWidth: 1,
      borderRadius: 6,
      padding: 10,
      backgroundColor: '#fff',
    },
    textarea: {
      height: 120,
      textAlignVertical: 'top',
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 30,
    },
    buttonCancel: {
      flex: 1,
      marginRight: 10,
      padding: 12,
      backgroundColor: '#B0BEC5',
      borderRadius: 6,
      alignItems: 'center',
    },
    buttonSave: {
      flex: 1,
      marginLeft: 10,
      padding: 12,
      backgroundColor: '#2196F3',
      borderRadius: 6,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });
