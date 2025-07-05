"use client";
import Swal from "sweetalert2";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Form,
} from "@/components/ui/form";

import { useCreateBorrowMutation } from "@/app/redux/api/borrowApi";
import { useForm } from "react-hook-form";
import DatePicker from "./DatePicker";
import { useEffect, useState } from "react";
// No need to import BorrowForm since the form does not include bookId
// import type { BorrowForm } from "@/borrow";

type BorrowFormFields = {
  quantity: number;
  dueDate: string;
};

export function Modal({ bookId }: { bookId: string }) {
  const [open, setOpen] = useState(false);

  console.log(bookId);
  const [createBorrow, { isLoading, isError, isSuccess }] =
    useCreateBorrowMutation();

  const form = useForm<BorrowFormFields>({
    defaultValues: {
      quantity: 1,
      dueDate: "",
    },
  });

  const onSubmit = async (values: BorrowFormFields) => {
    console.log("Form Values:", values);

    try {
      // You may need to get userId from context/auth, here it's set as a placeholder
      const borrowData = {
        bookId: bookId,
        userId: "currentUserId", // Replace with actual user id from auth/context
        quantity: values.quantity,
        dueDate: new Date(values.dueDate).toISOString(),
        borrowDate: new Date().toISOString(), // Set borrowDate to now or as required
      };

      console.log("Payload to API:", borrowData);

      await createBorrow(borrowData);
      console.log(isLoading);
      if (isLoading) {
        return <p> loading</p>;
      }

      console.log(isSuccess);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        title: "Success!",
        text: "Book borrowed successfully!",
        icon: "success",
      });
    }
    if (isError) {
      Swal.fire({
        title: "Opps!",
        text: " somethingg went wrong!",
        icon: "error",
      });
    }
  }, [isSuccess, isError]);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button onClick={() => setOpen(true)} className="bg-green-600">
          Borrow
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter quantity"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dueDate"
              render={({ field }) => <DatePicker field={field} />}
            />

            <AlertDialogFooter>
              <AlertDialogCancel type="button">Cancel</AlertDialogCancel>
              <Button
                onClick={() => setOpen(false)}
                type="submit"
                className="capitalize"
              >
                Confirm borrow
              </Button>
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
