import * as types from '../constants/actionTypes';

const initialState = {
  totalCompanies: 0,
  totalPhoneScreen: 0,
  totalOnSite: 0,
  totalOffers: 0,
  companyList: [],
  lastMarketId: 10000,
  newCompany: '',
};

 const jobReducer = (state=initialState, action) => {
//   let companyList;

 switch(action.type) {
     case types.ADD_COMPANY:
//       // increment lastMarketId and totalMarkets counters
//       // reference state .lastarketID and state.total markets and increment by 1 
//       // create the new market object from provided data, this obj will contain all individual child box info 
//     //   let lastMarketId = state.lastMarketId += 1
//     //   let totalMarkets = state.totalMarkets += 1 

      
//       // A new box:  
//     //   const newMarket = {
//     //     lastMarketId: lastMarketId,
//     //     newLocation: state.newLocation,
//     //     cards: 0,
//     //     percentOfTotal: 0
//     //   };

//       // Return updated state object.
//       // always return spread of state because if you dont copy state...
//       // ...you end up changin the state to only have properties you're returning below.
//       return {
//         ...state,
//         companyList,
//         lastMarketId,
//         totalMarkets,
      //};

     case types.ADD_STATUS:
//       //assigned state.newLocation to be the string that is on the action obj .payload which will be location 
//       // ex "pasadena "
//       return {
//         ...state,
//         newLocation: action.payload,
//       };
//       case types.DELETE_CARD:
//       return {
//         ...state,
//         totalCards,
//         marketList,
//       }

        default:
       return state;
  }
 };

export default jobReducer;