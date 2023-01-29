import { useState } from "react";
import Head from "next/head";
import PageLayout from "@/components/layout";
import TextInput from "@/components/textInput";
import SelectInput from "@/components/selectInput";
import Row from "@/components/row";
import Column from "@/components/column";

import Button from "@/components/button";
import Text from "@/components/text";
import Table from "@/containers/table";
import Box from "@/components/box";
import Header from "@/components/header";
import Space from "@/components/space";

import useTask from "@/hooks/useTask";
import { useStore } from "@/contexts/StoreContext";

import ModalLayout from "@/components/modalLayout";
import EditModal from "@/containers/editModal";
import DeleteModal from "@/containers/deleteModal";

export default function Home() {
  const { createTask } = useTask();
  const store = useStore();

  const [newJobForm, setNewJobForm] = useState<{
    name: string;
    priority: string;
  }>({ name: "", priority: "" });

  const [editTarget, setEditTarget] = useState(-1);
  const [deleteTarget, setDeleteTarget] = useState(-1);

  const handleCreateJob = () => {
    if (newJobForm.name && newJobForm.priority) {
      createTask(newJobForm);
      setTimeout(() => {
        setNewJobForm({ name: "", priority: "" });
      }, 100);
    } else {
      alert("Please fill all required fields");
    }
  };

  const handleNewText = (val: string) => {
    const regEx = /^[\w\-\s]+$/;
    if (regEx.test(val) && val.length <= 255) {
      setNewJobForm({ ...newJobForm, name: val });
    }
  };
  const handleNewPriority = (val: string) => {
    setNewJobForm({ ...newJobForm, priority: val });
  };

  return (
    <>
      <Head>
        <title>Task Watcher</title>
        <meta name="description" content="Task Watcher" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <>
          <Header />
          <Space size="md" />
          <Text label="Create New Job" size="md" color="black" weight="bold" />
          <Space size="sm" />

          <Row>
            <Column lg={14} md={14} sm={24} xs={24}>
              <Box
                padding={{
                  lg: "0px 10px 0px 0px",
                  md: "0px 10px 0px 0px",
                  sm: "0px",
                  xs: "10px 0px 0px 0px",
                }}
              >
                <TextInput
                  value={newJobForm.name}
                  label="Job Name*"
                  onChange={handleNewText}
                />
              </Box>
            </Column>
            <Column lg={7} md={7} sm={12} xs={24}>
              <Box
                padding={{
                  lg: "0px 10px 0px 10px",
                  md: "0px 10px 0px 10px",
                  sm: "10px 10px 0px 0px",
                  xs: "10px 0px 0px 0px",
                }}
              >
                <SelectInput
                  defaultOption="Select"
                  label="Job Priority*"
                  value={newJobForm.priority}
                  onChange={handleNewPriority}
                />
              </Box>
            </Column>
            <Column lg={3} md={3} sm={12} xs={24}>
              <Box
                padding={{
                  lg: "20px 0px 0px 10px",
                  md: "20px 0px 0px 10px",
                  sm: "30px 0px 0px 10px",
                  xs: "20px 0px 0px 0px",
                }}
              >
                <Button
                  icon="AiOutlinePlus"
                  label="Create"
                  type="mixed"
                  onClick={handleCreateJob}
                  color="primary"
                />
              </Box>
            </Column>
          </Row>

          <Space size="md" />
          <Text label="Job List" size="md" color="black" weight="bold" />
          <Table
            data={store.tasks}
            setEditTarget={(val: number) => setEditTarget(val)}
            setDeleteTarget={(val: number) => setDeleteTarget(val)}
          />
        </>
      </PageLayout>

      {editTarget > -1 && (
        <ModalLayout>
          <EditModal
            data={store.tasks[editTarget]}
            editTarget={editTarget}
            setEditTarget={(val: number) => setEditTarget(val)}
          />
        </ModalLayout>
      )}

      {deleteTarget > -1 && (
        <ModalLayout>
          <DeleteModal
            deleteTarget={deleteTarget}
            setDeleteTarget={(val: number) => setDeleteTarget(val)}
          />
        </ModalLayout>
      )}
    </>
  );
}
