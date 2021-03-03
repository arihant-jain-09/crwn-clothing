import {createSelector} from 'reselect'
const directoryselect=(state)=>(state.directory)
export const directoryitems=createSelector(
  [directoryselect],
  dir=>dir.sections
)
