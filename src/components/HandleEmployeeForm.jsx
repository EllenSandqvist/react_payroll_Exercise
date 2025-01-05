import { useState, useContext } from "react";
import EmployeeContext from "../context/EmployeeContext";

// Sätt tomma värden som default när man har en komponent vars föräldrar behöver skicka olika antal props
const HandleEmployeeForm = ({
  employee = null,
  setActiveEmployee = () => {},
  setIsEditting = () => {},
}) => {
  const { addOrUpdateEmployee } = useContext(EmployeeContext);

  const emptyEmployee = {
    name: "",
    salary: "",
    position: "",
  };

  const [formEmployee, setFormEmployee] = useState(employee || emptyEmployee);

  const handleSubmit = (e, formEmployee) => {
    e.preventDefault();
    addOrUpdateEmployee(formEmployee);
    setFormEmployee(emptyEmployee);

    if (employee) {
      setActiveEmployee({});
      setIsEditting(false);
    }
  };

  return (
    <form
      className="addEmployee-form"
      onSubmit={(e) => handleSubmit(e, formEmployee)}
    >
      <label htmlFor="name"></label>
      <input
        type="text"
        id="name"
        placeholder="First and last name..."
        required
        value={formEmployee.name}
        onChange={(e) =>
          setFormEmployee({ ...formEmployee, name: e.target.value })
        }
      />

      <label htmlFor="position"></label>
      <input
        type="text"
        id="position"
        placeholder="Position..."
        required
        value={formEmployee.position}
        onChange={(e) =>
          setFormEmployee({ ...formEmployee, position: e.target.value })
        }
      />
      <label htmlFor="salary"></label>
      <input
        type="number"
        id="salary"
        placeholder="Salary..."
        required
        value={formEmployee.salary}
        onChange={(e) =>
          setFormEmployee({ ...formEmployee, salary: e.target.value })
        }
      />
      <button className="btn" type="submit">
        {employee ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default HandleEmployeeForm;
