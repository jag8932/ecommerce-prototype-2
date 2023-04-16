
function CreateProduct() {
    return (
        <>
        <h1>Create your product</h1>
        <div className="main-content d-flex justify-content-center">
            <form id="createProduct" className="">
              <div className="form-group">
                <h2>Create a Product</h2>
                <p>Product Name</p><input type="text" name="prodName" placeholder="Product Name" />
                <p>Description</p><textarea id="prodDescription" name="prodDesc" rows="10" cols="50"></textarea>
                <p>Image</p><input type="file" name="file" />
                <button className="btn btn-primary" type="submit" name="submit" width="100px">Submit</button>
                </div>
            </form >
            </div>
        </>
    )
}

export default CreateProduct;