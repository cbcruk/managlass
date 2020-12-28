import { Route, MemoryRouter } from 'react-router-dom'

const Wrapper = ({ children }) => {
  return (
    <MemoryRouter initialEntries={['/comic/123']}>
      <Route path="/comic/:id">{children}</Route>
    </MemoryRouter>
  )
}

export default Wrapper
