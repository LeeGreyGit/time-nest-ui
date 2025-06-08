import { StyleSheet } from 'react-native';

export const useStyles = () =>
  StyleSheet.create({
    root: {
    padding: 16,
  },
  header: {
    fontSize: 20,
    marginBottom: 16,
  },
  workList: {
    backgroundColor: '#F3F6F7',
    borderRadius: 8,
    marginBottom: 8,
  },
  workTitle: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#C3C3C3',
  },
  titleText: {
    flex: 1,
  },
  iconRow: {
    flexDirection: 'row',
  },
  workText: {
    padding: 8,
  },
  });
