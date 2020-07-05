// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //
import OrderItem from "./OrderItem/OrderItem"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  title: string
  titleStyle?: any
  orders: Array<{
    date: string
    deliveryStatus: string
    products: Array<{ title: string; count: string | number }>
  }>
  showFullList: boolean
  showTiming: boolean
  shwowDeliveryStatus: boolean
}

const OrdersList: React.FC<PropsType> = (props) => {
  return (
    <>
      <Text weight="bold" size={20} style={props.titleStyle}>
        {props.title}
      </Text>

      {props.orders.length > 0 ? (
        props.orders.map(
          (order: {
            date: string
            deliveryStatus: string
            products: Array<{ title: string; count: string | number }>
          }) => {
            return (
              <OrderItem
                title={`${order.date} - ${order.deliveryStatus}`}
                productsList={order.products}
                buttonText={"Добавить весь заказ в корзину"}
                showTiming={props.showTiming}
              />
            )
          }
        )
      ) : (
        <View style={styles.container}>
          <Text weight="bold" size={20} style={styles.title}>
            Пока нет заказов
          </Text>
          <Text style={styles.subtitle} size={16}>
            Иследуйте наши блюда и заказывайие с доставкой
          </Text>
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 21,
    alignItems: "center",
  },

  image: {
    marginBottom: 31.03,
  },

  title: {
    letterSpacing: 0.3,
  },

  subtitle: {
    textAlign: "center",
    width: 226,
    marginTop: 19,
  },
})

export default OrdersList
