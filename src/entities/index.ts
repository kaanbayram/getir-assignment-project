import { Record } from 'immutable';
export { BaseState, BaseStateFactory, IBaseState } from "./BaseState";
export { IBaseProduct, IProduct, IReadOnlyProducts, Product, ProductFactory, ProductFactoryFromJS } from "./IProducts";
export { CompanyFactory, IBaseCompany, ICompany, IReadOnlyCompany, Company, CompanyFactoryFromJS } from "./ICompanies";
export { SortingType } from './SortingType';
export { ItemType } from './ItemType';


type ReadonlyRecord<T extends object> = Record<T> & Readonly<T>;

export { ReadonlyRecord }