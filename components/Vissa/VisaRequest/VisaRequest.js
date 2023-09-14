import React from 'react';
import style from './VisaRequest.module.css'
import { LocalPhone } from '@mui/icons-material';


const VisaRequest = () => {
    
    
    return (
        <section >
            <div className={style.visaRequestWrap}>
            <div className={style.needHelp}>
                
                <div className={style.needHelpLeft}>
                    <h3 className="text-xl font-bold mt-5">Need More Help !</h3>
                    <span>Call our experts and share any questions you have. Our team is ready to assist you every step of the way.</span>
                </div>
                <div className={style.needHelpRightSide}>
                    <LocalPhone className={style.phoneIcon}/>
                    <button>01885071488</button>
                </div>
            </div>
           <div className={style.visaRequestForm}>
            <h2 className="text-xl font-bold">Tell us where do you want to go ? </h2>
            <form>
            <div className={style.inputFieldWrap}>
            <div className={style.formControl}>
                    <label className={style.inputLabel}> Select a destination from list</label> 
                   <select className={style.visaInput}>
                   <option selected value="Bangladesh">Bangladesh</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="India">India</option>
                  <option value="China">China</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Iran">Iran</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Japan">Japan</option>
                   </select>
                </div>
                <div className={style.formControl}>
                    <label  className={style.inputLabel}>Or Write down </label>
                    <input type="text" className={style.visaInput} />
                </div>
            </div>
           <div className={style.inputFieldWrap}>
           <div className={style.formControl}>
                    <label  className={style.inputLabel}>When do you want to go?</label>
                    <input placeholder='Date ' type="date" className={style.visaInput}  required/>
                </div>
                <div className={style.formControl}>
                    <label  className={style.inputLabel}>Passport Number </label>
                    <input placeholder='Passport Number ' type="text" className={style.visaInput} required/>
                </div>
           </div>
                <div className='mt-5'>
                <h2 className="text-xl font-bold">Tell us about Yourself </h2>
                </div>
                <div className={style.inputFieldWrap}>
                  
            <div className={style.formControl}>
                    <label className={style.inputLabel}>Given Name </label> 
                    <input placeholder='Given Name ' type="text" className={style.visaInput} required/>
                </div>
                <div className={style.formControl}>
                    <label placeholder='Surname'  className={style.inputLabel}> Surname </label>
                    <input placeholder='Surname' type="text" className={style.visaInput} required/>
                </div>
            </div>
            <div className={style.inputFieldWrap}>
            <div className={style.formControl}>
                    <label className={style.inputLabel}>Movile Number </label> 
                    <input placeholder='Phone Number' type="text" className={style.visaInput} required/>
                </div>
                <div className={style.formControl}>
                    <label  className={style.inputLabel}> Email  </label>
                    <input placeholder='Email' type="text" className={style.visaInput} required/>
                </div>
            </div>
            <div className={style.formControl}>
                    <h2 className='font-bold text-xl'> Share Your Requirements  </h2>
                    <textarea className={style.textField} name="" id="" cols="30" rows="10" ></textarea>
                </div>
                <button className={style.visaSubmitBtn}>Confirm Request</button>
            </form>
           </div>
            </div>
        </section>
    );
};

export default VisaRequest;