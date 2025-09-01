---
title: "Methods for Handling Code Pages"
description: |
  The methods CONVERT of the interfaces IF_ABAP_CONV_OUT and IF_ABAP_CONV_IN of objects created with the class CL_ABAP_CONV_CODEPAGE make it possible to convert strings to the binary representation of various code pages (and back again). Example Converts the content of a string into its UTF-8
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencl_abap_conv_codepage.htm"
abapFile: "abencl_abap_conv_codepage.htm"
keywords: ["do", "if", "method", "class", "data", "abencl", "abap", "conv", "codepage"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_string.htm) →  [System Classes for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencl_abap_string_utilities.htm) → 

Methods for Handling Code Pages

The methods CONVERT of the interfaces IF\_ABAP\_CONV\_OUT and IF\_ABAP\_CONV\_IN of objects created with the class CL\_ABAP\_CONV\_CODEPAGE make it possible to convert strings to the binary representation of various code pages (and back again).

Example

Converts the content of a string into its UTF-8 representation. The value "UTF-8" is the default value for the parameter CODEPAGE and can be omitted if required. The statement [ASSERT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassert.htm) shows that the reverse conversion creates the original text.

DATA(str) = \`Blah blah ...\`.
DATA(xstr) =
  cl\_abap\_conv\_codepage=>create\_out( codepage = \`UTF-8\`
    )->convert( source = str ).
ASSERT
  cl\_abap\_conv\_codepage=>create\_in( codepage = \`UTF-8\`
    )->convert( source = xstr ) = str.