---
title: "Class for Handling Code Pages"
description: |
  The class CL_ABAP_CODEPAGE contains methods for converting the representation of character strings between different code pages. The interface IF_ABAP_CODEPAGE enables objects in the class to be accessed. Example Converts the content of a string into its UTF-8 representation. DATA(str) = `...`
version: "7.52"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_codepage.htm"
abapFile: "abencl_abap_codepage.htm"
keywords: ["do", "if", "method", "class", "data", "abencl", "abap", "codepage"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_string.htm) →  [System Classes for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_string_utilities.htm) → 

Class for Handling Code Pages

The class CL\_ABAP\_CODEPAGE contains methods for converting the representation of character strings between different code pages. The interface IF\_ABAP\_CODEPAGE enables objects in the class to be accessed.

Example

Converts the content of a string into its UTF-8 representation.

DATA(str) = \`...\`.
DATA(xstr) = cl\_abap\_codepage=>convert\_to(
               source      = str
               codepage    = \`UTF-8\` ).