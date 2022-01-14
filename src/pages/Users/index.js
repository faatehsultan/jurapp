import "./style.css";

export default function Users(props) {
  return (
    <div className="users row w-100 pt-5">
      {[1, 2, 3].map((i, index) => (
        <div className="col-12 col-sm-6 col-md-4 p-3" key={index}>
          <UserCard />
        </div>
      ))}
    </div>
  );
}

function UserCard() {
  return (
    <div className="userCard card">
      <img
        src="/img/placeholder-img.jpg"
        class="card-img-top"
        alt="..."
        height={250}
        style={{ objectFit: "cover" }}
      />
      <div class="card-body">
        <h5 class="card-title text-center text-bold">User Name</h5>
      </div>
    </div>
  );
}
