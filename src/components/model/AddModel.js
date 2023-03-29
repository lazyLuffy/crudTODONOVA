import React, { useState } from "react";
import axios from "axios";

function AddModel({ postData, handler }) {
  const [newData, setNewData] = useState({ name: "", phone: "", email: "" });

  const handleAdd = async () => {
    console.log(newData, "after geeting data");
    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newData
    );
    if (res.status == 201) {
        
      alert(
        "Data Has been Created It will not effect in the fiven api data becuase its a fake server Please Check Api For confirmation"
      );
      console.log(res)
    }
  };
  return (
    <div
      class="modal fade"
      id="Addmodel"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Add New Data
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="mb-3 text-start">
              <label for="exampleFormControlInput1" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter your Name"
                onChange={(e) =>
                  setNewData({ ...newData, name: e.target.value })
                }
              />
            </div>
            <div class="mb-3 text-start">
              <label for="exampleFormControlInput1" class="form-label">
                Phone
              </label>
              <input
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Your Phone"
                onChange={(e) =>
                  setNewData({ ...newData, phone: e.target.value })
                }
              />
            </div>
            <div class="mb-3 text-start">
              <label for="exampleFormControlInput1" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter your EMail @"
                onChange={(e) =>
                  setNewData({ ...newData, email: e.target.value })
                }
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary sendToUser"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={(e) => handleAdd(e)}
            >
              submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddModel;
