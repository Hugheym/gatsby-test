import * as React from 'react';
import {Link as GatsbyLink} from 'gatsby';
import {chakra } from '@chakra-ui/react';

const ChakraLink = chakra(GatsbyLink, {
    baseStyle: {
        transition : 'all 0.2s ease-in-out',
        cursor : 'pointer',
        textDecoration : 'none',
        outline : 'none',
        _hover : {
            textDecoration : 'green wavy underline',
        },
        _active : {
            textDecoration : 'underline',
        },
    },
    activeStyle : {
        textDecoration : 'underline',
    },
})

export const Link = (props) => <ChakraLink {...props} />;