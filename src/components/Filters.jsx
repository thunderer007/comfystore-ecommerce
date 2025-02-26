import { useLoaderData, Form, Link } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";

const Filters = () => {
  const { meta } = useLoaderData();
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        type="search"
        name="search"
        label="search product"
        size="input-sm"
      />
      {/* CATEGORIES */}
      <FormSelect
        label="Search category"
        name="category"
        list={meta.categories}
        size="select-sm"
      />
      {/* COMPANIES */}
      <FormSelect
        label="Search companies"
        name="company"
        list={meta.companies}
        size="select-sm"
      />
      {/* ORDERS */}
      <FormSelect
        label="sort by"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
      />
      {/* RANGE */}
      <FormRange name="price" label="select price" size="range-sm" />
      {/* SHIPPING */}
      <FormCheckbox name="shipping" label="free shipping" size="checkbox-sm" />
      {/* BUTTON */}
      <button type="submit" className="btn btn-primary btn-sm">
        search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        reset
      </Link>
    </Form>
  );
};

export default Filters;
