import {NextPage} from "next";
import NextErrorComponent, {ErrorProps} from "next/error";

const ErrorPage: NextPage<ErrorProps> = ({ statusCode }: ErrorProps) => {
    console.log('_error.tsx', statusCode);
    return (
        <div>
            <h1>_error.tsx {statusCode}</h1>
        </div>
    );
};

ErrorPage.getInitialProps = async (context) => {
    console.log('__error.tsx getInitialProps');
    const props = await NextErrorComponent.getInitialProps(context);

    return {
        ...props,
    };
}

export default ErrorPage;
