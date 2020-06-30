import React from "react";
import ContactForm from "components/ContactForm";

class ContactContainer extends React.Component {
  submit = (values) => {
    console.log(values);
  };
  render() {
    return <ContactForm onSubmit={this.submit} />;
  }
}

export default ContactContainer;
