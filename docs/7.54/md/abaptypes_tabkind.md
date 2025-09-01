---
title: "TYPES - tabkind"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_shortref.htm) Syntax ...  STANDARD TABLE  SORTED TABLE  HASHED TABLE  ANY TABLE  INDEX TABLE  ... Extras: 1. ... STANDARD TABLE(#!ABAP_ADDITION_1@
version: "7.54"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_tabkind.htm"
abapFile: "abaptypes_tabkind.htm"
keywords: ["select", "insert", "do", "if", "try", "method", "class", "data", "types", "internal-table", "field-symbol", "abaptypes", "tabkind"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentypes_and_objects.htm) →  [Declaring Data Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentypes_statements.htm) →  [TYPES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes.htm) →  [TYPES - TABLE OF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_itab.htm) → 

TYPES - tabkind

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_shortref.htm)

Syntax

... *{* *{**\[*STANDARD*\]* TABLE*}*
    *|* *{*SORTED TABLE*}*
    *|* *{*HASHED TABLE*}*
    *|* *{*ANY TABLE*}*
    *|* *{*INDEX TABLE*}* *}* ...

Extras:

[1\. ... *\[*STANDARD*\]* TABLE](#!ABAP_ADDITION_1@1@)
[2\. ... SORTED TABLE](#!ABAP_ADDITION_2@2@)
[3\. ... HASHED TABLE](#!ABAP_ADDITION_3@3@)
[4\. ... ANY TABLE](#!ABAP_ADDITION_4@4@)
[5\. ... INDEX TABLE](#!ABAP_ADDITION_5@5@)

Effect

Defines the table category of an internal table. Possible specifications:

-   Non-generic table categories
    

-   STANDARD TABLE for [standard tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_table_glosry.htm "Glossary Entry")

-   SORTED TABLE for [sorted tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensorted_table_glosry.htm "Glossary Entry")

-   HASHED TABLE for [hashed tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhashed_table_glosry.htm "Glossary Entry")

-   Generic table categories
    

-   ANY TABLE covers all table categories

-   INDEX TABLE of [index tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenindex_table_glosry.htm "Glossary Entry") ([standard tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_table_glosry.htm "Glossary Entry") and [sorted tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensorted_table_glosry.htm "Glossary Entry"))

The addition STANDARD is optional for standard tables.

Note

The additions of the statement TYPES listed above are language element additions for defining table categories. They are not to be confused with the [generic ABAP types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_types_generic.htm) with the same name.

Programming Guideline

[Use a suitable table category](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_table_type_guidl.htm "Guideline")

Addition 1

*\[*STANDARD*\]* TABLE

Addition 2

SORTED TABLE

Addition 3

HASHED TABLE

Effect

The non-generic table categories specify the internal administration and primary access type for an internal table in ABAP programs:

-   Standard tables are managed internally in the system using a [primary table index](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprimary_table_index_glosry.htm "Glossary Entry"). New rows are either appended to the table or inserted at specific positions.
    
-   Like standard tables, sorted tables are also managed using a [primary table index](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprimary_table_index_glosry.htm "Glossary Entry"). The entries in this index are always sorted in ascending order by the primary table key. The sort order is in ascending order and returns the same result as the statement [SORT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsort_itab.htm) with no additions. Sorting is based on the [comparison rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_rules.htm) for the data types of the key fields.
    
-   Hashed tables are managed by a hash algorithm. There is no [primary table index](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprimary_table_index_glosry.htm "Glossary Entry"). The entries are not ordered in the memory. The position of a row is calculated by specifying a key using a hash function.
    

Note

For non-generic table categories, the definition of the table key [key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_keydef.htm) determines whether the defined table type is generic.

Example

Declaration of two internal tables with the elementary row type string. The table words is a standard table with an empty key. The table sorted\_words is a sorted table with the explicitly defined primary key table\_line, in other words, the entire table row. When table words is assigned to table sorted\_words, the rows are sorted in ascending order by their content.

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

The generic table categories define a generic table type that can only be used for [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_glosry.htm "Glossary Entry") formal parameters and field symbols:

-   ANY TABLE covers all table categories
    
-   INDEX TABLE covers standard tables and sorted tables
    

Note

A generic table type cannot be used as a component of a [structured type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_struc.htm).

Example

Defines a generic table type index\_table for index tables. In the method meth, an index access can be performed on the parameter para typed using this type. Only index tables can be passed to this parameter. If there is not at least one row in the internal table, the method is exited.

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