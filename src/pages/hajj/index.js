import React from "react";
import HajjLayout from "../../../components/UmrahHajj/Hajj/HajjLayout";
import HajjUmrahCard from "../../../components/Shared/HajjUmraCard/HajjUmrahCard";
import hajj from "../../../public/assets/hajj5.jpeg";



const Hajj = () => {
  
  return (
   <div>
     <HajjLayout>
      
      <HajjUmrahCard
        img={hajj}
        heading="Premium - Hajj Packages ( Non-Shifting)"
        subheading=""
        title="Most Affordable Hajj Packages 2023-2024 from Dhaka, Bangladesh"
      ></HajjUmrahCard>
   
    </HajjLayout>
  
   </div>
  );
};

export default Hajj;
