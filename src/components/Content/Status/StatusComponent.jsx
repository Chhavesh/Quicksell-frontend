import React from 'react'
import StatusColumn from './StatusColumn/StatusColumn';

function StatusComponent({users, tickets}) {
    const backlog_status = tickets.filter((ticket) => ticket.status === 'Backlog')
    const todo_status = tickets.filter((ticket) => ticket.status === 'Todo')
    const in_Progress_status = tickets.filter((ticket) => ticket.status === 'In progress')
    const done_status = tickets.filter((ticket) => ticket.status === 'Done')
    const cancelled_status = tickets.filter((ticket) => ticket.status === 'Cancelled')
  
  return (
    <div>
      <div className="main-container">
        <StatusColumn users={users} status={'Backlog'} image={'Backlog.svg'} tickets={backlog_status} />
        <StatusColumn users={users} status={'Todo'} image={'To-do.svg'} tickets={todo_status} />
        <StatusColumn users={users} status={'In progress'} image={'in-progress.svg'} tickets={in_Progress_status} />
        <StatusColumn users={users} status={'Done'} image={'Done.svg'} tickets={done_status} />
        <StatusColumn users={users} status={'Cancelled'} image={'Cancelled.svg'} tickets={cancelled_status} />
      </div>
    </div>
  )
}

export default StatusComponent