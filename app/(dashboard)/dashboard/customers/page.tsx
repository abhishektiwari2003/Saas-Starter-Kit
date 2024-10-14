"use client";

import { useState, useEffect } from "react";
import {
  Upload,
  FileSpreadsheet,
  User,
  Users,
  Download,
  MoreVertical,
  Search,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { toast } from "@/hooks/use-toast";

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  category: string;
}

const initialCustomers: Customer[] = [
  {
    id: "C1",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 555-1234",
    category: "Regular",
  },
  {
    id: "C2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "+1 555-5678",
    category: "High Value",
  },
  {
    id: "C3",
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    phone: "+1 555-9012",
    category: "New",
  },
  {
    id: "C4",
    name: "Alice Brown",
    email: "alice.brown@example.com",
    phone: "+1 555-3456",
    category: "At Risk",
  },
  {
    id: "C5",
    name: "Charlie Davis",
    email: "charlie.davis@example.com",
    phone: "+1 555-7890",
    category: "Inactive",
  },
  // Adding more customers for pagination demonstration
  ...Array.from({ length: 20 }, (_, i) => ({
    id: `C${i + 6}`,
    name: `Customer ${i + 6}`,
    email: `customer${i + 6}@example.com`,
    phone: `+1 555-${String(1000 + i).padStart(4, "0")}`,
    category: ["Regular", "High Value", "New", "At Risk", "Inactive"][
      Math.floor(Math.random() * 5)
    ],
  })),
];

export default function CustomerListPage() {
  const [customers, setCustomers] = useState<Customer[]>(initialCustomers);
  const [isUploading, setIsUploading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredCustomers, setFilteredCustomers] =
    useState<Customer[]>(customers);

  const itemsPerPage = 10;

  useEffect(() => {
    const filtered = customers.filter(
      (customer) =>
        customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.phone.includes(searchTerm) ||
        customer.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCustomers(filtered);
    setCurrentPage(1);
  }, [customers, searchTerm]);

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsUploading(true);
      // Simulating file upload and processing
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Mock data generation
      const newCustomers: Customer[] = Array.from({ length: 5 }, (_, i) => ({
        id: `C${customers.length + i + 1}`,
        name: `New Customer ${i + 1}`,
        email: `newcustomer${i + 1}@example.com`,
        phone: `+1 555-${String(2000 + i).padStart(4, "0")}`,
        category: "New",
      }));

      setCustomers((prevCustomers) => [...prevCustomers, ...newCustomers]);
      setIsUploading(false);
      toast({
        title: "Customer List Uploaded",
        description: `${newCustomers.length} new customers added to the list.`,
      });
    }
  };

  const handleDownload = (format: "csv" | "excel") => {
    // In a real application, you would generate the file here
    // For this example, we'll just show a toast notification
    toast({
      title: "Download Started",
      description: `Downloading customer list as ${format.toUpperCase()} file.`,
    });
  };

  const pageCount = Math.ceil(filteredCustomers.length / itemsPerPage);
  const paginatedCustomers = filteredCustomers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Customer List</CardTitle>
          <CardDescription>Manage your customer data</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-6">
            <div>
              <Label htmlFor="file-upload" className="cursor-pointer">
                <div className="flex items-center gap-2 text-primary hover:text-primary/80">
                  <Upload size={20} />
                  <span>Upload Customer List (CSV or Excel)</span>
                </div>
              </Label>
              <Input
                id="file-upload"
                type="file"
                className="hidden"
                accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                onChange={handleFileUpload}
                disabled={isUploading}
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download List
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => handleDownload("csv")}>
                  <FileSpreadsheet className="mr-2 h-4 w-4" />
                  Download as CSV
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleDownload("excel")}>
                  <FileSpreadsheet className="mr-2 h-4 w-4" />
                  Download as Excel
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="mb-4">
            <Label htmlFor="search" className="sr-only">
              Search Customers
            </Label>
            <div className="relative">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-500" />
              <Input
                id="search"
                type="search"
                placeholder="Search customers..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedCustomers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell className="font-medium">{customer.name}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.phone}</TableCell>
                  <TableCell>{customer.category}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit Customer</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          Delete Customer
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {filteredCustomers.length === 0 && (
            <div className="text-center py-10">
              <Users className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-semibold text-gray-900">
                No customers found
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Try adjusting your search or filter to find what you're looking
                for.
              </p>
            </div>
          )}

          <Pagination className="mt-4">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                />
              </PaginationItem>
              {Array.from({ length: pageCount }, (_, i) => i + 1).map(
                (page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      onClick={() => setCurrentPage(page)}
                      isActive={currentPage === page}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                )
              )}
              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, pageCount))
                  }
                  disabled={currentPage === pageCount}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </CardContent>
      </Card>
    </div>
  );
}
