import React from 'react';

// import Context from './components/Context';

// import Todo from './components/Todo';
// import CountBasic from './components/CountBasic';
// import Timer from './components/Timer';
// import PostsUseState from './components/FetchData/UseState';
// import PostsUseReducer from './components/FetchData/UseReducer';
// import CountUseSelector from './components/Count/CountUseSelector';
// import CountUseReducer from './components/Count/CountUseReducer';
// import ContextUseReducer from './components/ContextUseReducer';

// import reducer, { INITIAL_STATE } from './components/Count/reducers';
// import UseCallback from './components/UseCallback';
// import UseMemo from './components/UseMemo';
import UseRef from './components/UseRef';

export const UserContext = React.createContext();
export const AgeContext = React.createContext();

export const CountContext = React.createContext();

function App() {
  // const [show, setShow] = useState(true);
  // const [countValue, dispatchCount] = useReducer(reducer, INITIAL_STATE);

  return (
    <div className="App">
      {/* <button type="button" onClick={() => setShow(!show)}>show</button>
      <CountBasic />

      {show && <Todo />}

      <Timer />

      <PostsUseState />
       */}
      {/* <UserContext.Provider value='Maiky'>
        <AgeContext.Provider value={25}>
          <Context />
        </AgeContext.Provider>
      </UserContext.Provider>

      <CountUseSelector />
      <CountUseReducer />

      <CountContext.Provider value={{ countValue, dispatchCount }}>
        <ContextUseReducer />
      </CountContext.Provider>

      <PostsUseReducer /> */}

      {/* <UseCallback /> */}

      {/* <UseMemo /> */}
      <UseRef />
    </div>
  );
}

export default App;
