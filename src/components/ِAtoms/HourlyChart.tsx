import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { useGeoLocation } from '@/Hooks/useLocation';
import { useForecast } from '@/Hooks/useWeatherData';
import { ForecastResponse } from '@/interfaces/ForecastResponse';
import {format} from 'date-fns'
import { Skeleton } from '../ui/skeleton';
const HourlyChart = () => {
        const {coordinates}=useGeoLocation();
        const forecastQuery = useForecast<ForecastResponse>(coordinates);
        const chartData = forecastQuery.data?.list.slice(0, 8).map((item)=>(
            {
                time : format(new Date(item.dt *1000),'ha'),
                Lowest : Math.round(item.main.temp_min),
                Feels_Like : Math.round(item.main.feels_like),
            }
        ));

        if(forecastQuery.isLoading){
            return (
                <Card className=' col-span-12 border-0 md:col-span-7 bg-blue-300/35 dark:bg-slate-800/35 '>
    <CardHeader>
        <CardTitle className='text-muted-foreground'>Today's Temperature</CardTitle>
    </CardHeader>
    <CardContent>
    <div className='h-[200px] w-full'>
    <Skeleton className=' rounded-lg p-4 w-full h-full bg-slate-800/40 ' />
    </div>
    </CardContent>
    </Card>
            )
        }
    return <>
    <Card className=' col-span-12 border-0 md:col-span-7 bg-blue-300/35 dark:bg-slate-800/35 '>
    <CardHeader>
        <CardTitle className='text-muted-foreground'>Today's Temperature</CardTitle>
    </CardHeader>
    <CardContent>
    <div className='h-[200px] w-full'>
    <ResponsiveContainer className={' rounded-lg p-4'} width={'100%'} height="100%">
        <LineChart 
        data={chartData}> 
        <Tooltip
        content={({active , payload})=>{
            if(active && payload && payload.length){
                return (
                <div className='p-2 rounded-xl bg-slate-100 flex flex-row justify-center items-center gap-3 dark:bg-slate-800 '>
                    <div className='flex flex-col text-muted-foreground'>
                            <span className='text-xs'>Temp.</span>
                            <p className='text-xs'>{payload[0].value} °C</p>
                    </div>
                    <div className='flex flex-col text-muted-foreground'>
                            <span className='text-xs'>Feels like</span>
                            <p className='text-xs'>{payload[1].value} °C</p>
                    </div>
                </div>
                )
            }
            return null;
        }}
        />
        <XAxis
            dataKey={'time'}
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
        />
        <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}°`}
        />

            <Line
                type="monotone"
                dataKey="Lowest"
                stroke="#2563eb"
                strokeWidth={2}
                dot={true}
            />
            <Line
                type="monotone"
                dataKey="Feels_Like"
                stroke="#64748b"
                strokeWidth={2}
                dot={true}
                strokeDasharray="5 5"
            />
        </LineChart>
    </ResponsiveContainer>
    </div>
    </CardContent>
    </Card>


    </>
}

export default HourlyChart
