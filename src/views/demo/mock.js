export const mock1 = (() => {
  let data = []
  for (let i = 1; i <= 21; i++) {
    data.push({
      id: i,
      cif: i.toString().padStart(13, '0'),
      cid: Math.ceil(Math.random() * 10000000000000).toString().padStart(13, '0'),
      fullName: `John ${i} Doe`,
      age: i,
      address: `New York No. ${i} Lake Park`
    })
  }
  return data
})()
export const mock2 = (() => {
  let data = []
  for (let i = 1; i <= 3; i++) {
    data.push({
      id: i,
      cif: i.toString().padStart(13, '0'),
      cid: Math.ceil(Math.random() * 10000000000000).toString().padStart(13, '0'),
      fullName: `John ${i} Doe`,
      age: i,
      address: `New York No. ${i} Lake Park`
    })
  }
  return data
})()
