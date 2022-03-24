import React from 'react';

import { Category } from '../../utils/types/productList';
import classes from './ProductList.module.css';
import ArticleCard from "../ArticleCard"

type State = {
  categories: Category[];
};

class ArticleList extends React.Component {
  state: State = {
    categories: [],
  };

  componentDidMount() {
    const xhr = new XMLHttpRequest();

    xhr.open('POST', '/graphql');
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(JSON.stringify({
      query: `{
        categories(ids: "156126", locale: de_DE) {
          name
          articleCount
          childrenCategories {
            name
            urlPath
          }
          categoryArticles(first: 50) {
            articles {
              name
              variantName
              prices {
                currency
                regular {
                  value
                }
              }
              images(
                format: WEBP
                maxWidth: 200
                maxHeight: 200
                limit: 1
              ) {
                path
              }
            }
          }
        }
      }`,
    }));

    xhr.onload = () => {
      if (xhr.status === 200) {
        let response = JSON.parse(xhr.response);

        this.setState({ categories: response.data.categories });
      }
    }
  }

  render() {
    const articles = this.state.categories.map((category) => {
      return category.categoryArticles.articles.map((article) => {
        return <ArticleCard article={article} />;
      });
    });

    return (
      <div className={classes.page}>
        <div className={classes.header}>
          <strong>home24</strong>
          <input placeholder='Search' />
        </div>

        <div className={classes.sidebar}>
          <h3>Kategorien</h3>
          {this.state.categories.length ? (
            <ul>
              {this.state.categories[0].childrenCategories.map(({ name, urlPath }) => {
                return (
                  <li>
                    <a href={`/${urlPath}`}>{name}</a>
                  </li>
                );
              })}
            </ul>
          ) : (
            'Loading...'
          )}
        </div>

        <div className={classes.content}>
          {this.state.categories.length ? (
            <h1>
              {this.state.categories[0].name}
              <small> ({this.state.categories[0].articleCount})</small>
            </h1>
          ) : (
            'Loading...'
          )}
          <div className={classes.articles}>{articles}</div>
        </div>

        <div className={classes.footer}>
          Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und Versandkosten.
        </div>
      </div>
    );
  }
}

const PLP = () => {
  return <ArticleList />;
};

export default PLP;
