import Container from "./layout/container";

export const CardLoader = () => {
  return (
    <div className="mx-auto bg-white  shadow-lg w-96 rounded-2xl my-20">
      <div className="h-48 p-3 overflow-hidden bg-gray-200 animate-pulse"></div>
      <div className="p-3 h-">
        <div className="grid grid-cols-3 gap-4 mt-2">
          <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-8 col-span-2 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-8 bg-gray-200 rounded  animate-pulse"></div>
          <div className="..."></div>
          <div className="col-span-2 ..."></div>
        </div>
      </div>
    </div>
  );
};

export const CardLoaderPage = () => {
  return (
    <Container>
      <div className="flex gap-8 flex-col md:flex-row">
        <CardLoader />
        <CardLoader />
        <CardLoader />
        <CardLoader />
      </div>
    </Container>
  );
};
