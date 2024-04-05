


export const strCounter = `
  const Counter = () => {
    const [value, setValue] = useState(0);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', color: 'gray'}}>
        <h2>Counter</h2>
        <span>
          Value: {value}
          <input style={{width: '40px', marginLeft: '6px'}} type="button" onClick={() => setValue((prev) => prev + 1)} />
        </span>
      </div>
    )
  }
`

export const strUserList = `
  const UserList = () => {
  const [users, setUsers] = useState([])
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    setIsFetching(true)
    const fetchTimeout = setTimeout(() => {
      setIsFetching(false)
      setUsers(['Test', 'Test2'])
    }, 2000)
    return () => {
      clearTimeout(fetchTimeout)
    }
  }, [])

  const ref = useRef(1)

  const addUser = useCallback(() => {
    setUsers((users) => [...users, 'user-' + ref.current])
    ref.current += 1
  }, []);

  const deleteUsers = () => setUsers([])

  const deleteUser = useCallback((name) => {
      setUsers((users) => users.filter((user) => user !== name))
    }, [])
    

  const User = ({ name, deleteUser }) => {
    const [count, setCount] = useState(0)
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', padding: '2px 6px 2px 6px',  backgroundColor: '#d9ff67', color: 'gray'}}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '2px',
          paddingLeft: '1px',
          marginBottom: '4px',
          minWidth: '100px'
        }}>
          <div>Name:'{name}'</div>
          <div>Count: {count}</div>
          <div style={{ display: 'flex', marginTop: '2px' }}>
            <button onClick={() => setCount((n) => n + 1)}>Click</button>
            <button onClick={() => deleteUser(name)}>delete</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{display: 'flex',  flexDirection: 'column', alignSelf: 'flex-start', padding: '2px 6px 4px 6px',  backgroundColor: '#eaf6c2', color: 'gray'}}>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        <div style={{display: 'flex',  flexDirection: 'column', margin: '2px'}}>
          <div>List</div>
          Users: {users.length}
          <div style={{display: 'flex', marginTop: '2px'}}>
            <button onClick={() => {
                ref.current += 1
              }}>inc ref</button>
          </div>
          <div style={{display: 'flex', marginTop: '2px'}}>
            <button onClick={addUser}>add user</button>
            <button onClick={deleteUsers}>del user</button>
          </div>
        </div>
      </div>
      <div style={{display: 'flex',  flexDirection: 'column', alignItems: 'center', marginTop: '2px'}}>
        {isFetching && users.length === 0 ? (
          <div>Fetching users..</div>
        ) : (
          users.map((name) => <User key={name} name={name} deleteUser={deleteUser}/>)
        )}
      </div>
    </div>
  )
}
`
