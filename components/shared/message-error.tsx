type MessageErrorProps = {
  message: string | undefined;
};

export const MessageError = ({ message }: MessageErrorProps) => {
  return <p className="text-xs absolute -bottom-4 text-red-600">{message}</p>;
};
