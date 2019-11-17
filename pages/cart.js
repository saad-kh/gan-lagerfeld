import { useContext, useState, useEffect } from "react";
import { StateContext } from "../src/state";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  Grid,
  Paper,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography
} from "@material-ui/core";

const categoryMap = {
  "0_0_85": 5,
  "0_85_85": 107,
  "0_128_128": 32,
  "0_119_119": 110,
  "255_0_0": 49,
  "255_85_0": 104
};

const products = [
  {
    id: "38",
    product_id: "32966016805",
    url:
      "https://www.aliexpress.com/item/Vintage-Women-Loose-Denim-Skirt-2019-Jean-Skirts-Ladies-New-Elastic-Waist-Pocket-Washed-Casual-Female/32966016805.html?src=facebook&aff_short_key=cCZtBY5p&isdl=y&aff_platform=true",
    picture:
      "https://ae01.alicdn.com/kf/HTB1f1ceaEjrK1RkHFNRq6ySvpXat/Vintage-Women-Loose-Denim-Skirt-2019-Jean-Skirts-Ladies-New-Elastic-Waist-Pocket-Washed-Casual-Female.jpg",
    name:
      "Vintage Women Loose Denim Skirt 2019 Jean Skirts Ladies New Elastic Waist Pocket Washed Casual",
    price: "4000",
    old_price: "2560",
    currency_id: "1",
    description:
      "Vintage Women Loose Denim Skirt 2019 Jean Skirts Ladies New Elastic Waist Pocket Washed Casual",
    category_id: "32",
    rating: 4.1
  },
  {
    id: "235",
    product_id: "4000313728275",
    url:
      "https://www.aliexpress.com/item/Women-Tweed-Skirt-2020-New-Spring-Autumn-Skirt-Korean-High-Waist-Slim-Sweet-Mini-Short-Skirt/4000313728275.html?src=facebook&aff_short_key=cCZtBY5p&isdl=y&aff_platform=true",
    picture:
      "https://ae01.alicdn.com/kf/Hb1cbbd85493a46bea1d0c25ded3c896fi/Women-Tweed-Skirt-2020-New-Spring-Autumn-Skirt-Korean-High-Waist-Slim-Sweet-Mini-Short-Skirt.jpg",
    name:
      "Women Tweed Skirt 2020 New Spring Autumn Skirt Korean High Waist Slim Sweet Mini Short Skirt",
    price: "2500",
    old_price: "1125",
    currency_id: "1",
    description:
      "Women Tweed Skirt 2020 New Spring Autumn Skirt Korean High Waist Slim Sweet Mini Short Skirt",
    category_id: "32",
    rating: 4.6
  },
  {
    id: "253",
    product_id: "4000103783788",
    url:
      "https://www.aliexpress.com/item/long-skirt-tulle-skirt-skirts-womens-jupe-femme-faldas-mujer-moda-2019-jupe-Women-Elastic-Waist/4000103783788.html?src=facebook&aff_short_key=cCZtBY5p&isdl=y&aff_platform=true",
    picture:
      "https://ae01.alicdn.com/kf/HTB1EPjLaeT2gK0jSZFvq6xnFXXa4/long-skirt-tulle-skirt-skirts-womens-jupe-femme-faldas-mujer-moda-2019-jupe-Women-Elastic-Waist.jpg",
    name:
      "long skirt tulle skirt skirts womens jupe femme faldas mujer moda 2019 jupe Women Elastic Waist",
    price: "744",
    old_price: "372",
    currency_id: "1",
    description:
      "long skirt tulle skirt skirts womens jupe femme faldas mujer moda 2019 jupe Women Elastic Waist",
    category_id: "32",
    rating: 4.2
  }
];

const useProducts = partId => {
  return products;
};

function Cart() {
  const { state, dispatch } = useContext(StateContext);
  const products = useProducts(state.selectedPartId);
  return (
    <div className="container">
      <div className="title">based on our ai, we suggest you</div>
      <div className="cart">
        {products === null ? (
          <div className="progress">
            <CircularProgress />
          </div>
        ) : (
          <Grid container spacing={2}>
            {products.map(product => (
              <Grid key={product.id} item>
                <div className="card">
                  <Card>
                    <CardHeader title={product.name.slice(0, 20)} />
                    <div
                      className="card-image"
                      style={{ backgroundImage: `url(${product.picture})` }}
                    />
                    <CardContent>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {product.name}
                      </Typography>
                    </CardContent>
                  </Card>
                  <a className="link" href={product.url}></a>
                </div>
              </Grid>
            ))}
          </Grid>
        )}
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100vw;
          height: 100vh;
        }

        .title {
          margin: 15px;
          font-size: 32px;
          font-weight: 400;
          font-family: Poppins;
        }

        .progress {
          width: 100%;
          height: 100%;
          background-color: rgba(255, 255, 255, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 15px;
        }

        .card {
          position: relative;
          max-width: 300px;
          max-height: 600px;
        }

        .card-image {
          width: 100%;
          height: 400px;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        }

        .link {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
      `}</style>
    </div>
  );
}

export default Cart;
