/*!

=========================================================
* Vision UI Free Chakra - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-chakra
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-chakra/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// Chakra imports
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
	Tr,Td
} from '@chakra-ui/react';
// Styles for the circular progressbar
import medusa from 'assets/img/cardimgfree.jpg';
// Custom components
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardHeader from 'components/Card/CardHeader.js';
import BarChart from 'components/Charts/BarChart';
import LineChart from 'components/Charts/LineChart';
import IconBox from 'components/Icons/IconBox';
// Icons
import { CartIcon, DocumentIcon, GlobeIcon, RocketIcon, StatsIcon, WalletIcon } from 'components/Icons/Icons.js';
import DashboardTableRow from 'components/Tables/DashboardTableRow';
import TimelineRow from 'components/Tables/TimelineRow';
import React, { useEffect } from 'react';
import axios from 'axios';
import { AiFillCheckCircle } from 'react-icons/ai';
import { BiHappy } from 'react-icons/bi';
import { IoCheckmarkDoneCircleSharp, IoEllipsisHorizontal } from 'react-icons/io5';
// Data
import {
	barChartDataDashboard,
	barChartOptionsDashboard,
	lineChartDataDashboard,
	lineChartOptionsDashboard
} from 'variables/charts';
import { dashboardTableData, timelineData } from 'variables/general';
import { useLocation  } from 'react-router-dom'
export default function Dashboard() {
	const [obj, setObj] = React.useState([])

	const [url, setUrl] = React.useState("")
	const search = useLocation().search
    const searchParams = new URLSearchParams(search)
 
	const [error, setError] = React.useState('')

	const [First_ontentful_Paint_Score, setFirst_ontentful_Paint_Score] = React.useState('')
	const [First_Contentful_Paint_Value, setFirst_Contentful_Paint_Value] = React.useState('')
	
	const [Speed_Index_Score, setSpeed_Index_Score] = React.useState('')
	const [Speed_Index_Value, setSpeed_Index_Value] = React.useState('')
	
	const [Time_To_Interactive_Score, setTime_To_Interactive_Score] = React.useState('')
	const [Time_To_Interactive_Value, setTime_To_Interactive_Value] = React.useState('')
	
	const [First_Meaningful_Paint_Score, setFirst_Meaningful_Paint_Score] = React.useState('')
	const [First_Meaningful_Paint_Value, setFirst_Meaningful_Paint_Value] = React.useState('')
	
	const [CUMULATIVE_LAYOUT_SHIFT_SCORE, setCUMULATIVE_LAYOUT_SHIFT_SCORE] = React.useState('')
	const [EXPERIMENTAL_INTERACTION_TO_NEXT_PAINT, setEXPERIMENTAL_INTERACTION_TO_NEXT_PAINT] = React.useState('')
	const [EXPERIMENTAL_TIME_TO_FIRST_BYTE, setEXPERIMENTAL_TIME_TO_FIRST_BYTE] = React.useState('')
	const [FIRST_CONTENTFUL_PAINT_MS, setFIRST_CONTENTFUL_PAINT_MS] = React.useState('')
	const [FIRST_INPUT_DELAY_MS, setFIRST_INPUT_DELAY_MS] = React.useState('')
	const [LARGEST_CONTENTFUL_PAINT_MS, setLARGEST_CONTENTFUL_PAINT_MS] = React.useState('')
	const [OVERALL_CATEGORY, setOVERALL_CATEGORY] = React.useState('')


 
	  const fetchAPI = async ()=>{
		try{ 
 const response = await axios.get(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${searchParams.get('testUrl')}&key=AIzaSyCaSJ8Jzr6OZasuUnn-g7_hqH9vuphV4Xk`);
  
const lighthouseMetrics = { 
	'First Contentful Paint Score': response?.data?.lighthouseResult?.audits?.['first-contentful-paint']?.score ?? "N/A",
	'First Contentful Paint Value': response?.data?.lighthouseResult?.audits?.['first-contentful-paint']?.displayValue ?? "N/A" ,

	'Speed Index Score': response?.data?.lighthouseResult?.audits?.['speed-index']?.score ?? "N/A",
	'Speed Index Value': response?.data?.lighthouseResult?.audits?.['speed-index']?.displayValue ?? "N/A",

	'Time To Interactive Score': response?.data?.lighthouseResult?.audits?.['interactive']?.score ?? "N/A",
	'Time To Interactive Value': response?.data?.lighthouseResult?.audits?.['interactive']?.displayValue ?? "N/A",

	'First Meaningful Paint Score': response?.data?.lighthouseResult?.audits?.['first-meaningful-paint']?.score ?? "N/A",
	'First Meaningful Paint Value': response?.data?.lighthouseResult?.audits?.['first-meaningful-paint']?.displayValue ?? "N/A",

	"CUMULATIVE_LAYOUT_SHIFT_SCORE": response?.data?.loadingExperience?.metrics?.['CUMULATIVE_LAYOUT_SHIFT_SCORE']?.category ?? "N/A",

	"EXPERIMENTAL_INTERACTION_TO_NEXT_PAINT": response?.data?.loadingExperience?.metrics?.['EXPERIMENTAL_INTERACTION_TO_NEXT_PAINT']?.category ?? "N/A",
	"EXPERIMENTAL_TIME_TO_FIRST_BYTE": response?.data?.loadingExperience?.metrics?.['EXPERIMENTAL_TIME_TO_FIRST_BYTE']?.category ?? "N/A",
	"FIRST_CONTENTFUL_PAINT_MS": response?.data?.loadingExperience?.metrics?.['FIRST_CONTENTFUL_PAINT_MS']?.category ?? "N/A",
	"FIRST_INPUT_DELAY_MS": response?.data?.loadingExperience?.metrics?.['FIRST_INPUT_DELAY_MS']?.category ?? "N/A",
	"LARGEST_CONTENTFUL_PAINT_MS": response?.data?.loadingExperience?.metrics?.['LARGEST_CONTENTFUL_PAINT_MS']?.category ?? "N/A",
	"OVERALL_CATEGORY ": response?.data?.loadingExperience?.overall_category ?? "N/A",
	
	// 'First CPU Idle': json.lighthouseResult.audits['first-cpu-idle'],
	// 'Estimated Input Latency': json.lighthouseResult.audits['estimated-input-latency']
  };

setFirst_ontentful_Paint_Score(response?.data?.lighthouseResult?.audits?.['first-contentful-paint']?.score ?? "N/A")
setFirst_Contentful_Paint_Value(response?.data?.lighthouseResult?.audits?.['first-contentful-paint']?.displayValue ?? "N/A")
setSpeed_Index_Score(response?.data?.lighthouseResult?.audits?.['speed-index']?.score ?? "N/A")
setSpeed_Index_Value(response?.data?.lighthouseResult?.audits?.['speed-index']?.displayValue ?? "N/A")
setTime_To_Interactive_Score(response?.data?.lighthouseResult?.audits?.['interactive']?.score ?? "N/A")
setTime_To_Interactive_Value(response?.data?.lighthouseResult?.audits?.['interactive']?.displayValue ?? "N/A")
setFirst_Meaningful_Paint_Score(response?.data?.lighthouseResult?.audits?.['first-meaningful-paint']?.score ?? "N/A")
setFirst_Meaningful_Paint_Value(response?.data?.lighthouseResult?.audits?.['first-meaningful-paint']?.displayValue ?? "N/A")
setCUMULATIVE_LAYOUT_SHIFT_SCORE(response?.data?.loadingExperience?.metrics?.['CUMULATIVE_LAYOUT_SHIFT_SCORE']?.category ?? "N/A")
setEXPERIMENTAL_INTERACTION_TO_NEXT_PAINT(response?.data?.loadingExperience?.metrics?.['EXPERIMENTAL_INTERACTION_TO_NEXT_PAINT']?.category ?? "N/A")
setEXPERIMENTAL_TIME_TO_FIRST_BYTE(response?.data?.loadingExperience?.metrics?.['EXPERIMENTAL_TIME_TO_FIRST_BYTE']?.category ?? "N/A")
setFIRST_CONTENTFUL_PAINT_MS(response?.data?.loadingExperience?.metrics?.['FIRST_CONTENTFUL_PAINT_MS']?.category ?? "N/A")
setFIRST_INPUT_DELAY_MS(response?.data?.loadingExperience?.metrics?.['FIRST_INPUT_DELAY_MS']?.category ?? "N/A")
setLARGEST_CONTENTFUL_PAINT_MS(response?.data?.loadingExperience?.metrics?.['LARGEST_CONTENTFUL_PAINT_MS']?.category ?? "N/A")
setOVERALL_CATEGORY(response?.data?.loadingExperience?.overall_category ?? "N/A")
  const myMap = new Map(Object.entries(lighthouseMetrics));
  setObj(Array.from(myMap) )
  console.log("AAAAAAAAAA =======   ",lighthouseMetrics) 

		}catch(err){
			console.log("wwwwwwwwwww  err ",err);
		}
	  }

	  useEffect(()=>{ 
		fetchAPI()
	  },[])

  
	return (
		<Flex flexDirection='column' pt={{ base: '120px', md: '75px' }}>
			<SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px'> 
			 
				<Card>
					<CardBody>
						<Flex flexDirection='row' align='center' justify='center' w='100%'>
							<Stat me='auto'>
								<StatLabel fontSize='sm' color='gray.400' fontWeight='bold' pb='2px'>
								First Contentful Paint Value

								</StatLabel>
								<Flex>
									<StatNumber fontSize='lg' color='#fff'>
										 
									</StatNumber>
									<StatHelpText
										alignSelf='flex-end'
										justifySelf='flex-end'
										m='0px'
										color='green.400'
										fontWeight='bold'
										ps='3px'
										fontSize='md'>
										{First_Contentful_Paint_Value} 
									</StatHelpText>
								</Flex>
							</Stat>
							<IconBox as='box' h={'45px'} w={'45px'} bg='brand.200'>
								<WalletIcon h={'24px'} w={'24px'} color='#fff' />
							</IconBox>
						</Flex>
					</CardBody>
				</Card>

				<Card>
					<CardBody>
						<Flex flexDirection='row' align='center' justify='center' w='100%'>
							<Stat me='auto'>
								<StatLabel fontSize='sm' color='gray.400' fontWeight='bold' pb='2px'>
								Speed_Index_Value

								</StatLabel>
								<Flex>
									<StatNumber fontSize='lg' color='#fff'>
										 
									</StatNumber>
									<StatHelpText
										alignSelf='flex-end'
										justifySelf='flex-end'
										m='0px'
										color='green.400'
										fontWeight='bold'
										ps='3px'
										fontSize='md'>
										{Speed_Index_Value} 
									</StatHelpText>
								</Flex>
							</Stat>
							<IconBox as='box' h={'45px'} w={'45px'} bg='brand.200'>
								<WalletIcon h={'24px'} w={'24px'} color='#fff' />
							</IconBox>
						</Flex>
					</CardBody>
				</Card>
		 

				<Card>
					<CardBody>
						<Flex flexDirection='row' align='center' justify='center' w='100%'>
							<Stat me='auto'>
								<StatLabel fontSize='sm' color='gray.400' fontWeight='bold' pb='2px'>
								Time_To_Interactive_Value

								</StatLabel>
								<Flex>
									<StatNumber fontSize='lg' color='#fff'>
										 
									</StatNumber>
									<StatHelpText
										alignSelf='flex-end'
										justifySelf='flex-end'
										m='0px'
										color='green.400'
										fontWeight='bold'
										ps='3px'
										fontSize='md'>
										{Time_To_Interactive_Value} 
									</StatHelpText>
								</Flex>
							</Stat>
							<IconBox as='box' h={'45px'} w={'45px'} bg='brand.200'>
								<WalletIcon h={'24px'} w={'24px'} color='#fff' />
							</IconBox>
						</Flex>
					</CardBody>
				</Card>

				
				 
				<Card>
					<CardBody>
						<Flex flexDirection='row' align='center' justify='center' w='100%'>
							<Stat me='auto'>
								<StatLabel fontSize='sm' color='gray.400' fontWeight='bold' pb='2px'>
								First_Meaningful_Paint_Value

								</StatLabel>
								<Flex>
									<StatNumber fontSize='lg' color='#fff'>
										 
									</StatNumber>
									<StatHelpText
										alignSelf='flex-end'
										justifySelf='flex-end'
										m='0px'
										color='green.400'
										fontWeight='bold'
										ps='3px'
										fontSize='md'>
										{First_Meaningful_Paint_Value} 
									</StatHelpText>
								</Flex>
							</Stat>
							<IconBox as='box' h={'45px'} w={'45px'} bg='brand.200'>
								<WalletIcon h={'24px'} w={'24px'} color='#fff' />
							</IconBox>
						</Flex>
					</CardBody>
				</Card>


				<Card>
					<CardBody>
						<Flex flexDirection='row' align='center' justify='center' w='100%'>
							<Stat me='auto'>
								<StatLabel fontSize='sm' color='gray.400' fontWeight='bold' pb='2px'>
								First_Meaningful_Paint_Value

								</StatLabel>
								<Flex>
									<StatNumber fontSize='lg' color='#fff'>
										 
									</StatNumber>
									<StatHelpText
										alignSelf='flex-end'
										justifySelf='flex-end'
										m='0px'
										color='green.400'
										fontWeight='bold'
										ps='3px'
										fontSize='md'>
										{First_Meaningful_Paint_Value} 
									</StatHelpText>
								</Flex>
							</Stat>
							<IconBox as='box' h={'45px'} w={'45px'} bg='brand.200'>
								<WalletIcon h={'24px'} w={'24px'} color='#fff' />
							</IconBox>
						</Flex>
					</CardBody>
				</Card>



			</SimpleGrid>



				
			<Grid  >  
				<Flex flexDirection='row'>
					<Card gridArea={{ md: '2 / 1 / 3 / 2', '2xl': 'auto' }}>
						<CardHeader mb='24px'>
							<Flex direction='column'>
								<Text color='#fff' fontSize='lg' fontWeight='bold' mb='4px'>
								First ontentful Paint Score
								</Text>
								<Text color='gray.400' fontSize='sm'>
									description ....
								</Text>
							</Flex>
						</CardHeader>
						<Flex direction='column' justify='center' align='center'>
							<Box zIndex='-1'>
								<CircularProgress
									size={100}
									value={First_ontentful_Paint_Score}
									thickness={6}
									color='#582CFF'
									variant='vision'
									rounded>
									<CircularProgressLabel>
										<IconBox mb='20px' mx='auto' bg='brand.200' borderRadius='50%' w='48px' h='48px'>
											<Icon as={BiHappy} color='#fff' w='30px' h='30px' />
										</IconBox>
									</CircularProgressLabel>
								</CircularProgress>
							</Box>
							<Stack
								direction='row'
								spacing={{ sm: '42px', md: '68px' }}
								justify='center'
								maxW={{ sm: '270px', md: '300px', lg: '100%' }}
								mx={{ sm: 'auto', md: '0px' }}
								p='18px 22px'
								bg='linear-gradient(126.97deg, rgb(6, 11, 40) 28.26%, rgba(10, 14, 35) 91.2%)'
								borderRadius='20px'
								position='absolute'
								bottom='5%'>
								<Text fontSize='xs' color='gray.400'>
									0%
								</Text>
								<Flex direction='column' align='center' minW='80px'>
									<Text color='#fff' fontSize='28px' fontWeight='bold'>
									{First_ontentful_Paint_Score}
									</Text>
									<Text fontSize='xs' color='gray.400'>
										description .......
									</Text>
								</Flex>
								<Text fontSize='xs' color='gray.400'>
									100%
								</Text>
							</Stack>
						</Flex>
					</Card>
			
					<Card gridArea={{ md: '2 / 2 / 3 / 3', '2xl': 'auto' }}>
						<Flex direction='column'>
							<Flex justify='space-between' align='center' mb='40px'>
								<Text color='#fff' fontSize='lg' fontWeight='bold'>
								Speed_Index_Score
								</Text> 
							</Flex>
							<Flex direction={{ sm: 'column', md: 'row'  }} justify='center'>
								
								<Box mx={{ sm: 'auto', md: '0px' }}>
									<CircularProgress
										size={window.innerWidth >= 1024 ? 200 : window.innerWidth >= 768 ? 170 : 200}
										value={Speed_Index_Score}
										thickness={6}
										color='#05CD99'
										variant='vision'>
										<CircularProgressLabel>
											<Flex direction='column' justify='center' align='center'>
												<Text color='gray.400' fontSize='sm'>
													description
												</Text>
												<Text
													color='#fff'
													fontSize={{ md: '36px', lg: '50px' }}
													fontWeight='bold'
													mb='4px'>
													{Speed_Index_Score}
												</Text>
												<Text color='gray.400' fontSize='sm'>
													Total Score
												</Text>
											</Flex>
										</CircularProgressLabel>
									</CircularProgress>
								</Box>
							</Flex>
						</Flex>
					</Card> 
				</Flex>
			</Grid> 



			<Grid    > 
			<Flex flexDirection='row'>

				 <Card  >
					<Flex direction='column'>
						<Flex justify='space-between' align='center' mb='40px'>
							<Text color='#fff' fontSize='lg' fontWeight='bold'>
							Time To Interactive Score
							</Text> 
						</Flex>
						<Flex direction={{ sm: 'column', md: 'row'  }} justify='center'>
							 
							<Box mx={{ sm: 'auto', md: '0px' }}>
								<CircularProgress
									size={window.innerWidth >= 1024 ? 200 : window.innerWidth >= 768 ? 170 : 200}
									value={Time_To_Interactive_Score}
									thickness={6}
									color='#05CD99'
									variant='vision'>
									<CircularProgressLabel>
										<Flex direction='column' justify='center' align='center'>
											<Text color='gray.400' fontSize='sm'>
												description
											</Text>
											<Text
												color='#fff'
												fontSize={{ md: '36px', lg: '50px' }}
												fontWeight='bold'
												mb='4px'>
												 {Time_To_Interactive_Score}
											</Text>
											<Text color='gray.400' fontSize='sm'>
												Total Score
											</Text>
										</Flex>
									</CircularProgressLabel>
								</CircularProgress>
							</Box>
						</Flex>
					</Flex>
				</Card> 
		 
				<Card  >
					<Flex direction='column'>
						<Flex justify='space-between' align='center' mb='40px'>
							<Text color='#fff' fontSize='lg' fontWeight='bold'>
							First Meaningful Paint Score
							</Text> 
						</Flex>
						<Flex direction={{ sm: 'column', md: 'row'  }} justify='center'>
							 
							<Box mx={{ sm: 'auto', md: '0px' }}>
								<CircularProgress
									size={window.innerWidth >= 1024 ? 200 : window.innerWidth >= 768 ? 170 : 200}
									value={First_Meaningful_Paint_Score}
									thickness={6}
									color='#05CD99'
									variant='vision'>
									<CircularProgressLabel>
										<Flex direction='column' justify='center' align='center'>
											<Text color='gray.400' fontSize='sm'>
												description
											</Text>
											<Text
												color='#fff'
												fontSize={{ md: '36px', lg: '50px' }}
												fontWeight='bold'
												mb='4px'>
												 {First_Meaningful_Paint_Score}
											</Text>
											<Text color='gray.400' fontSize='sm'>
												Total Score
											</Text>
										</Flex>
									</CircularProgressLabel>
								</CircularProgress>
							</Box>
						</Flex>
					</Flex>
				</Card> 
				</Flex>
			</Grid> 




			 
			<Grid templateColumns={{ sm: '1fr', md: '1fr 1fr', lg: '2fr 1fr' }} gap='24px'>
				 
				<Card p='16px' overflowX={{ sm: 'scroll', xl: 'hidden' }}>
					<CardHeader p='12px 0px 28px 0px'>
						<Flex direction='column'>
							<Text fontSize='lg' color='#fff' fontWeight='bold' pb='8px'>
								Projects
							</Text>
							<Flex align='center'>
								<Icon as={IoCheckmarkDoneCircleSharp} color='teal.300' w={4} h={4} pe='3px' />
								<Text fontSize='sm' color='gray.400' fontWeight='normal'>
									<Text fontWeight='bold' as='span'>
										30 done
									</Text>{' '}
									this month.
								</Text>
							</Flex>
						</Flex>
					</CardHeader>
					<Table variant='simple' color='#fff'>
						<Thead>
							<Tr my='.8rem' ps='0px'>
								<Th
									ps='0px'
									color='gray.400'
									fontFamily='Plus Jakarta Display'
									borderBottomColor='#56577A'>
									Companies
								</Th>
								<Th color='gray.400' fontFamily='Plus Jakarta Display' borderBottomColor='#56577A'>
									Value
								</Th>
								 
							</Tr>
						</Thead>
						<Tbody>
						



						<Tr>
						
 

							<Td
								minWidth={{ sm: "250px" }}
								ps='0px'
								borderBottomColor='#56577A'
								border={ "none"}>
								<Flex align='center' py='.8rem' minWidth='100%' flexWrap='nowrap'>
								<Icon  h={"24px"} w={"24px"} me='18px' />
								<Text fontSize='sm' color='#fff' fontWeight='normal' minWidth='100%'>
								EXPERIMENTAL_INTERACTION_TO_NEXT_PAINT
								</Text>
								</Flex>
							</Td>
							<Td
								minWidth={{ sm: "250px" }}
								ps='0px'
								borderBottomColor='#56577A'
								border={"none"  }>
								<Flex align='center' py='.8rem' minWidth='100%' flexWrap='nowrap'>
								 
								<Text fontSize='sm' color='#fff' fontWeight='normal' minWidth='100%'>
									{EXPERIMENTAL_INTERACTION_TO_NEXT_PAINT}
								</Text>
								</Flex>
							</Td>
							</Tr>

						<Tr>
							<Td
								minWidth={{ sm: "250px" }}
								ps='0px'
								borderBottomColor='#56577A'
								border={"none"}>
								<Flex align='center' py='.8rem' minWidth='100%' flexWrap='nowrap'>
								 
								<Text fontSize='sm' color='#fff' fontWeight='normal' minWidth='100%'>
								FIRST_CONTENTFUL_PAINT_MS
								</Text>
								</Flex>
							</Td>
							<Td
								minWidth={{ sm: "250px" }}
								ps='0px'
								borderBottomColor='#56577A'
								border={"none"}>
								<Flex align='center' py='.8rem' minWidth='100%' flexWrap='nowrap'>
								 
								<Text fontSize='sm' color='#fff' fontWeight='normal' minWidth='100%'>
									{FIRST_CONTENTFUL_PAINT_MS}
								</Text>
								</Flex>
							</Td>
						</Tr>

						<Tr>
							<Td
								minWidth={{ sm: "250px" }}
								ps='0px'
								borderBottomColor='#56577A'
								border={"none"}>
								<Flex align='center' py='.8rem' minWidth='100%' flexWrap='nowrap'>
								<Icon  h={"24px"} w={"24px"} me='18px' />
								<Text fontSize='sm' color='#fff' fontWeight='normal' minWidth='100%'>
								LARGEST_CONTENTFUL_PAINT_MS
								</Text>
								</Flex>
							</Td>
							<Td
								minWidth={{ sm: "250px" }}
								ps='0px'
								borderBottomColor='#56577A'
								border={"none"}>
								<Flex align='center' py='.8rem' minWidth='100%' flexWrap='nowrap'>
							 
								<Text fontSize='sm' color='#fff' fontWeight='normal' minWidth='100%'>
									{LARGEST_CONTENTFUL_PAINT_MS}
								</Text>
								</Flex>
							</Td>
						</Tr>

						<Tr>
							<Td
								minWidth={{ sm: "250px" }}
								ps='0px'
								borderBottomColor='#56577A'
								border={"none"}>
								<Flex align='center' py='.8rem' minWidth='100%' flexWrap='nowrap'>
								<Icon   h={"24px"} w={"24px"} me='18px' />
								<Text fontSize='sm' color='#fff' fontWeight='normal' minWidth='100%'>
								OVERALL_CATEGORY
								</Text>
								</Flex>
							</Td>
							<Td
								minWidth={{ sm: "250px" }}
								ps='0px'
								borderBottomColor='#56577A'
								border={"none"}>
								<Flex align='center' py='.8rem' minWidth='100%' flexWrap='nowrap'>
								<Icon   h={"24px"} w={"24px"} me='18px' />
								<Text fontSize='sm' color='#fff' fontWeight='normal' minWidth='100%'>
									{OVERALL_CATEGORY}
								</Text>
								</Flex>
							</Td>
						</Tr>
						</Tbody>
					</Table>
				</Card>
			 
				 
			</Grid> 
		</Flex>
	);
}
