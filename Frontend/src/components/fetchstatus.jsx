import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemAction } from "../store/AddItem";
const FetchStatus = () => {
  const fetched = useSelector((store) => store.Fetch);
  const dispatch = useDispatch();
  useEffect(() => {
    if (fetched.fetchdone) return;
    const controller = new AbortController();

    fetch("http://localhost:8080/items")
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(itemAction.additems(items[0]));
      });
    return () => {
      controller.abort();
    };
  }, []);
  return <></>;
};
export default FetchStatus;
