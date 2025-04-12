function Teachers(){
    return(
       <div className="content form-group p-4 bg-white">
            <div className="form-control space-x-2">
                <label htmlFor="">name</label>
                <input type="text" className="border" name="" id="" />
            </div>
            <div className="form-control space-x-2">
                <label htmlFor="">age</label>
                <input type="text" className="border" name="" id="" />
            </div>
            <div className="form-control space-x-2">
                <label htmlFor="">select</label>
                <input type="text"  className="border" name="" id="" />
            </div>
            <div className="form-control">
                <input type="submit" value="save"  className="p-2 w-full m-2 bg-blue-800" name="" id="" />
            </div>
       </div>
    )
}

export default Teachers