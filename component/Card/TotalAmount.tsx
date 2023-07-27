import { Card, Text } from "@nextui-org/react";
interface Card1 {
  id: number;
  price: number;
  title: string;
  description: string;
  image: string;
}
export default function Amount(props: Card1) {
  const totalPrice = props.data.reduce(
    (acc: number, item: Card1) => acc + item.price,
    0
  );
  return (
    <Card variant="bordered" css={{ mw: "100%", marginBottom: "10px" }}>
      <Card.Body>
        <Text>${totalPrice}</Text>
      </Card.Body>
    </Card>
  );
}
