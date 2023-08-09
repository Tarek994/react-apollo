import { gql, useMutation } from "@apollo/client";


interface CreatePostInput {
    variables: {
        input: {
            title: string,
            body: string
        },
    }
}

