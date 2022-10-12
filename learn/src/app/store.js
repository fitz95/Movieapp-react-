import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';


export default configureStore({
    reducer: {
        todos: todoReducer,
    },
});
// this configure can take oonly one parameter compulsory
// which is the reducer 
// and optional are
//  middleware​?
// devTools​?
// preloadedState​?
// enhancers​
