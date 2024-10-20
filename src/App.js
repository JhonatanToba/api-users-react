import { useEffect } from 'react';
import iAX from './configAxios';
import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setId, setToken, setUser } from './reducer';

function App() {

  const disp = useDispatch();
  const id = useSelector( state => state.apiUsers.id );
  const token = useSelector( state => state.apiUsers.token);
  const getUserCreated = useSelector( state => state.apiUsers.user);

  console.log(getUserCreated);
  
  useEffect( () => {login()} , []);

  async function login() {
    try {
      const rta = await iAX.post('/login', {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      });

      console.log(rta.data['token']);
      disp( setToken( rta.data['token'] ));

    } catch (error) {
      console.log('Error: ' + error.message);
      
    }
  }

  async function createUser() {
    try {
      const rta = await iAX.post('/users', {
        name: 'RAGAR',
        password: 'FS-G262'
      },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      console.log(rta.data);
      disp( setId( rta.data.id ));

      disp( setUser( rta.data ));
      
    } catch (error) {
      console.log('Error: ' + error.message);
      
    }
  }

  async function showUser() {
    try {
      const rta = await iAX.get(`/users/${id}`);

      console.log(rta);
      console.log('/users/' + id);
    } catch (error) {
      console.log('Error: ' + error.message);
      
    }
  }
  return (
    <>
      <div className='container mt-4'>
        <Button variant="primary" onClick={ createUser }>
          Crear usuario
        </Button>
      </div>
      <br/>
      <div className='m-3'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id:</th>
              <th>Name:</th>
              <th>Password:</th>
              <th>Created at</th>
            </tr>
          </thead>
          <tbody>
            {
              getUserCreated.map( (p,i) => (
                <tr key={i}>
                  <td> { p.id } </td>
                  <td> { p.name } </td>
                  <td> { p.password } </td>
                  <td> { p.createdAt } </td>
                </tr>
              ) )
            }
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default App;
