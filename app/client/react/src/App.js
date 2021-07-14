import MainHeader from 'components/MainHeader';
import {
  Button,
  Container,
  Form,
  Grid,
  GridColumn,
  GridRow,
  Icon,
  Segment,
  Statistic,
  StatisticValue,
} from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <Container>
      <MainHeader title="Budget" />

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

      <MainHeader title="History" type="h3" />
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

      <MainHeader title="Add a new transaction" type="h3" />
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
        <Button.Group style={{ marginTop: 20 }}>
          <Button>Cancel</Button>
          <Button.Or />
          <Button primary>Ok</Button>
        </Button.Group>
      </Form>
    </Container>
  );
}

export default App;
