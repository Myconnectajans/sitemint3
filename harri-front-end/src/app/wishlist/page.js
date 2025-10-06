import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import WishlistArea from "@components/wishlist/wishlist-area";

export const metadata = {
  title: "Favorilerim - Hazırdizayn",
};

export default function Wishlist() {
  return (
    <Wrapper>
      <Header style_2={true} />
      <WishlistArea />
      <Footer />
    </Wrapper>
  );
}
