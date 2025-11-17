import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const products = [
  {
    name: 'ASOS Ridley High Waist',
    price: 79.49,
    quantity: 82,
  },
  {
    name: 'Marco Lightweight Shirt',
    price: 128.5,
    quantity: 37,
  },
  {
    name: 'Half Sleeve Shirt',
    price: 39.99,
    quantity: 64,
  },
  {
    name: 'Lightweight Jacket',
    price: 20.0,
    quantity: 184,
  },
  {
    name: 'Marco Shoes',
    price: 79.49,
    quantity: 64,
  },
];

export const TopSellingProductsTable = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <h3 className="text-sm font-semibold mb-4">Top Selling Products</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.name} className="border-b-0">
              <TableCell className="max-w-20 truncate">
                {product.name}
              </TableCell>
              <TableCell>${product.price.toFixed(2)}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>
                $
                {(product.price * product.quantity).toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
