import { Grid, GridColumn, Icon, Segment } from 'semantic-ui-react';

function EntryLine({ id, description, value, isExpense = false, deleteEntry }) {
  return (
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
            <Icon name="edit" bordered />
            <Icon name="trash" bordered onClick={() => deleteEntry(id)} />
          </GridColumn>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default EntryLine;
