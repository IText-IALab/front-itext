/**
 * @packageDocumentation
 * @hidden
 * Lets you access the store and model actions.
 */

import counterActions from './actions/counter';
import formActions from './actions/form';
import nasaApodActions from './actions/nasaApod';
import todosActions from './actions/todos';
import uploaderActions from './actions/uploader';
import tmpStorages from './storages';
import reduxStore from './store';

export const counter = counterActions;
export const todos = todosActions;
export const nasaApod = nasaApodActions;
export const form = formActions;
export const store = reduxStore;
export const storages = tmpStorages;
export const uploader = uploaderActions;

// TODO: Add the different elements to use as a Facade.
/**
 *  Different actions on the state.
 */
const actions = {
  /**
   * Counter actions.
   */
  counter,

  /**
   * Todos actions.
   */
  todos,

  /**
   * NasaApod actions.
   */
  nasaApod,

  /**
   * Form actions.
   */
  form,

  /**
   * Uploader actions.
   */
  uploader,
};

export default { actions, storages, store };
