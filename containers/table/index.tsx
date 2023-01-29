import React, { useState, useEffect } from "react";
import Row from "@/components/row";
import Column from "@/components/column";
import SearchInput from "@/components/searchInput";
import SelectInput from "@/components/selectInput";
import Box from "@/components/box";
import Button from "@/components/button";
import Text from "@/components/text";
import Tag from "@/components/tag";

import { ITableData } from "@/utils/interfaces/tableData";

const Table = ({
  data,
  setEditTarget,
  setDeleteTarget,
}: {
  data: [{ name: string; priority: string }];
  setEditTarget: Function;
  setDeleteTarget: Function;
}) => {
  const [searchParameter, setSearchParameter] = useState("");
  const [selectedPriority, setSelectedPriority] = useState("");
  const [filteredResults, setFilteredResults] = useState<ITableData[]>([]);

  useEffect(() => {
    let newFilteredResults: ITableData[] = [];
    data.forEach((task, index) => {
      if (
        (searchParameter.length > 0
          ? task.name.includes(searchParameter)
          : true) &&
        (selectedPriority.length > 0 ? task.priority == selectedPriority : true)
      ) {
        newFilteredResults.push({ ...task, id: index });
      }
    });

    const sortingWithPriority = ["urgent", "regular", "trivial"];

    newFilteredResults.sort(function (a, b) {
      var aPriority = sortingWithPriority.indexOf(a.priority);
      var bPriority = sortingWithPriority.indexOf(b.priority);
      return aPriority - bPriority || a.name.localeCompare(b.name);
    });

    setFilteredResults(newFilteredResults);
  }, [searchParameter, selectedPriority, data]);

  const searchInput =
    React.useRef() as React.MutableRefObject<HTMLInputElement>;

  let timeoutId: ReturnType<typeof setTimeout>;
  const onChange = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      handleSearch(searchInput.current.value);
    }, 1000);
  };

  const handleSearch = (val: string) => {
    setSearchParameter(val);
  };

  const handlePriority = (val: string) => {
    setSelectedPriority(val);
  };

  return (
    <>
      <Row bgColor="#e3e9ff">
        <Column lg={14} md={14} sm={12} xs={24}>
          <Box
            padding={{
              lg: "10px",
              md: "10px",
              sm: "10px",
              xs: "10px 10px 10px 10px",
            }}
          >
            <SearchInput>
              <input
                type="text"
                placeholder="Job Name"
                ref={searchInput}
                onKeyDown={onChange}
              />
            </SearchInput>
          </Box>
        </Column>
        <Column lg={10} md={10} sm={12} xs={24}>
          <Box
            padding={{
              lg: "10px",
              md: "10px",
              sm: "10px",
              xs: "0px 10px 10px 10px",
            }}
          >
            <SelectInput
              defaultOption="Priority (all)"
              onChange={handlePriority}
            />
          </Box>
        </Column>
      </Row>
      <Row bgColor="#d4d4ff">
        <Column lg={14} md={14} sm={8} xs={8}>
          <Box padding={{ lg: "10px", md: "10px", sm: "10px", xs: "10px" }}>
            <Text label="Name" size="sm" color="black" weight="regular" />
          </Box>
        </Column>
        <Column lg={7} md={7} sm={8} xs={8}>
          <Box padding={{ lg: "10px", md: "10px", sm: "10px", xs: "10px" }}>
            <Text label="Priority" size="sm" color="black" weight="regular" />
          </Box>
        </Column>
        <Column lg={3} md={3} sm={8} xs={8}>
          <Box padding={{ lg: "10px", md: "10px", sm: "10px", xs: "10px" }}>
            <Text label="Actions" size="sm" color="black" weight="regular" />
          </Box>
        </Column>
      </Row>
      {filteredResults.map((item, index) => (
        <Row key={item.id} bgColor={index % 2 == 0 ? "#f0f0f0" : "#ffffff"}>
          <Column lg={14} md={14} sm={8} xs={8}>
            <Box padding={{ lg: "10px", md: "10px", sm: "10px", xs: "10px" }}>
              <Text
                label={item.name}
                size="sm"
                color="black"
                weight="regular"
              />
            </Box>
          </Column>
          <Column lg={7} md={7} sm={8} xs={8}>
            <Box padding={{ lg: "10px", md: "10px", sm: "10px", xs: "10px" }}>
              {item.priority && (
                <Tag
                  label={item.priority}
                  color={
                    item.priority == "urgent"
                      ? "#bd0000"
                      : item.priority == "regular"
                      ? "#ff8c00"
                      : item.priority == "trivial"
                      ? "#276ed9"
                      : "#fff"
                  }
                />
              )}
            </Box>
          </Column>
          <Column lg={3} md={3} sm={8} xs={8} justify="flex-start">
            <Box
              padding={{
                lg: "10px 5px",
                md: "10px 5px",
                sm: "10px 5px",
                xs: "10px 5px",
              }}
              width="auto"
            >
              <Button
                icon="AiOutlineEdit"
                onClick={() => setEditTarget(item.id)}
                type="icon"
                color="secondary"
              />
            </Box>
            <Box
              padding={{
                lg: "10px 5px",
                md: "10px 5px",
                sm: "10px 5px",
                xs: "10px 5px",
              }}
              width="auto"
            >
              <Button
                icon="AiOutlineDelete"
                onClick={() => setDeleteTarget(item.id)}
                type="icon"
                color="secondary"
              />
            </Box>
          </Column>
        </Row>
      ))}
    </>
  );
};

export default Table;
