// Property Image
import propertyImage1 from "../../assets/images/property-img-1.jpg";
import propertyImage2 from "../../assets/images/property-img-2.jpg";
import propertyImage3 from "../../assets/images/property-img-3.jpg";
import propertyImage4 from "../../assets/images/property-img-4.jpg";
import propertyImage5 from "../../assets/images/property-img-5.jpg";
import propertyImage6 from "../../assets/images/property-img-6.jpg";
import propertyImage7 from "../../assets/images/property-img-7.jpg";
import propertyImage8 from "../../assets/images/property-img-8.jpg";

import expensesIcon from "../../assets/images/operating-expenses-icon.svg";
import occupancyIcon from "../../assets/images/total-occupancy-rate-icon.svg";
import totalRevenueIcon from "../../assets/images/total-revenue-icon.svg";

export const propertyList = [
    {
        id: 1,
        name: "Skyline Tech Hub",
        address: "456 Business Ave, San Francisco, CA",
        image: propertyImage1,
        occupancy: "95",
        revenue: "125,000",
        status: "active",
    },
    {
        id: 2,
        name: "Tech Loft at Skyline",
        address: "1122 Cyber Road, Techville",
        image: propertyImage2,
        occupancy: "95",
        revenue: "125,000",
        status: "review",
    },
    {
        id: 3,
        name: "Skyline Innovation Hub",
        address: "5678 Cloud Avenue, Silicon Valley",
        image: propertyImage3,
        occupancy: "95",
        revenue: "125,000",
        status: "active",
    },
    {
        id: 4,
        name: "Tech Hub Office",
        address: "7890 Digital Drive, Innovation City",
        image: propertyImage4,
        occupancy: "95",
        revenue: "125,000",
        status: "active",
    },
    {
        id: 5,
        name: "TechNest at Skyline",
        address: "9101 Startup Lane, Codeville",
        image: propertyImage5,
        occupancy: "95",
        revenue: "125,000",
        status: "active",
    },
    {
        id: 6,
        name: "Skyline Workspaces",
        address: "3456 AI Boulevard, Future Town",
        image: propertyImage6,
        occupancy: "95",
        revenue: "125,000",
        status: "review",
    },
    {
        id: 7,
        name: "Skyline Co-Work Hub",
        address: "3344 VR Avenue, Meta City",
        image: propertyImage7,
        occupancy: "95",
        revenue: "125,000",
        status: "active",
    },
    {
        id: 8,
        name: "Elevate Tech Hub",
        address: "5566 Blockchain Street, Neural Bay",
        image: propertyImage8,
        occupancy: "95",
        revenue: "125,000",
        status: "active",
    },
];

export const propertyDetails = [
    {
        id: 1,
        name: "Elevate Tech Hub",
        address: "5566 Blockchain Street, Neural Bay",
        image: propertyImage8,
        occupancy: "95",
        revenue: "125,000",
        status: "active",
        overview: [
            {
                id: 1,
                title: "Total Revenue",
                icon: totalRevenueIcon,
                revenue: "$1.2M",
                label: "Last year",
                percentage: "12",
                bgColor: "73EAB2",
            },
            {
                id: 2,
                title: "Total Occupancy Rate",
                icon: occupancyIcon,
                revenue: "95%",
                label: "Last year",
                percentage: "5",
                bgColor: "FF9898",
            },
            {
                id: 3,
                title: "Operating Expenses",
                icon: expensesIcon,
                revenue: "$320k",
                label: "Convert",
                percentage: "8",
                bgColor: "FFC362",
            },
        ],
        propertyDetails: {
            id: 1,
            title: "Property Features",
            address: "123 Main Street, New York, NY 10001",
            type: "Residential Apartment",
            units: 150,
            yearBuilt: 2018,
            lastRenovation: 2022,
        },

        valuation: [
            {
                id: 1,
                title: "Current Value",
                icon: totalRevenueIcon,
                revenue: "$12.5M",
                label: "Last year",
                percentage: "15",
                bgColor: "73EAB2",
            },
            {
                id: 2,
                title: "Price per sq ft",
                icon: totalRevenueIcon,
                revenue: "$450",
                label: "Market average",
                percentage: "8",
                bgColor: "68C8F8",
            },
            {
                id: 3,
                kpi: "Add KPI",
            },
        ],
        valuationMetrics: {
            id: 1,
            capRate: "5.8%",
            rentRatio: 16.5,
            grm: 12.4,
            noi: "$725k",
        },
    },
];

import financialStatementsIcon from "../../assets/images/financial-statements-icon.svg";
import insuranceDocumentsIcon from "../../assets/images/insurance-documents-icon.svg";
import leaseAgreementsIcon from "../../assets/images/lease-agreements-icon.svg";
import propertyAppraisalIcon from "../../assets/images/property-appraisal-icon.svg";
import propertyPhotosIcon from "../../assets/images/property-photos-icon.svg";

// Property Documents
export const propertyDocumentsData = [
    {
        id: 1,
        title: "Property Appraisal Report",
        icon: propertyAppraisalIcon,
        size: "2.5 MB",
        date: "Updated 2 weeks ago",
        downloadUrl: "#",
    },
    {
        id: 2,
        title: "Financial Statements",
        icon: financialStatementsIcon,
        size: "1.8 MB",
        date: "Updated 1 month ago",
        downloadUrl: "#",
    },
    {
        id: 3,
        title: "Lease Agreements",
        icon: leaseAgreementsIcon,
        size: "3.2 MB",
        date: "Updated 3 months ago",
        downloadUrl: "#",
    },
    {
        id: 4,
        title: "Property Photos",
        icon: propertyPhotosIcon,
        size: "15.7 MB",
        date: "Updated 1 week ago",
        downloadUrl: "#",
    },
    {
        id: 5,
        title: "Insurance Documents",
        icon: insuranceDocumentsIcon,
        size: "1.1 MB",
        date: "Updated 2 months ago",
        downloadUrl: "#",
    },
];
