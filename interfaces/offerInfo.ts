
export interface OfferResponse {
    currentPage:             number;
    pageSize:                number;
    totalResults:            number;
    currentResults:          number;
    totalPages:              number;
    availableSortingMethods: string[];
    sortBy:                  string;
    items:                   Item[];
    offers:                  Item[];
}

export interface Item {
    id:             string;
    title:          string;
    province:       Category;
    city:           string;
    link:           string;
    category:       Category;
    contractType:   Category;
    subcategory:    Category;
    salaryMin:      Category;
    salaryMax:      Category;
    salaryPeriod:   Category;
    experienceMin:  Category;
    workDay:        Category;
    study:          Category;
    published:      string;
    updated:        string;
    author:         Author;
    requirementMin: string;
    bold:           boolean;
    applications:   string;
    urgent:         boolean;
}

export interface Author {
    id:   string;
    name: string;
    uri:  string;
}

export interface Category {
    id:    number;
    value: string;
}
