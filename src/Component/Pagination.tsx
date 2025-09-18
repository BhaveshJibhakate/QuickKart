import React from "react";
import styled from "styled-components";

interface ButtonProps {
  $bg?: string;
  $active?: boolean;
}
const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => (props.$active ? "#2563eb" : "#f1f5f9")};
  color: ${(props) => (props.$active ? "white" : "#1e293b")};
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  border-radius: 6px;
  border: 1px solid #cbd5e1;
  padding: 8px 14px;
  transition: all 0.2s ease;

  &:disabled {
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: ${(props) => (props.$active ? "#1d4ed8" : "#e2e8f0")};
  }
`;

interface PaginationProps {
  currentPage: number;
  totalpage: number;
  onPageChange: Function;
}
const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalpage,
  onPageChange,
}) => {
  const buttonCount = Array.from(
    { length: totalpage },
    (element, index) => index + 1
  );
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "10px",
          flexWrap:"wrap"
        }}
      >
        <StyledButton
          $bg="lightgreen"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Prev
        </StyledButton>
        {buttonCount.map((i) => (
          <StyledButton
            $bg="lightblue"
            onClick={() => onPageChange(i)}
            $active={i === currentPage}
          >
            {i}
          </StyledButton>
        ))}
        <StyledButton
          $bg="lightgreen"
          disabled={currentPage === totalpage}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
        </StyledButton>
      </div>
    </>
  );
};

export default Pagination;
