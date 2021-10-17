import React from 'react'
import { useHistory } from "react-router-dom";

const Index = () => {
   const history = useHistory();
   React.useEffect(() => {
      history.push("/signin")
   },[])
   return <div></div>

}

export default Index
