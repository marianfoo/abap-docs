---
title: "Obsolete Methods for Handling Code Pages"
description: |
  The class CL_ABAP_CODEPAGE contains methods for converting the representation of character strings between different code pages. The interface IF_ABAP_CODEPAGE enables objects in the class to be accessed. Note The methods CONVERT of the interfaces IF_ABAP_CONV_OUT(https://help.sap.com/doc/a
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencl_abap_codepage_obsolete.htm"
abapFile: "abencl_abap_codepage_obsolete.htm"
keywords: ["do", "if", "method", "class", "data", "abencl", "abap", "codepage", "obsolete"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_internal_obsolete.htm) →  [Obsolete Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencharacter_string_obsolete.htm) → 

Obsolete Methods for Handling Code Pages

The class CL\_ABAP\_CODEPAGE contains methods for converting the representation of character strings between different code pages. The interface IF\_ABAP\_CODEPAGE enables objects in the class to be accessed.

Note

The methods CONVERT of the interfaces [IF\_ABAP\_CONV\_OUT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencl_abap_conv_codepage.htm) and [IF\_ABAP\_CONV\_IN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencl_abap_conv_codepage.htm) are more robust than the methods of the class CL\_ABAP\_CODEPAGE and have replaced them.

Example

This example demonstrates a conversion of strings to their UTF-8 representation and back. The interface methods CONVERT replace the methods CONVERT\_TO and CONVERT\_FROM of the class CL\_ABAP\_CODEPAGE.

DATA(xstr\_new) =
  cl\_abap\_conv\_codepage=>create\_out(  )->convert( \`Blahblah\` ).
DATA(xstr\_old) =
  cl\_abap\_codepage=>convert\_to( \`Blahblah\` ).
ASSERT xstr\_new = xstr\_old.
DATA(text\_new) =
  cl\_abap\_conv\_codepage=>create\_in( )->convert( xstr\_new ).
DATA(text\_old) =
  cl\_abap\_codepage=>convert\_from( xstr\_old ).
ASSERT text\_new = text\_old.