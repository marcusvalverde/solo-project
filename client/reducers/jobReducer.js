import * as types from '../constants/actionTypes';

const initialState = {
  totalApplications: 0,
  totalPhoneScreen: 0,
  totalOnSite: 0,
  totalOffers: 0,
  companyList: [],
  jobId: 0,
  name: '',
  title:'',
  status : ['applied','Phone Screen','On site'],
  statusCount:0,
  notes: '',
  media: '',

};

const jobReducer = (state=initialState, action) => {
    let companyList;
  
    switch(action.type) {
      case types.ADD_COMPANY: // going to create the comany list array , increment gloabl app count, 
        // increment total companies and totalMarkets counters
        let totalApplications = state.totalApplications += 1 ;
        let jobId = state.jobId +=1;  
        
  
        // create the new market object from provided data
        // this will be pushed to the company list 
        const companyInfo = {
            name: state.name,
            title: state.title,
            statusCount: state.statusCount,
            status : state.status,
            notes: state.notes,
            media: state.media,
            jobId:state.jobId,
        };
  
        // push the new companyinfo onto a copy of the company List 
        companyList = state.companyList.slice();
        companyList.push(companyInfo);
  
        // return updated state
        return {
          ...state,
          companyList,
          totalApplications,
        };
  
  
      case types.ADD_FIELDS:
        console.log("previous state:", state )
        return {
            ...state,
            name: action.payload[0],
            title: action.payload[1],
            notes: action.payload[2],
            media: action.payload[3],
          };
  
  
      case types.ADD_STATUS:
        //   //increment count
        //   let statusCount = state.statusCount += 1 ;
        //   let companyList = state.companyList; 
        //   //let jobId = state.jobId; 
        //   //let status = companyList.status;
        //   let status = state.status;
        //   let totalPhoneScreen = state.totalPhoneScreen; 
        //   let totalOnSite = state.totalOnSite; 
        //   let totalOffers = state.totalPhoneScreen; 
          
        // //   for (let i = 0 ; i < companyList.length ; i++){
        // //       if(jp)
        // //   } we got an id to compare values 
          

        //   return {
        //     ...state ,
        //     totalPhoneScreen,
        //     totalOnSite,
        //     statusCount,
        //     totalOffers,
        //     status : status[statusCount]

        //   }
  
  
      default:
        console.log(state)
    return state;
    }
  };
  
  export default jobReducer;