import React, { useEffect, useState } from 'react';
import { View, Text, Alert } from 'react-native';

import LogoTodo from '../../assets/images/logo.svg';

import styles from './styles';
import Form from '../../components/Form';
import List from '../../components/List';
import { Task } from '../../interfaces';

export default function Home(){
  const [task, setTask] = useState<Task[]>([]);

  function verifyTaskRepeated(text:string){
    task.filter(item=>{
      if(item.taskName===text){
        Alert.alert('Tarefa já inserida');
        return true;
      }
    })
  };

  function addNewTask(text:string){

    task.filter(item=>{
      if(item.taskName===text){
        Alert.alert('Tarefa já inserida');
        return;
      }
    })

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

  function taskCompleted(item:Task | void){
    const taskUpdate = task.map((t)=>{
      if(t.id===item?.id){
        t.taskCheck=!t.taskCheck;
      }
      return t;
    });
    setTask(taskUpdate);
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
        handleCompleted={taskCompleted}
      />
    </View>
  );
}