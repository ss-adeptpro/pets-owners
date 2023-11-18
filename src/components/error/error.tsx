
/* TODO: Build an error boundary component to catch errors anywhere in application and display a fallback UI */
const Error = ({errorMsg}: {errorMsg:string}) => {
  return (
    <div className={"errorContainer"}>
        Oops! { errorMsg && errorMsg}
    </div>
  );
}

export default Error