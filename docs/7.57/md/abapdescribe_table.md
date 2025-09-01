---
title: "DESCRIBE TABLE"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdescribe_table_shortref.htm) Syntax DESCRIBE TABLE itab KIND knd LINES lin OCCURS n. Additions: 1. ... KIND knd(#!ABAP_ADDITION_1@1@) 2. ... LINES lin(#!ABAP_ADDITION_2@2@) 3. ... OCCURS
version: "7.57"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdescribe_table.htm"
abapFile: "abapdescribe_table.htm"
keywords: ["select", "do", "if", "case", "try", "catch", "method", "class", "data", "types", "internal-table", "abapdescribe", "table"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Attributes of Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendescribe_field.htm) →  [DESCRIBE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdescribe.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DESCRIBE TABLE, ABAPDESCRIBE_TABLE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugg
estion for improvement:)

DESCRIBE TABLE

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdescribe_table_shortref.htm)

Syntax

DESCRIBE TABLE itab *\[*KIND knd*\]* *\[*LINES lin*\]* *\[*OCCURS n*\]*.

Additions:

[1\. ... KIND knd](#!ABAP_ADDITION_1@1@)
[2\. ... LINES lin](#!ABAP_ADDITION_2@2@)
[3\. ... OCCURS n](#!ABAP_ADDITION_3@3@)

Effect

This statement determines some of the properties of the internal table itab and assigns them to the specified target fields. The following can be specified as target fields of each addition:

-   Existing variables to which the return value can be converted.
-   Inline declarations [DATA(var)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_inline.htm) or [FINAL(var)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfinal_inline.htm).

The different additions enable the table category, the number of currently filled lines, and the [initial memory requirement](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninitial_mem_req_glosry.htm "Glossary Entry") to be determined.

In addition, the system fields sy-tfill and sy-tleng are filled with the current number of table lines and the length of a table line in bytes.

Hints

-   For more detailed information about an internal table, it is best to use the methods of the [RTTS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrun_time_type_services_glosry.htm "Glossary Entry") instead of the statement DESCRIBE TABLE.
-   If no addition is specified, the statement DESCRIBE TABLE only sets the system fields sy-tfill and sy-tleng.

Addition 1   

... KIND knd

Effect

Determines the table category of the internal table itab. The return value is a single character character-like ID. In an inline declaration, a variable of the type c with length 1 is declared.

The possible IDs are "T" for [standard tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_table_glosry.htm "Glossary Entry"), "S" for sorted tables, and "H" for [hashed tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhashed_table_glosry.htm "Glossary Entry"). These values are also defined as constants sydes\_kind-standard, sydes\_kind-sorted, and sydes\_kind-hashed in the [type pool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentype_pool_glosry.htm "Glossary Entry") SYDES.

Example

Sorting of a generically typed internal table in a method in descending order. Since [sorted tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensorted_table_glosry.htm "Glossary Entry") cannot be sorted in descending order, the table category is checked to prevent uncatchable exceptions from being raised.

CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS sort\_descending CHANGING itab TYPE ANY TABLE.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD sort\_descending.
    DESCRIBE TABLE itab KIND FINAL(tabkind).
    IF tabkind = sydes\_kind-standard OR
       tabkind = sydes\_kind-hashed.
      SORT itab DESCENDING.
    ELSEIF tabkind = sydes\_kind-sorted.
      MESSAGE '...' TYPE 'E'.
    ELSE.
      MESSAGE '...' TYPE 'E'.
    ENDIF.
  ENDMETHOD.
ENDCLASS.

Addition 2   

... LINES lin

Effect

Determines the current number of table lines in the internal table itab. The return value has the type i. In an inline declaration, a variable of the type i is declared.

Hint

The current number of lines of an internal table can also be determined using the [built-in function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuiltin_function_glosry.htm "Glossary Entry") [lines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendescriptive_functions_table.htm), which can be used in suitable [operand positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexpression_positions.htm).

Example

The example shows that the addition of LINES to DESCRIBE TABLE and the built-in function [lines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendescriptive_functions_table.htm) have the same result.

SELECT carrid
       FROM scarr
       INTO TABLE @FINAL(scarr\_tab).
DESCRIBE TABLE scarr\_tab LINES FINAL(lines).
ASSERT lines = lines( scarr\_tab ).

Addition 3   

... OCCURS n

Effect

Determines the [initial memory requirement](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninitial_mem_req_glosry.htm "Glossary Entry") defined using the addition [INITIAL SIZE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_itab.htm) or the obsolete addition [OCCURS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_occurs.htm) when the internal table is created.

If neither INITIAL SIZE nor OCCURS were used:

-   For internal tables created by [RANGES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapranges.htm) or [INFOTYPES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinfotypes.htm), the standard value 10 is returned.
-   In all other cases, the initial memory requirement is fully set by the ABAP runtime framework and the value of n is set to 0.

The return value has the type i. In an inline declaration, a variable of the type i is declared.

Hint

The value 0 for an initial memory requirement fully set by the ABAP runtime framework reflects the value 0 that can be specified behind INITIAL SIZE or OCCURS to define this behavior.

Example

The example shows that the addition of OCCURS to DESCRIBE TABLE and the property INITIAL\_SIZE of a type description object of class CL\_ABAP\_TABLEDESCR produce the same value.

DATA itab TYPE TABLE OF i INITIAL SIZE 10 WITH EMPTY KEY.
DESCRIBE TABLE itab OCCURS FINAL(occ).
ASSERT occ = CAST cl\_abap\_tabledescr(
  cl\_abap\_typedescr=>describe\_by\_data( itab ) )->initial\_size.