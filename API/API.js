// export const apiCall = (data) => {
//   fetch("https://never-alone-backend.herokuapp.com/graphql", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ query: `
//     mutation
//       {
//         updateCheckin( 
//           input: {
//             id: "1",
//             response: "Answered"
//           }
//         ) {
//           checkin{
//             id
//             response
//             name
//             userId
//             groupId
//             time
//             window
//           }
//         }
//       }`
//     }),
//   })
//   .then(res => res.json())
//   .then(res => console.log(res.data));
// }
export const fetcher = {
  allTimers() {
    return fetch("https://never-alone-backend.herokuapp.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: `
        {
          allCheckins{
            id
            name
            time
            window
          }
        }`
      }),
    })
    .then(res => res.json())
    .then(res => res.data)
    // .then(res => console.log("res type", typeof res));
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
    // .then(res => res.data)
    // .then(res => console.log("res type", typeof res));
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
    // .then(res => res.data)
    // .then(res => console.log("res type", typeof res));
  },
  // deleteTimer(userId) {
  //   return fetch("https://never-alone-backend.herokuapp.com/graphql", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ query: `
  //     mutation
  //       {
  //         destroyUser(
  //           input:{
  //             id: "${userId}"
  //           }
  //         )
  //       }`
  //     }),
  //   })
  //   .then(res => res.json())
  //   // .then(res => res.data)
  //   // .then(res => console.log("res type", typeof res));
  // },
  // allTimers() {
  //   return fetch("https://never-alone-backend.herokuapp.com/graphql", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ query: `
  //       {
  //         allCheckins{
  //           id
  //           name
  //           time
  //           window
  //         }
  //       }`
  //     }),
  //   })
  //   .then(res => res.json())
  //   .then(res => res.data)
  //   // .then(res => console.log("res type", typeof res));
  // },
} 
// export const apiCall = () => {
//   return fetch("https://never-alone-backend.herokuapp.com/graphql", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ query: `
//       {
//         allCheckins{
//           id
//           name
//           time
//           window
//         }
//       }`
//     }),
//   })
//   .then(res => res.json())
//   .then(res => res.data['allCheckins'])
//   .then(res => console.log("res type", typeof res));
// }