import GraphBase from "../Graph";
import { Dictionary, IAssociation, INamed } from "../../types";

interface PropTypes {
  keys: string[];
  items: Dictionary<IAssociation>;
  names: Dictionary<INamed>;
  year: string;
}

const shortOrFull = (item: INamed) => (item.short ? item.short : item.name);

function Graph({ keys, items, names, year }: PropTypes) {
  const lastYear = String(Number(year) - 1);

  const options = {
    chart: {
      type: "column",
      height: 180,
    },
    xAxis: {
      categories: keys.map((key: string) =>
        key in names ? shortOrFull(names[key]) : key
      ),
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: false,
      endOnTick: false,
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
      padding: 0,
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y} timer</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        borderWidth: 0,
      },
    },
    series: [
      {
        name: lastYear,
        data: keys.map((key: string) => items[key].lastYearHours),
      },
      {
        name: year,
        data: keys.map((key: string) => items[key].hours),
      },
    ],
  };

  return (
    <>
      <h3 className="figure-label">
        Organisasjonenes kurstimer i {lastYear} og {year}
      </h3>
      <p className="subtitle">Antall kurstimer per år, etter organisasjon</p>
      <GraphBase options={options} />
    </>
  );
}

export default Graph;
