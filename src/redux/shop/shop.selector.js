import {createSelector} from 'reselect'
const Shopselect=state=>(state.shop)
export const ShopSelector=createSelector(
  [Shopselect],
  shopdata=>shopdata.shopdata
)
//ShopSelector is now an object with keys as hats,jackets,etc...
//now to convert object to array items to map and render in /shop
export const ShopPreview=createSelector(
  [ShopSelector],
  shop=>Object.keys(shop).map(key=>shop[key])
)
//array method of finding and mapping is bad it would take a long time to find items

// const ComponentMap={
//   hats:1,
//   jackets:2,
//   sneakers:3,
//   womens:4,
//   mens:5
// }
// export const ComponentSelect=(componentid)=>createSelector(
//   [ShopSelector],
//   component=>component.find(component=>component.id === ComponentMap[componentid])
// )
export const ComponentSelect=(componentid)=>createSelector(
  [ShopSelector],
  components=>components[componentid]
)
