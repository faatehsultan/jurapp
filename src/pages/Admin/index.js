import UserDetails from "../UserDetails";
import AppDetails from "../AppDetails";
import ReactApexChart from "react-apexcharts";

export default function Admin() {
  const chartData = {
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Product Trends by Month",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
    },
  };

  return (
    <div className="w-100">
      <div className="row">
        <div className="col-4 p-3">
          <div className="adminCardSmall bg-danger fs-4 p-2 rounded text-light">
            TOTAL APPS <br />
            <b>56</b>
          </div>
        </div>
        <div className="col-4 p-3">
          <div className="adminCardSmall bg-success fs-4 p-2 rounded text-light">
            TOTAL USERS <br />
            <b>56</b>
          </div>
        </div>
        <div className="col-4 p-3">
          <div className="adminCardSmall bg-info fs-4 p-2 rounded text-light">
            TOTAL BUILDS <br />
            <b>56</b>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-12 px-4 ">
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="line"
            height={400}
          />
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-12 col-md-6 px-3 pb-3">
          <UserDetails />
        </div>
        <div className="col-12 col-md-6 px-3 pb-3">
          <AppDetails />
        </div>
      </div>
    </div>
  );
}
