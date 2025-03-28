import customer1Image from "./assets/customer1.jpg";
import customer2Image from "./assets/customer2.jpg";
import customer3Image from "./assets/customer3.jpg";
import customer4Image from "./assets/customer4.jpg";
import "./testimonials.css";
import TestimonialCard from "./testimonial-card";

const customers = [
  {
    fullName: "Mavjuda",
    image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: "Dilshod",
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: "Guli",
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: "Bekzod",
    image: customer4Image,
    rating: [1, 1, 1, 1],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>What people say about us!</h2>
        {customers.map((customer, index) => (
          <TestimonialCard key={index} customer={customer} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
