import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { UpdateProjects } from "../components/UpdateProjects";
import { AddProjects } from "../components/AddProjects";
import { DeleteProjects } from "../components/DeleteProjects";
import { Navigate } from "react-router-dom";
import { useAuth } from "../components/AuthProvider";
import { Mode } from "../types/types";

export function AdminPage() {
  const { user } = useAuth();
  const [isAwesomifying, setIsAwesomifying] = useState(false);
  const [mode, setMode] = useState<Mode>("add");
  const [isUpdating, setIsUpdating] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const handleUpdate = () => {
    setIsAwesomifying(true);
    setIsUpdating(true);
    setMode("update");
    
  };
  const handleAdd = () => {
    setIsAwesomifying(true);
    setIsAdding(true);
    setMode("add");
  };
  const handleDelete = () => {
    setIsAwesomifying(true);
    setIsDeleting(true);
  };

  // TODO: Remove useEffect if not needed.
  useEffect(() => {
    // console.log("User in AdminPage: ", user);
    // alert("User in AdminPage: ", user);
  }, [user]);

  if (!user) {
    return <Navigate to="/login" />;
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

      {isUpdating && <UpdateProjects mode={mode} />}
      {isAdding && <AddProjects mode={mode} />}
      {isDeleting && <DeleteProjects />}
    </>
  );
}
