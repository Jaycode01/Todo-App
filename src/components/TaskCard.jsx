import React from "react";
import "./TaskCard.css";
import Tag from "./Tag";
import deleteIcon from "../assets/delete.png";

const TaskCard = ({ title, tags, handleDelete, index }) => {
  return (
    <article className="task_card">
      <p className="class_text">{title}</p>

      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} selected />
          ))}
        </div>
        <div className="task_delete">
          <img
            src={deleteIcon}
            alt=""
            className="delete_icon"
            onClick={() => handleDelete(index)}
          />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
