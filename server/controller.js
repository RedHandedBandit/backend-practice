let clientList = [
  {
    name: 'Jerry Seinfeld',
    DOB: '68',
    address: '129 West 81st Street',
    aptNumber: '5A',
    city: 'New York',
    state: 'NY',
    zip: '10001',
    email: 'jerry.seinfeld@gmail.com'
  },
  {
    name: 'Aaron Rodgers',
    DOB: '39',
    address: '1265 Lombardi Ave',
    aptNumber: '',
    city: 'Green Bay',
    state: 'WI',
    zip: '54304',
    email: 'aaron.rodgers@gmail.com'
  },
  {
    name: 'Theo Von',
    DOB: '43',
    address: '336 12Th St',
    aptNumber: '',
    city: 'Pl Grove',
    state: 'AL',
    zip: '35127',
    email: 'theo.von@gmail.com'
  },
  {
    name: 'Peter Quill',
    DOB: '34',
    address: '',
    aptNumber: '',
    city: '',
    state: 'Earth-616',
    zip: '',
    email: 'star.lord@gmail.com'
  },
]

module.exports = {
  getClientList: (req, res) => {
    console.log('node req', req)
    console.log('node res', res)
    res.status(200).send(clientList);
  }
}