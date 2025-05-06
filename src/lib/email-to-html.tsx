import { render as emailRender } from "@react-email/render";
import { JSXElementConstructor, ReactElement } from "react";

export const render = async (
  template: ReactElement<unknown, string | JSXElementConstructor<unknown>>,
) => {
  const html = await emailRender(template, {
    pretty: true,
  });

  return html;
};
