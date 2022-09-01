import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router";
import "./styles.scss";
import { Container } from "../components/container/container";
import { AddForm } from "../components/addForm/addForm";
// import { GeneralProduct } from "../components/generalProguct/generalProguct";

export const AddProduct = function () {
  const navigate = useNavigate();

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
                Save
              </button>
              <button
                type="button"
                className="button red"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </Container>
      </header>
      <main>
        <Container>
          <AddForm />
        </Container>
      </main>
    </>
  );
};
