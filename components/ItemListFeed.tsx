import { useContext, useEffect } from "react";
import { UserContext } from "../pages/_app";

const LoadingPlaceholder = () => {
  return <>Loading...</>;
};

export default function ItemListFeed(props) {
  const context = useContext(UserContext);
}
