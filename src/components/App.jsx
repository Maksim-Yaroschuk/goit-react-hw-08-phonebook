import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';

let contact = {};

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  // collectContact = (e) => {
  //   // e.preventDefault();
  //   console.log("submit");
  //   const {
  //     elements: { name, number }
  //   } = e.currentTarget;
  //   console.log(name.value, number.value);
  //   // e.currentTarget.reset();

  //   contact = { name: name.value, number: name.number, id: nanoid() }
  // };

  // addContact = (e) => {
  //     e.preventDefault();
  //  this.setState(prevState => ({
  //     contacts: [contact, ...prevState.contacts],
  //  }));
  //   e.currentTarget.reset();
  //   console.log(this.state);
  // };

  addContact = e => {
    e.preventDefault();
    console.log('submit');
    const {
      elements: { name, number },
    } = e.currentTarget;
    console.log(name.value, number.value);
    const contact = {
      name: name.value,
      number: number.value,
      id: nanoid(),
    };
    e.currentTarget.reset();

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
    console.log(this.state);
  };

  render() {
    const { contacts, filter, name, number } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
      </>
    );
  }
}

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   addFeedback = id => {
//     this.setState(() => ({
//       [id]: this.state[id] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     let total = good + neutral + bad;
//     return total;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     let positiveFeedbackPercentage = (good / this.countTotalFeedback()) * 100;
//     return positiveFeedbackPercentage;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.addFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           {!this.countTotalFeedback() ? (
//             <Notification message="There is no feedback" />
//           ) : (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           )}
//         </Section>
//       </>
//     );
//   }
// }
