  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Attributes of Data Objects](javascript:call_link\('abendescribe_field.htm'\)) →  [DESCRIBE](javascript:call_link\('abapdescribe.htm'\)) → 

DESCRIBE TABLE

[Short Reference](javascript:call_link\('abapdescribe_table_shortref.htm'\))

Syntax

DESCRIBE TABLE itab *\[*KIND knd*\]* *\[*LINES lin*\]* *\[*OCCURS n*\]*.

Additions:

[1\. ... KIND knd](#!ABAP_ADDITION_1@1@)
[2\. ... LINES lin](#!ABAP_ADDITION_2@2@)
[3\. ... OCCURS n](#!ABAP_ADDITION_3@3@)

Effect

This statement determines some of the properties of the internal table itab and assigns them to the specified target fields. The following can be specified as target fields of each addition:

-   Existing variables to which the return value can be converted.
-   Inline declarations [DATA(var)](javascript:call_link\('abendata_inline.htm'\)).

The different additions enable the table category, the number of currently filled lines, and the initial memory requirement to be determined.

In addition, the system fields sy-tfill and sy-tleng are filled with the current number of table lines and the length of a table line in bytes.

Hints

-   For more detailed information about an internal table, it is best to use the methods of the [RTTS](javascript:call_link\('abenrun_time_type_services_glosry.htm'\) "Glossary Entry") instead of the statement DESCRIBE TABLE.
-   If no addition is specified, the statement DESCRIBE TABLE only sets the system fields sy-tfill and sy-tleng.

Addition 1   

... KIND knd

Effect

Determines the table category of the internal table itab. The return value is a single character character-like ID. In an inline declaration, a variable of the type c with length 1 is declared.

The possible IDs are "T" for [standard tables](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry"), "S" for sorted tables, and "H" for [hashed tables](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry"). These values are also defined as constants sydes\_kind-standard, sydes\_kind-sorted, and sydes\_kind-hashed in the [type pool](javascript:call_link\('abentype_pool_glosry.htm'\) "Glossary Entry") SYDES.

Example

Sorting of a generically typed internal table in a method in descending order. Since [sorted tables](javascript:call_link\('abensorted_table_glosry.htm'\) "Glossary Entry") cannot be sorted in descending order, the table category is checked to prevent uncatchable exceptions from being raised.

CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS sort\_descending CHANGING itab TYPE ANY TABLE.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD sort\_descending.
    DESCRIBE TABLE itab KIND DATA(tabkind).
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

The current number of lines of an internal table can also be determined using the [built-in function](javascript:call_link\('abenbuiltin_function_glosry.htm'\) "Glossary Entry") [lines](javascript:call_link\('abendescriptive_functions_table.htm'\)), which can be used in suitable [operand positions](javascript:call_link\('abenexpression_positions.htm'\)).

Example

The example shows that the addition of LINES to DESCRIBE TABLE and the built-in function [lines](javascript:call_link\('abendescriptive_functions_table.htm'\)) have the same result.

SELECT carrid
       FROM scarr
       INTO TABLE @DATA(scarr\_tab).
DESCRIBE TABLE scarr\_tab LINES DATA(lines).
ASSERT lines = lines( scarr\_tab ).

Addition 3   

... OCCURS n

Effect

Determines the initial memory requirements defined using the addition [INITIAL SIZE](javascript:call_link\('abaptypes_itab.htm'\)) or the obsolete addition [OCCURS](javascript:call_link\('abaptypes_occurs.htm'\)) when the internal table is created. The return value has the type i. In an inline declaration, a variable of the type i is declared.

Example

The example shows that the addition of OCCURS to DESCRIBE TABLE and the attribute INITIAL\_SIZE of a type description object of class CL\_ABAP\_TABLEDESCR produce the same value.

DATA itab TYPE TABLE OF i INITIAL SIZE 10 WITH EMPTY KEY.
DESCRIBE TABLE itab OCCURS DATA(occ).
ASSERT occ = CAST cl\_abap\_tabledescr(
  cl\_abap\_typedescr=>describe\_by\_data( itab ) )->initial\_size.