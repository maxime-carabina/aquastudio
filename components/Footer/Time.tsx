type TimeProps = {
  time: Date;
};

export default function Time(props: TimeProps) {
  const { time } = props;

  const formattedTime = time.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return <span>{formattedTime.split(':').join(' : ')}</span>;
}
