import { pageLinks } from "../data";
import PageLink from "./PageLink";

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {pageLinks.map((pl) => {
        return <PageLink key={pl.id} link={pl} itemClass={itemClass} />;
      })}
    </ul>
  );
};
export default PageLinks;
