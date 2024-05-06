import { format } from "date-fns";
import toast from "react-hot-toast";
import { FC, useEffect, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useAppDispatch } from "shared/store/hooks";
import { updateTodo, deleteTodo } from "shared/slices/todoSlice";
import {
  StyledActions,
  StyledDate,
  StyledDetails,
  StyledIcon,
  StyledItem,
  StyledText,
  StyledTexts,
} from "shared/styledComponents/Item.styled";
import { Todo } from "shared/types/Todo";
import { TodoModal } from "feature/Modal/Modal";
import { StyledCheckbox } from "shared/styledComponents/CheckButton.styled";

interface Props {
  todo: Todo;
}

export const TodoItem: FC<Props> = ({ todo }) => {
  const dispatch = useAppDispatch();
  const [checked, setChecked] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  useEffect(() => {
    if (todo.status === "complete") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo.status]);

  const handleCheck = () => {
    setChecked(!checked);
    dispatch(
      updateTodo({ ...todo, status: checked ? "incomplete" : "complete" })
    );
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    toast.success("Todo Deleted Successfully");
  };

  const handleUpdate = () => {
    setUpdateModalOpen(true);
  };

  return (
    <>
      <StyledItem>
        <StyledDetails>
          <StyledCheckbox
            type="checkbox"
            checked={checked}
            onChange={handleCheck}
            $checked={checked}
          />
          <StyledTexts>
            <StyledText>{todo.title}</StyledText>
            <StyledDate>
              {format(new Date(todo.time), "p, MM/dd/yyyy")}
            </StyledDate>
          </StyledTexts>
        </StyledDetails>
        <StyledActions>
          <StyledIcon
            onClick={() => handleDelete()}
            onKeyDown={() => handleDelete()}
            tabIndex={0}
            role="button"
          >
            <MdDelete />
          </StyledIcon>
          <StyledIcon
            onClick={() => handleUpdate()}
            onKeyDown={() => handleUpdate()}
            tabIndex={0}
            role="button"
          >
            <MdEdit />
          </StyledIcon>
        </StyledActions>
      </StyledItem>
      <TodoModal
        type="update"
        modalOpen={updateModalOpen}
        setModalOpen={setUpdateModalOpen}
        todo={todo}
      />
    </>
  );
};

export default TodoItem;
