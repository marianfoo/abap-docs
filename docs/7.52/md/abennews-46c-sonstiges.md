  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Releases 4.xx](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-4.htm) →  [Changes in Release 4.6C](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-46c.htm) → 

Other Changes in Release 4.6 C

[1\. Extension of the scan buffer](#!ABAP_MODIFICATION_1@1@)

[2\. New functions for strings](#!ABAP_MODIFICATION_2@2@)

[3\. Greater precision in BCD arithmetic](#!ABAP_MODIFICATION_3@3@)

[4\. New relational expression IS SUPPLIED](#!ABAP_MODIFICATION_4@4@)

Modification 1

Extension of the Scan Buffer

SAP has extended the scan buffer
from 8 Kb to 28 Kb. Each ABAP
statement can now contain a parameter list of this length. For example, a [WHERE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwhere.htm)addition can now contain 450 selection entries (instead of 100 as before), if variable names of 30 characters are used.

Modification 2

New Functions for Strings

The CHARLEN and NUMOFCHAR functions are now available
for strings. [CHARLEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute_arith.htm) returns the length of the first character in a string or a character-type field. In single-byte code pages, this is always one. In SAP-compatible multi-byte code pages, this can be either 1 or 2.

[NUMOFCHAR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute_arith.htm) returns the number of characters in a string or character-type field. In single-byte [code pages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencodepage_glosry.htm "Glossary Entry"), the behavior is the same as for the [STRLEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute_arith.htm) statement. In multi-byte code pages, characters occupying more than one byte are considered to have a length of 1.

Modification 3

Greater Precision in

BCD Arithmetic

BCD arithmetic for the data type P has been extended, so that interim results are now calculated using 127 digits (instead of 63 as before). This change affects internal representation only, since type P fields are still defined with a maximum of 16 bytes - that is, 31 digits.

Modification 4

New relational expression IS SUPPLIED

The relational expression [IS SUPPLIED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_supplied.htm) indicates whether an actual parameter is specified for an optional formal parameter of a method or function module. The new expression replaces the expression [IS REQUESTED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_requested.htm), and renders it obsolete.