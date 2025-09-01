---
title: "System Classes for Converting Character Sets and Number Formats"
description: |
  The system classes listed below enable the conversion of text data between different code pages(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencodepage_glosry.htm 'Glossary Entry') and of numeric data between different number representations. Data that is not in ABAP format, that i
version: "7.58"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_conv.htm"
abapFile: "abencl_abap_conv.htm"
keywords: ["do", "if", "try", "method", "class", "data", "abencl", "abap", "conv"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_assignments.htm) →  [Assignment and Conversion Rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_rules.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20System%20Classes%20for%20Converting%20Character%20Sets%20and%20Number%20Formats%2C%20ABENCL_ABAP_CONV%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugge
stion%20for%20improvement:)

System Classes for Converting Character Sets and Number Formats

The system classes listed below enable the conversion of text data between different [code pages](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencodepage_glosry.htm "Glossary Entry") and of numeric data between different number representations.

Data that is not in ABAP format, that is, text data that is not in the system code page format, or numeric data that is not in the [byte order](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbyte_order_glosry.htm "Glossary Entry") used on the current [host computer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhost_computer_glosry.htm "Glossary Entry"), can be stored in binary form in an x field or in an xstring.

-   When converting to ABAP format from a non-ABAP format, data is read from an ABAP data object and written as a byte sequence.
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
-   The methods UTCLONG2TSTMP, UTCLONG2TSTMP\_SHORT, and TSTMP2UTCLONG of the class [CL\_ABAP\_TSTMP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_tstmp.htm) convert the content of [time stamp fields](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentimestamp_field_glosry.htm "Glossary Entry") to representation in packed numbers and vice versa.