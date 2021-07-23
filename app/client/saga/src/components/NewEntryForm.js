import ButtonSaveOrCancel from 'components/ButtonSaveOrCancel';
import EntryForm from 'components/EntryForm';
import useEntryDetails from 'hooks/useEntryDetails';
import { Form } from 'semantic-ui-react';

function NewEntryForm() {
  
  const {
    description, setDescription, value, setValue, isExpense, setIsExpense, addEntry
  } = useEntryDetails();

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
