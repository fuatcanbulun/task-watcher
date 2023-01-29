import { PageLayoutContainer, PageLayoutBody } from "./style";

const PageLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <PageLayoutContainer>
      <PageLayoutBody>{children}</PageLayoutBody>
    </PageLayoutContainer>
  );
};

export default PageLayout;
