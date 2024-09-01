"use client";

import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const TicketCard = () => {
  return (
    <>
      <div className=" flex flex-col bg-card hover:bg-card-hover roun shadow-lg p-3 m-2">
        <div className="flex mb-3">
          <PriorityDisplay />
          <div className="ml-auto">
            <DeleteBlock />
          </div>
        </div>
        <h4 className="text-2xl font-light">Ticket Title</h4>
        <hr className="h-px border-0 bg-page mb-2 " />
        <p className="whitespace-pre-wrap">
          This is the Ticket, please complete this ticket
        </p>
        <div className="flex-grow"></div>
        <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-sx my-1">31-08-2024 00:19 hrs</p>
            <ProgressDisplay />
          </div>
          <div className="ml-auto flex items-end ">
            <StatusDisplay />
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketCard;
