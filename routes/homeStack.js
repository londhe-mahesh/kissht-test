import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../Register/Home";
import UserDetails from "../Register/UserDetails";
import TransactionData from "../Transactions/TransactionData";

const screens = {
    Home:{
        screen: Home
    },
    userDetails: {
        screen: UserDetails
    },
    TransactionData: {
        screen: TransactionData
    }
}

const HomeStack = createStackNavigator(screens)
export default createAppContainer(HomeStack)