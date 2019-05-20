import {} from "../actions";

const initialState = {
  name: "Jonathan",
  classes: [
      {
          image: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?cs=srgb&dl=abs-adult-athlete-1229356.jpg&fm=jpg",
          title: "ABC",
          date: "8:00PM Friday"
      }
  ]
};

export const instructorReducer = (state = initialState, action) => {
  return state;
};
