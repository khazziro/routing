import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "../components/button";

function ButtonPage() {
  const handleClick = () => {
    console.log("Click!");
  };
  return (
    <div>
      <div>
        <Button success outline rounded className="mb-5" onClick={handleClick}>
          <GoBell />
          Click!
        </Button>
      </div>
      <div>
        <Button warning onMouseOver={handleClick}>
          <GoDatabase /> Buy now!
        </Button>
      </div>
      <div>
        <Button secondary onMouseLeave={handleClick}>
          <GoCloudDownload />
          See Deal!
        </Button>
      </div>
      <div>
        <Button danger outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Test!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
