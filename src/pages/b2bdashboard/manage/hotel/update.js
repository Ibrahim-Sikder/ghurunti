import React from "react";
import styling from "../../profile.module.css";
import dynamic from "next/dynamic";
import MoveText from "../../../../../components/UserDashBoard/MoveText/MoveText";
import styles from "../manage.module.css";
import { CloudUpload } from "@mui/icons-material";
import B2BdashboardLayout from "../../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import { useState } from "react";
import TextEditor from "../../../../../components/TextEditor/TextEditor";

const Hotel = () => {
  const [editorValue, setEditorValue] = useState("");

  return (
    <B2BdashboardLayout>
      <MoveText />

      <div className="mt-5">
        <div className={styling.profileTop}>
          <div className={styling.flightHistory}>
            <h2 className="text-3xl font-bold text-center">
            Update Hotel Data 
            </h2>
            <div className="w-full mx-auto">
              <form>
                <div className={styles.formControl}>
                  <div>
                    <label>Input Country </label>
                    <input
                      name="country"
                      placeholder="Input Country "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label> Input City </label>
                    <input
                      name="city"
                      placeholder="Input City "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label>Day/Night </label>
                    <input
                      name="day"
                      placeholder="Day/Night "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label> Price Per Person </label>
                    <input
                      name="price"
                      placeholder="Price Person "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label>Price Twin Person</label>
                    <input
                      name="price"
                      placeholder="Price Twin Person "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label> Price Triple Person </label>
                    <input
                      name="price"
                      placeholder="Price Triple Person"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label>Highest Price </label>
                    <input
                      name="highestPrice"
                      placeholder="Highest Price "
                      type="number"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label> Lowest Price </label>
                    <input
                      name="lowestPrice"
                      placeholder="Lowest Price "
                      type="number"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label>Start Price </label>
                    <input
                      name="startPrice"
                      placeholder="Start Price "
                      type="number"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label> Discount Price </label>
                    <input
                      name="discountPrice"
                      placeholder="Discount Price "
                      type="number"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label>Date</label>
                    <input
                      name="date"
                      placeholder="Date "
                      type="date"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label>Address</label>
                    <input
                      name="address"
                      placeholder="Address"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label> Title </label>
                    <input
                      name="title"
                      placeholder="Title"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label>Sub Title </label>
                    <input
                      name="subtitle"
                      placeholder="Sub Title "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label>Hotel Name </label>
                    <input
                      name="name"
                      placeholder="Hotel Name "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label>Image </label>
                    <input
                      name="image"
                      placeholder="Photo URL "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>

                <div className={styles.formControl}>
                  <button className={styles.submitBtn} type="submit">
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

export default dynamic(() => Promise.resolve(Hotel), { ssr: false });
