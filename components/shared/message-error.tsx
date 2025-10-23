type MessageErrorProps = {
  message: string | undefined;
};

export const MessageError = ({ message }: MessageErrorProps) => {
  return <p className="text-xs text-primary">{message}</p>;
};
