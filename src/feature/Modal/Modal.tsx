import React, { FC, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { MdOutlineClose } from "react-icons/md";
import toast from "react-hot-toast";
import { format } from "date-fns";
import { useAppDispatch } from "shared/store/hooks";
import { addTodo, updateTodo } from "shared/slices/todoSlice";
import { Todo } from "shared/types/Todo";
import { StyledButton } from "shared/styledComponents/Button.styled";
import {
  StyledButtonContainer,
  StyledCloseButton,
  StyledForm,
  StyledFormTitle,
  StyledModalContainer,
  StyledWrapper,
} from "shared/styledComponents/Modal.styled";

interface Props {
  type: string;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  todo?: Todo;
}

export const TodoModal: FC<Props> = ({
  type,
  modalOpen,
  setModalOpen,
  todo,
}) => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("incomplete");

  useEffect(() => {
    if (type === "update" && todo) {
      setTitle(todo.title);
      setStatus(todo.status);
    } else {
      setTitle("");
      setStatus("incomplete");
    }
  }, [type, todo, modalOpen]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title === "") {
      toast.error("Please enter a title");
      return;
    }
    if (title && status) {
      if (type === "add") {
        dispatch(
          addTodo({
            id: uuid(),
            title,
            status,
            time: format(new Date(), "p, MM/dd/yyyy"),
          })
        );
        toast.success("Task added successfully");
      }
      if (type === "update") {
        if (todo?.title !== title || todo.status !== status) {
          dispatch(updateTodo({ title, status, id: todo?.id ?? "", time: todo?.time ?? "" }));
          toast.success("Task Updated successfully");
        } else {
          toast.error("No changes made");
          return;
        }
      }
      setModalOpen(false);
    }
  };

  return (
    <>
      {modalOpen && (
        <StyledWrapper>
          <StyledModalContainer>
            <StyledCloseButton
              onKeyDown={() => setModalOpen(false)}
              onClick={() => setModalOpen(false)}
              role="button"
              tabIndex={0}
            >
              <MdOutlineClose />
            </StyledCloseButton>

            <StyledForm onSubmit={(e) => handleSubmit(e)}>
              <StyledFormTitle>
                {type === "add" ? "Add" : "Update"} TODO
              </StyledFormTitle>
              <label htmlFor="title">
                Title
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
              <label htmlFor="type">
                Status
                <select
                  id="type"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="incomplete">Incomplete</option>
                  <option value="complete">Completed</option>
                </select>
              </label>
              <StyledButtonContainer>
                <StyledButton type="submit" $variant="primary">
                  {type === "add" ? "Add Task" : "Update Task"}
                </StyledButton>
                <StyledButton
                  $variant="secondary"
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </StyledButton>
              </StyledButtonContainer>
            </StyledForm>
          </StyledModalContainer>
        </StyledWrapper>
      )}
    </>
  );
};
