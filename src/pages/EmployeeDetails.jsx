import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import EmployeeContext from "../context/EmployeeContext";

const EmployeeDetails = () => {
  const { id } = useParams();
  const { employees } = useContext(EmployeeContext);

  const employee = employees.find((e) => e.id.toString() === id);

  return (
    <main>
      <h1>EmployeeDetails</h1>
      <h2>{employee.name}</h2>
      <p>
        <strong>Position: </strong>
        {employee.position}
      </p>
      <p>
        <strong>Salary: </strong>
        {employee.salary}
      </p>
      <Link className="link btn-link" to="/">
        <button className="btn">←</button>
      </Link>
    </main>
  );
};

export default EmployeeDetails;
