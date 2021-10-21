import { useEffect, useState } from "react";
import { Product } from "../../../../types";
import SidePanelView from "./SidePanelView";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { toggleProductInBuild } from "../../../../redux/actions/currentBuild";
import { changeProductType } from "../../../../redux/actions/currentProductType";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS } from "../../../../graphql/queries/products";
import { SAVE_NEW_BIKE } from "../../../../graphql/mutations/bikeBuilds";
import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "../../../common/Spinner";
import { useHistory } from "react-router";

const totNumberOfTypes = 4;

const SidePanelPresenter = () => {
  const [addBike, addBikeInfo] = useMutation(SAVE_NEW_BIKE);
  const addBikeLoading = addBikeInfo.loading;
  const addBikeData = addBikeInfo.data;

  const { isAuthenticated, loginWithPopup, user } = useAuth0();

  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);

  const [allProducts, setAllProducts] = useState<Product[]>([]);

  const [productsToShow, setProductsToShow] = useState<Product[]>([]);

  const dispatch = useDispatch();

  const history = useHistory();

  const currentBuild = useSelector(
    (state: RootStateOrAny) => state.currentBuild
  );

  const currentProductType = useSelector(
    (state: RootStateOrAny) => state.currentProductType
  );

  const productCardClickHandler = (newProductForBuild: Product) => {
    dispatch(toggleProductInBuild(newProductForBuild));
  };

  useEffect(() => {
    const allProductsFromDB = data?.getAllProducts;

    let allProductsCopy = allProductsFromDB ? [...allProductsFromDB] : [];

    setAllProducts(allProductsCopy);
  }, [loading]);

  useEffect(() => {
    const relevantProducts = allProducts.filter((product) => {
      return product.type.toLowerCase() === currentProductType.toLowerCase();
    });

    setProductsToShow(relevantProducts);
  }, [currentProductType, allProducts]);

  const currentProductTypeUpdateHandler = (
    changeTypeOption: "previous" | "next"
  ) => {
    dispatch(changeProductType(changeTypeOption, undefined));
  };

  const saveBikeHandler = () => {
    if (!isAuthenticated) {
      loginWithPopup();
      return;
    }
    if (currentBuild.products.length !== 4) return;

    const productIDs: Product[] = currentBuild.products.map(
      (product: Product) => product.product_id
    );

    if (isAuthenticated && user) {
      addBike({
        variables: {
          email: user.email,
          products: productIDs,
          createdBy: user.email,
          createdAt: new Date().toUTCString(),
        },
      });
    }
  };

  if (addBikeLoading) {
    return (
      <div className="h-full flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  if (addBikeData) {
    history.push("profile");
  }

  return (
    <SidePanelView
      currentBuild={currentBuild}
      currentProductCards={productsToShow}
      productCardClickHandler={productCardClickHandler}
      currentProductTypeUpdateHandler={currentProductTypeUpdateHandler}
      currentProductType={currentProductType}
      totNumberOfTypes={totNumberOfTypes}
      saveBikeHandler={saveBikeHandler}
    />
  );
};

export default SidePanelPresenter;
