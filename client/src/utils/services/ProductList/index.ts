import axios from "axios";
import { toast } from "react-toastify";

const options = {
    headers: {
        'Content-Type': 'application/json'
    }
}

const body = {
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
}

export const getCategory = async  () => {
    try {
        const response = await axios.post('/graphql', body, options);
        return response
    } catch (error) {
        return toast.error("Could not fectch data", {position: "top-right"})
    }
}
