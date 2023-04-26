import React, { useState } from 'react';
import { FlatList, View, Text } from 'react-native';

import Empty from '../../assets/images/clipboard.svg';

import styles from './styles';
import Card from '../Card';

interface Task {
  id: number,
  taskName: string;
  taskCheck: boolean;
}

interface Props{
  itens: Task[];
  handleTrash: () => void;
}

export default function List({itens, handleTrash}:Props) {
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.title}>Criadas</Text>
          <View style={styles.countBox}>
            <Text style={styles.count}>{itens?.length ? itens.length : 0}</Text>
          </View>
        </View>
        <View style={styles.headerContent}>
          <Text style={styles.title}>Concluídas</Text>
          <View style={styles.countBox}>
            <Text style={styles.count}>{itens?.length ? itens.length : 0}</Text>
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <FlatList
          data={itens}
          renderItem={({ item }) => (
            <Card 
              name={item.taskName} 
              check={item.taskCheck}
              task={item}
              handleTrash={handleTrash}
            />
          )}
          keyExtractor={item => String(item.id)}
          ListEmptyComponent={
            () => (
              <View style={styles.objetEmpty}>
                <Empty style={styles.logoEmpty}/>
                <Text style={styles.textListEmpty}>
                  Você ainda não tem tarefas cadastradas
                </Text>
                <Text style={styles.subtextListEmpty}>
                  Crie tarefas e organize seus itens a fazer
                </Text>
              </View>
            )
          }
        />
      </View>
    </View>
  );
}