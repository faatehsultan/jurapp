export default function UserDetails() {
  return (
    <div className="pt-5 w-100 d-flex justify-content-center">
      <div className="w-100" style={{ maxWidth: "900px" }}>
        <h1 className="text-center">User Details</h1>
        <table className="table mt-4 table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">User</th>
              <th scope="col">Apps</th>
              <th scope="col">Location</th>
              <th scope="col">Build</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((i, index) => (
              <tr>
                <td>
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src="/img/placeholder-img.jpg"
                      alt=""
                      className="img-fluid rounded-circle"
                      width={30}
                    />
                    <div className="fw-bold">Test User</div>
                  </div>
                </td>
                <td>5</td>
                <td>London, UK</td>
                <td>1.4.51.0</td>
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
