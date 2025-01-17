import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Grid } from "@mui/material";

function ModalComponent() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Open the modal
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Close the modal
  const handleClose = () => {
    setOpen(false);
  };

  const getTodayDate = () => {
          const month = today.getMonth()+1;
      const year = today.getFullYear();
      const date = today. getDate();
      const currentDate = month + "/" + date + "/" + year;
  }

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    handleClose(); // Close modal after submitting
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Open Form
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create New Record</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <DialogActions>
                  <Button onClick={handleClose} color="secondary">
                    Cancel
                  </Button>
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                </DialogActions>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ModalComponent;
