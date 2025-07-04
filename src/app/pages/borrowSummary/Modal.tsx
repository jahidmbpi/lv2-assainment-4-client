"use client";

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
import { useState } from "react";

export function Modal({ bookId }) {
  const [open, setOpen] = useState(false);

  console.log(bookId);
  const [createBorrow] = useCreateBorrowMutation();

  const form = useForm({
    defaultValues: {
      quantity: 1,
      dueDate: "",
    },
  });

  const onSubmit = async (values) => {
    console.log(values);
    const borrowData = { bookId, ...values };
    console.log(borrowData);
    createBorrow(borrowData);
    setOpen(false);
  };

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
              render={({ field }) => (
                <DatePicker
                  field={field}
                  value={field.value}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              )}
            />

            <AlertDialogFooter>
              <AlertDialogCancel type="button">Cancel</AlertDialogCancel>
              <Button type="submit" className="capitalize">
                Confirm borrow
              </Button>
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
