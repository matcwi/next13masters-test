/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CartAddItem($cartId: ID!, $productId: String!, $quantity: Int!) {\n  cartFindOrCreate(\n    id: $cartId\n    input: {items: {productId: $productId, quantity: $quantity}}\n  ) {\n    id\n    items {\n      quantity\n      product {\n        id\n        name\n        price\n        description\n        images {\n          url\n          alt\n        }\n        categories {\n          name\n        }\n      }\n    }\n  }\n}": types.CartAddItemDocument,
    "mutation CartChangeItemQuantity($cartId: ID!, $productId: ID!, $quantity: Int!) {\n  cartChangeItemQuantity(id: $cartId, productId: $productId, quantity: $quantity) {\n    id\n    items {\n      quantity\n      product {\n        id\n        name\n        price\n        description\n        images {\n          url\n          alt\n        }\n        categories {\n          name\n        }\n      }\n    }\n  }\n}": types.CartChangeItemQuantityDocument,
    "mutation CartCreate($productId: String!, $quantity: Int!) {\n  cartFindOrCreate(input: {items: {productId: $productId, quantity: $quantity}}) {\n    id\n    items {\n      quantity\n      product {\n        id\n        name\n        price\n        description\n        images {\n          url\n          alt\n        }\n        categories {\n          name\n        }\n      }\n    }\n  }\n}": types.CartCreateDocument,
    "query CartGetById($id: ID!) {\n  cart(id: $id) {\n    id\n    items {\n      quantity\n      product {\n        id\n        name\n        price\n        description\n        images {\n          url\n          alt\n        }\n        categories {\n          name\n        }\n      }\n    }\n  }\n}": types.CartGetByIdDocument,
    "fragment CartItem on Cart {\n  id\n  items {\n    quantity\n    product {\n      ...ProductListItem\n    }\n  }\n}": types.CartItemFragmentDoc,
    "mutation CartRemoveProduct($cartId: ID!, $productId: ID!) {\n  cartRemoveItem(id: $cartId, productId: $productId) {\n    id\n    items {\n      quantity\n      product {\n        id\n        name\n        price\n        description\n        images {\n          url\n          alt\n        }\n        categories {\n          name\n        }\n      }\n    }\n  }\n}": types.CartRemoveProductDocument,
    "query CategoriesGetList {\n  categories {\n    data {\n      name\n    }\n  }\n}": types.CategoriesGetListDocument,
    "query CollectionGetBySlug($slug: String!) {\n  collection(slug: $slug) {\n    description\n    id\n    name\n    slug\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.CollectionGetBySlugDocument,
    "query CollectionsGetList {\n  collections(take: 10) {\n    data {\n      name\n      slug\n    }\n  }\n}": types.CollectionsGetListDocument,
    "query OrdersGetByEmail($email: String!) {\n  orders(email: $email) {\n    data {\n      lines\n      id\n    }\n  }\n}": types.OrdersGetByEmailDocument,
    "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    ...ProductListItem\n    reviews {\n      author\n      description\n      id\n      rating\n      title\n      email\n    }\n  }\n}": types.ProductGetByIdDocument,
    "fragment ProductListItem on Product {\n  id\n  name\n  description\n  images {\n    url\n    alt\n  }\n  price\n  categories {\n    name\n  }\n  rating\n}": types.ProductListItemFragmentDoc,
    "query ProductsGetByCategorySlug($slug: String!) {\n  category(slug: $slug) {\n    products {\n      ...ProductListItem\n    }\n    name\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductsGetBySearch($input: String!) {\n  products(search: $input) {\n    data {\n      ...ProductListItem\n    }\n    ...ProductsGetCount\n  }\n}": types.ProductsGetBySearchDocument,
    "fragment ProductsGetCount on ProductList {\n  meta {\n    count\n    total\n  }\n}": types.ProductsGetCountFragmentDoc,
    "query ProductsGetList($take: Int!, $skip: Int!, $order: SortDirection, $orderBy: ProductSortBy) {\n  products(take: $take, skip: $skip, order: $order, orderBy: $orderBy) {\n    data {\n      ...ProductListItem\n    }\n    ...ProductsGetCount\n  }\n}": types.ProductsGetListDocument,
    "mutation ReviewCreate($author: String!, $description: String!, $rating: Int!, $title: String!, $email: String!, $productId: ID!) {\n  reviewCreate(\n    author: $author\n    description: $description\n    rating: $rating\n    title: $title\n    email: $email\n    productId: $productId\n  ) {\n    id\n  }\n}": types.ReviewCreateDocument,
    "fragment ReviewItem on Review {\n  author\n  description\n  id\n  rating\n  title\n  email\n}": types.ReviewItemFragmentDoc,
    "query SuggestedProductsGetList {\n  products {\n    data {\n      ...ProductListItem\n    }\n  }\n}": types.SuggestedProductsGetListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddItem($cartId: ID!, $productId: String!, $quantity: Int!) {\n  cartFindOrCreate(\n    id: $cartId\n    input: {items: {productId: $productId, quantity: $quantity}}\n  ) {\n    id\n    items {\n      quantity\n      product {\n        id\n        name\n        price\n        description\n        images {\n          url\n          alt\n        }\n        categories {\n          name\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').CartAddItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartChangeItemQuantity($cartId: ID!, $productId: ID!, $quantity: Int!) {\n  cartChangeItemQuantity(id: $cartId, productId: $productId, quantity: $quantity) {\n    id\n    items {\n      quantity\n      product {\n        id\n        name\n        price\n        description\n        images {\n          url\n          alt\n        }\n        categories {\n          name\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').CartChangeItemQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate($productId: String!, $quantity: Int!) {\n  cartFindOrCreate(input: {items: {productId: $productId, quantity: $quantity}}) {\n    id\n    items {\n      quantity\n      product {\n        id\n        name\n        price\n        description\n        images {\n          url\n          alt\n        }\n        categories {\n          name\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  cart(id: $id) {\n    id\n    items {\n      quantity\n      product {\n        id\n        name\n        price\n        description\n        images {\n          url\n          alt\n        }\n        categories {\n          name\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CartItem on Cart {\n  id\n  items {\n    quantity\n    product {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').CartItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartRemoveProduct($cartId: ID!, $productId: ID!) {\n  cartRemoveItem(id: $cartId, productId: $productId) {\n    id\n    items {\n      quantity\n      product {\n        id\n        name\n        price\n        description\n        images {\n          url\n          alt\n        }\n        categories {\n          name\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').CartRemoveProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGetList {\n  categories {\n    data {\n      name\n    }\n  }\n}"): typeof import('./graphql').CategoriesGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionGetBySlug($slug: String!) {\n  collection(slug: $slug) {\n    description\n    id\n    name\n    slug\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').CollectionGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList {\n  collections(take: 10) {\n    data {\n      name\n      slug\n    }\n  }\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query OrdersGetByEmail($email: String!) {\n  orders(email: $email) {\n    data {\n      lines\n      id\n    }\n  }\n}"): typeof import('./graphql').OrdersGetByEmailDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    ...ProductListItem\n    reviews {\n      author\n      description\n      id\n      rating\n      title\n      email\n    }\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  description\n  images {\n    url\n    alt\n  }\n  price\n  categories {\n    name\n  }\n  rating\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategorySlug($slug: String!) {\n  category(slug: $slug) {\n    products {\n      ...ProductListItem\n    }\n    name\n  }\n}"): typeof import('./graphql').ProductsGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetBySearch($input: String!) {\n  products(search: $input) {\n    data {\n      ...ProductListItem\n    }\n    ...ProductsGetCount\n  }\n}"): typeof import('./graphql').ProductsGetBySearchDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductsGetCount on ProductList {\n  meta {\n    count\n    total\n  }\n}"): typeof import('./graphql').ProductsGetCountFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($take: Int!, $skip: Int!, $order: SortDirection, $orderBy: ProductSortBy) {\n  products(take: $take, skip: $skip, order: $order, orderBy: $orderBy) {\n    data {\n      ...ProductListItem\n    }\n    ...ProductsGetCount\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ReviewCreate($author: String!, $description: String!, $rating: Int!, $title: String!, $email: String!, $productId: ID!) {\n  reviewCreate(\n    author: $author\n    description: $description\n    rating: $rating\n    title: $title\n    email: $email\n    productId: $productId\n  ) {\n    id\n  }\n}"): typeof import('./graphql').ReviewCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ReviewItem on Review {\n  author\n  description\n  id\n  rating\n  title\n  email\n}"): typeof import('./graphql').ReviewItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query SuggestedProductsGetList {\n  products {\n    data {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').SuggestedProductsGetListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
