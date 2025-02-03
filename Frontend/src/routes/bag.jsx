import { useSelector } from "react-redux";
import BagItem from "../components/bagcontainer";
import BagSummary from "../components/bagsummary";
import Footer from "../components/footer";
import Header from "../components/header";

const Bag = () => {
  const items = useSelector((store) => store.item);
  const bagitem = useSelector((store) => store.bag);

  const finalItem = items.filter((item) => {
    const indexitem = bagitem.indexOf(item.id);
    return indexitem >= 0;
  });

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItem.map((item) => (
            <BagItem item={item} />
          ))}
        </div>
        <BagSummary />
      </div>
    </main>
  );
};
export default Bag;
