import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react"; 
const TrekComp = () => {
    return (
        <div className=''>
            <Card className=" mt-14">
                <CardHeader color="green" className="relative h-40">
                    <img
                        src="/bihar-tourist_1542718233.webp"
                        alt="img-blur-shadow"
                        className="h-full w-full"
                    />
                </CardHeader>
                <CardBody className="text-center">
                    <Typography variant="h5" className="mb-2">
                        Cozy 5 Stars Apartment
                    </Typography>
                    <Typography>
                        The place is close to Barceloneta Beach and bus stop just 2 min by
                        walk and near to "Naviglio" where you can enjoy the main night life in
                        Barcelona.
                    </Typography>
                </CardBody>
                <CardFooter divider className="flex items-center justify-between py-3">
                    <Typography variant="small">$899/night</Typography>
                    <Typography variant="small" color="grey" className="flex gap-1">
                        <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                        Barcelona, Spain
                    </Typography>
                </CardFooter>
            </Card>

        </div>
    )
}

export default TrekComp