import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router";
import "./styles.scss";
import { Container } from "../components/container/container";
import { Product } from "../components/addForm/addForm";

export const AddProduct = function () {
  const navigate = useNavigate();

  const handleSave = (e) => {
    e.preventDefault();
    console.log(e);
    // navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <>
      <header>
        <Container>
          <div className="wrapper">
            <h1 className="title">ADD PRODUCT</h1>
            <div>
              <button
                type="submit"
                form="product_form"
                className="button"
                // onClick={handleSave}
              >
                SAVE
              </button>
              <button
                type="button"
                className="button red"
                onClick={handleCancel}
              >
                CANCEL
              </button>
            </div>
          </div>
        </Container>
      </header>
      <main>
        <Container>
          <Product />
        </Container>
      </main>
    </>
  );
};