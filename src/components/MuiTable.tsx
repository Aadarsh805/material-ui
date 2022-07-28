import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{maxHeight: '300px'}}>
        <Table stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Gender</TableCell>
                    <TableCell align='center'>IP address</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    tableData.map(row => (
                        <TableRow key={row.id} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                            <TableCell>{row.first_name}</TableCell>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.last_name}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>{row.gender}</TableCell>
                            <TableCell align='center'>{row.ip_address}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </TableContainer>
  )
};

const tableData = [{
    "id": 1,
    "first_name": "Allard",
    "last_name": "Steagall",
    "email": "asteagall0@homestead.com",
    "gender": "Male",
    "ip_address": "159.3.212.37"
  }, {
    "id": 2,
    "first_name": "Izak",
    "last_name": "Broszkiewicz",
    "email": "ibroszkiewicz1@ed.gov",
    "gender": "Male",
    "ip_address": "167.106.77.20"
  }, {
    "id": 3,
    "first_name": "Lindsay",
    "last_name": "Ivchenko",
    "email": "livchenko2@cnn.com",
    "gender": "Female",
    "ip_address": "100.70.33.35"
  }, {
    "id": 4,
    "first_name": "Leonie",
    "last_name": "Yeskov",
    "email": "lyeskov3@squidoo.com",
    "gender": "Genderqueer",
    "ip_address": "145.180.87.113"
  }, {
    "id": 5,
    "first_name": "Nance",
    "last_name": "Mazey",
    "email": "nmazey4@google.co.jp",
    "gender": "Agender",
    "ip_address": "137.83.22.252"
  }, {
    "id": 6,
    "first_name": "Willy",
    "last_name": "Bartle",
    "email": "wbartle5@yelp.com",
    "gender": "Male",
    "ip_address": "228.38.235.156"
  }, {
    "id": 7,
    "first_name": "Zonda",
    "last_name": "Bastian",
    "email": "zbastian6@gmpg.org",
    "gender": "Female",
    "ip_address": "49.160.201.158"
  }, {
    "id": 8,
    "first_name": "Iggy",
    "last_name": "Tomaskunas",
    "email": "itomaskunas7@pen.io",
    "gender": "Male",
    "ip_address": "225.254.54.128"
  }, {
    "id": 9,
    "first_name": "Ira",
    "last_name": "Sircomb",
    "email": "isircomb8@netlog.com",
    "gender": "Female",
    "ip_address": "138.141.168.62"
  }, {
    "id": 10,
    "first_name": "Gerick",
    "last_name": "Merioth",
    "email": "gmerioth9@google.it",
    "gender": "Male",
    "ip_address": "243.194.249.7"
  }]
