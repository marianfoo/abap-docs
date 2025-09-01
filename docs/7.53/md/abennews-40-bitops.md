  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews.htm) →  [Changes in Releases 4.xx](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-4.htm) →  [Changes in Release 4.0](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-40.htm) → 

Bit Operations and Bit Comparisons in Release 4.0

New Variants SET BIT and GET BIT

[SET BIT n of f](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_bit.htm) sets the nth bit of the field f.
[GET BIT n OF f INTO g](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_bit.htm) passes the nth bit of the field f to the field g.

New Bit Operations BIT-NOT, BIT-AND, BIT-XOR, and BIT-OR

In the [COMPUTE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_bit.htm) statement, the new operators BIT-NOT, BIT-AND, BIT-XOR, and BIT-OR can be used for bit operations.

Complex conditions and sets can be managed efficiently using the new variants SET BIT and GET BIT and the new bit operations applied to bit strings.

Changes in Bit Comparisons

In the case of the [relational operators](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_bitmasks.htm) O, Z, and M, comparisons now take place in the length of the second operand, which must have the type X.
Before Release 3.0, comparisons took place in length 1 and the second field was considered to be a X field, regardless of its type and length.