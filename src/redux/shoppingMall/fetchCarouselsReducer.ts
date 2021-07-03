import {
        FETCH_CAROUSELS_FAIL,
        FETCH_CAROUSELS_START,
        FETCH_CAROUSELS_SUCCESS,
        CarouselsAction,
      } from "./fetchCarouselsActions";
      
      export interface CrouselsState {
        carouselsList: {data:[]};
        loading: boolean;
        error: string | null;
      }
      
      const defaultState: CrouselsState = {
        loading: true,
        error: null,
        carouselsList: {data:[]},
      };
      
      export default (state = defaultState, action: CarouselsAction) => {
        switch (action.type) {
          case FETCH_CAROUSELS_START:
            return { ...state, loading: true };
          case FETCH_CAROUSELS_SUCCESS:
            return { ...state, loading: false, CrouselsList: action.payload };
          case FETCH_CAROUSELS_FAIL:
            return { ...state, loading: false, error: action.payload };
          default:
            return state;
        }
      };