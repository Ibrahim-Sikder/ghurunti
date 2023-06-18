import Image from 'next/image'
import React from 'react'
import AdminLeftSide from '../../../components/DashBoard/AdminLeftSide'
import style from './account.module.css'
import admin from '../../../public/admin.png'
import start from '../../../public/start.png';
import eye from '../../../public/eye.png';
const index = () => {
     return (
          <section>
            <div className='grid grid-cols-12'>
                <div>
                    <AdminLeftSide></AdminLeftSide>
                </div>
                <div className='col-span-9'>
                  <div className={style.account}>
                  <Image
                    src={admin}
                    alt="Picture of the author"
                    width={100}
                    height={100}       
                    />
                  </div>
                  <div className='flex'>
                         <button className={style.accountBtn}>Remove Image </button>
                         <button className={style.uploadBtn}>Upload Image </button>
                    </div>
                    <form>
                    <div>
                    <div className={style.inputWrapBox}>
                         <div className='flex mb-5'>
                              <div className='mr-5'>
                                   <div className='flex'>
                                   <label className={style.inputLabel}>First Name</label>
                                   <Image
                                   className={style.star}
                                   src={start}
                                   alt="Picture of the author"
                                   width={10}
                                   height={10}
                                   />
                                   </div>
                                   <input className={style.acountInputBox} placeholder='First Name '/>
                              </div>
                              <div className='ml-5'>
                                   <div className='flex'>
                                   <label className={style.inputLabel}>Last Name</label>
                                   <Image
                                   className={style.star}
                                   src={start}
                                   alt="Picture of the author"
                                   width={10}
                                   height={10}
                                   />
                                   </div>
                                   <input className={style.acountInputBox} placeholder='Last Name '/>
                              </div>

                         </div>
                         <div className='flex mb-5'>
                              <div className='mr-5'>
                                   <div className='flex'>
                                   <label className={style.inputLabel}>Email </label>
                                   <Image
                                   className={style.star}
                                   src={start}
                                   alt="Picture of the author"
                                   width={10}
                                   height={10}
                                   />
                                   </div>
                                   <input className={style.acountInputBox} placeholder='Email  '/>
                              </div>
                              <div className='ml-5'>
                                   <div className='flex'>
                                   <label className={style.inputLabel}>Password </label>
                                   <Image
                                   className={style.star}
                                   src={start}
                                   alt="Picture of the author"
                                   width={10}
                                   height={10}
                                   />
                                   </div>
                                   <input className={style.acountInputBox} placeholder='Password  '/>
                              </div>

                         </div>
                         <div className='flex mb-5'>
                              <div className='mr-5'>
                                   <div className='flex'>
                                   <label className={style.inputLabel}>Mobile Number </label>
                                   <Image
                                   className={style.star}
                                   src={start}
                                   alt="Picture of the author"
                                   width={10}
                                   height={10}
                                   />
                                   </div>
                                   <input className={style.acountInputBox} placeholder='Mobile Number  '/>
                              </div>
                              <div className='ml-5'>
                                   <div className='flex'>
                                   <label className={style.inputLabel}>Gender </label>
                                   <Image
                                   className={style.star}
                                   src={start}
                                   alt="Picture of the author"
                                   width={10}
                                   height={10}
                                   />
                                   </div>
                                   <input className={style.acountInputBox} placeholder='Gender  '/>
                              </div>

                         </div>
                         <div className='flex mb-5'>
                              <div className='mr-5'>
                                   <div className='flex'>
                                   <label className={style.inputLabel}>Date of Birth </label>
                                   <Image
                                   className={style.star}
                                   src={start}
                                   alt="Picture of the author"
                                   width={10}
                                   height={10}
                                   />
                                   </div>
                                   <input className={style.acountInputBox} placeholder='Date of Birth  '/>
                              </div>
                              <div className='ml-5'>
                                   <div className='flex'>
                                   <label className={style.inputLabel}>Nationality </label>
                                   <Image
                                   className={style.star}
                                   src={start}
                                   alt="Picture of the author"
                                   width={10}
                                   height={10}
                                   />
                                   </div>
                                   <input className={style.acountInputBox} placeholder='Nationality  '/>
                              </div>

                         </div>
                         <div className='flex mb-5'>
                              <div className='mr-5'>
                                   <div className='flex'>
                                   <label className={style.inputLabel}>Passport Number </label>
                                   <Image
                                   className={style.star}
                                   src={start}
                                   alt="Picture of the author"
                                   width={10}
                                   height={10}
                                   />
                                   </div>
                                   <input className={style.acountInputBox} placeholder='Passport Number '/>
                              </div>
                              <div className='ml-5'>
                                   <div className='flex'>
                                   <label className={style.inputLabel}>Passport Expire Date </label>
                                   <Image
                                   className={style.star}
                                   src={start}
                                   alt="Picture of the author"
                                   width={10}
                                   height={10}
                                   />
                                   </div>
                                   <input className={style.acountInputBox} placeholder='Passport Expire Date  '/>
                              </div>

                         </div>
                         <button className={style.saveBtn}>Save your Information</button>
                    </div>
                    </div>
                    
                    </form>
                </div>
            </div>
          </section>
        )
}

export default index
