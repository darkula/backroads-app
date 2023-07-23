import { services } from "../data";
import Service from "./Service";
import Title from "./Title";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services"></Title>
      <div className="section-center services-center">
        {services.map((s) => {
          return <Service key={s.id} {...s} />;
        })}
      </div>
    </section>
  );
};

export default Services;
