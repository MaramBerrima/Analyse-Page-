import {
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Grid,
  Icon,
  Progress,
  SimpleGrid,
  Spacer,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  Input
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
// Styles for the circular progressbar
import medusa from 'assets/img/cardimgfree.jpg'
// Custom components
import Card from 'components/Card/Card.js'
import CardBody from 'components/Card/CardBody.js'
import CardHeader from 'components/Card/CardHeader.js'
import BarChart from 'components/Charts/BarChart'
import LineChart from 'components/Charts/LineChart'
import IconBox from 'components/Icons/IconBox'
// Icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  RocketIcon,
  StatsIcon,
  WalletIcon
} from 'components/Icons/Icons.js'
import DashboardTableRow from 'components/Tables/DashboardTableRow'
import TimelineRow from 'components/Tables/TimelineRow'
import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import { BiHappy } from 'react-icons/bi'
import {
  IoCheckmarkDoneCircleSharp,
  IoEllipsisHorizontal
} from 'react-icons/io5'
// Data
import {
  barChartDataDashboard,
  barChartOptionsDashboard,
  lineChartDataDashboard,
  lineChartOptionsDashboard
} from 'variables/charts'
import { dashboardTableData, timelineData } from 'variables/general'
import { Redirect } from 'react-router-dom'

export default function Dashboard () {
  const [value1, setValue1] = React.useState('')
  const handleChange1 = event => setValue1(event.target.value)

  const [value2, setValue2] = React.useState('')
  const handleChange2 = event => setValue2(event.target.value)

  const [value3, setValue3] = React.useState('')
  const handleChange3 = event => setValue3(event.target.value)

  const [redirect1, setRedirect1] = React.useState(false)
  const [redirect2, setRedirect2] = React.useState(false)

  if (redirect1) {
    return <Redirect to="/admin/dashboard" />;
  }

  if (redirect2) {
    return <Redirect to="/admin/dashboard" />;
  }

  return (
    <Flex flexDirection='column' pt={{ base: '120px', md: '75px' }}>
      <Grid
        templateColumns={{ sm: '1fr', md: '1fr 1fr', '2xl': '2fr 1.2fr 1.5fr' }}
        my='26px'
        gap='18px'
      >
        <Card gridArea={{ md: '2 / 1 / 3 / 2', '2xl': 'auto' }}>
          <CardHeader mb='24px'>
            <Flex direction='column'>
              <Text color='#fff' fontSize='lg' fontWeight='bold' mb='4px'>
                test 1
              </Text>
              <Text color='gray.400' fontSize='sm'>
                description
              </Text>
            </Flex>
          </CardHeader>

          <Flex direction='column' justify='center' align='center'>
            <Stack
              direction='row'
              spacing={{ sm: '42px', md: '68px' }}
              justify='center'
              maxW={{ sm: '270px', md: '300px', lg: '100%' }}
              mx={{ sm: 'auto', md: '0px' }}
              p='18px 22px'
              bg='linear-gradient(126.97deg, rgb(99 112 187) 28.26%, rgb(31 66 255) 91.2%)'
              borderRadius='20px'
              position='absolute'
              bottom='5%'
            >
              <Text fontSize='xs' color='gray.400'></Text>
              <Flex direction='column' align='center' minW='80px'>
                <Button
                  rightIcon={<ArrowForwardIcon />}
                  colorScheme='teal'
                  variant='solid'
                  onClick={() => {
                    setRedirect2(true)
                  }}
                >
                  Diagnostique d'un Seul Site Web
                </Button>
              </Flex>
              <Text fontSize='xs' color='gray.400'></Text>
            </Stack>
          </Flex>
          <Flex
            direction='column'
            p='22px'
            pe={{ sm: '22e', md: '8px', lg: '22px' }}
            minW={{ sm: '220px', md: '140px', lg: '220px' }}
            bg='linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)'
            borderRadius='20px'
            mb='20px'
          >
            <Text
              color='#ffffff'
              fontSize='sm'
              mb='4px'
              value={value1}
              onChange={handleChange1}
            >
              URL
            </Text>

            <Input placeholder='Basic usage' />
          </Flex>
        </Card>
        {/* Referral Tracking */}
        <Card gridArea={{ md: '2 / 2 / 3 / 3', '2xl': 'auto' }}>
          <CardHeader mb='24px'>
            <Flex direction='column'>
              <Text color='#fff' fontSize='lg' fontWeight='bold' mb='4px'>
                test 1
              </Text>
              <Text color='gray.400' fontSize='sm'>
                description
              </Text>
            </Flex>
          </CardHeader>

          <Flex direction='column' justify='center' align='center'>
            <Stack
              direction='row'
              spacing={{ sm: '42px', md: '68px' }}
              justify='center'
              maxW={{ sm: '270px', md: '300px', lg: '100%' }}
              mx={{ sm: 'auto', md: '0px' }}
              p='18px 22px'
              bg='linear-gradient(126.97deg, rgb(99 112 187) 28.26%, rgb(31 66 255) 91.2%)'
              borderRadius='20px'
              position='absolute'
              bottom='5%'
            >
              <Text fontSize='xs' color='gray.400'></Text>
              <Flex direction='column' align='center' minW='80px'>
                <Button
                  rightIcon={<ArrowForwardIcon />}
                  colorScheme='teal'
                  variant='solid'
                  onClick={() => {
                    setRedirect1(true)
                  }}
                >
                  Comparaison Entre 2 Site Web
                </Button>
              </Flex>
              <Text fontSize='xs' color='gray.400'></Text>
            </Stack>
          </Flex>
          <Flex
            direction='column'
            p='22px'
            pe={{ sm: '22e', md: '8px', lg: '22px' }}
            minW={{ sm: '220px', md: '140px', lg: '220px' }}
            bg='linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)'
            borderRadius='20px'
            mb='20px'
          >
            <Text
              color='#ffffff'
              fontSize='sm'
              mb='4px'
              value={value2}
              onChange={handleChange2}
            >
              URL 1
            </Text>
            <Input placeholder='Basic usage' />
            <Text
              color='#ffffff'
              fontSize='sm'
              mb='4px'
              value={value3}
              onChange={handleChange3}
            >
              URL 2
            </Text>
            <Input placeholder='Basic usage' />
            <br />
            <br />
            <br />{' '}
          </Flex>
        </Card>
      </Grid>
    </Flex>
  )
}
