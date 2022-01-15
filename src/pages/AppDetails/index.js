export default function AppDetails() {
  return (
    <div className="pt-5 w-100 d-flex justify-content-center">
      <div className="w-100" style={{ maxWidth: "900px" }}>
        <h1 className="text-center">App Details</h1>
        <table className="table mt-4 table-striped table-hover" >
          <thead>
            <tr>
              <th scope="col">App Name</th>
              <th scope="col">Bundle ID</th>
              <th scope="col">Other Details</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((i, index) => (
              <tr>
                <td>Test App</td>
                <td>com.example.testapp</td>
                <td>Lorem Ipsum</td>
                <td>
                  <div className="d-flex gap-3">
                    <button className="btn btn-primary rounded-pill btn-sm">
                      Edit
                    </button>
                    <button className="btn btn-danger rounded-pill btn-sm">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
