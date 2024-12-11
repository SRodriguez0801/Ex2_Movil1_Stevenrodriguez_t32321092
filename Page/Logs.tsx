import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getLogs } from '../services/api';

export default function LogsScreen() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    getLogs()
      .then(data => setLogs(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={logs}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.logItem}>
            <Text>PositionX: {item.positionX}</Text>
            <Text>PositionY: {item.positionY}</Text>
            <Text>Fecha: {item.FECHA}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  logItem: { marginBottom: 10, padding: 10, backgroundColor: '#eee', borderRadius: 5 },
});