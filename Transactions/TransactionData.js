import React, { useState, useEffect } from "react";
import axios from 'axios';
import {View} from 'react-native'

function TransactionData() {
    const [transactionData, updateTransactionData] = useState();
    const [hasData, setHasData] = useState(false);
    const [dataToRender, setDataToRender] = useState();

    const fetchTransactionData = async () => {
        try {
            const response=  await axios.get("http://localhost:3000")  //api call to json server running on port 3000
            const dataLength = response.data.transactions.length - 1;
            const startDate = new Date(response.data.transactions[0]['txn_datetime']).getDate();
            const filteredData = {}
            for (var i = startDate; i <= new Date(response.data.transactions[dataLength]['txn_datetime']).getDate(); i++) {
                response.data.transactions.forEach((item) => {
                    const date = new Date(item.txn_datetime).getDate();
                    if (date == i) {
                        if (filteredData.hasOwnProperty(i)) {
                            filteredData[i] = [
                                ...filteredData[i],
                                item
                            ]
                        }
                        else {
                            filteredData[i] = [item]
                        }
                    }
                })
            }
            console.log("filteredData", filteredData);
            updateTransactionData(filteredData);
            setDataToRender(rendertable())
            setHasData(true);
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        fetchTransactionData()
    }, [hasData]);

    const rendertable = () => {
        let tableData = '';
        for (let x in transactionData) {

            const rows = transactionData[x].map((item) => {
                return (
                    <tr>
                        <td>new Date(item[txn_datetime]).getDate()</td>
                        <td>item[customer_name]</td>
                        <td>item[amount]</td>
                    </tr>
                )
            })
            tableData = tableData + '<table>' + { rows } + '</table>'
        }
        return tableData
    }
    return (
          <View>
                {
                hasData ?
                    dataToRender
                    : 'No data found'

            }
          </View>
    )
}

export default TransactionData