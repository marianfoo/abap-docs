  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_string.htm) →  [System Classes for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencl_abap_string_utilities.htm) → 

Methods for Handling Code Pages

The methods CONVERT of the interfaces IF\_ABAP\_CONV\_OUT and IF\_ABAP\_CONV\_IN of objects created with the class CL\_ABAP\_CONV\_CODEPAGE make it possible to convert strings to the binary representation of various code pages and vice versa.

Example

Conversion of the content of a string into its UTF-8 representation. The value "UTF-8" is the default value for the parameter CODEPAGE and can also be omitted. The statement [ASSERT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassert.htm) shows that the reverse conversion creates the original text again.

DATA(str) = \`Blah blah ...\`.
DATA(xstr) =
  cl\_abap\_conv\_codepage=>create\_out( codepage = \`UTF-8\`
    )->convert( source = str ).
ASSERT
  cl\_abap\_conv\_codepage=>create\_in( codepage = \`UTF-8\`
    )->convert( source = xstr ) = str.