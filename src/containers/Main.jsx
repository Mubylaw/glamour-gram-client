import React from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import AuthForm from "../components/AuthForm";
import Homepage from "./Homepage";
import { authUser, forgotPassword, resetPassword } from "../store/actions/auth";
import { removeError } from "../store/actions/errors";
import Dashboard from "./Dashboard";
import Explore from "./Explore";
// import Donation from "./Donation";
// import Transfer from "./Transfer";
// import UpdateBank from "./UpdateBank";
// import Analytics from "./Analytics";
// import Onboarding from "./Onboarding";
// import Haqadas from "../components/Haqadas";
// import Charity from "./Charity";
// import SingleCharity from "./SingleCharity";

const Main = (props) => {
  const {
    authUser,
    errors,
    removeError,
    currentUser,
    forgotPassword,
    resetPassword,
  } = props;

  return (
    <div className="container">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Homepage
              currentUser={currentUser}
              removeError={removeError}
              Page={Dashboard}
              position="one"
              {...props}
            />
          }
        />
        <Route exact path="/explore" element={<Explore {...props} />} />
        <Route
          exact
          path="/signin"
          element={
            <AuthForm
              removeError={removeError}
              errors={errors}
              onAuth={authUser}
              forgot={forgotPassword}
              {...props}
            />
          }
        />
        {/* <Route exact path="/haqadas" element={<Haqadas {...props} />} /> */}
        {/* <Route
          exact
          path="/resetpassword"
          element={
            <AuthForm
              removeError={removeError}
              errors={errors}
              onAuth={authUser}
              resetPass={resetPassword}
              reset
              buttonText="Reset"
              heading="Reset your password"
              {...props}
            />
          }
        /> */}

        <Route
          path="*"
          element={
            <Homepage
              currentUser={currentUser}
              removeError={removeError}
              {...props}
            />
          }
        />
      </Routes>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    errors: state.errors,
  };
}

export default connect(mapStateToProps, {
  authUser,
  removeError,
  forgotPassword,
  resetPassword,
})(Main);
