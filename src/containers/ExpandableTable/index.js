import React from "react";
import { ExpandableTable } from "../../components";
import "./index.scss";

const ExpandableTableShowcase = () => {
  const data = [
    {
      id: "value1",
      name: "value1",
      value: [
        {
          id: "ALL",
          name: "전체",
          value: [
            {
              id: "ALL",
              name: "전체",
            },
          ],
        },
        {
          id: "value2",
          name: "value2",
          value: [
            {
              id: "ALL",
              name: "전체",
            },
            {
              id: "value3",
              name: "value3",
            },
            {
              id: "value4",
              name: "value4",
            },
          ],
        },
        {
          id: "value5",
          name: "value5",
          value: [
            {
              id: "ALL",
              name: "전체",
            },
            {
              id: "value6",
              name: "value6",
            },
          ],
        },
      ],
    },
    {
      id: "value7",
      name: "value7",
      value: [
        {
          id: "ALL",
          name: "전체",
          value: [
            {
              id: "ALL",
              name: "전체",
            },
          ],
        },
        {
          id: "value8",
          name: "value8",
          value: [
            {
              id: "ALL",
              name: "전체",
            },
            {
              id: "value9",
              name: "value9",
            },
          ],
        },
        {
          id: "value10",
          name: "value10",
          value: [
            {
              id: "ALL",
              name: "전체",
            },
            {
              id: "value11",
              name: "value11",
            },
          ],
        },
      ],
    },
  ];
  return (
    <div>
      <ExpandableTable
        headers={[
          {
            id: "head1",
            name: "head1",
          },
          {
            id: "head2",
            name: "head2",
          },
          {
            id: "head3",
            name: "head3",
          },
        ]}
        data={data}
      />
    </div>
  );
};

export default ExpandableTableShowcase;
