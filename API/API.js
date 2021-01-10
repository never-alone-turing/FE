export const apiCall = (data) => {
  fetch("https://never-alone-backend.herokuapp.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: `
    mutation
      {
        updateCheckin( 
          input: {
            id: "1",
            response: "Answered"
          }
        ) {
          checkin{
            id
            response
            name
            userId
            groupId
            time
            window
          }
        }
      }`
    }),
  })
  .then(res => res.json())
  .then(res => console.log(res.data));
}
// export const apiCall = (data) => {
//   fetch('https://never-alone-backend.herokuapp.com/graphql', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ query: `
//       {
//         allCheckins{
//           id
//         }
//       }`
//     }),
//   })
//   .then(res => res.json())
//   .then(res => console.log(res.data));
// }