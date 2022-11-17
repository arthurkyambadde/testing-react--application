type helloProps = {
  name?: string;
};

export const Hello = (props: helloProps) => {
  return <div>Hey {props.name}</div>;
};
