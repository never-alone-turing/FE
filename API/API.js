export const fetcher = {
  allTimers() {
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

  deleteTimer(checkinId) {
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

  addTimer(timer) {
    return fetch("https://never-alone-backend.herokuapp.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: `
      mutation{
        addCheckin(input:{
          response: "Pending",
          time: "${timer.time}",
          window: "${timer.window}",
          userId: "1",
          groupId: "1",
          name: "${timer.name}"
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

  checkIn(timerId) {
    return fetch("https://never-alone-backend.herokuapp.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: `
      mutation{
        updateCheckin(
          input:{
            id: "${timerId}",
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