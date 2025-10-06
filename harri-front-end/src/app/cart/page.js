import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import CartArea from "@components/cart/cart-area";

export const metadata = {
  title: "Sepet - Hazırdizayn",
};

export default function Cart() {
  return (
    <Wrapper>
      <Header style_2={true} />
      <CartArea />
      <Footer />
    </Wrapper>
  );
}
