  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assignment and Conversion Rules](javascript:call_link\('abenconversion_rules.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: System Classes for Converting Character Sets and Number Formats, ABENCL_ABAP_CONV, 75
7%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

System Classes for Converting Character Sets and Number Formats

The system classes listed below enable the conversion of text data between different [code pages](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry") and of numeric data between different number representations.

Data that is not in ABAP format, that is, text data that is not in the system code page format, or numeric data that is not in the [byte order](javascript:call_link\('abenbyte_order_glosry.htm'\) "Glossary Entry") used on the current [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry"), can be stored in binary form in an x field or in an xstring.

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
-   The methods UTCLONG2TSTMP, UTCLONG2TSTMP\_SHORT, and TSTMP2UTCLONG of the class [CL\_ABAP\_TSTMP](javascript:call_link\('abencl_abap_tstmp.htm'\)) convert the content of [time stamp fields](javascript:call_link\('abentimestamp_field_glosry.htm'\) "Glossary Entry") to representation in packed numbers and vice versa.