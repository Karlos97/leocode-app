import classes from "./ListElement.module.scss";

const ListElement = (props) => {
  const { index, name, userName } = props;
  const grayParagraph = classes["paragraph-gray"];
  return (
    <li className={classes.user}>
      <p className={grayParagraph}>{index}.</p>
      <p>{name}</p>
      <p className={grayParagraph}>@{userName}</p>
    </li>
  );
};
export default ListElement;
