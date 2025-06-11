import { WorkData } from '../api/interface';

export type RootStackParamList = {
  Work: undefined;
  Detail: {
    work: WorkData;
    isEdit: boolean;
  };
};
