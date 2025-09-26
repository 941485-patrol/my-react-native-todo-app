import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Task } from '../index';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  toggleComplete: (id: number) => void;
  deleteTask: (id: number) => void;
}

export default function TaskList({ tasks, toggleComplete, deleteTask }: TaskListProps) {
  const renderTask = ({ item }: { item: Task }) => (
    <TaskItem
      item={item}
      toggleComplete={toggleComplete}
      deleteTask={deleteTask}
    />
  );

  return (
    <FlatList
      data={tasks}
      renderItem={renderTask}
      keyExtractor={(item) => item.id.toString()}
      style={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});
