const user = {
  name: 'Pahuldeep Singh',
  details: 'hello',
  imageUrl: 'https://avatars.githubusercontent.com/u/52893813?v=4',
  imageSize: 200,
};

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
      <h2>{user.details}</h2>
    </>
  );
}

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}



export default function App() {
  return (
    <div>
      <Profile />
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
  

}
