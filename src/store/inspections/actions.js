import { SHOW_LOADER, HIDE_LOADER } from '../loader/types';
import * as type from './types';
import Vue from 'vue';

const actions = {
	getInspections({ commit }, page) {
		commit(type.REQUEST_INSPECTIONS)
		commit(SHOW_LOADER, {
			message: 'Fetching inspections...'
		})

		Vue.http.get(`http://localhost:5000/api/inspections?page=${page}`)
			.then(resp => {
				commit(type.REQUEST_INSPECTIONS_SUCCESS, {
					payload: resp.body
				})

				commit(HIDE_LOADER)
			})
			.catch(error => {
				commit(type.REQUEST_INSPECTIONS_ERROR, {
					error
				})

				commit(SHOW_LOADER, {
					message: 'There was an error fetching the inspections'
				})
			})
	}
};

export default actions;
