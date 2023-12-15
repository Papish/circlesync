import AppButton from "../components/UI/AppButton/AppButton";

function Test() {
  return <div>1</div>;
}

export default function Dashboard() {
  function clicked() {
    console.log(1);
  }

  return (
    <div>
      Dashboard
      <AppButton type="button" onClick={() => clicked()} disabled>
        <div>Test</div>
        <Test />
      </AppButton>
    </div>
  );
}
