import React, { ReactNode, CSSProperties } from "react";

interface ContentAreaProps {
  backgroundImage?: string;
  position?: CSSProperties["backgroundPosition"];
  backgroundSize?: CSSProperties["backgroundSize"];
  height?: CSSProperties["height"];
  children?: ReactNode;
  contentText?: ContentTextProps;
  spacing?: CSSProperties;
}

interface ContentTextProps {
  title?: string;
  body?: string;
  textRight?: boolean;
}

const ContentText: React.FC<ContentTextProps> = ({
  title,
  body,
  textRight = false,
}) => {
  const style: React.CSSProperties = textRight
    ? {
        float: "right",
        textAlign: "right",
      }
    : {};

  return (
    <div className="w-2/5" style={style}>
      {title && <h2 className="text-7xl font-bold mb-4">{title}</h2>}
      {body && <p>{body}</p>}
    </div>
  );
};

const ContentArea: React.FC<ContentAreaProps> = ({
  backgroundImage,
  position = "center",
  backgroundSize = "cover",
  children,
  height,
  contentText,
  spacing,
}) => {
  const style: React.CSSProperties = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: position,
        backgroundSize,
        height,
        ...spacing,
      }
    : { height, ...spacing };

  return (
    <div className="content-area flex items-center" style={style}>
      <div className="container mx-auto px-16 ">
        {contentText && <ContentText {...contentText} />}

        {children}
      </div>
    </div>
  );
};

export default ContentArea;
