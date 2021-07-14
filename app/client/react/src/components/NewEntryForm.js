import ButtonSaveOrCancel from 'components/ButtonSaveOrCancel';
import { Form } from 'semantic-ui-react';

function NewEntryForm() {
  return (
    <Form unstackable>
      <Form.Group>
        <Form.Input
          icon="tags"
          width={12}
          label="Description"
          placeholder="New shinny thing"
        />

        <Form.Input
          width={4}
          label="Value"
          icon="dollar"
          placeholder="100.00"
          iconPosition="left"
        />
      </Form.Group>
      <ButtonSaveOrCancel />
    </Form>
  );
}

export default NewEntryForm;
