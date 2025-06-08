export const domain =
  process.env.NODE_ENV === 'production'
    ? '/api'
    : 'http://localhost:3000';

export const _URL = {
  WORK_LIST: `${domain}/work/list`,
  WORK_UPDATE: `${domain}/work/update`,
  WORK_CREATE: `${domain}/work/create`,
  WORK_DELETE: `${domain}/work/delete/:id`,
  WORK_DELETE_2: `${domain}/work/delete`,
};
