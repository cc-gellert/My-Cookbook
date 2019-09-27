import React, { createContext } from 'react';
import useToggleState from '../hooks/useToggleState';

export const EditingContext = createContext();

export function EditingProvider(props){
  const [isEditing, toggleEditing] = useToggleState(false);
  return (
    <EditingContext.Provider value={{ isEditing, toggleEditing }}>
      {props.children}
    </EditingContext.Provider>
  );
}
