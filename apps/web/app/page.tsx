import { formatDateWithTime } from "@packages/date-utils";

const Home = () => {
  const timeDate = formatDateWithTime("2024-12-8");

  return (
    <>
      <p>{timeDate}</p>
    </>
  );
};

export default Home;
