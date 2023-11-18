import { SpinnerRoundOutlined } from 'spinners-react/lib/esm/SpinnerRoundOutlined'

type Props = {
  color?: string
}

function PageLoader({color:spinnerColor = '#F97316'}: Props) {
  return (
    <>
      <div className=''>Page is loading. please wait....</div>
      <SpinnerRoundOutlined color={spinnerColor} className='loadingSpinner'/>
    </>
  );
}

export default PageLoader