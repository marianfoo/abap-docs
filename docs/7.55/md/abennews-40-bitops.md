  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 4.xx](javascript:call_link\('abennews-4.htm'\)) →  [Changes in Release 4.0](javascript:call_link\('abennews-40.htm'\)) → 

Bit Operations and Bit Comparisons in Release 4.0

New Variants SET BIT and GET BIT

[SET BIT n of f](javascript:call_link\('abapset_bit.htm'\)) sets the nth bit of the field f.
[GET BIT n OF f INTO g](javascript:call_link\('abapget_bit.htm'\)) passes the nth bit of the field f to the field g.

New Bit Operations BIT-NOT, BIT-AND, BIT-XOR, and BIT-OR

In the [COMPUTE](javascript:call_link\('abapcompute_bit.htm'\)) statement, the new operators BIT-NOT, BIT-AND, BIT-XOR, and BIT-OR can be used for bit operations.

Complex conditions and sets can be managed efficiently using the new variants SET BIT and GET BIT and the new bit operations applied to bit strings.

Changes in Bit Comparisons

In the case of the [comparison operators](javascript:call_link\('abenlogexp_bitmasks.htm'\)) O, Z, and M, comparisons now take place in the length of the second operand, which must have the type X.
Before Release 3.0, comparisons took place in length 1 and the second field was considered to be a X field, regardless of its type and length.