export const fetcher = {
  allTasks() {
    return fetch("https://never-alone-backend.herokuapp.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: `
        {
          allCheckins{
            id
            response
            name
            time
            window
          }
        }`
      }),
    })
    .then(res => res.json())
    .then(res => res.data)
  },

  deleteTask(checkinId) {
    return fetch("https://never-alone-backend.herokuapp.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: `
      mutation{
        destroyCheckin(
          input:{
            id: "${checkinId}"
          }
        )
        {
          checkin{
            id
          }
        }
      }`
      }),
    })
    .then(res => res.json())
  },

  addTask(task) {
    return fetch("https://never-alone-backend.herokuapp.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: `
      mutation{
        addCheckin(input:{
          response: "Pending",
          time: "${task.time}",
          window: "${task.window}",
          userId: "1",
          groupId: "1",
          name: "${task.name}"
          }
          ){
            checkin{
              response
              time
              window
              userId
              groupId
              name
            }
          }
        }`
      }),
    })
    .then(res => res.json())
  },

  checkIn(taskId) {
    return fetch("https://never-alone-backend.herokuapp.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: `
      mutation{
        updateCheckin(
          input:{
            id: "${taskId}",
            response: "Answered",
          }
        )
        {
          checkin{
            id
            response
            category
            userId
            groupId
          }
        }
      }`
      }),
    })
    .then(res => res.json())
  },
} 