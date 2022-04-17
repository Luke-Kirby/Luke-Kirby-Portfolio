
type Props = { items: string};

function MenuList(props:Props) {
  return (

      <p
      
      style={{
        fontFamily: "revert",
        color: "rgb(255, 255, 255)",
        margin: "auto",
        marginTop: "10%",
      }}

      >{props.items}</p>
  );
}

export default MenuList;
