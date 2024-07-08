import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("ID")} placeholder="ID" />
        <input
          type="password"
          {...register("password")}
          placeholder="password"
        />
        <select {...register("gener")}>
          <option value={"male"}>male</option>
          <option value={"female"}>female</option>
          <option value={"others"}>others</option>
        </select>
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
