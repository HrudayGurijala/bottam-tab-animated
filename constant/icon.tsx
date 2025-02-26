import Feather from '@expo/vector-icons/Feather';

type IconProps = {
  color: string;
  // Add any other props you might pass in the future
}

export   const icon = {
    index: (props: IconProps) => <Feather name='home' size={24} color={props.color} />,
    explore: (props: IconProps) => <Feather name='compass' size={24} color={props.color} />,
    profile: (props: IconProps) => <Feather name='user' size={24} color={props.color} />
  }