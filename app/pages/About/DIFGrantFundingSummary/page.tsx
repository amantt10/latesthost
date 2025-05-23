import Footer from '@/components/Footer'
import Mainnavbar from '@/components/Navbar'
import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const page = () => {
  return (
    <>
      <Mainnavbar />
      <h1 className='text-4xl font-bold text-center mt-20'>DIF Grant Funding Summary</h1>
      <div className='mx-auto w-1/2 px-4 py-8'>
        <Table>
          <TableBody>
            <TableRow>
              <TableHead>Awarding Agency Name</TableHead>
              <TableCell>NSPARC</TableCell>
            </TableRow>
            <TableRow>
              <TableHead>Awarding Division Name</TableHead>
              <TableCell>Research</TableCell>
            </TableRow>
            <TableRow>
              <TableHead>Agency contact</TableHead>
              <TableCell>nsparc.msstate.edu</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <Footer />
    </>
  )
}

export default page