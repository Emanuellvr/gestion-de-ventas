import HomeIcon from "./HomeIcon";
import StartIcon from "./StartIcon";
import BoxIcon from "./BoxIcon";
import FolderIcon from "./FolderIcon";
import PersonIcon from "./PersonIcon";

const Sidebar = () => {
  return (
    <aside className="h-screen w-16 bg-blue-500 flex flex-col items-center justify-between fixed top-0 left-0">
      {/* Sidebar icons */}
      <div className="my-20">
        <button className="hover:bg-blue-600 w-16 p-6 my-2 bg-blue-700">
          <HomeIcon />
        </button>
        <button className="hover:bg-blue-600 w-16 p-6 my-2">
          <StartIcon />
        </button>
        <button className="hover:bg-blue-600 w-16 p-6 my-2">
          <BoxIcon />
        </button>
        <button className="hover:bg-blue-600 w-16 p-6 my-2">
          <FolderIcon />
        </button>
        <button className="hover:bg-blue-600 w-16 p-6 my-2">
          <PersonIcon />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
