import { types } from 'mobx-state-tree';

import memoActions from './../actions/memoActions';

// Individual workout model
const memoModel = types.model('memoModel', {
  id: types.number,
  name: types.string,
  content: types.maybe(types.array(types.string)),
});

const memoStore = types
  .model('workoutStore', {
    memoArray: types.array(memoModel),
  })
  .views(self => ({
    get getworkLoading() {
      return self.loading;
    },
  }))
  .actions(memoActions);

export default memoStore;
