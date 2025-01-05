import { createContext, useState } from "react";
import employeeData from "../data/employees";

const EmployeeContext = createContext({});

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState(employeeData);

  const addOrUpdateEmployee = (formEmployee) => {
    // If it is a new employee that should be added
    if (!formEmployee.id) {
      const id = employees[employees.length - 1].id + 1 || 1;
      const employeeWithId = { id, ...formEmployee };
      setEmployees([...employees, employeeWithId]);
      return;
    }
    // If it is an employee that should be updated
    setEmployees(
      employees.map((employee) =>
        employee.id === formEmployee.id ? formEmployee : employee
      )
    );
  };

  const handleDelete = (id) => {
    const updatedEmployeeList = employees.filter((employee) => {
      return employee.id !== id;
    });
    setEmployees(updatedEmployeeList);
  };

  return (
    <EmployeeContext.Provider
      value={{ employees, addOrUpdateEmployee, handleDelete }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContext;
