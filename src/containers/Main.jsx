import React from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import AuthForm from "../components/AuthForm";
import Homepage from "./Homepage";
import { authUser, forgotPassword, resetPassword } from "../store/actions/auth";
import { removeError } from "../store/actions/errors";
import Dashboard from "./Dashboard";
import Explore from "./Explore";
import Show from "./Show";
import Profile from "./Profile";
import ServiceDash from "./ServiceDash";
import Review from "./Review";
import PortfolioDash from "./PortfolioDash";
import Booking from "./Booking";
import EditBooking from "./EditBooking";
import Calendar from "./Calendar";
import Appointment from "./Appointment";
import Availability from "./Availability";
import Performance from "./Performance";
import BookingInsights from "./BookingInsights";
import Client from "./Client";
import Earning from "./Earning";
import Ticket from "./Ticket";
import ShowTicket from "./Tickets";
import Notification from "./Notification";
import Prefrences from "./Prefrences";
import ViewAppointment from "./ViewAppointment";
import Favourite from "./Favourite";
import Payment from "./Payment";
import NewBooking from "./NewBooking";
import Landing from "../components/Landing";
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
              Page={Profile}
              position="one"
              exPos="one"
              {...props}
            />
          }
        />
        <Route
          exact
          path="/service"
          element={
            <Homepage
              currentUser={currentUser}
              removeError={removeError}
              Page={ServiceDash}
              position="one"
              exPos="two"
              {...props}
            />
          }
        />
        <Route
          exact
          path="/review"
          element={
            <Homepage
              currentUser={currentUser}
              removeError={removeError}
              Page={Review}
              position="one"
              exPos="three"
              {...props}
            />
          }
        />
        <Route
          exact
          path="/portfolio"
          element={
            <Homepage
              currentUser={currentUser}
              removeError={removeError}
              Page={PortfolioDash}
              position="one"
              exPos="four"
              {...props}
            />
          }
        />
        <Route
          exact
          path="/booking"
          element={
            <Homepage
              currentUser={currentUser}
              removeError={removeError}
              Page={Booking}
              position="one"
              exPos="five"
              {...props}
            />
          }
        />
        <Route
          exact
          path="/booking/new"
          element={
            <Homepage
              currentUser={currentUser}
              removeError={removeError}
              Page={NewBooking}
              position="one"
              exPos="five"
              {...props}
            />
          }
        />
        <Route
          exact
          path="/booking/:id"
          element={
            <Homepage
              currentUser={currentUser}
              removeError={removeError}
              Page={EditBooking}
              position="one"
              exPos="five"
              {...props}
            />
          }
        />
        <Route
          exact
          path="/calendar"
          element={
            <Homepage
              currentUser={currentUser}
              removeError={removeError}
              Page={Calendar}
              position="two"
              exPos="one"
              {...props}
            />
          }
        />
        <Route
          exact
          path="/appointment"
          element={
            <Homepage
              currentUser={currentUser}
              removeError={removeError}
              Page={Appointment}
              position="two"
              exPos="two"
              {...props}
            />
          }
        />
        <Route
          exact
          path="/appointment/:id"
          element={
            <Homepage
              currentUser={currentUser}
              removeError={removeError}
              Page={ViewAppointment}
              position="two"
              exPos="two"
              {...props}
            />
          }
        />
        <Route
          exact
          path="/availability"
          element={
            <Homepage
              currentUser={currentUser}
              removeError={removeError}
              Page={Availability}
              position="two"
              exPos="three"
              {...props}
            />
          }
        />
        <Route
          exact
          path="/performance"
          element={
            <Homepage
              currentUser={currentUser}
              removeError={removeError}
              Page={Performance}
              position="three"
              exPos="one"
              {...props}
            />
          }
        />
        <Route
          exact
          path="/booking/insights"
          element={
            <Homepage
              currentUser={currentUser}
              removeError={removeError}
              Page={BookingInsights}
              position="three"
              exPos="two"
              {...props}
            />
          }
        />
        <Route
          exact
          path="/client"
          element={
            <Homepage
              currentUser={currentUser}
              removeError={removeError}
              Page={Client}
              position="three"
              exPos="three"
              {...props}
            />
          }
        />
        <Route
          exact
          path="/earning"
          element={
            <Homepage
              currentUser={currentUser}
              removeError={removeError}
              Page={Earning}
              position="five"
              exPos="one"
              {...props}
            />
          }
        />
        <Route
          exact
          path="/ticket/new"
          element={
            <Homepage
              currentUser={currentUser}
              removeError={removeError}
              Page={Ticket}
              position="four"
              {...props}
            />
          }
        />
        <Route
          exact
          path="/ticket/:id"
          element={
            <Homepage
              currentUser={currentUser}
              removeError={removeError}
              Page={ShowTicket}
              position="four"
              {...props}
            />
          }
        />
        <Route
          exact
          path="/notification"
          element={
            <Homepage
              currentUser={currentUser}
              removeError={removeError}
              Page={Notification}
              position="six"
              exPos="one"
              {...props}
            />
          }
        />
        <Route
          exact
          path="/prefrence"
          element={
            <Homepage
              currentUser={currentUser}
              removeError={removeError}
              Page={Prefrences}
              position="six"
              exPos="two"
              {...props}
            />
          }
        />
        <Route
          exact
          path="/favorite"
          element={
            <Homepage
              currentUser={currentUser}
              removeError={removeError}
              Page={Favourite}
              position="one"
              noSide
              {...props}
            />
          }
        />
        <Route
          exact
          path="/payment"
          element={
            <Homepage
              currentUser={currentUser}
              removeError={removeError}
              Page={Payment}
              position="one"
              {...props}
            />
          }
        />
        <Route
          exact
          path="/search"
          element={<Landing currentUser={currentUser} {...props} />}
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
        <Route
          exact
          path="/signup"
          element={
            <AuthForm
              removeError={removeError}
              errors={errors}
              onAuth={authUser}
              forgot={forgotPassword}
              signUp
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
          exact
          path="/:id"
          element={<Show currentUser={currentUser} {...props} />}
        />
        <Route
          exact
          path="/:id/portfolio"
          element={<Show portShow {...props} />}
        />
        <Route
          exact
          path="/:id/service"
          element={<Show serviceShow {...props} />}
        />
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
