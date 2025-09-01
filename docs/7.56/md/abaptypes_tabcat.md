  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Declaring Data Types](javascript:call_link\('abentypes_statements.htm'\)) →  [TYPES](javascript:call_link\('abaptypes.htm'\)) →  [TYPES, TABLE OF](javascript:call_link\('abaptypes_itab.htm'\)) → 

TYPES, tabkind

[Short Reference](javascript:call_link\('abaptypes_shortref.htm'\))

Syntax

... *{* *{**\[*STANDARD*\]* TABLE*}*
    *|* *{*SORTED TABLE*}*
    *|* *{*HASHED TABLE*}*
    *|* *{*ANY TABLE*}*
    *|* *{*INDEX TABLE*}* *}* ...

Additions:

[1\. ... *\[*STANDARD*\]* TABLE](#!ABAP_ADDITION_1@1@)
[2\. ... SORTED TABLE](#!ABAP_ADDITION_2@2@)
[3\. ... HASHED TABLE](#!ABAP_ADDITION_3@3@)
[4\. ... ANY TABLE](#!ABAP_ADDITION_4@4@)
[5\. ... INDEX TABLE](#!ABAP_ADDITION_5@5@)

Effect

Defines the table category of an internal table. Possible specifications:

-   Non-generic table categories
    -   STANDARD TABLE for [standard tables](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry")
    -   SORTED TABLE for [sorted tables](javascript:call_link\('abensorted_table_glosry.htm'\) "Glossary Entry")
    -   HASHED TABLE for [hashed tables](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry")
-   Generic table categories
    -   ANY TABLE covers all table categories
    -   INDEX TABLE of [index tables](javascript:call_link\('abenindex_table_glosry.htm'\) "Glossary Entry") ([standard tables](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") and [sorted tables](javascript:call_link\('abensorted_table_glosry.htm'\) "Glossary Entry"))

The addition STANDARD is optional for standard tables.

Hint

The additions of the statement TYPES listed above are language element additions for defining table categories. They are not to be confused with the [generic ABAP types](javascript:call_link\('abenbuilt_in_types_generic.htm'\)) with the same name.

Programming Guideline

[Use a suitable table category](javascript:call_link\('abenselect_table_type_guidl.htm'\) "Guideline")

Addition 1   

*\[*STANDARD*\]* TABLE

Addition 2   

SORTED TABLE

Addition 3   

HASHED TABLE

Effect

The non-generic table categories specify the internal administration and primary access type for an internal table in ABAP programs:

-   Standard tables are managed internally in the system using a [primary table index](javascript:call_link\('abenprimary_table_index_glosry.htm'\) "Glossary Entry"). New lines are either appended to the table or inserted at specific positions.
-   Like standard tables, sorted tables are also managed using a [primary table index](javascript:call_link\('abenprimary_table_index_glosry.htm'\) "Glossary Entry"). The entries in this index are always sorted by the primary table key. The sort order is ascending and corresponds to the result of the statement [SORT](javascript:call_link\('abapsort_itab.htm'\)) with no additions. The sorting is based on the [comparison rules](javascript:call_link\('abenlogexp_rules.htm'\)) for the data types of the key fields.
-   Hashed tables are managed by a hash algorithm. There is no [primary table index](javascript:call_link\('abenprimary_table_index_glosry.htm'\) "Glossary Entry"). The entries are not ordered in the memory. The position of a line is calculated from a key specification using a hash function.

Hint

For non-generic table categories, the definition of the table key [key](javascript:call_link\('abaptypes_keydef.htm'\)) determines whether the defined table type is generic.

Example

Declaration of two internal tables with the elementary line type string. The table words is a standard table with an empty key. The table sorted\_words is a sorted table with the explicitly defined primary key table\_line, that is, the entire table line. When the table words is assigned to the table sorted\_words, the lines are sorted in ascending order according to their content.

DATA: words        TYPE STANDARD TABLE OF string
                   WITH EMPTY KEY,
      sorted\_words TYPE SORTED TABLE OF string
                   WITH NON-UNIQUE KEY table\_line.
SPLIT \`This short text contains some short words\`
      AT \` \` INTO TABLE words.
cl\_demo\_output=>write( words ).
sorted\_words = words.
cl\_demo\_output=>display( sorted\_words ).

Addition 4   

ANY TABLE

Addition 5   

INDEX TABLE

Effect

The generic table categories define a generic table type that can only be used for [typing](javascript:call_link\('abentyping_glosry.htm'\) "Glossary Entry") formal parameters and field symbols:

-   ANY TABLE covers all table categories
-   INDEX TABLE covers standard tables and sorted tables

Hint

A generic table type must not be used as a component of a [structured type](javascript:call_link\('abaptypes_struc.htm'\)).

Example

Definition of a generic table type index\_table for index tables. In the method meth, an index access can be performed on the parameter para typed using this type. Only index tables can be passed to this parameter. If there is not at least one line in the internal table, the method is exited.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    TYPES index\_table TYPE INDEX TABLE OF scarr.
    METHODS meth IMPORTING para TYPE index\_table.
ENDCLASS.
CLASS cls IMPLEMENTATION.
  METHOD meth.
    IF NOT line\_exists( para\[ 1 \] ).
      RETURN.
    ENDIF.
    ...
  ENDMETHOD.
ENDCLASS.