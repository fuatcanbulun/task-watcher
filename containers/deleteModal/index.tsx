import Row from "@/components/row";
import Column from "@/components/column";
import Box from "@/components/box";
import Text from "@/components/text";
import Icon from "@/components/icon";
import Button from "@/components/button";
import Space from "@/components/space";
import useTask from "@/hooks/useTask";

const DeleteModal = ({
  deleteTarget,
  setDeleteTarget,
}: {
  deleteTarget: number;
  setDeleteTarget: Function;
}) => {
  const { deleteTask } = useTask();

  const handleSave = () => {
    deleteTask(deleteTarget);
    setDeleteTarget(-1);
  };

  return (
    <>
      <Row direction="column">
        <Column lg={24} md={24} sm={24} xs={24} justify="center" align="center">
          <Icon data="AiOutlineExclamationCircle" size="lg" color="#bd0000" />
        </Column>
        <Space size="md" />
        <Column lg={24} md={24} sm={24} xs={24} justify="center" align="center">
          <Text
            align="center"
            label="Are you sure you want to delete it?"
            size="lg"
            color="black"
            weight="bold"
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
              onClick={() => setDeleteTarget(-1)}
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
              label="Approve"
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

export default DeleteModal;
