import DisplayBalance from 'components/DisplayBalance';
import { Grid, GridColumn, GridRow, Segment } from 'semantic-ui-react';

function DisplayBalances() {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <GridRow>
          <GridColumn>
            <DisplayBalance title="Income" value="1253.54" color="green" />
          </GridColumn>
          <GridColumn>
            <DisplayBalance title="Expenses" value="623.50" color="red" />
          </GridColumn>
        </GridRow>
      </Grid>
    </Segment>
  );
}

export default DisplayBalances;
