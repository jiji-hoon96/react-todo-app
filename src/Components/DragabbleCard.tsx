import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import React from "react";

interface IDragabbleCardProps {
  toDo: string;
  index: number;
}

const Card = styled.div`
  padding: 10px 10px;
  background-color: ${(props) => props.theme.cardColor};
  border-radius: 5px;
  margin-bottom: 5px;
`;
function DragabbleCard({ toDo, index }: IDragabbleCardProps) {
  return (
    <Draggable key={index} draggableId={toDo} index={index}>
      {(magic) => (
        <Card
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DragabbleCard);
