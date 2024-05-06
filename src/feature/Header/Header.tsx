import React, { FC, useState } from "react";
import { StyledButton } from "shared/styledComponents/Button.styled";
import { StyledSelect } from "shared/styledComponents/Select.styled";
import { updateFilterStatus } from "shared/slices/todoSlice";
import { useAppDispatch, useAppSelector } from "shared/store/hooks";
import { getFilterStatus } from "shared/utils/utilts";
import { StyledAppHeader } from "shared/styledComponents/App.styled";
import { TodoModal } from "feature/Modal/Modal";

export const Header: FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const initialFilterStatus = useAppSelector(
    (state) => state.todo.filterStatus
  );
  const [filterStatus, setFilterStatus] = useState(initialFilterStatus);
  const dispatch = useAppDispatch();

  const updateFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = getFilterStatus(e.target.value);
    setFilterStatus(value);
    dispatch(updateFilterStatus(value));
  };

  return (
    <>
      <StyledAppHeader>
        <StyledButton $variant="primary" onClick={() => setModalOpen(true)}>
          Add Task
        </StyledButton>
        <StyledSelect
          id="status"
          onChange={(e) => updateFilter(e)}
          value={filterStatus}
        >
          <option value="all">All</option>
          <option value="incomplete">Incomplete</option>
          <option value="complete">Completed</option>
        </StyledSelect>
        <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </StyledAppHeader>
    </>
  );
};
