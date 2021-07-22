import { closeEditModal } from 'actions/modals.actions';
import EntryForm from 'components/EntryForm';
import { useDispatch } from 'react-redux';
import { Button, Modal } from 'semantic-ui-react';

function ModalEdit({
  isOpen,
  setIsOpen,
  description,
  value,
  isExpense,
  setDescription,
  setValue,
  setIsExpense,
}) {
  const dispatch = useDispatch()
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit entry</Modal.Header>
      <Modal.Content>
        <EntryForm
          description={description}
          value={value}
          isExpense={isExpense}
          setDescription={setDescription}
          setValue={setValue}
          setIsExpense={setIsExpense}
        />
      </Modal.Content>
      <Modal.Actions>

        <Button onClick={() => dispatch(closeEditModal())}>Close</Button>
        <Button onClick={() => setIsOpen(false)} primary >OK</Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalEdit;
