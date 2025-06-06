import React from "react";
import Toggle from "./Toggle/ToggleIndex";
import { BsStar, BsStarFill } from "react-icons/bs";

export default function Star({ onChange }) {
  return (
    <Toggle value={false} onToggle={onChange}>
      <Toggle.Button>
        <Toggle.Display>
          {(on) =>
            on ? (
              <BsStarFill className="star filled" />
            ) : (
              <BsStar className="star" />
            )
          }
        </Toggle.Display>
      </Toggle.Button>
    </Toggle>
  );
}
