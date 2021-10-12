import { FC } from "react";
import classes from "./ListElement.module.scss";

type ListElementProps = {
  index: number;
  name: string;
  userName: string;
};

const grayParagraph = classes["paragraph-gray"];

const ListElement: FC<ListElementProps> = ({ index, name, userName }) => (
  <li className={classes.user}>
    <p className={grayParagraph}>{index}.</p>
    <p className={classes.name}>{name}</p>
    <p className={grayParagraph}>@{userName}</p>
  </li>
);

export default ListElement;
