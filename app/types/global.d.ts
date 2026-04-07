type Task = {
  id: string;
  title: string;
  description: string;
  progress: number;
};
type addTaskModalOpen = boolean
type setAddTaskModalOpen = React.Dispatch<React.SetStateAction<boolean>>