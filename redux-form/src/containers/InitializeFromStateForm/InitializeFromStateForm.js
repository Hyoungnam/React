import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { load as loadAccount } from "redux/account";
import { compose } from "redux";
const data = {
  // used to populate "account" reducer when "Load" is clicked
  firstName: "Jane",
  lastName: "Doe",
  age: "42",
  sex: "female",
  employed: true,
  favoriteColor: "Blue",
  bio: "Born to write amazing Redux code.",
};
const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function showResults(values) {
  await sleep(5000); // simulate server latency
  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
}

let InitializeFromStateForm = (props) => {
  const { load, pristine, reset, submitting } = props;
  return (
    <form onSubmit={showResults}>
      <div>
        <button type="button" onClick={() => load(data)}>
          Load Account
        </button>
      </div>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div>
        <label>Age</label>
        <div>
          <Field name="age" component="input" type="number" placeholder="Age" />
        </div>
      </div>
      <div>
        <label>Sex</label>
        <div>
          <label>
            <Field name="sex" component="input" type="radio" value="male" />{" "}
            Male
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="female" />{" "}
            Female
          </label>
        </div>
      </div>
      <div>
        <label>Favorite Color</label>
        <div>
          <Field name="favoriteColor" component="select">
            <option value="">Select a color...</option>
            {colors.map((colorOption) => (
              <option value={colorOption} key={colorOption}>
                {colorOption}
              </option>
            ))}
          </Field>
        </div>
      </div>
      <div>
        <label htmlFor="employed">Employed</label>
        <div>
          <Field
            name="employed"
            id="employed"
            component="input"
            type="checkbox"
          />
        </div>
      </div>
      <div>
        <label>Bio</label>
        <div>
          <Field name="bio" component="textarea" />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Undo Changes
        </button>
      </div>
    </form>
  );
};

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
InitializeFromStateForm = reduxForm({
  form: "initializeFromState", // a unique identifier for this form
})(InitializeFromStateForm);

// You have to connect() to any reducers that you wish to connect to yourself
InitializeFromStateForm = connect(
  (state) => ({
    initialValues: state.account.data, // pull initial values from account reducer
  }),
  { load: loadAccount } // bind account loading action creator
)(InitializeFromStateForm);

export default InitializeFromStateForm;

// // Decorate with reduxForm(). It will read the initialValues prop provided by connect()
// const withForm = reduxForm({
//   form: "initializeFromState", // a unique identifier for this form
//   enableReinitialize: true,
// })(InitializeFromStateForm);

// const mapDispatchToProps = (dispatch) => ({
//   load: (data) => dispatch(loadAccount(data)),
// });
// const withConnect = connect(mapDispatchToProps);

// export default compose(withConnect, withForm)(InitializeFromStateForm);
