"use client";

const TicketPage = ({ params: { id } }: SearchParamProps) => {
  console.log(id);

  return (
    <>
      <div>Ticket {id}</div>
    </>
  );
};

export default TicketPage;
