export default function AddApp() {
  return (
    <div className="pt-5 w-100 d-flex justify-content-center">
      <div className="w-100" style={{ maxWidth: "500px" }}>
        <h1 className="text-center">Add App</h1>
        <form
          className="py-4 border rounded d-flex flex-column gap-3 align-items-center"
          style={{ backgroundColor: "#F8F8F8" }}
        >
          <div className="form-group row justify-content-center align-items-center w-100">
            <div className="col-3">App Title</div>
            <div className="col-7">
              <input
                type="text"
                className="form-control"
                placeholder="Enter App Title"
              />
            </div>
          </div>
          <div className="form-group row justify-content-center align-items-center w-100">
            <div className="col-3">Image Link</div>
            <div className="col-7">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Image Link"
              />
            </div>
          </div>
          <div className="form-group row justify-content-center align-items-center">
            <div className="col-12">
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
