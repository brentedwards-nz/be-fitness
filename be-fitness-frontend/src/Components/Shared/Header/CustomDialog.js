import { Button, Modal } from "@mui/material";
import { useState } from "react";
import { Box } from "@mui/material";

const CustomDialog = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>OpenDialog</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box>

        </Box>
      </Modal>
    </>
  )
}

export default CustomDialog;