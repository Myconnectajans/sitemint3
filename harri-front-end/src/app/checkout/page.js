import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import CheckoutArea from "@components/checkout/checkout-area";

export const metadata = {
  title: "Ödeme - Hazırdizayn",
};

export default function Checkout() {
  return (
    <Wrapper>
      <Header style_2={true} />
      <CheckoutArea />
      <Footer />
    </Wrapper>
  );
}