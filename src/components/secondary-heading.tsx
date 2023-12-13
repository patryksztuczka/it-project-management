interface Props {
  text: string;
}

const SecondaryHeading = ({ text }: Props) => {
  return <h2 className="text-5xl font-bold tracking-wide">{text}</h2>;
};

export default SecondaryHeading;
