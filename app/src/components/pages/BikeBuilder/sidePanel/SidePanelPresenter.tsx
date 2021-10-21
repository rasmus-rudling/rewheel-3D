import { useEffect, useState } from "react";

import { Product, User } from "../../../../types";
import SidePanelView from "./SidePanelView";

import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { toggleProductInBuild } from "../../../../redux/actions/currentBuild";
import { changeProductType } from "../../../../redux/actions/currentProductType";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS } from "../../../../graphql/queries/products";
import { SAVE_NEW_BIKE } from "../../../../graphql/mutations/bikeBuilds";

const totNumberOfTypes = 4;

const SidePanelPresenter = () => {
  const [addBike, saveBikeObj] = useMutation(SAVE_NEW_BIKE);

  const loggedInUser: User = useSelector(
    (state: RootStateOrAny) => state.loggedInUser
  );

  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);

  const [allProducts, setAllProducts] = useState<Product[]>([]);

  const [productsToShow, setProductsToShow] = useState<Product[]>([]);

  const dispatch = useDispatch();

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

<<<<<<< HEAD
  useEffect(() => {
    const relevantProducts = allProducts.filter((product) => {
      return product.type.toLowerCase() === currentProductType.toLowerCase();
    });
=======

	useEffect(() => {
		const relevantProducts = allProducts.filter((product) => {
			return product.type.toLowerCase() === currentProductType.toLowerCase();
		});
>>>>>>> 2cf6d9cdec516966e5bf05bb4e8aed09b369c4de

    setProductsToShow(relevantProducts);
  }, [currentProductType, allProducts]);

  const currentProductTypeUpdateHandler = (
    changeTypeOption: "previous" | "next"
  ) => {
    dispatch(changeProductType(changeTypeOption, undefined));
  };

  const saveBikeHandler = () => {
    if (currentBuild.products.length !== 4) return;

<<<<<<< HEAD
    const productIDs: Product[] = currentBuild.products.map(
      (product: Product) => product.id
    );

    // const creatorID = loggedInUser.id;

    // console.log(loggedInUser)

    // const bikeBuildToSave = {
    // 	products: productIDs,
    // 	createdBy: creatorID,
    // 	// createdAt: new Date(),
    // };

    addBike({
      variables: {
        email: loggedInUser.email,
        products: productIDs,
        createdBy: loggedInUser.email,
      },
    });
  };
=======
		const productIDs: Product[] = currentBuild.products.map(
			(product: Product) => product.product_id
		);

		addBike({
			variables: {
				email: loggedInUser.email,
				products: productIDs,
				createdBy: loggedInUser.email,
			},
		});
	};
>>>>>>> 2cf6d9cdec516966e5bf05bb4e8aed09b369c4de

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
