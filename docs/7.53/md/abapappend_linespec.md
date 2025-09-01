---
title: "Syntax"
description: |
  ... wa  INITIAL LINE  LINES OF jtab FROM idx1 TO idx2 USING KEY keyname(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenkeyname.htm) ... Alternatives: 1. ... wa(#!ABAP_ALTERNATIVE_1@1@) 2. ... INITIAL LINE(#!ABAP_ALTERNATIVE_2@2@) 3.
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapappend_linespec.htm"
abapFile: "abapappend_linespec.htm"
keywords: ["select", "insert", "loop", "do", "if", "case", "try", "class", "data", "types", "internal-table", "field-symbol", "abapappend", "linespec"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab.htm) →  [Processing Statements for Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_processing_statements.htm) →  [APPEND](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapappend.htm) → 

APPEND - line\_spec

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapappend_shortref.htm)

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

A new row is appended to which the content of the work area wa is assigned. wa is a [general expression position](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"). wa may be incompatible with the row type of the internal table and, if necessary, is converted to the row type in accordance with the [conversion rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_rules.htm). If a conversion error occurs here, the exception cannot be handled using CX\_SY\_CONVERSION\_ERROR and the associated runtime error occurs instead. If an [arithmetic expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") is specified for wa, the row type of the internal table is respected when determining the [calculation type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencalculation_type_glosry.htm "Glossary Entry").

Notes

-   If a conflict occurs with an existing unique primary table type, this raises a non-handleable exception when appending a single row. In the case of a conflict with a unique secondary table key, a handleable exception of the class CX\_SY\_ITAB\_DUPLICATE\_KEY is raised.
    
-   Specifying a [calculation expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencalculation_expression_glosry.htm "Glossary Entry") for wa is usually only a good idea for elementary row types.
    
-   With the exception, an [obsolete short form](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab_short_forms.htm) is possible where wa TO can be omitted, if the internal table has a [header line](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenheader_line_glosry.htm "Glossary Entry") itab with the same name. The statement then uses the header line as the work area implicitly.
    

Example

Appends square numbers to a [sorted table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensorted_table_glosry.htm "Glossary Entry") with elementary row type.

DATA: int  TYPE i,
      itab LIKE SORTED TABLE OF int
           WITH UNIQUE KEY table\_line.
DO 10 TIMES.
  int = sy-index \*\* 2.
  APPEND int TO itab.
ENDDO.

Alternative 2

... INITIAL LINE

Effect

A new row is added in which every component contains the [type-dependent initial value](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuilt_in_types_complete.htm).

Example

Attaches an initial row that is also associated with a field symbol using the addition [ASSIGNING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapappend_result.htm). This means that initial rows can be processed directly.

DATA itab TYPE TABLE OF spfli.
FIELD-SYMBOLS <line> LIKE LINE OF itab.
APPEND INITIAL LINE TO itab ASSIGNING <line>.
<line>-carrid = '...'.
...

Alternative 3

... LINES OF jtab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*USING KEY keyname*\]*

Effect

The rows of an internal table jtab are added as a block. jtab is a [functional operand position](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunctional_position_glosry.htm "Glossary Entry").

The inserted rows are taken sequentially from the table jtab. The row type of jtab can be incompatible with the row type of the internal table itab and it is converted to the row type of the target table (if necessary), in accordance with the [conversion rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_rules.htm). If a conversion error occurs here, the exception cannot be handled using CX\_SY\_CONVERSION\_ERROR and the associated runtime error occurs instead.

The order in which the rows are taken is the same as for the statement [LOOP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_itab.htm) and can also be influenced by specifying a table key [keyname](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenkeyname.htm) after USING KEY. The additions FROM idx1 and TO idx2 have, in relation to jtab, the same syntax and effect as for [LOOP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_itab_cond.htm).

If a conflict with existing primary or secondary table keys occurs, this always raises a non-handleable exception when multiple rows are appended.

Note

When a standard table is constructed, the constructor operators [NEW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_new.htm) and [VALUE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_new.htm) can also append multiple rows from a table to the target table using [LINES OF](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennew_constructor_params_lspc.htm).

Example

Appends the rows of an internal table itab2 to the standard table itab1.

SELECT \*
       FROM spfli
       WHERE carrid = 'LH'
       INTO TABLE @DATA(itab1).
SELECT \*
       FROM spfli
       WHERE carrid = 'UA'
       INTO TABLE @DATA(itab2).
APPEND LINES OF itab2 TO itab1.