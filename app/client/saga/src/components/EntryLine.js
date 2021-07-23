import { removeEntryRedux } from 'actions/entires.actions';
import { openEditModal } from 'actions/modals.actions';
import { useDispatch } from 'react-redux';
import { Container, Grid, GridColumn, Icon, Segment } from 'semantic-ui-react';

function EntryLine({ id, description, value, isExpense = false }) {
  const dispatch = useDispatch();
  return (
    <Container>
      <Segment color={isExpense ? 'red' : 'green'}>
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <GridColumn width={10} textAlign="left">
              {description}
            </GridColumn>
            <GridColumn width={3} textAlign="right">
              {value}
            </GridColumn>
            <GridColumn width={3}>
              <Icon
                name="edit"
                bordered
                onClick={() => dispatch(openEditModal(id))}
              />
              <Icon
                name="trash"
                bordered
                onClick={() => dispatch(removeEntryRedux(id))}
              />
            </GridColumn>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  );
}

export default EntryLine;
