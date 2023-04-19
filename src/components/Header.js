import { useContext } from "react";
import { Formik, Form, Field } from "formik";
import { BookContext } from "../context/BookContext";
import { MdOutlineSearch } from "react-icons/md";

// Bu kod, bir başlık bileşeni oluşturur.
// Bu bileşen, kitap arama yapabilmemiz için bir arama çubuğu içerir.
function Header() {
  // BookContext'ten fetchBooks fonksiyonunu çağırarak, kullanıcının arama yapabilmesini sağlar.
  const { fetchBooks } = useContext(BookContext);
  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    fetchBooks(values.searchTerm);
    setSubmitting(false);
  };
  return (
    <div className="header">
      <div className="logo">Books.</div>
      <div className="search-bar">
        {/* Arama çubuğu Formik kütüphanesi kullanılarak oluşturulmuştur.*/}
        <Formik initialValues={{ searchTerm: "" }} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form className="form">
              {/* Kullanıcı arama çubuğuna bir metin girdiğinde, handleSubmit fonksiyonu tetiklenir ve fetchBooks fonksiyonu arama sonuçlarını getirir.*/}
              <Field
                type="text"
                name="searchTerm"
                placeholder="Search by author, title, name"
                className="search-input"
              />
              {/* Arama sırasında yüklenme durumunu takip etmek için setSubmitting kullanılır.*/}

              <button type="submit" disabled={isSubmitting}>
                <MdOutlineSearch className="search-icon" />
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="actions">
        <a href="https://github.com/krmmyvz">Made with ❤️</a>
      </div>
    </div>
  );
}

export default Header;
