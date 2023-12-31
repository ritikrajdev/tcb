import * as React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';

interface YoutubeLinkDialogProps {
  open: boolean;
  onSubmit: (url: string) => void;
  onCancel: () => void;
}

export default function YoutubeLinkDialog({
  open,
  onSubmit,
  onCancel,
}: YoutubeLinkDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onCancel}
      sx={{
        '& .MuiButton-root': {
          color: 'secondary.contrastText',
        },
        '& .MuiInputLabel-root': {
          color: 'secondary.contrastText',
        },
        '& .MuiInput-root': {
          color: 'secondary.contrastText !important',
        },
        '& .MuiTypography-root': {
          backgroundColor: 'primary.main',
        },
        '& .MuiDialogContent-root': {
          backgroundColor: 'primary.main',
        },
        '& .MuiDialogActions-root': {
          bgcolor: 'secondary.main',
        },
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formElm = e.currentTarget as HTMLFormElement;
          const inputElm = formElm.inputVal as HTMLInputElement;
          onSubmit(inputElm.value);
        }}
      >
        <DialogTitle>Start a Chat</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add a youtube video url to get started
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Youtube Video URL"
            type="url"
            fullWidth
            variant="standard"
            name="inputVal"
          />
        </DialogContent>
        <DialogActions>
          <Button type="reset" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
