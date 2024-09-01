"use client";

import TicketForm from "../../(components)/TicketForm";

const TicketPage = ({ params: { id } }) => {
  console.log(id);

  return (
    <>
      <TicketForm/>
    </>
  );
};

export default TicketPage;
