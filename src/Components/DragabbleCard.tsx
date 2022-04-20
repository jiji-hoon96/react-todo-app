import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import React from "react";

interface IDragabbleCardProps {
  toDoId: number;
  toDoText: string;
  index: number;
}

const Card = styled.div<{ isDragging: boolean }>`
  padding: 10px 10px;
  background-color: ${(props) =>
    props.isDragging ? "#74b9ff" : props.theme.cardColor};
  box-shadow: ${(props) =>
    props.isDragging ? "0px 2px 5px rgba(0,0,0,1) " : "none"};
  border-radius: 5px;
  margin-bottom: 5px;
`;
function DragabbleCard({ toDoId, toDoText, index }: IDragabbleCardProps) {
  return (
    <Draggable key={index} draggableId={toDoId + ""} index={index}>
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {toDoText}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DragabbleCard);
