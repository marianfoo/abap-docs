---
title: "Syntax"
description: |
  ... wa  INITIAL LINE  LINES OF jtab FROM idx1 TO idx2 USING KEY keyname(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenkeyname.htm) ... Alternatives: 1. ... wa(#!ABAP_ALTERNATIVE_1@1@) 2. ... INITIAL LINE(#!ABAP_ALTERNATIVE_2@2@) 3.
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_itab_linespec.htm"
abapFile: "abapinsert_itab_linespec.htm"
keywords: ["insert", "update", "loop", "do", "if", "case", "try", "class", "data", "types", "internal-table", "field-symbol", "abapinsert", "itab", "linespec"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab.htm) →  [Processing Statements for Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_processing_statements.htm) →  [INSERT itab](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_itab.htm) → 

INSERT - line\_spec

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_itab_shortref.htm)

Syntax

... wa
  *|* *{*INITIAL LINE*}*
  *|* *{*LINES OF jtab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*USING KEY [keyname](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenkeyname.htm)*\]**}* ...

Alternatives:

[1\. ... wa](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... INITIAL LINE](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... LINES OF jtab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*USING KEY keyname*\]*](#!ABAP_ALTERNATIVE_3@3@)

Effect

Either a work area wa, an initial row INITIAL LINE, or multiple rows of an internal table jtab can be appended.

Alternative 1

... wa

Effect

A new row is created to which the content of the work area wa is assigned. wa is a [general expression position](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"). The following applies here:

-   To insert using the table key, wa [must be compatible with](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencompatible_glosry.htm "Glossary Entry") the row type of the internal table. Exceptions to this rule are any [constructor expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") whose result type can be incompatible with the row type and whose result is converted to the row type (if possible).
    
-   To insert using the table index, wa must be incompatible with the row type of the internal table. wa is converted to the relevant row type, in accordance with the [conversion rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_rules.htm).
    

If a conversion error occurs in the conversion, the exception cannot be handled using CX\_SY\_CONVERSION\_ERROR and the associated runtime error occurs instead. If an [arithmetic expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") is specified for wa, the row type of the internal table is respected when determining the [calculation type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencalculation_type_glosry.htm "Glossary Entry").

When inserting individual rows into an internal table with non-unique [table keys](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab_key.htm), the order of the duplicate rows in relation to these keys is determined in accordance with the insertion order of the individual rows. In the case of secondary table keys, this order is determined place during the [lazy update](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlazy_update_glosry.htm "Glossary Entry").

If there is a conflict with the existing unique primary table key, no row is added and if a key access occurs, sy-subrc is set to 4. In an index access occurs, a non-handleable exception is raised. In the case of a conflict with a unique secondary table key, a handleable exception of the class CX\_SY\_ITAB\_DUPLICATE\_KEY is raised.

Notes

-   When using the table key to make inserts, incompatible work areas can be converted to the row type using the conversion operator [CONV](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_conv.htm).
    
-   Specifying a [calculation expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencalculation_expression_glosry.htm "Glossary Entry") for wa is usually only a good idea for elementary row types.
    
-   Outside of classes, an [obsolete short form](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab_short_forms.htm) is possible where wa INTO can be omitted if the internal table has a [header line](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenheader_line_glosry.htm "Glossary Entry") itab with the same name. The statement then uses the header line as the work area implicitly.
    

Example

Inserts a structure constructed using the value operator [VALUE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_value.htm) into an internal table.

DATA itab TYPE HASHED TABLE OF scarr WITH UNIQUE KEY carrid.
INSERT VALUE #( carrid   = 'XXX'
                carrname = 'yyyyyyyyy'
                currcode = 'ZZ'
                url      = '...' ) INTO TABLE itab.

Alternative 2

... INITIAL LINE

Effect

A new row is created in which every component contains the type-dependent [initial value](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuilt_in_types_complete.htm).

Example

Inserts an initial row that is associated with a field symbol using the addition [ASSIGNING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_itab_result.htm). This means that initial rows can be processed directly.

DATA itab TYPE TABLE OF spfli.
FIELD-SYMBOLS <line> LIKE LINE OF itab.
INSERT INITIAL LINE INTO itab INDEX 1 ASSIGNING <line>.
<line>-carrid = '...'.
...

Alternative 3

... LINES OF jtab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*USING KEY keyname*\]*

Effect

The rows of an internal table jtab are added as a block. jtab is a [functional operand position](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunctional_position_glosry.htm "Glossary Entry"). The row types of itab and jtab must be compatible when inserting using the table key and must be convertible when inserting using the index.

The inserted rows are sequentially taken from the table jtab. The order in which the rows are taken is the same as for the statement [LOOP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_itab.htm) and can also be influenced by specifying a table key [keyname](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenkeyname.htm) after USING KEY. The additions FROM idx1 and TO idx2 have, in relation to jtab, the same syntax and effect as for [LOOP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_itab_cond.htm).

When inserting rows as a block into an internal table with non-unique [primary table keys](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprimary_table_key_glosry.htm "Glossary Entry"), the order of the duplicate rows in relation to this primary key is retained. This does not apply for [secondary keys](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensecondary_key_glosry.htm "Glossary Entry").

-   If there is already a duplicate entry in a sorted target table, the duplicates of the source block are inserted in their original order in front of the first duplicate in the target table.
    
-   When insertions are made in standard tables, however, INSERT always operates like the statement [APPEND](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapappend.htm) and the rows are appended in their original order after the last row as in the addition [LINES OF](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapappend_linespec.htm) .
    

If there is a conflict with an existing unique table key, a handleable exception is raised when inserting multiple rows from an internal table. If a conversion error occurs when rows are inserted, the exception cannot be handled using CX\_SY\_CONVERSION\_ERROR and the associated runtime error occurs instead.

Note

When an internal tables is constructed, the constructor operators [NEW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_new.htm) and [VALUE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_new.htm) can also insert multiple rows from a table into the target table using [LINES OF](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennew_constructor_params_lspc.htm).

Example

Inserts the rows of an internal table itab into the same table. The rows are inserted in front of the existing first row and in ascending order due to the sorted secondary key skey being specified.

DATA itab TYPE TABLE OF i
          WITH NON-UNIQUE SORTED KEY skey COMPONENTS table\_line.
itab = VALUE #( FOR i = 1 UNTIL i > 10 ( 11 - i ) ).
INSERT LINES OF itab USING KEY skey INTO itab INDEX 1.
cl\_demo\_output=>display( itab ).