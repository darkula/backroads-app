import { tours } from "../data";
import Title from "./Title";
import Tour from "./Tour";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours"></Title>
      <div className="section-center featured-center">
        {tours.map((t) => {
          return <Tour key={t.id} {...t} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
