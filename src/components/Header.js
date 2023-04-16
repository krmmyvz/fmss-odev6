import { useContext } from "react";
import { Formik, Form, Field } from "formik";
import { BookContext } from "../context/BookContext";
import { MdOutlineSearch } from "react-icons/md";

function Header() {
  const { fetchBooks } = useContext(BookContext);
  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    fetchBooks(values.searchTerm);
    setSubmitting(false);
  };
  return (
    <div className="header">
      <div className="logo">Logo</div>
      <div className="search-bar">
        <Formik initialValues={{ searchTerm: "" }} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form className="form">
              <Field
                type="text"
                name="searchTerm"
                placeholder="Kitap adı girin"
                className="search-input"
              />
              <button type="submit" disabled={isSubmitting}>
                <MdOutlineSearch className="search-icon" />
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="actions">actions</div>
    </div>
  );
}

export default Header;
