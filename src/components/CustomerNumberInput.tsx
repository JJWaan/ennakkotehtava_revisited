import { useContext } from "react";
import { useForm } from "react-hook-form";

import { Button, Container, Fade, Stack, TextField } from "@mui/material";

import { ProductContext } from "../App";

function CustomerNumberInput() {
  const context = useContext(ProductContext);

  const {
    register,
    getValues,
    setError,
    formState: { errors: formStateErrors, isValid },
  } = useForm({
    mode: "all",
  });

  const handleSubmit = () => {
    const customerNumber = getValues("customerNr");
    if (customerNumber === "123456") {
      context.setValidCustomerNumber(true);
    }

    setError("customerNr", {
      type: "custom",
      message: "No data found for this customer number",
    });
  };

  return (
    <Fade in timeout={1200}>
      <Container id="cn-input-container-x" maxWidth="xs">
        <Stack id="cn-input-stack-y">
          <TextField
            id="cn-input-field"
            type="text"
            label="Customer number"
            {...register("customerNr", {
              required: {
                value: true,
                message: "Please insert your customer number",
              },
              pattern: {
                value: /^[0-9]+$/,
                message: "Customer number must consist of numbers only",
              },
              maxLength: {
                value: 6,
                message: "Whoa! Did you mean to write 6 digits?",
              },
              // mock FE validation, if is wanted to validate pre-submit:
              // validate: () => {
              //   if (watch("customerNr") !== "123456") {
              //     return "No data for this customer number";
              //   }
              // },
            })}
            required
            fullWidth
            color={isValid ? "success" : "primary"}
            error={!!formStateErrors.customerNr}
            // reserve space with an empty string to prevent the underlaying button from "jumping"
            // // for keeping the layout consistent at all times:
            helperText={formStateErrors.customerNr?.message?.toString() || " "}
          />
          <Button
            id="btn-submit"
            variant="contained"
            size="small"
            onClick={handleSubmit}
          >
            Continue
          </Button>
        </Stack>
      </Container>
    </Fade>
  );
}

export default CustomerNumberInput;
