import React, { useReducer } from 'react';

interface IProvider {
  children: React.ReactNode;
}

interface IState<S> {
  state: S;
}
interface IStateActions<S, A> extends IState<S> {}

function createDataContext<A, V>(
  reducer: React.Reducer<V, any>,
  actions: any,
  defaultValue: V
) {
  const Context = React.createContext<IStateActions<V, A>>(null!);

  const Provider = ({ children }: IProvider) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);

    const boundActions = {} as { [key: string]: typeof Function };
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
}

export default createDataContext;
