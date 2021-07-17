import ButtonSaveOrCancel from 'components/ButtonSaveOrCancel';
import { useState } from 'react';
import { Form } from 'semantic-ui-react';

function NewEntryForm({ addEntry }) {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  return (
    <Form unstackable>
      <Form.Group>
        <Form.Input
          icon="tags"
          width={12}
          label="Description"
          placeholder="New shinny thing"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <Form.Input
          width={4}
          label="Value"
          icon="dollar"
          placeholder="100.00"
          iconPosition="left"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </Form.Group>
      <ButtonSaveOrCancel
        addEntry={addEntry}
        description={description}
        value={value}
      />
    </Form>
  );
}

export default NewEntryForm;
