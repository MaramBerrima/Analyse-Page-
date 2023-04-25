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
	Tr
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

	// const [speedScore, setSpeedScore] = React.useState('')
	// const [loadTime, setLoadTime] = React.useState('')
	// const [pageSize, setPageSize] = React.useState('')
	// const [opportunities, setOpportunities] = React.useState('')
	// const [imageOptimization, setImageOptimization] = React.useState('')
	// const [scriptOptimization, setScriptOptimization] = React.useState('')
	// const [performanceDiagnostics, setPerformanceDiagnostics] = React.useState('')

	// const [interactiveTime, setInteractiveTime] = React.useState('')
	// const [cachingSuggestions, setCachingSuggestions] = React.useState('')
	// const [userExperience, setUserExperience] = React.useState('')
	// const [browserCompatibility, setBrowserCompatibility] = React.useState('')
	// const [codeAnalysis, setCodeAnalysis] = React.useState('')

	const [firstContentfulPaint, setFirstContentfulPaint] = React.useState('')
	const [speedIndex, setSpeedIndex] = React.useState('')
	const [totalBlockingTime, setTotalBlockingTime] = React.useState('')
	const [largestContentfulPaint, setLargestContentfulPaint] = React.useState('')
	const [cumulativeLayoutShift, setCumulativeLayoutShift] = React.useState('')

 

	const [error, setError] = React.useState('')

	const handleSubmit = async () => { 
		try {
		  const response = await axios.get(
			`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${searchParams.get('testUrl')}&key=AIzaSyCaSJ8Jzr6OZasuUnn-g7_hqH9vuphV4Xk`
		  ); 
		 const data = response.data; 
		
		 setSpeedScore( data.lighthouseResult.categories.performance.score);
		 setLoadTime((data.loadingExperience.metrics.FIRST_CONTENTFUL_PAINT_MS.category === "FAST") ? data.loadingExperience.metrics.FIRST_CONTENTFUL_PAINT_MS.percentile / 1000 : "N/A");
		 setPageSize( (data.loadingExperience.metrics.TOTAL_BYTES.category === "FAST") ? Math.round(data.loadingExperience.metrics.TOTAL_BYTES.percentile / 1024) : "N/A");
		 setOpportunities( data.lighthouseResult.audits["opportunities"].score);
		 setImageOptimization( Math.round(data.lighthouseResult.audits["uses-optimized-images"].score * 100));
		 setScriptOptimization( Math.round(data.lighthouseResult.audits["uses-text-compression"].score * 100));
		 setPerformanceDiagnostics( data.lighthouseResult.categories.performance.auditRefs[0].result.description);

		 setInteractiveTime(data.lighthouseResult.audits.interactive.displayValue)
		 setCachingSuggestions(data.formattedResults.ruleResults.LeverageBrowserCaching.urlBlocks[0].header.args[0].value)
		 setUserExperience(data.loadingExperience.metrics)
		 setBrowserCompatibility(data.lighthouseResult.categories.browserCompatibility)
		 setCodeAnalysis(data.lighthouseResult.audits['script-treemap-data'].description)
	  
		} catch (err) {
		  setError(err.message);
		  console.log("tttttttttttttttttttttttttttttttt  err ",err);
		} 
	  };

	  const x = async ()=>{
		try{

 
			console.log("vvvvvvvvvvv")
 const response = await axios.get(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${searchParams.get('testUrl')}&key=AIzaSyCaSJ8Jzr6OZasuUnn-g7_hqH9vuphV4Xk`);
   
// setAnalysisResults(response.data.lighthouseResult);


// // // setFirstContentfulPaint(response.data.lighthouseResult.audits["first-contentful-paint"].displayValue )
// // // setSpeedIndex(response.data.lighthouseResult.audits["speed-index"].displayValue )
// // // setTotalBlockingTime(response.data.lighthouseResult.audits["total-blocking-time"].displayValue )
// // // setLargestContentfulPaint (response.data.lighthouseResult.audits["largest-contentful-paint"].displayValue )
// // // setCumulativeLayoutShift (response.data.lighthouseResult.audits["cumulative-layout-shift"].displayValue )
 
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
  const myMap = new Map(Object.entries(lighthouseMetrics));
  setObj(Array.from(myMap) )
  console.log("AAAAAAAAAA =======   ",lighthouseMetrics)


	// 	const json = response.data 
    //   const cruxMetrics = {
    //    "First Contentful Paint": response.data.loadingExperience.metrics,
    //    "First Input Delay": response.data.loadingExperience.metrics
    //   };   
    //   const lighthouseMetrics = {
    //     'First Contentful Paint': response.data.lighthouseResult.audits['first-contentful-paint'],
    //     'Speed Index': response.data.lighthouseResult.audits['speed-index'],
    //     'Time To Interactive': response.data.lighthouseResult.audits['interactive'],
    //     'First Meaningful Paint': response.data.lighthouseResult.audits['first-meaningful-paint'],
    //     'First CPU Idle': response.data.lighthouseResult.audits['first-cpu-idle'],
    //     'Estimated Input Latency': response.data.lighthouseResult.audits['estimated-input-latency']
    //   }; 
	//   console.log("vvvvvvvvvvv cruxMetrics == ",cruxMetrics)
	//   console.log("vvvvvvvvvvv lighthouseMetrics == ",lighthouseMetrics)
	//   setSpeedScore( response.data.lighthouseResult.categories.performance.score);
	//   setLoadTime((response.data.loadingExperience.metrics.FIRST_CONTENTFUL_PAINT_MS.category === "FAST") ? response.data.loadingExperience.metrics.FIRST_CONTENTFUL_PAINT_MS.percentile / 1000 : "N/A");
	//   setPageSize( (response.data.loadingExperience.metrics.TOTAL_BYTES.category === "FAST") ? Math.round(response.data.loadingExperience.metrics.TOTAL_BYTES.percentile / 1024) : "N/A");
	//   setOpportunities( response.data.lighthouseResult.audits["opportunities"].score);
	//   setImageOptimization( Math.round(response.data.lighthouseResult.audits["uses-optimized-images"].score * 100));
	//   setScriptOptimization( Math.round(response.data.lighthouseResult.audits["uses-text-compression"].score * 100));
	//   setPerformanceDiagnostics( response.data.lighthouseResult.categories.performance.auditRefs[0].result.description);

	//   setInteractiveTime(response.data.lighthouseResult.audits.interactive.displayValue)
	//   setCachingSuggestions(response.data.formattedResults.ruleResults.LeverageBrowserCaching.urlBlocks[0].header.args[0].value)
	//   setUserExperience(response.data.loadingExperience.metrics)
	//   setBrowserCompatibility(response.data.lighthouseResult.categories.browserCompatibility)
	//   setCodeAnalysis(response.data.lighthouseResult.audits['script-treemap-data'].description)
 
 
 
 

 

 



		}catch(err){
			console.log("wwwwwwwwwww  err ",err);
		}
	  }

	  useEffect(()=>{
		//handleSubmit()
		x()
	  },[])


// 	  const fetch = require('node-fetch');

// function setUpQuery() {
//   const api = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';
//   const parameters = {
//     url: encodeURIComponent(searchParams.get('testUrl'))
//   };
//   let query = api;
//   for (key in parameters) {
//     query += key=parameters[key];
//   }
//   return query;
// }

 
//   auditMetrics: async (req, res, next) => {
//     try {
//       const url = setUpQuery();
//       const response = await fetch(url);
//       const json = await response.json();

//       const lighthouseMetrics = {
//         'First Contentful Paint Score': json.lighthouseResult.audits['first-contentful-paint'].score,
//         'First Contentful Paint Value': json.lighthouseResult.audits['first-contentful-paint'].displayValue,

//         'Speed Index Score': json.lighthouseResult.audits['speed-index'].score,
//         'Speed Index Value': json.lighthouseResult.audits['speed-index'].displayValue,

//         'Time To Interactive Score': json.lighthouseResult.audits['interactive'].score,
//         'Time To Interactive Value': json.lighthouseResult.audits['interactive'].displayValue,

//         'First Meaningful Paint Score': json.lighthouseResult.audits['first-meaningful-paint'].score,
//         'First Meaningful Paint Value': json.lighthouseResult.audits['first-meaningful-paint'].displayValue,

//         "CUMULATIVE_LAYOUT_SHIFT_SCORE": json.loadingExperience.metrics['CUMULATIVE_LAYOUT_SHIFT_SCORE'].category,

//         "EXPERIMENTAL_INTERACTION_TO_NEXT_PAINT": json.loadingExperience.metrics['EXPERIMENTAL_INTERACTION_TO_NEXT_PAINT'].category,
//         "EXPERIMENTAL_TIME_TO_FIRST_BYTE": json.loadingExperience.metrics['EXPERIMENTAL_TIME_TO_FIRST_BYTE'].category,
//         "FIRST_CONTENTFUL_PAINT_MS": json.loadingExperience.metrics['FIRST_CONTENTFUL_PAINT_MS'].category,
//         "FIRST_INPUT_DELAY_MS": json.loadingExperience.metrics['FIRST_INPUT_DELAY_MS'].category,
//         "LARGEST_CONTENTFUL_PAINT_MS": json.loadingExperience.metrics['LARGEST_CONTENTFUL_PAINT_MS'].category,
//         "OVERALL_CATEGORY ": json.loadingExperience.overall_category,
        
//         // 'First CPU Idle': json.lighthouseResult.audits['first-cpu-idle'],
//         // 'Estimated Input Latency': json.lighthouseResult.audits['estimated-input-latency']
//       };
  
//       res.json({
//         id: json.id,
//         lighthouseMetrics,
//       });
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   }
 
	  
	return (
		<Flex flexDirection='column' pt={{ base: '120px', md: '75px' }}>
			<SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px'> 
			 
				{
			obj.map((el)=>
<Card>
					<CardBody>
						<Flex flexDirection='row' align='center' justify='center' w='100%'>
							<Stat me='auto'>
								<StatLabel fontSize='sm' color='gray.400' fontWeight='bold' pb='2px'>
								{el[0]}

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
										{el[1]} 
									</StatHelpText>
								</Flex>
							</Stat>
							<IconBox as='box' h={'45px'} w={'45px'} bg='brand.200'>
								<WalletIcon h={'24px'} w={'24px'} color='#fff' />
							</IconBox>
						</Flex>
					</CardBody>
				</Card>
			)	
			}
				{/* <Card>
					<CardBody>
						<Flex flexDirection='row' align='center' justify='center' w='100%'>
							<Stat me='auto'>
								<StatLabel fontSize='sm' color='gray.400' fontWeight='bold' pb='2px'>
								First Content Ful Paint

								</StatLabel>
								<Flex>
									<StatNumber fontSize='lg' color='#fff'>
										*****
									</StatNumber>
									<StatHelpText
										alignSelf='flex-end'
										justifySelf='flex-end'
										m='0px'
										color='green.400'
										fontWeight='bold'
										ps='3px'
										fontSize='md'>
										{firstContentfulPaint}
									</StatHelpText>
								</Flex>
							</Stat>
							<IconBox as='box' h={'45px'} w={'45px'} bg='brand.200'>
								<WalletIcon h={'24px'} w={'24px'} color='#fff' />
							</IconBox>
						</Flex>
					</CardBody>
				</Card>
			 
				<Card minH='83px'>
					<CardBody>
						<Flex flexDirection='row' align='center' justify='center' w='100%'>
							<Stat me='auto'>
								<StatLabel fontSize='sm' color='gray.400' fontWeight='bold' pb='2px'>
							 
Speed Index 
								</StatLabel>
								<Flex>
									<StatNumber fontSize='lg' color='#fff'>
										****
									</StatNumber>
									<StatHelpText
										alignSelf='flex-end'
										justifySelf='flex-end'
										m='0px'
										color='green.400'
										fontWeight='bold'
										ps='3px'
										fontSize='md'>
										{speedIndex}
									</StatHelpText>
								</Flex>
							</Stat>
							<IconBox as='box' h={'45px'} w={'45px'} bg='brand.200'>
								<GlobeIcon h={'24px'} w={'24px'} color='#fff' />
							</IconBox>
						</Flex>
					</CardBody>
				</Card>
			 
				<Card>
					<CardBody>
						<Flex flexDirection='row' align='center' justify='center' w='100%'>
							<Stat>
								<StatLabel fontSize='sm' color='gray.400' fontWeight='bold' pb='2px'>
	 
Total Blocking Time 
								</StatLabel>
								<Flex>
									<StatNumber fontSize='lg' color='#fff'>
										****
									</StatNumber>
									<StatHelpText
										alignSelf='flex-end'
										justifySelf='flex-end'
										m='0px'
										color='red.500'
										fontWeight='bold'
										ps='3px'
										fontSize='md'>
										{totalBlockingTime}
									</StatHelpText>
								</Flex>
							</Stat>
							<Spacer />
							<IconBox as='box' h={'45px'} w={'45px'} bg='brand.200'>
								<DocumentIcon h={'24px'} w={'24px'} color='#fff' />
							</IconBox>
						</Flex>
					</CardBody>
				</Card>
			 
				<Card>
					<CardBody>
						<Flex flexDirection='row' align='center' justify='center' w='100%'>
							<Stat me='auto'>
								<StatLabel fontSize='sm' color='gray.400' fontWeight='bold' pb='2px'>
	 
Largest Content Ful Paint 
								</StatLabel>
								<Flex>
									<StatNumber fontSize='lg' color='#fff' fontWeight='bold'>
										*****
									</StatNumber>
									<StatHelpText
										alignSelf='flex-end'
										justifySelf='flex-end'
										m='0px'
										color='green.400'
										fontWeight='bold'
										ps='3px'
										fontSize='md'>
										{largestContentfulPaint}
									</StatHelpText>
								</Flex>
							</Stat>
							<IconBox as='box' h={'45px'} w={'45px'} bg='brand.200'>
								<CartIcon h={'24px'} w={'24px'} color='#fff' />
							</IconBox>
						</Flex>
					</CardBody>
				</Card>
				<Card>
					<CardBody>
						<Flex flexDirection='row' align='center' justify='center' w='100%'>
							<Stat me='auto'>
								<StatLabel fontSize='sm' color='gray.400' fontWeight='bold' pb='2px'>
								 
Cumulative Layout Shift
								</StatLabel>
								<Flex>
									<StatNumber fontSize='lg' color='#fff' fontWeight='bold'>
										*****
									</StatNumber>
									<StatHelpText
										alignSelf='flex-end'
										justifySelf='flex-end'
										m='0px'
										color='green.400'
										fontWeight='bold'
										ps='3px'
										fontSize='md'>
										{cumulativeLayoutShift}
									</StatHelpText>
								</Flex>
							</Stat>
							<IconBox as='box' h={'45px'} w={'45px'} bg='brand.200'>
								<CartIcon h={'24px'} w={'24px'} color='#fff' />
							</IconBox>
						</Flex>
					</CardBody>
				</Card> */}

 

				 
			</SimpleGrid>
			<Grid templateColumns={{ sm: '1fr', md: '1fr 1fr', '2xl': '2fr 1.2fr 1.5fr' }} my='26px' gap='18px'>
				{/* Welcome Card */}
				<Card
					p='0px'
					gridArea={{ md: '1 / 1 / 2 / 3', '2xl': 'auto' }}
					bgImage={medusa}
					bgSize='cover'
					bgPosition='50%'>
					<CardBody w='100%' h='100%'>
						<Flex flexDirection={{ sm: 'column', lg: 'row' }} w='100%' h='100%'>
							<Flex flexDirection='column' h='100%' p='22px' minW='60%' lineHeight='1.6'>
								<Text fontSize='sm' color='gray.400' fontWeight='bold'>
									Welcome back,
								</Text>
								<Text fontSize='28px' color='#fff' fontWeight='bold' mb='18px'>
									Glad to see you !								</Text>
								<Text fontSize='md' color='gray.400' fontWeight='normal' mb='auto'>
									Ennjoy those dashboards.
								</Text>
								<Spacer />
								<Flex align='center'>
								</Flex>
							</Flex>
						</Flex>
					</CardBody>
				</Card>
				{/* Satisfaction Rate */}
				<Card gridArea={{ md: '2 / 1 / 3 / 2', '2xl': 'auto' }}>
					<CardHeader mb='24px'>
						<Flex direction='column'>
							<Text color='#fff' fontSize='lg' fontWeight='bold' mb='4px'>
								Satisfaction Rate
							</Text>
							<Text color='gray.400' fontSize='sm'>
								From all projects
							</Text>
						</Flex>
					</CardHeader>
					<Flex direction='column' justify='center' align='center'>
						<Box zIndex='-1'>
							<CircularProgress
								size={200}
								value={80}
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
									95%
								</Text>
								<Text fontSize='xs' color='gray.400'>
									Based on likes
								</Text>
							</Flex>
							<Text fontSize='xs' color='gray.400'>
								100%
							</Text>
						</Stack>
					</Flex>
				</Card>
				{/* Referral Tracking */}
				<Card gridArea={{ md: '2 / 2 / 3 / 3', '2xl': 'auto' }}>
					<Flex direction='column'>
						<Flex justify='space-between' align='center' mb='40px'>
							<Text color='#fff' fontSize='lg' fontWeight='bold'>
								Referral Tracking
							</Text>
							<Button borderRadius='12px' w='38px' h='38px' bg='#22234B' _hover='none' _active='none'>
								<Icon as={IoEllipsisHorizontal} color='#7551FF' />
							</Button>
						</Flex>
						<Flex direction={{ sm: 'column', md: 'row' }}>
							<Flex direction='column' me={{ md: '6px', lg: '52px' }} mb={{ sm: '16px', md: '0px' }}>
								<Flex
									direction='column'
									p='22px'
									pe={{ sm: '22e', md: '8px', lg: '22px' }}
									minW={{ sm: '220px', md: '140px', lg: '220px' }}
									bg='linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)'
									borderRadius='20px'
									mb='20px'>
									<Text color='gray.400' fontSize='sm' mb='4px'>
										Invited
									</Text>
									<Text color='#fff' fontSize='lg' fontWeight='bold'>
										145 people
									</Text>
								</Flex>
								<Flex
									direction='column'
									p='22px'
									pe={{ sm: '22px', md: '8px', lg: '22px' }}
									minW={{ sm: '170px', md: '140px', lg: '170px' }}
									bg='linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)'
									borderRadius='20px'>
									<Text color='gray.400' fontSize='sm' mb='4px'>
										Bonus
									</Text>
									<Text color='#fff' fontSize='lg' fontWeight='bold'>
										1,465
									</Text>
								</Flex>
							</Flex>
							<Box mx={{ sm: 'auto', md: '0px' }}>
								<CircularProgress
									size={window.innerWidth >= 1024 ? 200 : window.innerWidth >= 768 ? 170 : 200}
									value={70}
									thickness={6}
									color='#05CD99'
									variant='vision'>
									<CircularProgressLabel>
										<Flex direction='column' justify='center' align='center'>
											<Text color='gray.400' fontSize='sm'>
												Safety
											</Text>
											<Text
												color='#fff'
												fontSize={{ md: '36px', lg: '50px' }}
												fontWeight='bold'
												mb='4px'>
												9.3
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
			</Grid>
			<Grid
				templateColumns={{ sm: '1fr', lg: '1.7fr 1.3fr' }}
				maxW={{ sm: '100%', md: '100%' }}
				gap='24px'
				mb='24px'>
				{/* Sales Overview */}
				<Card p='28px 0px 0px 0px'>
					<CardHeader mb='20px' ps='22px'>
						<Flex direction='column' alignSelf='flex-start'>
							<Text fontSize='lg' color='#fff' fontWeight='bold' mb='6px'>
								Sales Overview
							</Text>
							<Text fontSize='md' fontWeight='medium' color='gray.400'>
								<Text as='span' color='green.400' fontWeight='bold'>
									(+5%) more
								</Text>{' '}
								in 2021
							</Text>
						</Flex>
					</CardHeader>
					<Box w='100%' minH={{ sm: '300px' }}>
						<LineChart
							lineChartData={lineChartDataDashboard}
							lineChartOptions={lineChartOptionsDashboard}
						/>
					</Box>
				</Card>
				{/* Active Users */}
				<Card p='16px'>
					<CardBody>
						<Flex direction='column' w='100%'>
							<Box
								bg='linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)'
								borderRadius='20px'
								display={{ sm: 'flex', md: 'block' }}
								justify={{ sm: 'center', md: 'flex-start' }}
								align={{ sm: 'center', md: 'flex-start' }}
								minH={{ sm: '180px', md: '220px' }}
								p={{ sm: '0px', md: '22px' }}>
								<BarChart
									barChartOptions={barChartOptionsDashboard}
									barChartData={barChartDataDashboard}
								/>
							</Box>
							<Flex direction='column' mt='24px' mb='36px' alignSelf='flex-start'>
								<Text fontSize='lg' color='#fff' fontWeight='bold' mb='6px'>
									Active Users
								</Text>
								<Text fontSize='md' fontWeight='medium' color='gray.400'>
									<Text as='span' color='green.400' fontWeight='bold'>
										(+23%)
									</Text>{' '}
									than last week
								</Text>
							</Flex>
							<SimpleGrid gap={{ sm: '12px' }} columns={4}>
								<Flex direction='column'>
									<Flex alignItems='center'>
										<IconBox as='box' h={'30px'} w={'30px'} bg='brand.200' me='6px'>
											<WalletIcon h={'15px'} w={'15px'} color='#fff' />
										</IconBox>
										<Text fontSize='sm' color='gray.400'>
											Users
										</Text>
									</Flex>
									<Text
										fontSize={{ sm: 'md', lg: 'lg' }}
										color='#fff'
										fontWeight='bold'
										mb='6px'
										my='6px'>
										32,984
									</Text>
									<Progress colorScheme='brand' bg='#2D2E5F' borderRadius='30px' h='5px' value={20} />
								</Flex>
								<Flex direction='column'>
									<Flex alignItems='center'>
										<IconBox as='box' h={'30px'} w={'30px'} bg='brand.200' me='6px'>
											<RocketIcon h={'15px'} w={'15px'} color='#fff' />
										</IconBox>
										<Text fontSize='sm' color='gray.400'>
											Clicks
										</Text>
									</Flex>
									<Text
										fontSize={{ sm: 'md', lg: 'lg' }}
										color='#fff'
										fontWeight='bold'
										mb='6px'
										my='6px'>
										2.42m
									</Text>
									<Progress colorScheme='brand' bg='#2D2E5F' borderRadius='30px' h='5px' value={90} />
								</Flex>
								<Flex direction='column'>
									<Flex alignItems='center'>
										<IconBox as='box' h={'30px'} w={'30px'} bg='brand.200' me='6px'>
											<CartIcon h={'15px'} w={'15px'} color='#fff' />
										</IconBox>
										<Text fontSize='sm' color='gray.400'>
											Sales
										</Text>
									</Flex>
									<Text
										fontSize={{ sm: 'md', lg: 'lg' }}
										color='#fff'
										fontWeight='bold'
										mb='6px'
										my='6px'>
										2,400$
									</Text>
									<Progress colorScheme='brand' bg='#2D2E5F' borderRadius='30px' h='5px' value={30} />
								</Flex>
								<Flex direction='column'>
									<Flex alignItems='center'>
										<IconBox as='box' h={'30px'} w={'30px'} bg='brand.200' me='6px'>
											<StatsIcon h={'15px'} w={'15px'} color='#fff' />
										</IconBox>
										<Text fontSize='sm' color='gray.400'>
											Items
										</Text>
									</Flex>
									<Text
										fontSize={{ sm: 'md', lg: 'lg' }}
										color='#fff'
										fontWeight='bold'
										mb='6px'
										my='6px'>
										320
									</Text>
									<Progress colorScheme='brand' bg='#2D2E5F' borderRadius='30px' h='5px' value={50} />
								</Flex>
							</SimpleGrid>
						</Flex>
					</CardBody>
				</Card>
			</Grid>
			<Grid templateColumns={{ sm: '1fr', md: '1fr 1fr', lg: '2fr 1fr' }} gap='24px'>
				{/* Projects */}
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
									Members
								</Th>
								<Th color='gray.400' fontFamily='Plus Jakarta Display' borderBottomColor='#56577A'>
									Budget
								</Th>
								<Th color='gray.400' fontFamily='Plus Jakarta Display' borderBottomColor='#56577A'>
									Completion
								</Th>
							</Tr>
						</Thead>
						<Tbody>
							{dashboardTableData.map((row, index, arr) => {
								return (
									<DashboardTableRow
										name={row.name}
										logo={row.logo}
										members={row.members}
										budget={row.budget}
										progression={row.progression}
										lastItem={index === arr.length - 1 ? true : false}
									/>
								);
							})}
						</Tbody>
					</Table>
				</Card>
				{/* Orders Overview */}
				<Card>
					<CardHeader mb='32px'>
						<Flex direction='column'>
							<Text fontSize='lg' color='#fff' fontWeight='bold' mb='6px'>
								Orders overview
							</Text>
							<Flex align='center'>
								<Icon as={AiFillCheckCircle} color='green.500' w='15px' h='15px' me='5px' />
								<Text fontSize='sm' color='gray.400' fontWeight='normal'>
									<Text fontWeight='bold' as='span' color='gray.400'>
										+30%
									</Text>{' '}
									this month
								</Text>
							</Flex>
						</Flex>
					</CardHeader>
					<CardBody>
						<Flex direction='column' lineHeight='21px'>
							{timelineData.map((row, index, arr) => {
								return (
									<TimelineRow
										logo={row.logo}
										title={row.title}
										date={row.date}
										color={row.color}
										index={index}
										arrLength={arr.length}
									/>
								);
							})}
						</Flex>
					</CardBody>
				</Card>
			</Grid>
		</Flex>
	);
}
