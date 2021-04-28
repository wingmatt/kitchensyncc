export default function ItemGroup(props) {
  return (
    <ul className="content-list">
      <h2>{props.title}</h2>
      {props.children}
    </ul>
  );
}
