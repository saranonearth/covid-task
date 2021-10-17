import axios from 'axios';
import React from 'react'
import { toast } from 'react-toastify';

import Table from './Table';
import SettingModal from './SettingModal';
import SETTINGS from '../../app/settings/index.json'
import { useInterval } from '../../app/hooks/useInterval';


const DashboardHolder = () => {
   //Data containers
   const [data,setData] = React.useState(null);
   const [showModal,setShowModal] = React.useState(false);
   const [threshold,setThreshold] = React.useState(null);

   //Handles first call
   React.useEffect(()=>{
      const getData = async () => {
         try {
            const responseData = await axios.get(SETTINGS.ENDPOINT);
            setData(responseData.data);
         } catch (error) {
            toast.error(SETTINGS.ERROR_MESSAGE);
            console.log(error)
         }
      }
      getData();
   },[])

   React.useEffect(()=>{
      const localData = JSON.parse(localStorage.getItem('settings'));
      if(localData) {
         setThreshold(localData);
      }
   },[])
   /**
    * @description checks thrusholds and shows toast
    */
   React.useEffect(() => {
      toast.dismiss(); //remove previous warnings
      if(!threshold) return;
     (data || []).forEach((value) => {
       SETTINGS.OBSERVERS.forEach((observer) => {
         if (
           observer.isValue &&
           threshold[observer.field] &&
           Number(value[observer.field]) > Number(threshold[observer.field])
         ) {
           toast.error(
             `${value.state}: ${observer.value}-${value[observer.field]}`,
             {
               autoClose: false,
             }
           );
         }
       });
     });
   }, [data, threshold]);

   function handleShowModal(){
      setShowModal(!showModal);
   }

   useInterval(async()=>{
      try {
         const responseData = await axios.get(SETTINGS.ENDPOINT);
         console.log(responseData.data);
         setData(responseData.data);
      } catch (error) {
         toast.error(SETTINGS.ERROR_MESSAGE);
         console.log(error)
      }
   }, SETTINGS.DATA_REFRESH_DELAY)

   return (
     <div className="mx-auto w-10/12">
       {showModal && (
         <SettingModal
           setThrushold={setThreshold}
           closeModal={handleShowModal}
         />
       )}
       <Table
         showModal={handleShowModal}
         threshold={threshold}
         fields={SETTINGS.OBSERVERS}
         data={data}
       />
     </div>
   );
}

export default DashboardHolder
