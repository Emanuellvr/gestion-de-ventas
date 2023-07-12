import { useNavigate } from "react-router-dom";
import ContentArea from "../components/ContentArea";

const HomePage = () => {
  const navigate = useNavigate();

  const handleLoginButtonClick = () => {
    // Redirect to a different page
    navigate("/newsale");
  };

  return (
    <div className="container mx-auto">
      <header>
        <nav className="nav-bar absolute top-5 right-4">
          <button className="hover:text-blue-700  text-black rounded-md px-4 py-2 mr-2">
            Content 1
          </button>
          <button className="hover:text-blue-700  text-black rounded-md px-4 py-2 mr-2">
            Content 2
          </button>
          <button
            onClick={handleLoginButtonClick}
            className="hover:text-blue-700  text-blue-600 rounded-md px-4 py-2"
          >
            Login
          </button>
        </nav>
      </header>
      <ContentArea
        backgroundImage="../../public/backgorund.png"
        position="top right"
        backgroundSize="70% auto"
        height="935px"
        contentText={{
          title: "Lorem ipsum Design",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        }}
      >
        <button
          onClick={handleLoginButtonClick}
          className="login-button bg-blue-500 text-white px-10 py-4 mt-16"
        >
          LOGIN
        </button>
      </ContentArea>

      <ContentArea
        spacing={{ paddingTop: "6rem", paddingBottom: "6rem" }}
        contentText={{
          title: "Content 1",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        }}
      >
        <div className="grid grid-cols-4 gap-x-12">
          <div>
            <img className="pt-10" src="../../public/gallery.png" />
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div>
            <img className="pt-10" src="../../public/gallery.png" />
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="">
            <img className="pt-10" src="../../public/gallery.png" />
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="">
            <img className="pt-10" src="../../public/gallery.png" />
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
      </ContentArea>

      <ContentArea
        backgroundImage="../../public/backgorund_2.png"
        position="top right"
        backgroundSize="cover"
        height="1200px"
        contentText={{
          title: "Content 2",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          textRight: true,
        }}
      >
        <img className="pt-10" src="../../public/content_2.png" />
      </ContentArea>
      <footer>
        <div className="bg-blue-500 w-full h-28"></div>
      </footer>
    </div>
  );
};

export default HomePage;
