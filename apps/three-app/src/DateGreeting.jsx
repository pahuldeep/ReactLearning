export default function DateGreeting() {
  const currentHour = new Date().getHours();
  let greeting;
  let color;

  if (currentHour < 12) {
    greeting = "Good Morning";
    color = "red";
  } else if (currentHour < 18) {
    greeting = "Good Afternoon";
    color = "green";
  } else {
    greeting = "Good Night";
    color = "blue";
  }

  return (
    <h1 className="heading" style={{ color }}>
      {greeting}
    </h1>
  );
}
