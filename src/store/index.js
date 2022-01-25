import { createStore } from 'vuex'

import anyParams from '@/store/anyParams';

export default createStore({
  modules: {
    anyParams,
  },
  strict: process.env.NODE_ENV !== 'production',
});

