import { addEntryRedux } from 'actions/entires.actions';
import ButtonSaveOrCancel from 'components/ButtonSaveOrCancel';
import EntryForm from 'components/EntryForm';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'semantic-ui-react';
import { v4 as uuidv4 } from 'uuid';

function NewEntryForm() {
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

  return (
    <Form unstackable>
      <EntryForm
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
      <ButtonSaveOrCancel addEntry={addEntry} />
    </Form>
  );
}

export default NewEntryForm;
