import React from 'react'
import style from './Passion.module.css';
import people from '../../public/people.png';
import doctor from '../../public/doctor.png';
import man from '../../public/man.png'
import Image from 'next/image';
const Passion = () => {
  return (
    <div className={style.passionWrap}>
      <div className={style.singlePassion}>
      <Image
          className='tourImg'
          src={people}
          alt="Picture of the author"
          width={500}
          height={500}
     />
     <div className='ml-5'>
          <h4 className='text-2xl'>For Studnet</h4>
          <ul>
               <li className='text-black'>Student ID card Photo Copy</li>
               <li className='text-black'>Birth Certificate (Only for Child & infant)</li>
               <li className='text-black'>Travel Letter or Leave letter from the Educational Institute.</li>
          </ul>
     </div>
      </div>
      <div className={style.singlePassion}>
      <Image
          className='tourImg'
          src={doctor}
          alt="Picture of the author"
          width={500}
          height={500}
     />
     <div className='ml-5'>
          <h4 className='text-2xl'>For Medical</h4>
          <ul>
               <li className='text-black'>Student ID card Photo Copy</li>
               <li className='text-black'>Birth Certificate (Only for Child & infant)</li>
               <li className='text-black'>Travel Letter or Leave letter from the Educational Institute.</li>
          </ul>
     </div>
      </div>
      <div className={style.singlePassion}>
      <Image
          className='tourImg'
          src={man}
          alt="Picture of the author"
          width={500}
          height={500}
     />
     <div className='ml-5'>
          <h4 className='text-2xl'>For Job Holder</h4>
          <ul>
               <li className='text-black'> In case of medical treatment, a copy of the appointment letter from a hospital in Thailand and if applicable, an original letter from a local doctor/hospital if the applicant is a first-time traveler.</li>
               <li className='text-black'>Recent case summary of the patient’s medical reports issued by the local hospital.</li>
               <li className='text-black'>Booking confirmation letter (such as Med letter & Action Plan) of an Air Ambulance.</li>

              

          </ul>
     </div>
      </div>
    </div>
  )
}

export default Passion
