import { create } from 'mobx-persist';
import { PersistKeys } from '../constants/persistKeys';

import { authStore } from './auth';
import { requestStore } from './request';

const hydrate = create();

class RootStore {
  authStore = authStore;
  requestStore = requestStore;

  constructor() {
    Promise.all([hydrate(PersistKeys.AUTH, this.authStore), hydrate(PersistKeys.REQUEST, this.requestStore)]);
  }
}

export default new RootStore();
