import React, {useContext} from 'react'
import AppContext from '../../context/app-context'

const FeedPage = () => {

    const {message, isAuth, setIsAuth} = useContext(AppContext);

    return (
      <div>
        <h1>Feed Page</h1>
        <h2>This is the Feed Page</h2>
        <p style={{ background: isAuth ? "green" : "red" }}>{message}</p>
        {isAuth ? (
          <button onClick={() => setIsAuth(false)}>Logout</button>
        ) : (
          <button onClick={() => setIsAuth(true)}>Login</button>
        )}
      </div>
    );
}

export default FeedPage;
