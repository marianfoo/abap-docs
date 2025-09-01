  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Releases 4.xx](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-4.htm) →  [Changes in Releases 4.0 and 4.5](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-40.htm) → 

Bit Operations and Bit Comparisons in Release 4.0

New variants SET BIT and GET BIT

[SET BIT n of f](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_bit.htm) sets the nth bit of field f.
[GET BIT n OF f INTO g](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_bit.htm) puts the nth bit of field f in field g.

,,New bit operations BIT-NOT, BIT-AND, BIT-XOR and BIT-OR

In the [COMPUTE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute_bit.htm) statement, the new operators BIT-NOT, BIT-AND, BIT-XOR and BIT-OR can be used for bit operations.

You can manage complex conditions and sets efficiently with the new variants SET BIT and GET BIT and the new bit operations applied to bits strings.

Changes in Bit Comparisons

The comparison is now performed in the second operand for the [compare operators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_bitmasks.htm) O, Z and M, where the operand must be of type X.
Up to Release 3.0 the comparison was performed in length 1 and the second field was considerd to be a X field, regardless of its type and length.