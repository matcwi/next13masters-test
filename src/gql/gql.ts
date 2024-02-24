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
    "query CategoriesGetList {\n  categories {\n    data {\n      name\n    }\n  }\n}": types.CategoriesGetListDocument,
    "query CollectionGetBySlug($slug: String!) {\n  collection(slug: $slug) {\n    description\n    id\n    name\n    slug\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.CollectionGetBySlugDocument,
    "query CollectionsGetList {\n  collections(take: 10) {\n    data {\n      name\n      slug\n    }\n  }\n}": types.CollectionsGetListDocument,
    "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    ...ProductListItem\n  }\n}": types.ProductGetByIdDocument,
    "fragment ProductListItem on Product {\n  id\n  name\n  description\n  images {\n    url\n    alt\n  }\n  price\n  categories {\n    name\n  }\n}": types.ProductListItemFragmentDoc,
    "query ProductsGetByCategorySlug($slug: String!) {\n  category(slug: $slug) {\n    products {\n      ...ProductListItem\n    }\n    name\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductsGetBySearch($input: String!) {\n  products(search: $input) {\n    data {\n      ...ProductListItem\n    }\n    ...ProductsGetCount\n  }\n}": types.ProductsGetBySearchDocument,
    "fragment ProductsGetCount on ProductList {\n  meta {\n    count\n    total\n  }\n}": types.ProductsGetCountFragmentDoc,
    "query ProductsGetList($take: Int!, $skip: Int!) {\n  products(take: $take, skip: $skip) {\n    data {\n      ...ProductListItem\n    }\n    ...ProductsGetCount\n  }\n}": types.ProductsGetListDocument,
    "query SuggestedProductsGetList {\n  products {\n    data {\n      ...ProductListItem\n    }\n  }\n}": types.SuggestedProductsGetListDocument,
};

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
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  description\n  images {\n    url\n    alt\n  }\n  price\n  categories {\n    name\n  }\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
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
export function graphql(source: "query ProductsGetList($take: Int!, $skip: Int!) {\n  products(take: $take, skip: $skip) {\n    data {\n      ...ProductListItem\n    }\n    ...ProductsGetCount\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query SuggestedProductsGetList {\n  products {\n    data {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').SuggestedProductsGetListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
