  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 4.xx](javascript:call_link\('abennews-4.htm'\)) →  [Changes in Release 4.0](javascript:call_link\('abennews-40.htm'\)) → 

Bit Operations and Bit Comparisons in Release 4.0

New variants SET BIT and GET BIT

[SET BIT n of f](javascript:call_link\('abapset_bit.htm'\)) sets the nth bit of field f.
[GET BIT n OF f INTO g](javascript:call_link\('abapget_bit.htm'\)) puts the nth bit of field f in field g.

,,New bit operations BIT-NOT, BIT-AND, BIT-XOR and BIT-OR

In the [COMPUTE](javascript:call_link\('abapcompute_bit.htm'\)) statement, the new operators BIT-NOT, BIT-AND, BIT-XOR and BIT-OR can be used for bit operations.

You can manage complex conditions and sets efficiently with the new variants SET BIT and GET BIT and the new bit operations applied to bits strings.

Changes in Bit Comparisons

The comparison is now performed in the second operand for the [compare operators](javascript:call_link\('abenlogexp_bitmasks.htm'\)) O, Z and M, where the operand must be of type X.
Up to Release 3.0 the comparison was performed in length 1 and the second field was considerd to be a X field, regardless of its type and length.