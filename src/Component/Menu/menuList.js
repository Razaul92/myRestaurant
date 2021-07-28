import { useEffect, useState } from "react";
import MealItem from "../Meals/MealItem/MealItem";
import classes from "../Meals/AvailableMeals.module.css";
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import { Fragment } from "react";

const Menu = (props) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://foodorderapp-c3dc5-default-rtdb.firebaseio.com/menu.json"
      );

      if (!response.ok) {
        throw new Error("Something went Wrong!!");
      }

      const responseData = await response.json();
      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };
    // try {// since we are using async this will does not work
    //   fetchMeals();
    // } catch (error) {
    //   setIsLoading(false);
    //   setHttpError(error.message);
    // }

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section>
        <div className="centered">
          <LoadingSpinner />
        </div>
        <p className={classes.mealsLoading}>Loading....</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.mealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <Fragment>
      <section className={classes.meals}>
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      </section>
    </Fragment>
  );
};

export default Menu;
