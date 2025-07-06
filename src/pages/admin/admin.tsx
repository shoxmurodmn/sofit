import React, { useContext, useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import cx from "classnames";
import { Context } from "../../Mycantext";

import { IoAddCircle } from "react-icons/io5";
import { MdDelete, MdEdit, MdLogout } from "react-icons/md";
import { BsDatabaseFillSlash } from "react-icons/bs";
import { VscSettings } from "react-icons/vsc";
import { FaUserCircle } from "react-icons/fa";

import cls from "./admin.module.css";
import { useNavigate } from "react-router-dom";

// ==== Types ====
interface Employee {
  id: number;
  name: string;
  like: string;
  commit: string;
}

// ==== FormComponent ====
interface FormComponentProps {
  onClose: () => void;
  initialData?: Employee | null;
}

const FormComponent: React.FC<FormComponentProps> = ({ onClose, initialData }) => {
  const [form, setForm] = useState({
    name: initialData?.name || "",
    email: initialData?.like || "",
    phone: initialData?.commit || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Saqlangan ma'lumot:", form);
    setForm({ name: "", email: "", phone: "" });
    onClose();
  };

  const handleReset = () => {
    setForm({ name: "", email: "", phone: "" });
  };

  return (
    <div className={cx(cls.contaener)}>
      <form onSubmit={handleSubmit} className={cx(cls.formWrap)}>
        <div>
          <div className={cx(cls.formclose)} onClick={onClose}>
            <IoCloseSharp />
          </div>
        </div>
        <input
          type="text"
          name="name"
          placeholder="Ism"
          value={form.name}
          onChange={handleChange}
          className={cx(cls.inputv)}
        />
        <input
          type="text"
          name="email"
          placeholder="commet"
          value={form.email}
          onChange={handleChange}
          className={cx(cls.inputv)}
        />
        <input
          className={cx(cls.inputv)}
          type="text"
          name="phone"
          placeholder="like"
          value={form.phone}
          onChange={handleChange}
        />

        <div className={cls.actonForm}>
          <button
            type="button"
            onClick={handleReset}
            className={cx(cls.btn_danger)}
          >
            Bekor qilish
          </button>

          <button type="submit" className={cx(cls.btn_success)}>
            Saqlash
          </button>
        </div>
      </form>
    </div>
  );
};

// ==== Delete Component ====
interface DeleteProps {
  onClose: () => void;
  prop: Employee;
}

const Delete: React.FC<DeleteProps> = ({ onClose, prop }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(prop);
  };

  return (
    <div className={cx(cls.contaener)}>
      <form onSubmit={handleSubmit} className={cx(cls.formWrap)}>
        <strong>
          {prop.name} ni rostaham o'chirmoqchimisiz !!
        </strong>
        <div className={cx(cls.actonForm)}>
          <button
            type="button"
            onClick={onClose}
            className={cx(cls.btn_danger)}
          >
            No
          </button>
          <button type="submit" className={cx(cls.btn_success)}>
            Yes
          </button>
        </div>
      </form>
    </div>
  );
};

// ==== Admin Component ====
const Admin: React.FC = () => {
  const { user, setUser } = useContext(Context) as {
    user: Employee[] | null;
    setUser: React.Dispatch<React.SetStateAction<Employee[] | null>>;
  };
  const [action, setAction] = useState(false);
  const navigate = useNavigate();

  const [showForm, setShowForm] = useState(false);
  const [del, setDel] = useState(false);
  const [login, setLogin] = useState(false);
  const [delValue, setDelValue] = useState<Employee | null>(null);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  const handleAddNew = () => {
    setSelectedEmployee(null);
    setShowForm(true);
  };

  const handleEdit = (employee: Employee) => {
    setSelectedEmployee(employee);
    setShowForm(true);
  };

  const handleDelete = (prop: Employee) => {
    setDelValue(prop);
    setDel(true);
  };

  const token = !!localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/admin/register");
    }
  }, [navigate, token]);

  const LogoutUsr = () => {
    localStorage.removeItem("token");
    navigate("/admin/register");
  };

  return (
    <div className={cls.employee_container}>
      <div className={cls.wrap}>
        <div className={cls.header}>
          <div>
            <div onClick={() => setLogin(!login)} className={cx(cls.userLogo)}>
              <FaUserCircle />
            </div>
            <span>admin list</span>
            {login && (
              <div onClick={LogoutUsr} className={cx(cls.logout)}>
                <MdLogout /> <span>log out</span>
              </div>
            )}
          </div>

          <div className={cx(cls.addDel)}>
            <button className={cx(cls.btn, cls.add, cls.btn_danger)}>
              <MdDelete /> <span>Delete</span>
            </button>

            <button
              className={cx(cls.btn, cls.add, cls.btn_success)}
              onClick={handleAddNew}
            >
              <IoAddCircle /> <span>Add New</span>
            </button>
          </div>
        </div>

        {!user ? (
          <div className={cx(cls.nodata)}>
            <BsDatabaseFillSlash />
            <span>No data</span>
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>№</th>
                <th>Name</th>
                <th>like</th>
                <th>commit</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {user.map((emp, index) => (
                <tr key={emp.id}>
                  <td>
                    <div className={cx(cls.nuber)}>{index + 1}</div>
                  </td>
                  <td>{emp.name}</td>
                  <td>
                    <span className={cx(cls.commet)}>{emp.like}</span>
                  </td>
                  <td>{emp.commit}</td>
                  <td>
                    <div
                      className={cx(cls.Action)}
                      onClick={() => {
                        setAction(!action);
                      }}
                    >
                      <VscSettings />
                    </div>
                    {true && (
                      <div className={cx(cls.actionTeble)}>
                        <span
                          onClick={() => handleEdit(emp)}
                          className={cx(cls.action_btn, cls.edit)}
                        >
                          <span className={cls.actionTexr}>Edit</span>
                          <MdEdit />
                        </span>
                        <span
                          onClick={() => handleDelete(emp)}
                          className={cx(cls.action_btn, cls.delete)}
                        >
                          <span className={cls.actionTexr}>Delet</span>
                          <MdDelete />
                        </span>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {del && delValue && (
          <Delete onClose={() => setDel(false)} prop={delValue} />
        )}

        {showForm && (
          <FormComponent
            onClose={() => setShowForm(false)}
            initialData={selectedEmployee}
          />
        )}
      </div>
    </div>
  );
};

export default Admin;
