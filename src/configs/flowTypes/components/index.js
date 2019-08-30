// @flow
// categorySelector
type OptionCategorySelector = { id: number, name: string };

export type PropsCategorySelector = {
  options: Array<OptionCategorySelector>,
  onChange: (value: string) => void,
  value: string | void,
};

// inputSearch
export type PropsInputSearch = {
  onChange: () => void,
  value: string,
};

// Logo
export type PropsLogo = {
  image: string,
  width: number,
  height: number,
};

type OptionNavItems = Array<{ name: string, path: string }>;

export type PropsNavItems = { navItems: OptionNavItems };
