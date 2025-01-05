import HandleEmployeeForm from "./handleEmployeeForm";

const EditModal = ({ activeEmployee, setActiveEmployee, setIsEditting }) => {
  return (
    <div className="modal-bg" onClick={() => setIsEditting(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Update Employee</h2>
        <HandleEmployeeForm
          employee={activeEmployee}
          setActiveEmployee={setActiveEmployee}
          setIsEditting={setIsEditting}
        />
        <button className="close-btn" onClick={() => setIsEditting(false)}>
          ❌
        </button>
      </div>
    </div>
  );
};

export default EditModal;
