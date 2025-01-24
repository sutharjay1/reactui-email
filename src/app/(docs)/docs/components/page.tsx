import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement>;

const Component: React.FC<Props> = (props) => {
  return <div {...props}>Component</div>;
};

export default Component;
