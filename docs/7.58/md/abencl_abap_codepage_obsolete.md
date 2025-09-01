  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_internal_obsolete.htm) →  [Obsolete Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencharacter_string_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Obsolete%20Methods%20for%20Handling%20Code%20Pages%2C%20ABENCL_ABAP_CODEPAGE_OBSOLETE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20im
provement:)

Obsolete Methods for Handling Code Pages

The class CL\_ABAP\_CODEPAGE contains methods for converting the representation of character strings between different code pages. The interface IF\_ABAP\_CODEPAGE enables objects in the class to be accessed.

Hint

The methods CONVERT of the interfaces [IF\_ABAP\_CONV\_OUT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_conv_codepage.htm) and [IF\_ABAP\_CONV\_IN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_conv_codepage.htm) are more robust than the methods of the class CL\_ABAP\_CODEPAGE and replace them.

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