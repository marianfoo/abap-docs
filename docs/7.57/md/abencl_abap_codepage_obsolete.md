---
title: "Obsolete Methods for Handling Code Pages"
description: |
  The class CL_ABAP_CODEPAGE contains methods for converting the representation of character strings between different code pages. The interface IF_ABAP_CODEPAGE enables objects in the class to be accessed. Hint The methods CONVERT of the interfaces IF_ABAP_CONV_OUT(https://help.sap.com/doc/a
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencl_abap_codepage_obsolete.htm"
abapFile: "abencl_abap_codepage_obsolete.htm"
keywords: ["do", "if", "method", "class", "data", "abencl", "abap", "codepage", "obsolete"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_internal_obsolete.htm) →  [Obsolete Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencharacter_string_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Obsolete Methods for Handling Code Pages, ABENCL_ABAP_CODEPAGE_OBSOLETE, 757%0D%0A%0D
%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Obsolete Methods for Handling Code Pages

The class CL\_ABAP\_CODEPAGE contains methods for converting the representation of character strings between different code pages. The interface IF\_ABAP\_CODEPAGE enables objects in the class to be accessed.

Hint

The methods CONVERT of the interfaces [IF\_ABAP\_CONV\_OUT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencl_abap_conv_codepage.htm) and [IF\_ABAP\_CONV\_IN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencl_abap_conv_codepage.htm) are more robust than the methods of the class CL\_ABAP\_CODEPAGE and replace them.

Example

This example demonstrates a conversion of strings to their UTF-8 representation and vice versa. The interface methods CONVERT replace the methods CONVERT\_TO and CONVERT\_FROM of the class CL\_ABAP\_CODEPAGE.

FINAL(xstr\_new) =
  cl\_abap\_conv\_codepage=>create\_out(  )->convert( \`Blahblah\` ).
FINAL(xstr\_old) =
  cl\_abap\_codepage=>convert\_to( \`Blahblah\` ).
ASSERT xstr\_new = xstr\_old.
FINAL(text\_new) =
  cl\_abap\_conv\_codepage=>create\_in( )->convert( xstr\_new ).
FINAL(text\_old) =
  cl\_abap\_codepage=>convert\_from( xstr\_old ).
ASSERT text\_new = text\_old.