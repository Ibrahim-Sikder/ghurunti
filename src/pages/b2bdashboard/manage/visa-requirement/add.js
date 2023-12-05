import styling from "../../profile.module.css";
import MoveText from "../../../../../components/UserDashBoard/MoveText/MoveText";
import styles from "../manage.module.css";
import B2BdashboardLayout from "../../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import toast from "react-hot-toast";
import axios from "axios";
import { useRef } from "react";
import { useRouter } from "next/router";

const Add = () => {
  const [visaType, setVisaType] = useState("");
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const router = useRouter();

  const handlePostVisaRequirement = (e) => {
    e.preventDefault();
    const data = {
      visa_type: visaType,
      requirements: value,
    };
    setLoading(true);
    axios
      .post("http://localhost:5000/api/v1/requirement", data)
      .then(function (response) {
        console.log(response.data);
        if (
          response.data.message ===
          "Successfully visa requirements details posted."
        ) {
          formRef.current.reset();
          router.push("/b2bdashboard/manage/visa-requirement");

          setLoading(false);
        }
      });
  };
  return (
    <B2BdashboardLayout>
      <MoveText />
      <div className="mt-5">
        <div className={styling.profileTop}>
          <div className={styling.flightHistory}>
            <h2 className="text-3xl font-bold text-center">
              Visa Requirment Data Input
            </h2>
            <div className="w-full mx-auto">
              <form ref={formRef} onSubmit={handlePostVisaRequirement}>
                <div className={styles.formControl}>
                  <div>
                    <label>Select Requirement </label>
                    <select
                      onChange={(e) => setVisaType(e.target.value)}
                      className={styles.inputField}
                    >
                      {/* <option  className={styles.inputField} value="Govt. Job Holder">Govt. Job Holder</option>
                  <option value="Private Job Holder">Private Job Holder</option>
                  <option value="Student">Student</option>
                  <option value="Non Student">Non Student</option>
                  <option value="House Wife">House Wife </option>
                  <option value="Advocate Lawyer">Advocate Lawyer </option>
                  <option value="Doctor">Doctor </option>
                  <option value="Unemployment">Unemployment </option> */}

                     
                      <option selected value="Select your profession" disabled>Select your profession</option>
                      <option value="Govt. Job Holder">Govt. Job Holder</option>
                      <option value="Private Job Holder">
                        Private Job Holder
                      </option>
                      <option value="Student">Student</option>
                      <option value="Non Student">Non Student</option>
                      <option value="House Wife">House Wife </option>
                      <option value="Advocate Lawyer">Advocate Lawyer </option>
                      <option value="Doctor">Doctor </option>
                      <option value="Unemployment">Unemployment </option>
                    </select>
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <ReactQuill
                      value={value}
                      onChange={setValue}
                      modules={{
                        toolbar: [
                          [{ font: [] }],
                          [{ size: ["small", false, "large", "huge"] }],
                          [{ header: [1, 2, 3, 4, 5, 6, false] }],
                          [{ color: [] }, { background: [] }],
                          [{ align: [] }],
                          [{ list: "ordered" }, { list: "bullet" }],
                          ["bold", "italic", "underline"],
                          [{ align: [] }],
                          ["link", "image"],
                          ["video"],
                          ["clean"],
                          ["blockquote", "code-block"],
                          ["direction"],
                          ["formula"],
                          ["strike"],
                        ],
                      }}
                    />
                  </div>
                </div>

                <div className={styles.formControl}>
                  <button
                    disabled={loading ? true : false}
                    className={styles.submitBtn}
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </B2BdashboardLayout>
  );
};

export default dynamic(() => Promise.resolve(Add), { ssr: false });
