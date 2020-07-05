// PLUGINS IMPORTS //
import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import Main from "./Main"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"

import { ActionCreatorsList } from "~/Redux/Reducers/OrderingReducers/OrderingSetReducer"
import { getUserFullInfoThunkCreator } from "~/Redux/Reducers/PrivateCabinetReducers/PrivateCabinerGetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any
  OrderItemsList: Array<{}>
}

type MapDispatchToPropsType = {
  addItemToOrderActionCreator: (
    title: string,
    price: string,
    originalPrice: string,
    image: string,
    size: string,
    count: string,
    ingredients: Array<string>
  ) => void

  removeItemFromOrderActionCreator: (
    title: string,
    size: string,
    id: string
  ) => void

  getUserFullInfoThunkCreator: () => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,
    OrderItemsList: state.OrderingSetState.OrderItemsList,
  }
}

const MainContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      addItemToOrderActionCreator:
        ActionCreatorsList.addItemToOrderActionCreator,
      removeItemFromOrderActionCreator:
        ActionCreatorsList.removeItemFromOrderActionCreator,
      getUserFullInfoThunkCreator: getUserFullInfoThunkCreator,
    }
  )
)(Main)

export default MainContainer
