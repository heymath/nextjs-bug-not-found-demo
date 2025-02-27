import {GetServerSideProps, InferGetServerSidePropsType} from "next";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function TestPage({ message }: Props) {
    return (
        <div>
            <h1>TEST PAGE</h1>
            <div>
                {message}
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps<{
    message: string
}> = async (context) => {
    if (context.query.notFound === '1') {
        // APP ROUTER not-found.tsx
        return {
            notFound: true,
        } as const;
    }

    if (context.query.internalError === '1') {
        // PAGES ROUTER _error.tsx
        throw new Error('Custom Internal Error');
    }

    return {
        props: {
            message: 'hello',
        },
    }
};
