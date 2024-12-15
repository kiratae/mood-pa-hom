import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";

export function AppFooter() {
  return (
    <Footer container className="shadow-none py-3">
      <FooterCopyright href="#" by="มุดผ้าห่ม" year={2024} />
    </Footer>
  );
}
