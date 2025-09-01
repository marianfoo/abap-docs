  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 4.xx](javascript:call_link\('abennews-4.htm'\)) →  [News for Release 4.6A](javascript:call_link\('abennews-46a.htm'\)) → 

Dynamic Access to Offsets and Lengths in Release 4.6A

Offsets/lengths specified dynamically enable a specific position to be accessed within a field or structure using values that are only known at runtime. This access type is available in Release 4.6A for all statements relating to fields.

Example:

g+off2(len2) = f+off1(len1).

Starting with offset off2 in length len2, the field g is assigned the content of field f starting with offset off1 in length len2. If the two field lengths are not identical, the remaining positions are cut off or padded with initial values. The fields f and g must have the type x, c, n, d, or t. Structures are also allowed.