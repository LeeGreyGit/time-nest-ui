import { Platform } from 'react-native';

const localhost =
  Platform.OS === 'android' ? 'http://10.0.2.2:8080' : 'http://localhost:8080';

export const domain = process.env.NODE_ENV === 'production' ? '/api' : localhost;

export const _URL = {
  WORK_LIST: `${domain}/work/list`,
  WORK_UPDATE: `${domain}/work/update`,
  WORK_CREATE: `${domain}/work/create`,
  WORK_DELETE: `${domain}/work/delete/:id`,
};
