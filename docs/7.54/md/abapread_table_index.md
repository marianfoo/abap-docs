---
title: "READ TABLE - index"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_table_itab_shortref.htm) Syntax ... INDEX idx USING KEY keyname(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenkeyname.htm) ... Addition: ... USING KEY keyname(#!ABAP_ONE_ADD@1@) Effect
version: "7.54"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_table_index.htm"
abapFile: "abapread_table_index.htm"
keywords: ["select", "loop", "do", "if", "try", "data", "internal-table", "abapread", "table", "index"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab.htm) →  [Processing Statements for Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_processing_statements.htm) →  [READ TABLE itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_table.htm) → 

READ TABLE - index

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_table_itab_shortref.htm)

Syntax

... INDEX idx *\[*USING KEY [keyname](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenkeyname.htm)*\]* ...

Addition:

[... USING KEY keyname](#!ABAP_ONE_ADD@1@)

Effect

If the INDEX addition is used, the READ statement reads the row of the row number specified in idx with respect to a table index. idx is a [numerical expression position](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry") of the operand type i. If the value of idx is less than or equal to 0 or greater than the number of table rows, no row is read and sy-subrc is set to 4. If the read is successful, the system field sy-tabix contains the row number specified in idx in the primary or secondary table index used.

If the addition USING KEY is not used, the addition INDEX can only be specified for [index tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenindex_table_glosry.htm "Glossary Entry") and determines the row to be read from the [primary table index](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprimary_table_index_glosry.htm "Glossary Entry").

Note

[Table expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_expression_glosry.htm "Glossary Entry") enable reads to be performed in operand positions too. Here an index is specified as a numeric argument [idx](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_exp_itab_line.htm).

Example

Reads the first ten rows of the internal table sflight\_tab using the primary table index. Instead of the DO loop, a [LOOP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab.htm) or a corresponding iteration expression with [FOR](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfor_itab.htm) is used for this purpose.

DATA: sflight\_tab TYPE SORTED TABLE OF sflight
                  WITH NON-UNIQUE KEY seatsocc,
      sflight\_wa  LIKE LINE OF sflight\_tab.
...
SELECT \*
       FROM sflight
       WHERE carrid = 'LH' AND
             connid = '400'
       INTO TABLE @sflight\_tab.
...
DO 10 TIMES.
  READ TABLE sflight\_tab INDEX sy-index INTO sflight\_wa.
  IF sy-subrc <> 0.
    EXIT.
  ENDIF.
  ...
ENDDO.

Addition

... USING KEY keyname

Effect

If the addition USING KEY is used, a table key can be specified in [keyname](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenkeyname.htm) to specify the table index to be used explicitly.

If the table has a [sorted](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensorted_key_glosry.htm "Glossary Entry") [secondary key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_table_key_glosry.htm "Glossary Entry"), this can be specified in keyname. The row to be read is then determined from its [secondary table index](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_table_index_glosry.htm "Glossary Entry"). A secondary [hash key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhash_key_glosry.htm "Glossary Entry") cannot be specified.

If the [primary table key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") is specified under the name primary\_key, the table must be an index table, and the behavior is the same as when USING KEY is not specified.

Notes

-   If a sorted secondary key exists, the addition INDEX can be used for all table categories, if USING KEY is used.
    
-   [Table expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_expression_glosry.htm "Glossary Entry") enable reads to be performed in operand positions too. The table key for an index is specified using [KEY keyname INDEX](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_exp_itab_line.htm).
    

Example

Reads the first ten rows of the internal table sflight\_tab using a secondary table index. Instead of the DO loop, a [LOOP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab.htm) or a corresponding iteration expression with [FOR](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfor_itab.htm) is used for this purpose.

DATA: sflight\_tab TYPE HASHED TABLE OF sflight
                  WITH UNIQUE KEY primary\_key
                       COMPONENTS carrid connid fldate
                  WITH NON-UNIQUE SORTED KEY occupied\_seats
                       COMPONENTS seatsocc,
      sflight\_wa  LIKE LINE OF sflight\_tab.
...
SELECT \*
       FROM sflight
       WHERE carrid = 'LH' AND
             connid = '400'
       INTO TABLE @sflight\_tab.
...
DO 10 TIMES.
  READ TABLE sflight\_tab
       INDEX sy-index USING KEY occupied\_seats
       INTO sflight\_wa.
  IF sy-subrc <> 0.
    EXIT.
  ENDIF.
  ...
ENDDO.