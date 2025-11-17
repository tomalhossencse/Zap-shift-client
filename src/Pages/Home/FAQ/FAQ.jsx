import React from "react";
import Container from "../../../Utility/Container";
import FaqCard from "./FaqCard";
import { FaArrowUp } from "react-icons/fa6";

const FAQ = () => {
  const faqCollections = [
    {
      title: "How does this posture corrector work?",
      des: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
    },
    {
      title: "Is it suitable for all ages and body types?",
      des: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
    },
    {
      title: "Does it really help with back pain and posture improvement?",
      des: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
    },
    {
      title: "Does it have smart features like vibration alerts?",
      des: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
    },
    {
      title: "How will I be notified when the product is back in stock?",
      des: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
    },
  ];
  return (
    <div className="py-12">
      <Container className={"space-y-4 rounded-4xl"}>
        <h1 className="text-4xl font-extrabold text-secondary text-center">
          Frequently Asked Question (FAQ)
        </h1>
        <p className="font-medium max-w-3xl mx-auto text-center text-primary-content">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
        <div className="flex flex-col gap-4 my-8">
          {faqCollections.map((faq, index) => (
            <FaqCard key={index} faq={faq} />
          ))}
        </div>
        <div className="flex items-center justify-center">
          <button className="btn-primary-rounded">See More FAQ’s</button>
          <div className="rotate-45 bg-secondary p-4 rounded-full">
            <FaArrowUp color="#CAEB66" size={24} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FAQ;
