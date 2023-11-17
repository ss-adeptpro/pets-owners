import { SpinnerRoundOutlined } from 'spinners-react/lib/esm/SpinnerRoundOutlined'

type Props = {
  color?: string
}

function Loader({color:spinnerColor = '#F97316'}: Props) {
  return (
    <>
      <SpinnerRoundOutlined color={spinnerColor} className='loadingSpinner'/>
    </>
  );
}

export default Loader