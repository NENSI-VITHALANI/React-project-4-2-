import { useState } from "react";
const Data = () => {
       const [input, setInput] = useState({
        email: '',
        password: '',
        add :'',
        address2:'',
        city :'',
        state:'',
        zip:'',
        
    })

    const [formerror, setformerror] = useState({})
    const handlechange = (e) => {
        setInput({
            ...input, [e.target.name]: e.target.value
        })

    }
    const handlesubmit = () => {
        const err = {}
        if (!input.email) {
            err.email = "Email is required"
        }
        if (!input.password) {
            err.password = "Password is required"
        }
        if (!input.phone) {
            err.phone = "Phone Number  is required"
        }
        if (!input.address) {
            err.address = "Address  is required"
        }
        if (!input.city) {
            err.city = "City is required"
        }
        // if (!input.state) {
        //     err.state = "State is required"
        // }
        if (!input.zip) {
            err.zip = " please Enter The Zip  file"
        }
        
        setformerror(err);
    }
    return (
        <>
            <body style={{backgroundColor:'black',color:'white' ,fontSize :'30px' ,height:'100vh',padding:'30px '}}>
                <h1 style={{textAlign:'center'}}> Form validation</h1>
              <form class="row g-3 col-6 m-auto py-3">
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email" name = "email" class="form-control" id="inputEmail4" onChange={handlechange} placeholder={formerror.email}/>
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Password</label>
                    <input type="password" name ="password" class="form-control" id="inputPassword4" onChange={handlechange} placeholder={formerror.password}/>
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Phone</label>
                    <input type="text" name ="phone" class="form-control" id="inputAddress" onChange={handlechange} placeholder={formerror.phone}/>
                </div>
                <div class="col-12">
                    <label for="inputAddress2" class="form-label">Address </label>
                    <input type="text" name ="address2" class="form-control" id="inputAddress"  onChange={handlechange} placeholder={formerror.address}/>
                </div>
                <div class="col-md-6">
                    <label for="inputCity" class="form-label">City</label>
                    <input type="text"  name ="city" class="form-control" id="inputCity"  onChange={handlechange} placeholder={formerror.city}/>
                </div>
                <div class="col-md-4">
                    <label for="inputState" class="form-label">State</label>
                    <select id="inputState" name ="state" class="form-select"  onChange={handlechange} placeholder={formerror.state}>
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div class="col-md-2">
                    <label for="inputZip" class="form-label">Zip</label>
                    <input type="text" name="zip" class="form-control" id="inputZip"  onChange={handlechange} placeholder={formerror.zip}/>
                </div>
                
                <div class="col-12">
                    <button type="submit" class="btn btn-primary" onClick={() => handlesubmit()}> Submit</button>
                </div>
            </form>
            </body>
        </>
    )
}
export default Data;