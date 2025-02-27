import React, { ComponentPropsWithRef } from "react";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import { MarkdownRoot } from "./Markdown.styled";

const REMARK_PLUGINS = [remarkGfm];

export interface MarkdownProps
  extends ComponentPropsWithRef<typeof ReactMarkdown> {
  className?: string;
  disallowHeading?: boolean;
  unstyleLinks?: boolean;
  children: string;
}

const Markdown = ({
  className,
  children = "",
  disallowHeading = false,
  unstyleLinks = false,
  ...rest
}: MarkdownProps): JSX.Element => {
  const additionalOptions = {
    ...(disallowHeading && {
      disallowedElements: ["h1", "h2", "h3", "h4", "h5", "h6"],
      unwrapDisallowed: true,
    }),
  };

  return (
    <MarkdownRoot
      className={className}
      remarkPlugins={REMARK_PLUGINS}
      linkTarget={"_blank"}
      unstyleLinks={unstyleLinks}
      {...additionalOptions}
      {...rest}
    >
      {children}
    </MarkdownRoot>
  );
};

export default Markdown;
