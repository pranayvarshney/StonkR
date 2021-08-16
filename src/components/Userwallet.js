import React from 'react'
import {
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { BsPerson } from 'react-icons/bs';
import { FiServer } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { RiMoneyDollarBoxLine, RiHandCoinFill } from 'react-icons/ri';


function StatsCard(props) {
    const { title, stat, icon } = props;
    return (
        <Stat
            px={{ base: 2, md: 4 }}
            py={'5'}
            shadow={'xl'}
            border={'1px solid'}
            borderColor={useColorModeValue('gray.800', 'gray.500')}
            rounded={'lg'}>
            <Flex justifyContent={'space-between'}>
                <Box pl={{ base: 2, md: 4 }}>
                    <StatLabel fontWeight={'medium'} isTruncated>
                        {title}
                    </StatLabel>
                    <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                        {stat}
                    </StatNumber>
                </Box>
                <Box
                    my={'auto'}
                    color={useColorModeValue('gray.800', 'gray.200')}
                    alignContent={'center'}>
                    {icon}
                </Box>
            </Flex>
        </Stat>
    );
}

export default function Userwallet() {
    return (
        <Box maxW="7xl" mx={'auto'} pt={2} px={{ base: 2, sm: 12, md: 17 }}>
            <chakra.h1
                textAlign={'center'}
                fontSize={'4xl'}
                py={1}
                fontWeight={'bold'}>
                Your Wallet
            </chakra.h1>
            <SimpleGrid rows={{ base: 1, md: 1 }} spacing={{ base: 5, lg: 8 }}>
                <StatsCard
                    title={'Remainging Cash'}
                    stat={'$4545'}
                    icon={<RiMoneyDollarBoxLine size={'3em'} />}
                />
                <StatsCard
                    title={'Assets Worth'}
                    stat={'1,000'}
                    icon={<RiHandCoinFill size={'3em'} />}
                />
               </SimpleGrid>
        </Box>
    );
}