import DisplayBalance from 'components/DisplayBalance';
import DisplayBalances from 'components/DisplayBalances';
import EntryLines from 'components/EntryLines';
import MainHeader from 'components/MainHeader';
import ModalEdit from 'components/ModalEdit';
import NewEntryForm from 'components/NewEntryForm';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'semantic-ui-react';
import './App.css';

function App() {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState(0);
  const [isExpense, setIsExpense] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const entries = useSelector((state) => state.entries);

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      // setEntries(newEntries);
      resetEntry();
    }
  }, [isOpen]);

  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;
    entries.map((entry) => {
      if (entry.isExpense) {
        return (totalExpenses += Number(entry.value));
      } else {
        return (totalIncomes += Number(entry.value));
      }
    });
    setTotal(totalIncomes - totalExpenses);
    setIncomeTotal(totalIncomes);
    setExpenseTotal(totalExpenses);
  }, [entries]);

  const editEntry = (id) => {
    if (id) {
      const index = entries.findIndex((entry) => entry.id === id);
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  };

  const addEntry = () => {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    });
    // setEntries(result);
    resetEntry();
  };

  const resetEntry = () => {
    setDescription('');
    setValue(0);
    setIsExpense(true);
  };

  return (
    <Container>
      <MainHeader title="Budget" />

      <DisplayBalance
        title="Your Balance"
        value={total}
        color="green"
        size="small"
      />

      <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal} />

      <MainHeader title="History" type="h3" />
      <EntryLines entries={entries} editEntry={editEntry} />
      <MainHeader title="Add a new transaction" type="h3" />
      <NewEntryForm
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
    </Container>
  );
}

export default App;
