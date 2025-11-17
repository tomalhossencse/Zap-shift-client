import React from "react";

const FaqCard = ({ faq }) => {
  return (
    <div
      tabIndex={0}
      className="collapse p-2 collapse-arrow bg-base-100 border-base-300 border"
    >
      <div className="collapse-title font-semibold">{faq.title}</div>
      <div className="collapse-content text-sm">
        <div className="divider"></div>
        <p>{faq.des}</p>
      </div>
    </div>
  );
};

export default FaqCard;
