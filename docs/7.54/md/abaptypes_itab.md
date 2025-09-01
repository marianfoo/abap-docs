---
title: "TYPES - TABLE OF"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_shortref.htm) Syntax TYPES table_type  TYPE tabkind(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_tabkind.htm) OF REF TO type  LIKE tabkind(https://help.sap.com/d
version: "7.54"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_itab.htm"
abapFile: "abaptypes_itab.htm"
keywords: ["do", "if", "try", "class", "data", "types", "internal-table", "abaptypes", "itab"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentypes_and_objects.htm) →  [Declaring Data Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentypes_statements.htm) →  [TYPES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes.htm) → 

TYPES - TABLE OF

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_shortref.htm)

Syntax

TYPES table\_type *{* *{*TYPE [tabkind](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_tabkind.htm) OF *\[*REF TO*\]* type*}*
                 *|* *{*LIKE [tabkind](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_tabkind.htm) OF dobj*}* *}*
                 *\[*[tabkeys](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_keydef.htm)*\]*
                 *\[*INITIAL SIZE n*\]*.

Addition:

[... INITIAL SIZE n](#!ABAP_ONE_ADD@1@)

Effect

This statement defines a table type table\_type with a specific row type, a table category tabkind, and table keys tabkeys.

The row type is determined by entering the data type type after TYPE and data type dobj after LIKE:

-   type can be a non-generic data type from ABAP Dictionary, a non-generic public data type of a public data type of a global class, a non-generic data type local to a program, or any ABAP type from the [tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_types_complete.htm) of [built-in ABAP types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpredefined_abap_type_glosry.htm "Glossary Entry"). The generic ABAP types c, n, p, and x are extended implicitly to the standard length without [decimal places](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfractional_portion_glosry.htm "Glossary Entry") from the [tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_types_complete.htm) of built-in ABAP types.
    If the addition REF TO is specified before type or dobj, the row type is a reference type. The information specified in the section [reference types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_references.htm) can then be specified for type and dobj.
    
-   The same applies to dobj as to [TYPES ... LIKE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_referring.htm).
    

Example

Defines a non-generic sorted table type. The row type corresponds to the structure of the database table SPFLI. Two key fields are defined for the primary table key.

TYPES spfli\_sort TYPE SORTED TABLE OF spfli
      WITH UNIQUE KEY carrid connid.

Addition

... INITIAL SIZE n

Effect

The optional addition INITIAL SIZE has two meanings:

-   Note for the internal memory management of internal tables
    Internal tables are stored in the memory block by block. After the optional addition INITIAL SIZE, it is possible to specify a number of rows n directly as a positive number without sign or as a numeric constant to notify the system of the size of the initial block in the memory (reserved by the system for an internal table of the table type). By default, and if n is specified as 0, the system allocates a suitable initial memory area automatically.
    If the initial memory area is not large enough, further blocks are created using a duplicate strategy until a maximum size is reached. After this, all blocks are created with a constant size between 8 and 16 KB.
    If the value of n causes the initial blocks to become too big, the size of the initial memory area is also defined by the system.
    
-   Size of Rankings
    To create a ranking in the internal table using the addition SORTED BY of the statement [APPEND](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapappend.htm), a value greater than 0 must be specified after INITIAL SIZE. This determines the size of the ranking.
    

Programming Guideline

[Modify the initial memory requirements only for nested tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninitial_memory_requ_guidl.htm "Guideline")

Notes

-   You are advised to specify the initial memory requirements only when the number of entries in the table has already been specified and the initial main memory requirement has an adequate value. This can be especially important for internal tables that are components of table types and only contain a few rows.
    
-   Instead of APPEND SORTED BY, the statement SORT must be used so that the addition INITIAL SIZE is no longer required here.
    

Continue
[TYPES - tabkind](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_tabkind.htm)
[TYPES - tabkeys](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_keydef.htm)
![Example](exa.gif "Example") [Internal Tables, Nested Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennested_internal_tables_abexa.htm)