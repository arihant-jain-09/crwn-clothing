import {createSelector} from 'reselect'
const selectuser=state=>state.user
export const createSelectorUser=createSelector(
  [selectuser],
  user=>user.currentUser
)
