import { Card, Grid, Text, Link, Button } from "@nextui-org/react";

interface Card {
  id: number;
  price: number;
  title: string;
  description: string;
  image: string;
}

export default function AddToCard(props: Card) {
  return (
    <Card css={{ p: "$6", mw: "100%", marginBottom: "10px" }} key={props.id}>
      <Card.Header>
        <img alt="nextui logo" src={props.image} width="90px" height="90px" />
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              {props.title}
            </Text>
          </Grid>
          <Text p css={{ lineHeight: "$xs" }}>
            ${props.price}
          </Text>
        </Grid.Container>
      </Card.Header>
    </Card>
  );
}
