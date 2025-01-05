import { useState, useContext, useEffect } from "react";
import EditModal from "./EditModal";
import EmployeeContext from "../context/EmployeeContext";
import { Link } from "react-router-dom";

const EmployeeList = () => {
  const [isEditting, setIsEditting] = useState(false);
  const [activeEmployee, setActiveEmployee] = useState({});

  const { employees, handleDelete } = useContext(EmployeeContext);

  const handleEdit = (employee) => {
    setActiveEmployee(employee);
    setIsEditting(true);
  };

  //useEffect to prevent scrolling when modal is open
  useEffect(() => {
    if (isEditting) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isEditting]);

  return (
    <>
      <div className="employee-container">
        <h2>Employee List:</h2>
        <ul className="employee-ul">
          {employees.map((employee, index) => (
            <li key={employee.id}>
              <Link className="link" to={`employee/${employee.id}`}>
                <p>
                  <strong>{employee.name}</strong>, {employee.position}
                </p>
              </Link>
              <button
                className="list-btn delete-btn"
                onClick={() => handleDelete(employee.id)}
              >
                Delete
              </button>
              <button className="list-btn" onClick={() => handleEdit(employee)}>
                Edit ✍️
              </button>
            </li>
          ))}
        </ul>
      </div>
      {isEditting && (
        <EditModal
          setIsEditting={setIsEditting}
          activeEmployee={activeEmployee}
          setActiveEmployee={setActiveEmployee}
        />
      )}
    </>
  );
};

export default EmployeeList;
