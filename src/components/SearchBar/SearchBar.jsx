import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "../SearchBar/SearchBar.module.css";
import * as Yup from "yup";

const searchBarSchema = Yup.object().shape({
  search: Yup.string().min(2, "min 2").max(20, "max 20").required("Required"),
});

const SearchBar = ({ onSearchSubmit }) => {
  const handleSubmit = (values, options) => {
    onSearchSubmit(values.search);
    options.resetForm();
  };

  return (
    <div>
      <header className={s.header}>
        <Formik
          initialValues={{ search: "" }}
          onSubmit={handleSubmit}
          validationSchema={searchBarSchema}
        >
          <Form>
            <Field name="search" />
            <ErrorMessage name="search" />
            <button type="submit">Search</button>
          </Form>
        </Formik>
      </header>
    </div>
  );
};

export default SearchBar;
