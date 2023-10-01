import { useAuth } from "../../hooks/useAuth";


const HomePage = () => {

  const user = useAuth();
  console.log(user)

  return (
    <div>
      HomePageText
    </div>
  );
};

export default HomePage;