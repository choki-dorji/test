import { Card, Col, Row, Button, Text } from "@nextui-org/react";
interface Card {
  id: number;
  price: number;
  title: string;
  description: string;
  image: string;
  onClicking: (event: Event) => void;
}
function Shop1(props: Card) {
  return (
    <Card css={{ w: "300px", h: "400px", margin: "10px" }}>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          {/* <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
            {props.title}
          </Text> */}
          {/* <Text h3 color="black">
            Acme camera
          </Text> */}
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={props.image}
          width="100%"
          height="90%"
          objectFit="cover"
          alt="Card example background"
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#ffffff66",
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Text size={12} weight="bold" transform="uppercase" color="#000">
              {props.title}
            </Text>
            <Text color="#000" size={16}>
              ${props.price}
            </Text>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Button
                flat
                auto
                rounded
                color="secondary"
                onClick={props.onClicking}
              >
                <Text
                  css={{ color: "inherit" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  Add to cart
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}

export default Shop1;
