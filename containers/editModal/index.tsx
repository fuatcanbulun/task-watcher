import { useState } from "react";
import Row from "@/components/row";
import Column from "@/components/column";
import Box from "@/components/box";
import Space from "@/components/space";
import Text from "@/components/text";
import TextInput from "@/components/textInput";
import SelectInput from "@/components/selectInput";
import Button from "@/components/button";
import useTask from "@/hooks/useTask";

const EditModal = ({
  data,
  editTarget,
  setEditTarget,
}: {
  data: { name: string; priority: string };
  editTarget: number;
  setEditTarget: Function;
}) => {
  const { editTask } = useTask();
  const [priority, setPriority] = useState(data.priority);

  const handleNameChange = () => {};

  const handlePriorityChange = (val: string) => {
    setPriority(val);
  };

  const handleSave = () => {
    editTask(editTarget, priority);
    setEditTarget(-1);
  };

  return (
    <>
      <Row direction="column">
        <Column lg={24} md={24} sm={24} justify="center" align="center">
          <Text label="Job Edit" size="lg" color="black" weight="bold" />
        </Column>
        <Column lg={24} md={24} sm={24} xs={24}>
          <TextInput
            label="Job Name"
            disabled
            value={data.name}
            onChange={handleNameChange}
          />
        </Column>
        <Space size="md" />
        <Column lg={24} md={24} sm={24} xs={24}>
          <SelectInput
            label="Job Priority"
            onChange={handlePriorityChange}
            value={priority}
          />
        </Column>
      </Row>
      <Space size="md" />
      <Row>
        <Column lg={12} md={12} sm={12} xs={12}>
          <Box
            padding={{
              lg: "0px 10px 0px 0px",
              md: "0px 10px 0px 0px",
              sm: "0px 10px 0px 0px",
              xs: "0px 5px 0px 0px",
            }}
          >
            <Button
              label="Cancel"
              type="text"
              onClick={() => setEditTarget(-1)}
              color="secondary"
            />
          </Box>
        </Column>
        <Column lg={12} md={12} sm={12} xs={12}>
          <Box
            padding={{
              lg: "0px 0px 0px 10px",
              md: "0px 0px 0px 10px",
              sm: "0px 0px 0px 10px",
              xs: "0px 0px 0px 5px",
            }}
          >
            <Button
              label="Save"
              type="text"
              onClick={handleSave}
              color="danger"
            />
          </Box>
        </Column>
      </Row>
    </>
  );
};

export default EditModal;
