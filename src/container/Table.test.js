import Table from './Table';
import axios from 'axios';

const fetchData = () => axios.get('https://jsonplaceholder.typicode.com/users/1')
  .then(res => {

      users: res.data.slice(0, 4)
  });
//Arrays
test('There should be four headers in headers array', () => {
  const headers = ['Name', 'Email', 'City', 'Company']
  const value = headers.length
  expect(value).toEqual(4)
})

test('Expect there to be four out of five to show', () => {
  const headers = ['Name', 'Email', 'City', 'Company', 'State']
  const value = headers.slice(0, 4)
  expect(value).toContain('Name', 'Email', 'City', 'Company')
})


// test('data is shown', () => {
//   return fetchData().then(data => {
//     expect(data).toContain('something');
//   })
// })

//Promise
// test('User fetched Name shoule be Leanne Graham', () => {
//   expect.assertions(1);
//   return fetchData().then(data => {
//     expect(data.name).toEqual('Leanne Graham');
//   })
// })
