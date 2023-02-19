import Image from "next/image";
import ProgressBar from "@ramonak/react-progress-bar";

export default function Progress() {
  const allData = [
    {
      name: "Abhishekh Kumar, IO, Hisar, Nagar",
      progress: 68,
      image: "/police1.jpg",
      color: "red",
    },
    {
      name: "Abhishekh Kumar, IO, Hisar, Nagar",
      progress: 84,
      image: "/police1.jpg",
      color: "green",
    },
    {
      name: "Abhishekh Kumar, IO, Hisar, Nagar",
      progress: 28,
      image: "/police1.jpg",
      color: "teal",
    },
    {
      name: "Abhishekh Kumar, IO, Hisar, Nagar",
      progress: 57,
      image: "/police1.jpg",
      color: "rebeccapurple",
    },
  ];
  return (
    <div className="flex gap-5 flex-col p-6">
      {allData.map((data, i) => {
        return (
          <div className="flex items-center gap-5 justify-center" key={i}>
            <Image
              width={40}
              height={40}
              className="rounded-full"
              src={data.image}
              alt=""
            />
            <div className="flex flex-col">
              <span>{data.name}</span>
              <ProgressBar completed={data.progress} bgColor={data.color} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
