  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews.htm) →  [Changes in Releases 4.xx](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-4.htm) →  [Changes in Release 4.6A](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-46a.htm) → 

Dynamic Access to Offsets and Lengths in Release 4.6A

Offsets/lengths specified dynamically enable a specific position to be accessed within a field or structure using values that are only known at runtime. This access type is available in Release 4.6A for all statements relating to fields.

Example:

g+off2(len2) = f+off1(len1).

Starting with offset off2 in length len2, the field g is assigned the content of field f starting with offset off1 in length len2. If the two field lengths are not identical, the remaining positions are cut off or padded with initial values. The fields f and g must have the type x, c, n, d, or t. Structures are also allowed.