import React, { useCallback, useReducer } from "react";
import Input from "../../../shared/components/FormElements/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../../shared/util/validatiors";
import "./NewPlace.css";

const formReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };
    default:
      return state;
  }
};

export default function NewPlace() {
  const inputHandler = useCallback((id, value, isValid) => {}, []);
  const [state, dispatch] = useReducer(formReducer, {
    Inputs: {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    isValid: false,
  });

  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        errorText="Please enter a valid title!"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        type="text"
        label="Description"
        errorText="Please enter a valid description (at least 5 characters)!"
        validators={[VALIDATOR_MINLENGTH(5)]}
        onInput={inputHandler}
      />
    </form>
  );
}
