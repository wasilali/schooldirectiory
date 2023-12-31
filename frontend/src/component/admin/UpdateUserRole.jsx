import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PersonIcon from "@material-ui/icons/Person";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import { useNavigate, useParams } from "react-router-dom";
import { clearErrors, updateUser, userDetails } from "../../actions/userAction";
import { UPDATE_USER_RESET } from "../../constants/userConstants";
import MetData from "../layout/MetData";
import Sidebar from "./Sidebar";
import Loader from "../layout/loading/Loader";


const UpdateUserRole = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
    const nav = useNavigate()
    const params=useParams();
  const { loading, error, user } = useSelector((state) => state.userDetails);

  const {
    loading: updateLoading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.profile);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [allowUser, setAllowUser] = useState(false);
  const userId = params.id;

  useEffect(() => {
    if (user && user._id !== userId) {
      dispatch(userDetails(userId));
    } else {
      setName(user.name);
      setEmail(user.email);
      setRole(user.role);
      setAllowUser(user.allowUser&&user.allowUser);

    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (updateError) {
      alert.error(updateError);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("User Updated Successfully");
      nav("/admin/users");
      dispatch({ type: UPDATE_USER_RESET });
    }
  }, [dispatch, alert, error, isUpdated, updateError, user, userId]);

  const updateUserSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("role", role);
    myForm.set("allowUser", allowUser);

    dispatch(updateUser(userId,myForm));
  };
  const handleCheckboxChange = () => {
    setAllowUser(!allowUser);
  };
  return (
    <Fragment>
      <MetData title="Update User" />
      <div className="dashboard">
        <Sidebar />
        <div className="newProductContainer">
          {loading ? (
            <Loader />
          ) : (
            <form
              className="createProductForm"
              onSubmit={updateUserSubmitHandler}
            >
              <h1>Update User</h1>

              <div>
                <PersonIcon />
                <input
                  type="text"
                  placeholder="Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <MailOutlineIcon />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
      <label>
        <input
          type="checkbox"
          checked={allowUser}
          onChange={handleCheckboxChange}
        />
        Allow Super-Admin;
      </label>
    </div>
              <div>
                <VerifiedUserIcon />
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="">Choose Role</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>

              <Button
                id="createProductBtn"
                type="submit"
                disabled={
                  updateLoading ? true : false || role === "" ? true : false
                }
              >
                Update
              </Button>
            </form>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default UpdateUserRole;