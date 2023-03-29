import React, { useState } from "react";
import axios from "axios";

function UpdateModel({ currentData, postData, handler }) {
    console.log(currentData , 'after clicking')

  const [newData, setNewData] = useState({
    name: currentData?.name,
    phone: currentData?.phone,
    email: currentData,
  });
  const handleAdd = async () => {
    console.log(newData, "after geeting data");
    const res = await axios.patch(
      `https://jsonplaceholder.typicode.com/users/${currentData.id}`,
      { ...newData.currentData?.id }
    );
    console.log(res, "afterupdate");
    if (res.status == 200) {
      alert(
        "Data Has been Update It will not effect in the fakeJson Please Check Api For confirmation"
      );

      const updatedData = postData.map((v) =>
        v.id == currentData.id ? { ...v, newData } : v
      );

      console.log(updatedData, "after Update");
    }
  };
  return (
    <div
      class="modal fade"
      id="UpdateModel"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Update Your Data
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
                name="name"
                class="form-control"
                
                id="exampleFormControlInput1"
                placeholder={currentData?.name}
                onChange={(e) =>
                  setNewData((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </div>
            <div class="mb-3 text-start">
              <label for="exampleFormControlInput1" class="form-label">
                Phone
              </label>
              <input
                type="text"
                name="phone"
               
                class="form-control"
                id="exampleFormControlInput1"
                placeholder={currentData?.phone}
                onChange={(e) =>
                  setNewData((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </div>
            <div class="mb-3 text-start">
              <label for="exampleFormControlInput1" class="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                class="form-control"
               
                id="exampleFormControlInput1"
                placeholder={currentData?.email}
                onChange={(e) =>
                  setNewData((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                  }))
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

export default UpdateModel;
