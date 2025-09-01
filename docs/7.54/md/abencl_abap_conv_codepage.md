  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [System Classes for Character String and Byte String Processing](javascript:call_link\('abencl_abap_string_utilities.htm'\)) → 

Methods for Handling Code Pages

The methods CONVERT of the interfaces IF\_ABAP\_CONV\_OUT and IF\_ABAP\_CONV\_IN of objects created with the class CL\_ABAP\_CONV\_CODEPAGE make it possible to convert strings to the binary representation of various code pages (and back again).

Example

Converts the content of a string into its UTF-8 representation. The value "UTF-8" is the default value for the parameter CODEPAGE and can be omitted if required. The statement [ASSERT](javascript:call_link\('abapassert.htm'\)) shows that the reverse conversion creates the original text.

DATA(str) = \`Blah blah ...\`.
DATA(xstr) =
  cl\_abap\_conv\_codepage=>create\_out( codepage = \`UTF-8\`
    )->convert( source = str ).
ASSERT
  cl\_abap\_conv\_codepage=>create\_in( codepage = \`UTF-8\`
    )->convert( source = xstr ) = str.