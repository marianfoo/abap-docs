  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 4.xx](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-4.htm) →  [News for ABAP Release 4.0](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-40.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Bit%20Operations%20and%20Bit%20Comparisons%20in%20ABAP%20Release%204.0%2C%20ABENNEWS-40-BITOPS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%2
0for%20improvement:)

Bit Operations and Bit Comparisons in ABAP Release 4.0

[1\. New Variants SET BIT and GET BIT](#!ABAP_MODIFICATION_1@1@)
[2\. New Bit Operations](#!ABAP_MODIFICATION_2@2@)
[3\. Changes in Bit Comparisons](#!ABAP_MODIFICATION_3@3@)

Modification 1   

New Variants SET BIT and GET BIT

[SET BIT n of f](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_bit.htm) sets the nth bit of the field f.

[GET BIT n OF f INTO g](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_bit.htm) passes the nth bit of the field f to the field g.

Modification 2   

New Bit Operations

In the [COMPUTE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcompute_bit.htm) statement, the new operators BIT-NOT, BIT-AND, BIT-XOR, and BIT-OR can be used for bit operations.

Complex conditions and sets can be managed efficiently using the new variants SET BIT and GET BIT and the new [bit operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbit_operator_glosry.htm "Glossary Entry") applied to bit strings.

Modification 3   

Changes in Bit Comparisons

In the case of the [comparison operators](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_bitmasks.htm) O, Z, and M, comparisons now take place in the length of the second operand, which must have the type X.

Before ABAP release 3.0, comparisons took place in length 1 and the second field was considered to be a X field, regardless of its type and length.