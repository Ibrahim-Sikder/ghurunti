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
import { useEffect } from "react";

const Update = () => {
  const [singleRequirement, setSingleRequirement] = useState({});
  const [value, setValue] = useState("");
  const [visaType, setVisaType] = useState("");
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5000/api/v1/requirement/${id}`)
        .then((res) => res.json())
        .then((data) => setSingleRequirement(data.result));
    }
  }, [id]);

  useEffect(() => {
    setVisaType(singleRequirement.visa_type);
    setValue(singleRequirement.requirements);
  }, [singleRequirement.requirements, singleRequirement.visa_type]);

  const handleVisaRequirementUpdate = (e) => {
    e.preventDefault();
    const data = {
      visa_type: visaType,

      requirements: value || singleRequirement.requirements,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5000/api/v1/requirement/${id}`, data)
      .then(function (response) {
        console.log(response.data);
        if (response.data.message === "Package update successful") {
          toast.success("Package update successful");
          formRef.current.reset();
          router.push("/b2bdashboard/manage/visa-requirement");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleVisaTypeChange = (e) => {
    setVisaType(e.target.value);
  };

 
  return (
    <B2BdashboardLayout>
      <MoveText />
      <div className="mt-5">
        <div className={styling.profileTop}>
          <div className={styling.flightHistory}>
            <h2 className="text-3xl font-bold text-center">
              Visa Requirement Data Update
            </h2>
            <div className="w-full mx-auto">
              <form ref={formRef} onSubmit={handleVisaRequirementUpdate}>
                <div className={styles.formControl}>
                  <div>
                    <label>Select Requirement </label>
                    <select
                      onChange={handleVisaTypeChange}
                      className={styles.inputField}
                      value={visaType}
                    >
                      <option selected value="Select your profession" disabled>
                        Select your profession
                      </option>
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
                    Update
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

export default dynamic(() => Promise.resolve(Update), { ssr: false });
