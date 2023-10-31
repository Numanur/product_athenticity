const DEFAULT_IMG_URL = "https://i.ibb.co/MBtjqXQ/no-avatar.gif";

export const productColumns = [
    {
        field: "productName",
        headerName: "Product Name",
        width: 180,
    },
    {
        field: "serialNumber",
        headerName: "Product Id",
        width: 180,
    },
    // {
    //     field: "productImg",
    //     headerName: "Prouct Image",
    //     width: 160,
    //     renderCell: (params) => {
    //         return (
    //             <div className="cellWithImg">
    //                 <img className="cellImg" src={params.row.productImg || DEFAULT_IMG_URL} alt="avatar" />
    //             </div>
    //         );
    //     },
    // },
    {
        field: "category",
        headerName: "Category",
        width: 110,
    },
    {
        field: "weight",
        headerName: "Weight",
        width: 110,
    },
    {
        field: "price",
        headerName: "Price",
        width: 90,
    },
    {
        field: "sellStatus",
        headerName: "Sell Status",
        width: 100,
        renderCell: (params) => {
            return (
                <div
                    className={`${params.row.sellStatus === 'sold' ? 'bg-red-500' : 'bg-blue-500'} text-white py-1 px-4 rounded cursor-pointer`}
                >
                    <span className="capitalize"> {params.row.sellStatus}</span>
                </div>
            );
        },
    },
];