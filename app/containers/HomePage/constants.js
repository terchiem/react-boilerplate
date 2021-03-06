/*
 * HomePageConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const GET_POSTS = 'boilerplate/HomePage/GET_POSTS';
export const GET_POSTS_SUCCESS = 'boilerplate/HomePage/GET_POSTS_SUCCESS';
export const GET_POSTS_FAIL = 'boilerplate/HomePage/GET_POSTS_FAIL';
export const ADD_POST = 'boilerplate/HomePage/ADD_POST';
export const ADD_POST_SUCCESS = 'boilerplate/HomePage/ADD_POST_SUCCESS';
export const ADD_POST_FAIL = 'boilerplate/HomePage/ADD_POST_FAIL';
