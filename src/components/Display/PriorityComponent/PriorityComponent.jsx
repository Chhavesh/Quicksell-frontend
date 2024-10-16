import React from 'react'
import PriorityColumn from './PriorityColumn/PriorityColumn';

function PriorityComponent({users, tickets}) {
  const no_priority = tickets.filter((ticket) => (ticket.priority === 0));
  const urgent_priority = tickets.filter((ticket) => (ticket.priority === 4));
  const high_priority = tickets.filter((ticket) => (ticket.priority === 3));
  const low_priority = tickets.filter((ticket) => (ticket.priority === 1));
  const medium_priority = tickets.filter((ticket) => (ticket.priority === 2));
  
  return (
    <div>
      <div className="main-container">
        <PriorityColumn users={users} priority={'No priority'} image={'No-priority.svg'} tickets={no_priority} />
        <PriorityColumn users={users} priority={'Urgent'} image={'SVG - Urgent Priority colour.svg'} tickets={urgent_priority} />
        <PriorityColumn users={users} priority={'High'} image={'Img - High Priority.svg'} tickets={high_priority} />
        <PriorityColumn users={users} priority={'Medium'} image={'Img - Medium Priority.svg'} tickets={medium_priority} />
        <PriorityColumn users={users} priority={'Low'} image={'Img - Low Priority.svg'} tickets={low_priority} />
      </div>
    </div>
  )
}

export default PriorityComponent