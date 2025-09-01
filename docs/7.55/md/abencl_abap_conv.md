  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvalue_assignments.htm) →  [Assignment and Conversion Rules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_rules.htm) → 

System Classes for Converting Character Sets and Number Formats

The system classes listed below enable the conversion of text data between different [code pages](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencodepage_glosry.htm "Glossary Entry") and of numeric data between different number representations.

Data that is not in ABAP format, that is, text data that is not in the system code page format, or numeric data that is not in the [byte order](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbyte_order_glosry.htm "Glossary Entry") used on the current [host computer](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhost_computer_glosry.htm "Glossary Entry"), can be stored in binary form in an x field or in an xstring.

-   When converting to ABAP format from a non-ABAP format, data is read from a byte sequence and written to an ABAP data object.

-   When converting from ABAP format to a non-ABAP format, data is read from an ABAP data object and written as a byte sequence.

This is done using the following classes:

-   CL\_ABAP\_CONV\_IN\_CE

Importing non-ABAP formats into ABAP data objects (reads a binary input stream).

-   CL\_ABAP\_CONV\_OUT\_CE

Exporting ABAP data objects to a non-ABAP format (writes to a binary output stream).

-   CL\_ABAP\_CONV\_X2X\_CE

Importing data of any format and exporting data to any other format (reads from a binary input stream and writes to a binary output stream).

Hints

-   The interfaces IF\_ABAP\_CONV\_IN and IF\_ABAP\_CONV\_OUT of objects that were created using the class CL\_ABAP\_CONV\_CODEPAGE wrap the classes above for easier handling of code pages in character and byte string processing.

-   The methods UTCLONG2TSTMP, UTCLONG2TSTMP\_SHORT, and TSTMP2UTCLONG of the class [CL\_ABAP\_TSTMP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencl_abap_tstmp.htm) convert the content of [time stamp fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentimestamp_field_glosry.htm "Glossary Entry") to representation in packed numbers and vice versa.