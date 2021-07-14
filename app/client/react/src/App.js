import {
  Container,
  Grid,
  GridColumn,
  GridRow,
  Header,
  Icon,
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
                  Income:
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

      <Header as="h3">History</Header>
      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <GridColumn width={10} textAlign="left">
              Something
            </GridColumn>
            <GridColumn width={3} textAlign="right">
              $10,00
            </GridColumn>
            <GridColumn width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </GridColumn>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  );
}

export default App;
