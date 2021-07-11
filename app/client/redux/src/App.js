import {
  Container,
  Grid,
  GridColumn,
  GridRow,
  Header,
  Segment,
  Statistic,
  StatisticValue,
} from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <Container>
      <Header as="h1">Budget</Header>
      <Statistic sizq="small">
        <Statistic.Label>Your Balance: </Statistic.Label>
        <Statistic.Value>2,550.53</Statistic.Value>
      </Statistic>
      <Segment textAlign="center">
        <Grid columns={2} divided>
          <GridRow>
            <GridColumn>
              <Statistic size="tiny" color="green">
                <Statistic.Label style={{ textAlign: 'left' }}>
                  Incoming:
                </Statistic.Label>
                <StatisticValue>1,045.50</StatisticValue>
              </Statistic>
            </GridColumn>
            <GridColumn>
              <Statistic size="tiny" color="red">
                <Statistic.Label style={{ textAlign: 'left' }}>
                  Expenses:
                </Statistic.Label>
                <StatisticValue>623.50</StatisticValue>
              </Statistic>
            </GridColumn>
          </GridRow>
        </Grid>
      </Segment>
    </Container>
  );
}

export default App;
