import {TextField, Stack } from "@mui/material";

export const Subject = () => {
  return (
    <Stack spacing={2} sx={{ p: 2 }}>
              <TextField
                name="subName"
                label="Subject Name"
                variant="outlined"
                type="text"
              />
              <TextField
                name="subCode"
                label="Subject Code"
                variant="outlined"
                type="text"
              />
              <TextField
                name="credits"
                label="Credits"
                variant="outlined"
                type="number"
              />
              <TextField
                name="grade"
                label="Grade"
                variant="outlined"
                type="text"
              />
            </Stack>
  )
}
