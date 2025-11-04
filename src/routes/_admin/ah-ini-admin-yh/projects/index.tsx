import { createFileRoute, Link } from '@tanstack/react-router'
import * as React from 'react'
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { ArrowUpDown, MoreHorizontal, SearchIcon, PlusCircle, Trash2, X, ExternalLink, Pencil, ChevronLeft, ChevronRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Chip } from '@/components/ui/chips'

// --- Data and Types ---

type Project = {
  id: string
  name: string
  icon: string
  status: 'Draft' | 'Public' | 'Private' | 'Unlisted'
  owner: string
  budget: number
}

const data: Project[] = [
  {
    id: 'proj-001',
    name: 'Personal Website',
    status: 'Public',
    owner: 'Ferdinan',
    budget: 5000,
    icon: 'https://github.com/ferdinankurnian.png',
  },
  {
    id: 'proj-002',
    name: 'E-commerce Platform',
    status: 'Draft',
    owner: 'John Doe',
    budget: 25000,
    icon: 'https://github.com/ferdinankurnian.png',
  },
  {
    id: 'proj-003',
    name: 'Mobile App',
    status: 'Public',
    owner: 'Jane Smith',
    budget: 50000,
    icon: 'https://github.com/ferdinankurnian.png',
  },
  {
    id: 'proj-004',
    name: 'Data Analytics Dashboard',
    status: 'Public',
    owner: 'Peter Jones',
    budget: 75000,
    icon: 'https://github.com/ferdinankurnian.png',
  },
  {
    id: 'proj-005',
    name: 'Internal CRM',
    status: 'Private',
    owner: 'Mary Johnson',
    budget: 15000,
    icon: 'https://github.com/ferdinankurnian.png',
  },
  {
    id: 'proj-006',
    name: 'Marketing Campaign',
    status: 'Public',
    owner: 'Ferdinan',
    budget: 10000,
    icon: 'https://github.com/ferdinankurnian.png',
  },
  {
    id: 'proj-007',
    name: 'New Feature Rollout',
    status: 'Unlisted',
    owner: 'Chris Lee',
    budget: 30000,
    icon: 'https://github.com/ferdinankurnian.png',
  },
]

// --- Column Definitions ---

export const columns: ColumnDef<Project>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'icon',
    header: 'Icon',
    cell: ({ row }) => (
      <img
        src={row.original.icon}
        alt={row.original.name}
        className="h-12 w-12 object-cover"
      />
    ),
  },
  {
    accessorKey: 'name',
    header: 'Project Name',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.original.status
      const variant =
        status === 'Public'
          ? 'public'
          : status === 'Draft'
            ? 'secondary'
            : status === 'Private'
              ? 'private'
              : 'unlisted'

      return (
        <Chip variant={variant} className="capitalize">
          {status}
        </Chip>
      )
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const project = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel className="text-primary/50 text-xs">Actions</DropdownMenuLabel>
            <DropdownMenuItem><ExternalLink /> View project</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem><Pencil /> Edit project</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">
              <Trash2 className="text-red-700" /> Delete project
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

// --- DataTableToolbar Component ---

function DataTableToolbar<TData>({
  table,
}: {
  table: ReturnType<typeof useReactTable<TData>>
}) {
  const selectedRows = table.getFilteredSelectedRowModel().rows
  const isVisible = selectedRows.length > 0

  return (
    <div
      className={`sticky top-0 z-10 transition-all duration-200 ease-in-out ${
        isVisible ? 'h-14 my-4 opacity-100' : 'h-0 my-0 opacity-0 pointer-events-none'
      }`}
      style={{ overflow: 'hidden' }}
    >
      <div className="flex h-14 items-center justify-between gap-4 rounded-md border bg-background/95 p-2 px-3 shadow-sm backdrop-blur">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => table.toggleAllRowsSelected(false)}
            className="h-7 w-7"
          >
            <X className="h-4 w-4" />
          </Button>
          <div className="text-sm font-medium">
            {selectedRows.length} row(s) selected
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Select>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Set status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="private">Private</SelectItem>
              <SelectItem value="unlisted">Unlisted</SelectItem>
              <SelectItem value="public">Public</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="destructive" size="sm">
            <Trash2 className="mr-2 h-4 w-4" />
            Delete ({selectedRows.length})
          </Button>
        </div>
      </div>
    </div>
  )
}

// --- DataTable Component ---

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full">
      <DataTableToolbar table={table} />
      <div className="flex items-center py-4">
        <InputGroup className="max-w-xs md:max-w-sm">
          <InputGroupInput 
          placeholder="Filter by project name..."
          value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
          onChange={(event) =>
            table.getColumn('name')?.setFilterValue(event.target.value)
          }
          />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
        </InputGroup>
        <div className="ml-auto flex items-center gap-2">
          <Link to="/ah-ini-admin-yh/projects/add" className="text-primary">
            <Button className="ml-auto">
              <PlusCircle /> <span className="hidden md:block">Add Project</span>
            </Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="ml-auto">
                <ArrowUpDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of{' '}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className={`space-x-2 ${!table.getCanPreviousPage() ? 'invisible' : ''}`}>
          <Button
            variant="outline"
            size="icon-sm"
            onClick={() => table.previousPage()}
          >
            <ChevronLeft />
          </Button>
        </div>
        <div className={`space-x-2 ${!table.getCanNextPage() ? 'invisible' : ''}`}>
          <Button
            variant="outline"
            size="icon-sm"
            onClick={() => table.nextPage()}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  )
}

// --- Route Component ---

export const Route = createFileRoute('/_admin/ah-ini-admin-yh/projects/')({
  component: RouteComponent,
})

function RouteComponent() {
  // In a real app, you'd fetch this data from an API.
  // const { data } = useSuspenseQuery(projectOptions)
  
  return (
    <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-6">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
