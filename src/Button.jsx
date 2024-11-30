const user = {
  name: "Lakshan Attanayake",
  imgUrl: "/lakshan-dp.jpg",
  imageSize: 90,
};

export default function Button() {
  return (
    <div>
      <h1>Wellcome to My App</h1>
      <button>Click here</button>
      <div className="profile-card">
        <h3>{user.name}</h3>
        <img className="dp" src={user.imgUrl} alt="Lakshan's Image" />
      </div>
    </div>
  );
}
