import { FC } from "react";
import classes from "./ListElement.module.scss";

type ListElementProps = {
  index: number;
  name: string;
  userName: string;
};

const grayParagraphStyling = classes["paragraph-gray"];

const ListElement: FC<ListElementProps> = ({ index, name, userName }) => (
  <li className={classes.user}>
    <p className={grayParagraphStyling}>{index}.</p>
    <p className={classes.name}>{name}</p>
    <p className={grayParagraphStyling}>@{userName}</p>
  </li>
);

export default ListElement;
