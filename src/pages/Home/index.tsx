import React, { useState } from 'react';
import { View, Text } from 'react-native';

import LogoTodo from '../../assets/images/logo.svg';

import styles from './styles';
import Form from '../../components/Form';
import List from '../../components/List';

interface Task {
  id: number,
  taskName: string;
  taskCheck: boolean;
}

export default function Home(){
  const [task, setTask] = useState<Task[]>([]);

  function addNewTask(text:string){

    const NewElement:Task={
      id: task?.length+1,
      taskName:text,
      taskCheck:false,
    }
    setTask(prevState => [...prevState, NewElement])
  }

  function removeTask(item:Task | void){
    setTask(task.filter(t=>t.id!==item?.id));
  }

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <LogoTodo style={styles.logo}/>
      </View>
      <Form 
        placeholder='Adicione uma nova tarefa' 
        handleTask={addNewTask}
      />
      <List 
        itens={task}
        handleTrash={removeTask}
      />
    </View>
  );
}