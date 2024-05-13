import React, { useRef, useState } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import Loader from "../common/Loader";
import Swal from "sweetalert2";
import FramerMagnetic from "../common/FramerMagnetic";
import { motion } from "framer-motion";
import { slideRight, slideLeft } from "./animation";

const ContactForm = () => {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);

  const Toast = Swal.mixin({
    toast: true,
    position: "bottom-left",
    showConfirmButton: false,
    timer: 4000,
  });

  const sendEmail = () => {
    setLoading((state) => !state);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(() => {
        Toast.fire({
          icon: "success",
          title: "The email was successfully sent",
        });

        formik.resetForm();
      })
      .catch((error) => {
        console.log("FAILED...", error.text);

        Toast.fire({
          icon: "error",
          title: "Email failed to send, try again!",
        });

        formik.resetForm();
      })
      .finally(() => {
        setLoading((state) => !state);
      });
  };

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      message: "",
    },
    onSubmit: sendEmail,
    validationSchema: yup.object().shape({
      fullname: yup
        .string()
        .trim()
        .required("Please enter your name")
        .min(6, "Fullname must be at least 6 characters"),
      email: yup
        .string()
        .required("Please enter your email")
        .email("Please enter a valid email address"),
      message: yup.string().trim().required("Please enter a message"),
    }),
  });

  const handleForm = (e) => {
    const { target } = e;
    formik.setFieldValue(target.name, target.value);
  };
  return (
    <form
      ref={form}
      className="flex flex-col gap-y-5 text-primaryLight"
      autoComplete="off"
      onSubmit={formik.handleSubmit}
    >
      <FormControl
        className="w-full flex flex-col lg:flex-row items-start lg:items-end gap-x-5"
        isInvalid={formik.errors.fullname}
      >
        <div>
          <FormLabel
            htmlFor="fullname"
            className="w-full text-5xl md:text-6xl lg:text-8xl font-bold whitespace-nowrap overflow-hidden"
          >
            <motion.p
              variants={slideRight}
              initial="hidden"
              whileInView="animate"
              custom={0}
              viewport={{ once: true }}
              className="relative"
            >
              MY NAME
            </motion.p>
          </FormLabel>
        </div>
        <div className="w-full overflow-hidden">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="animate"
            custom={0}
            viewport={{ once: true }}
          >
            <Input
              onChange={handleForm}
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Enter your name"
              value={formik.values.fullname || ""}
              className={`w-full text-sm lg:text-base bg-transparent ${
                formik.errors.fullname
                  ? "border-red-500"
                  : formik.values.fullname.length
                  ? "border-green-500"
                  : "border-primaryLight"
              } border-b-2 outline-none p-1 `}
            />
            <FormErrorMessage className="flex justify-end items-center text-red-500 text-sm lg:text-base">
              {formik.errors.fullname}
            </FormErrorMessage>
          </motion.div>
        </div>
      </FormControl>

      <FormControl
        className="flex flex-col lg:flex-row items-start lg:items-end gap-x-5"
        isInvalid={formik.errors.email}
      >
        <div>
          <FormLabel
            htmlFor="email"
            className="w-full text-5xl md:text-6xl lg:text-8xl font-bold whitespace-nowrap overflow-hidden"
          >
            <motion.p
              variants={slideRight}
              initial="hidden"
              whileInView="animate"
              custom={2}
              viewport={{ once: true }}
              className="relative"
            >
              MY EMAIL
            </motion.p>
          </FormLabel>
        </div>
        <div className="w-full overflow-hidden">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="animate"
            custom={2}
            viewport={{ once: true }}
          >
            <Input
              onChange={handleForm}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formik.values.email || ""}
              className={`w-full text-sm lg:text-base bg-transparent ${
                formik.errors.email
                  ? "border-red-500"
                  : formik.values.email.length
                  ? "border-green-500"
                  : "border-primaryLight"
              } border-b-2 outline-none p-1 `}
            />
            <FormErrorMessage className="flex justify-end items-center text-red-500 text-sm lg:text-base">
              {formik.errors.email}
            </FormErrorMessage>
          </motion.div>
        </div>
      </FormControl>

      <FormControl
        className="flex flex-col lg:flex-row items-start lg:items-end gap-x-5"
        isInvalid={formik.errors.message}
      >
        <div>
          <FormLabel
            htmlFor="message"
            className="w-full text-5xl md:text-6xl lg:text-8xl font-bold lg:whitespace-nowrap overflow-hidden"
          >
            <motion.p
              variants={slideRight}
              initial="hidden"
              whileInView="animate"
              custom={5}
              viewport={{ once: true }}
              className="relative"
            >
              LOOKING FOR
            </motion.p>
          </FormLabel>
        </div>
        <div className="w-full min-h-full flex items-end justify-start overflow-hidden">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="animate"
            custom={5}
            viewport={{ once: true }}
            className="w-full"
          >
            <Textarea
              onChange={handleForm}
              id="message"
              name="message"
              placeholder="Enter your message"
              value={formik.values.message || ""}
              className={`w-full text-sm lg:text-base bg-transparent ${
                formik.errors.message
                  ? "border-red-500"
                  : formik.values.message.length
                  ? "border-green-500"
                  : "border-primaryLight"
              } border-b-2 outline-none p-1 w-full min-h-full`}
            />
            <FormErrorMessage className="flex justify-end items-center text-red-500 text-sm lg:text-base">
              {formik.errors.message}
            </FormErrorMessage>
          </motion.div>
        </div>
      </FormControl>
      <div className="flex justify-end mt-10">
        <FramerMagnetic size={160} stiffness={10}>
          <button
            type="submit"
            disabled={loading}
            className="w-40 h-40 disabled:cursor-wait hover:brightness-75 disabled:brightness-75 bg-primary text-primaryLight text-4xl flex justify-center items-center rounded-full text-center transition-all duration-200"
          >
            <div>{loading ? <Loader /> : <p>/SEND</p>}</div>
          </button>
        </FramerMagnetic>
      </div>
    </form>
  );
};

export default ContactForm;
