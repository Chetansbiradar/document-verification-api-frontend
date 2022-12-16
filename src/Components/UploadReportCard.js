import { Button, Card, Paper, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { Subject } from "./Subject";

export const UploadReportCard = () => {
  const [subjects, setSubjects] = React.useState([]);
  const [noOfSubjects, setNoOfSubjects] = React.useState(1);

  const handleDataChange = (e) => {
    // store data in index-1 in subjects array
  };

  return (
    <div>
      <Card
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stack spacing={2} sx={{ width: "100%", maxWidth: 800, p: 2 }}>
          <h1>Upload Report Card</h1>
          <TextField name="srn" label="SRN" variant="outlined" type="text" />
          <TextField
            name="programOfStudy"
            label="Program of Study"
            variant="outlined"
            type="text"
          />
          <TextField
            name="Semester"
            label="Semester"
            variant="outlined"
            type="number"
          />
          <TextField
            name="monthOfExam"
            label="Month of Exam"
            variant="outlined"
            type="text"
          />
          <TextField
            name="yearOfExam"
            label="Year of Exam"
            variant="outlined"
            type="text"
          />
          <TextField
            name="dateOfIssue"
            label="Date of Issue"
            variant="outlined"
            type="text"
          />
          <TextField
            name="monthOfIssue"
            label="Month of Issue"
            variant="outlined"
            type="text"
          />
          <TextField
            name="yearOfIssue"
            label="Year of Issue"
            variant="outlined"
            type="text"
          />
          <h3>Subjects</h3>
          {/* button to add more subjects */}
          {Array(noOfSubjects)
            .fill()
            .map((_, i) => {
              // setSubjects
              return (
                <Paper elevation={5} id="subjects" key={i}>
                  {console.log(i)}
                <Subject />
                </Paper>
              )
            })}
          <Button
            variant="contained"
            onClick={(e) => {
              setNoOfSubjects((noOfSubjects) => noOfSubjects + 1);
            }}
          >
            Add More Subjects
          </Button>
          <TextField
            name="creditsDuringSem"
            label="Credits During Semester"
            variant="outlined"
            type="number"
          />
          <TextField
            name="totalCredits"
            label="Total Credits"
            variant="outlined"
            type="number"
          />
          <TextField
            name="sgpa"
            label="SGPA"
            variant="outlined"
            type="number"
          />
          <TextField
            name="cgpa"
            label="CGPA"
            variant="outlined"
            type="number"
          />
          <Button variant="contained">Upload</Button>
        </Stack>
      </Card>
    </div>
  );
};
