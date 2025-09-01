  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assignment and Conversion Rules](javascript:call_link\('abenconversion_rules.htm'\)) → 

System Classes for Converting Character Sets and Number Formats

The system classes described below enable the conversion of text data between different [code pages](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry") and of numeric data between different number representations.

Data that is not available in ABAP format (that is, text data that is not in the system code page format, or numeric data that is not in the [byte order](javascript:call_link\('abenbyte_order_glosry.htm'\) "Glossary Entry") used on the current [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry")) can be saved in binary form in an x field or in an xstring.

-   When converting to ABAP format from another format, data is read from a byte sequence and written to an ABAP data object.

-   When converting from ABAP format to another format, data is read from an ABAP data object and written as a byte sequence.

This is done using the following classes:

-   CL\_ABAP\_CONV\_IN\_CE

Extracts other formats to ABAP data objects (reads a binary input stream).

-   CL\_ABAP\_CONV\_OUT\_CE

Exports ABAP data objects to another format (writes to a binary output stream).

-   CL\_ABAP\_CONV\_X2X\_CE

Extracts data from any format and exports data to any other format (reads from a binary input stream and writes to a binary output stream).

Note

The interfaces IF\_ABAP\_CONV\_IN and IF\_ABAP\_CONV\_OUT of objects created using the class CL\_ABAP\_CONV\_CODEPAGE wrap the classes above for better handling of code pages in character and byte string processing.