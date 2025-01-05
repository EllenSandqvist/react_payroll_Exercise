import EmployeeList from "../components/EmployeeList";
import AddEmployee from "../components/AddEmployee";

const HomePage = () => {
  return (
    <main>
      <h1>Payroll</h1>
      <EmployeeList />
      <br />
      <hr />
      <AddEmployee />
    </main>
  );
};

export default HomePage;
