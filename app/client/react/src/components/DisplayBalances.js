import DisplayBalance from 'components/DisplayBalance';
import { Grid, GridColumn, GridRow, Segment } from 'semantic-ui-react';

function DisplayBalances({ incomeTotal, expenseTotal }) {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <GridRow>
          <GridColumn>
            <DisplayBalance title="Income" value={incomeTotal} color="green" />
          </GridColumn>
          <GridColumn>
            <DisplayBalance title="Expenses" value={expenseTotal} color="red" />
          </GridColumn>
        </GridRow>
      </Grid>
    </Segment>
  );
}

export default DisplayBalances;
