import React from 'react';

import { withKnobs } from "@storybook/addon-knobs";

import { Table } from '../components/Table';
import { Badge } from '../components/Badge';

export default {
  title: "Table",
  decorators: [withKnobs],
};

export const table = () => {
  const [data, setData] = React.useState([]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "show.name"
      },
      {
        Header: "Type",
        accessor: "show.type"
      },
      {
        Header: "Language",
        accessor: "show.language"
      },
      {
        Header: "Genre(s)",
        accessor: "show.genres",
        Cell: ({ cell: { value } }) => (
          <Badge
            values={value}
            status="primary"
            size="md"
            title={value[0]}
          />
        )
      },
      {
        Header: "Runtime",
        accessor: "show.runtime",
        Cell: ({ cell: { value } }) => {
          const hour = Math.floor(value / 60);
          const min = Math.floor(value % 60);
          return (
            <>
              {hour > 0 ? `${hour} hr${hour > 1 ? "s" : ""} ` : ""}
              {min > 0 ? `${min} min${min > 1 ? "s" : ""}` : ""}
            </>
          );
        }
      },
      {
        Header: "Status",
        accessor: "show.status"
      }
    ],
    []
  );

  React.useEffect(() => {
    (async () => {
      const result = await fetch("https://api.tvmaze.com/search/shows?q=snow").then(res => res.json());
      setData(result);
    })();
  }, []);

  return (
    <Table
      data={data}
      columns={columns}
    />
  );
};
