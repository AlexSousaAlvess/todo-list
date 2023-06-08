package com.todolist.api.repositories;

import com.todolist.api.models.TodoModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface TodoRepository extends JpaRepository<TodoModel,UUID> {

}
