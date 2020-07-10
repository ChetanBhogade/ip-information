import React, { useEffect, useState } from "react";
import { DataTable, ActivityIndicator, Colors } from "react-native-paper";
import { View, StyleSheet, Text } from "react-native";
import Axios from "axios";

function OutputSection(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (props.ip !== undefined) {
      setLoading(true);
      Axios.get(`https://ipinfo.io/${props.ip}/geo`)
        .then((response) => {
          setData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          setData([]);
        });
    }
  }, [props]);

  return (
    <View style={styles.main}>
      {loading ? (
        <View style={styles.loadingStyle}>
          <ActivityIndicator
            animating={true}
            size="large"
            color={Colors.red800}
          />
        </View>
      ) : (
        <DataTable>
          <DataTable.Row style={styles.rowStyle}>
            <DataTable.Cell>IP Address</DataTable.Cell>
            <DataTable.Cell numeric>{data.ip}</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row style={styles.rowStyle}>
            <DataTable.Cell>City</DataTable.Cell>
            <DataTable.Cell numeric> {data.city} </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row style={styles.rowStyle}>
            <DataTable.Cell>Region</DataTable.Cell>
            <DataTable.Cell numeric> {data.region} </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row style={styles.rowStyle}>
            <DataTable.Cell>Country</DataTable.Cell>
            <DataTable.Cell numeric> {data.country} </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row style={styles.rowStyle}>
            <DataTable.Cell>Location Cordinates</DataTable.Cell>
            <DataTable.Cell numeric> {data.loc} </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row style={styles.rowStyle}>
            <DataTable.Cell>Postal</DataTable.Cell>
            <DataTable.Cell numeric> {data.postal} </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row style={styles.rowStyle}>
            <DataTable.Cell>Timezone</DataTable.Cell>
            <DataTable.Cell numeric> {data.timezone} </DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    borderRadius: 30,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    marginVertical: 20,
  },
  rowStyle: {
    marginHorizontal: 8,
  },
  loadingStyle: {
    padding: 50,
  },
});

export default OutputSection;
