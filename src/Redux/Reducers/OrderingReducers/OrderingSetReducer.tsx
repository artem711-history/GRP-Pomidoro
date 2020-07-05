//    *GENERAL IMPORTS*   //
import { ThunkAction } from "redux-thunk"
import { AppStateType, InferActionsTypes } from "../../ReduxStore"

////////////////////////////////////////////////////////////////////////

let initialState = {
  OrderItemsList: [] as Array<{}>,
}

export type initialStateType = typeof initialState

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//    *REDUCER*   //
const OrderingSetReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  if (action.type === "ADD_ITEM_TO_ORDER") {
    return {
      ...state,
      OrderItemsList: [...state.OrderItemsList, action.orderItem],
    }
  }

  if (action.type == "REMOVE_ITEM_FROM_ORDER") {
    return {
      ...state,
      OrderItemsList: state.OrderItemsList.filter((elem: any) => {
        return !(
          elem.title == action.title &&
          elem.size == action.size &&
          elem.id == action.id
        )
      }),
    }
  }

  return state
}

export default OrderingSetReducer

//////////////////////////////////////////////////////////////////////////////////////
type ActionsTypes = InferActionsTypes<typeof ActionCreatorsList>

//    *ACTION CREATORS*   //
export const ActionCreatorsList = {
  addItemToOrderActionCreator: (
    title: string,
    price: string,
    originalPrice: string,
    image: string,
    size: string,
    count: string,
    ingredients: Array<string>
  ) =>
    ({
      type: "ADD_ITEM_TO_ORDER",
      orderItem: {
        title: title,
        price: price,
        originalPrice: originalPrice,
        size: size,
        image: image,
        count: count,
        ingredients: ingredients,
        id: Math.random(),
      },
    } as const),

  removeItemFromOrderActionCreator: (title: string, size: string, id: string) =>
    ({
      type: "REMOVE_ITEM_FROM_ORDER",
      title: title,
      size: size,
      id: id,
    } as const),
}

//    *THUNKS*   //
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>
