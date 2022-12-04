import React, { useReducer } from 'react';

const Form = () => {
    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        education: "",
        feedback: "",
        term: false,
        quantity: 0
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "TEXT":
                return {
                    ...state,
                    [action.payload.name]: action.payload.value
                }
            case "TOGGLE":
                return {
                    ...state,
                    term: !state.term
                }
            case "INCREMENT":
                return {
                    ...state,
                    quantity: state.quantity + 1
                }
            case "DECREMENT":
                return {
                    ...state,
                    quantity: state.quantity - 1
                }
            default: return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input onChange={(e) => dispatch({
                        type: "TEXT", payload: {
                            name: e.target.name, value: e.target.value
                        }
                    })} type="text" name="firstName" id="firstName" />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input onChange={(e) => dispatch({
                        type: "TEXT", payload: {
                            name: e.target.name, value: e.target.value
                        }
                    })} type="text" name="lastName" id="lastName" />
                </div>
                <div>
                    <label htmlFor="lastName">Email</label>
                    <input onChange={(e) => dispatch({
                        type: "TEXT", payload: {
                            name: e.target.name, value: e.target.value
                        }
                    })} type="text" name="email" id="email" />
                </div>
                <div>
                    <label htmlFor="gender">Gender</label>
                    <div>
                        <label htmlFor="male">Male</label>
                        <input onChange={(e) => dispatch({
                            type: "TEXT", payload: {
                                name: e.target.name, value: e.target.value
                            }
                        })} type="radio" name="gender" value="male" id="male" />
                        <label htmlFor="female">Female</label>
                        <input onChange={(e) => dispatch({
                            type: "TEXT", payload: {
                                name: e.target.name, value: e.target.value
                            }
                        })} type="radio" name="gender" value="female" id="female" />
                        <input onChange={(e) => dispatch({
                            type: "TEXT", payload: {
                                name: e.target.name, value: e.target.value
                            }
                        })} type="radio" name="gender" value="other" id="other" />
                    </div>
                    <div>
                        <label htmlFor="education">Education</label>
                        <select onChange={(e) => dispatch({
                            type: "TEXT", payload: {
                                name: e.target.name, value: e.target.value
                            }
                        })} name="education" id="education">
                            <option value="ssc">SSC</option>
                            <option value="hsc">HSC</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="feedback">Feedback</label>
                        <input onChange={(e) => dispatch({
                            type: "TEXT", payload: {
                                name: e.target.name, value: e.target.value
                            }
                        })} type="text" name="feedback" id="feedback" />
                    </div>
                    <div>
                        <input onChange={() => { dispatch({ type: "TOGGLE" }) }} type="checkbox" name="term" id="term" />
                        <label htmlFor="term">Term and condition</label>

                    </div>
                    <h1>Count: {state.quantity}</h1>
                    <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
                    <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
                </div>
                <button disabled={!state.term} type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;