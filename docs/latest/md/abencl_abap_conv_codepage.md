---
title: "Methods for Handling Code Pages"
description: |
  The methods CONVERT of the interfaces IF_ABAP_CONV_OUT and IF_ABAP_CONV_IN of objects created with the class CL_ABAP_CONV_CODEPAGE make it possible to convert strings to the binary representation of various code pages and vice versa. Example Conversion of the content of a string into its UT
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_conv_codepage.htm"
abapFile: "abencl_abap_conv_codepage.htm"
keywords: ["do", "if", "method", "class", "data", "abencl", "abap", "conv", "codepage"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_string.htm) →  [System Classes for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_string_utilities.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Methods%20for%20Handling%20Code%20Pages%2C%20ABENCL_ABAP_CONV_CODEPAGE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Methods for Handling Code Pages

The methods CONVERT of the interfaces IF\_ABAP\_CONV\_OUT and IF\_ABAP\_CONV\_IN of objects created with the class CL\_ABAP\_CONV\_CODEPAGE make it possible to convert strings to the binary representation of various code pages and vice versa.

Example

Conversion of the content of a string into its UTF-8 representation. The value UTF-8 is the default value for the parameter CODEPAGE and can also be omitted. The statement [ASSERT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassert.htm) shows that the reverse conversion creates the original text again.

FINAL(str) = \`Blah blah ...\`.
FINAL(xstr) =
  cl\_abap\_conv\_codepage=>create\_out( codepage = \`UTF-8\`
    )->convert( source = str ).
ASSERT
  cl\_abap\_conv\_codepage=>create\_in( codepage = \`UTF-8\`
    )->convert( source = xstr ) = str.