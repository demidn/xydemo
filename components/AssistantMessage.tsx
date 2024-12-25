import React, { useEffect, useState } from "react";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypeRaw from "rehype-raw";
import { Blockquote, Em, Flex, Heading, HoverCard, Link, Separator, Strong, Text } from "@radix-ui/themes";
import Markdown from "react-markdown";


export interface ClientTextEvent {
  type: 'text';
  id: string;
  text: string;
  annotations: { text: string; file: string, quote: string }[];
  show: boolean;
}

interface AssistantMessageProps {
  message: ClientTextEvent;
  processing?: boolean;
  onActionButtonClicked?: (...args: unknown[]) => void;
  onAddFile?: (...args: unknown[]) => void;
  onLaunchApp?: (...args: unknown[]) => void;
}

export const AssistantMessage = ({
  message,
  className,
}: AssistantMessageProps & { className?: string }) => {

  const [text, setText] = useState("");

  useEffect(() => {
    let text = message.text.replace(/【[^】]*】/g, "");
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    message.annotations && message.annotations.forEach((annotation, index) => {
      const path = annotation.text.replace(/sandbox:(\/)?/g, "");
      if (text.toLowerCase().includes(path.toLowerCase())) {
        text = text.replace(/\[.*?]\(sandbox:\/.*?\)/g, "");
      }
    });
    setText(text);
  }, [message]);

  return (
    <Flex direction="column" gap="2" className={className}>
      <Markdown
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm, remarkBreaks]}
        components={{
          h1({ children }) {
            return (
              <Heading as="h1" mt="2">
                {children}
              </Heading>
            );
          },
          h2({ children }) {
            return (
              <Heading as="h2" mt="2">
                {children}
              </Heading>
            );
          },
          h3({ children }) {
            return (
              <Heading as="h3" mt="2">
                {children}
              </Heading>
            );
          },
          h4({ children }) {
            return (
              <Heading as="h4" mt="2">
                {children}
              </Heading>
            );
          },
          h5({ children }) {
            return (
              <Heading as="h5" mt="2">
                {children}
              </Heading>
            );
          },
          h6({ children }) {
            return (
              <Heading as="h6" mt="2">
                {children}
              </Heading>
            );
          },
          a({ children, href }) {
            const annotation = message.annotations && message.annotations.find((c) => c.text === children);
            if (annotation && annotation.quote) {
              return (
                <HoverCard.Root>
                  <HoverCard.Trigger>
                    <Link href={href} target="_blank">
                      {children}
                    </Link>
                  </HoverCard.Trigger>
                  <HoverCard.Content size="1" maxWidth="200px">
                    <Text as="div" size="1">
                      {annotation.quote}
                    </Text>
                  </HoverCard.Content>
                </HoverCard.Root>
              );
            }
          },
          p({ children }) {
            return (
              <Text as="p" mt="1">
                {children}
              </Text>
            );
          },
          span({ children }) {
            return <Text>{children}</Text>;
          },
          blockquote({ children }) {
            return (
              <Blockquote size="5" mt="3" mb="3">
                {children}
              </Blockquote>
            );
          },
          em({ children }) {
            return <Em>{children}</Em>;
          },
          strong({ children }) {
            return <Strong>{children}</Strong>;
          },
          hr() {
            return <Separator orientation="horizontal" size="4" mt="2" />;
          },

        }}
      >{text}</Markdown>
    </Flex>
  );
};

