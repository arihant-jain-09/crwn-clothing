import {createSelector} from 'reselect'
const Shopselect=state=>(state.shop)
export const ShopSelector=createSelector(
  [Shopselect],
  shopdata=>shopdata.shopdata
)
const ComponentMap={
  hats:1,
  jackets:2,
  sneakers:3,
  womens:4,
  mens:5
}
export const ComponentSelect=(componentid)=>createSelector(
  [ShopSelector],
  component=>component.find(component=>component.id === ComponentMap[componentid])
)
