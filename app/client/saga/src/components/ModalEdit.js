import { closeEditModal } from 'actions/modals.actions';
import EntryForm from 'components/EntryForm';
import useEntryDetails from 'hooks/useEntryDetails';
import { useDispatch } from 'react-redux';
import { Button, Modal } from 'semantic-ui-react';

function ModalEdit({ isOpen, description, value, isExpense, id }) {
  const dispatch = useDispatch();
  const entryUpdate = useEntryDetails(description, value, isExpense);

  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit entry</Modal.Header>
      <Modal.Content>
        <EntryForm
          description={entryUpdate.description}
          value={entryUpdate.value}
          isExpense={entryUpdate.isExpense}
          setDescription={entryUpdate.setDescription}
          setValue={entryUpdate.setValue}
          setIsExpense={entryUpdate.setIsExpense}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => dispatch(closeEditModal())}>Close</Button>
        <Button onClick={() => entryUpdate.updateEntry(id)} primary>
          OK
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalEdit;
