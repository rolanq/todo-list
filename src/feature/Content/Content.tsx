import TodoItem from "feature/TodoItem/TodoItem";
import { FC, useMemo } from "react";
import { useAppSelector } from "shared/store/hooks";
import {
  StyledContentWrapper,
  StyledEmptyText,
} from "shared/styledComponents/Content.styled";

export const Content: FC = () => {
  const storeTodoList = useAppSelector((state) => state.todo.todoList);
  const filterStatus = useAppSelector((state) => state.todo.filterStatus);

  const todoList = useMemo(() => {
    const filteredTodoList = storeTodoList.filter((item) => {
      if (filterStatus === "all") {
        return true;
      }

      return item.status === filterStatus;
    });
    filteredTodoList.sort(
      (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()
    );

    return filteredTodoList;
  }, [storeTodoList, filterStatus]);

  return (
    <StyledContentWrapper>
      {todoList?.length > 0 ? (
        todoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <StyledEmptyText>It's empty...</StyledEmptyText>
      )}
    </StyledContentWrapper>
  );
};
