import { addEntryRedux } from 'actions/entires.actions';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';


function useEntryDetails() {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState(0);
  const [isExpense, setIsExpense] = useState(false);
  const dispatch = useDispatch();

  function addEntry() {
    dispatch(
      addEntryRedux({
        id: uuidv4(),
        description,
        value,
        isExpense,
      })
    );
    setDescription('');
    setValue(0);
    setIsExpense(true);
  }

  return {
    description, setDescription, value, setValue, isExpense, setIsExpense, addEntry
  }
}

export default useEntryDetails
