import { useState } from "react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { UpdateProjects } from "../components/UpdateProjects";
import { AddProjects } from "../components/AddProjects";
import { DeleteProjects } from "../components/DeleteProjects";

export function AdminPage() {
  const [isAwesomifying, setIsAwesomifying] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const handleUpdate = () => {
    setIsAwesomifying(true);
    setIsUpdating(true);
  }
  const handleAdd = () => {
    setIsAwesomifying(true);
    setIsAdding(true);
  }
  const handleDelete = () => {
    setIsAwesomifying(true);
    setIsDeleting(true);
  }

  return (
    <>
      <Heading text="Awesomify Your Projects Page!" />

      {!isAwesomifying && (
        <>
          <p>How are we gonna get you hired?</p>
          <div className="mt-20 flex justify-between">
            <Button text="Update a project" onClick={handleUpdate} />
            <Button text="Add a project" onClick={handleAdd} />
            <Button text="Delete a project" onClick={handleDelete} />
          </div>
        </>
      )}

      {isUpdating && <UpdateProjects />}
      {isAdding && <AddProjects />}
      {isDeleting && <DeleteProjects />}
    </>
  );
}
