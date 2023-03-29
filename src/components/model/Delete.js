import axios from 'axios'
import React from 'react'

function DeleteModel({idData,postData,handler}) {
    
    const handleDelete = async()=>{

        const res = await axios.delete(
            `https://jsonplaceholder.typicode.com/users/${idData}`,
          );
          console.log(res)
          if (res.status == 200) {
              
            alert(
              "Data Has been delete It will not effect in the fiven api data becuase its a fake server but done in Manualyy Please Check Api For confirmation"
            );
            console.log(res)
          }

        const filterData = await postData.filter((v)=>{
            return v.id!==idData
        })
        handler(filterData)
    }
  return (
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Do you Really want to delete {idData}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary sendToUser" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={(e)=>handleDelete(e)}>okay</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default DeleteModel