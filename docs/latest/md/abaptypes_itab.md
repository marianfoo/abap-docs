---
title: "TYPES, TABLE OF"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_shortref.htm) Syntax TYPES table_type  TYPE tabkind(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_tabcat.htm) OF REF TO type  LIKE tabkind(https://help.
version: "latest"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_itab.htm"
abapFile: "abaptypes_itab.htm"
keywords: ["do", "if", "case", "try", "class", "data", "types", "internal-table", "abaptypes", "itab"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_declarations.htm) →  [Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_statements.htm) →  [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20TYPES%2C%20TABLE%20OF%2C%20ABAPTYPES_ITAB%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

TYPES, TABLE OF

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_shortref.htm)

Syntax

TYPES table\_type *{* *{*TYPE [tabkind](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_tabcat.htm) OF *\[*REF TO*\]* type*}*
                 *|* *{*LIKE [tabkind](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_tabcat.htm) OF dobj*}* *}*
                 *\[*[tabkeys](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_keydef.htm)*\]*
                 *\[*INITIAL SIZE n*\]*.

Addition:

[... INITIAL SIZE n](#!ABAP_ONE_ADD@1@)

Effect

This statement defines a table type table\_type with a specific line type, a table category tabkind, and table keys tabkeys.

The line type is determined by entering the data type type after TYPE and data type dobj after LIKE:

-   type can be a non-generic data type from ABAP Dictionary, a non-generic public data type of a public data type of a global class, a non-generic data type local to a program, a [CDS simple type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_type_glosry.htm "Glossary Entry"), or any ABAP type from the [tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_types_complete.htm) of [built-in ABAP types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_abap_type_glosry.htm "Glossary Entry"). The generic ABAP types c, n, p, and x are extended implicitly to the standard length without [decimal places](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendecimal_place_glosry.htm "Glossary Entry") from the [tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_types_complete.htm) of built-in ABAP types.
    
    If the addition REF TO is specified before type or dobj, the line type is a reference type. The information specified in the section [reference types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_references.htm) can then be specified for type and dobj.
    
-   The same applies to dobj as to [TYPES ... LIKE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_referring.htm).

Example

Definition of a non-generic sorted table type. The line type corresponds to the structure of the database table SPFLI. Two key fields are defined for the primary table key.

TYPES spfli\_sort TYPE SORTED TABLE OF spfli
      WITH UNIQUE KEY carrid connid.

Addition   

... INITIAL SIZE n

Effect

The optional addition INITIAL SIZE has two meanings:

-   Initial Memory Requirement
    
    The addition INITIAL SIZE affects the [initial memory requirement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninitial_mem_req_glosry.htm "Glossary Entry") of an internal table of the table type. A number of lines n can be specified directly as a positive number without +/- sign or as a numeric constant to give the ABAP runtime framework a hint for the size of the initial memory requirement. In the following cases, the ABAP runtime framework allocates the initial memory area fully by itself:
    
    -   The addition INITIAL SIZE is not used.
    -   A value of 0 is specified for n.
    -   If the value of n would cause the initial blocks to become too big.
-   Size of Ranking Lists
    
    To create a ranking list in the internal table using the addition [SORTED BY](abapappend.htm#!ABAP_ONE_ADD@1@) of the statement [APPEND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapappend.htm), a value greater than 0 must be specified after INITIAL SIZE. This value determines the size of the ranking list.
    

Programming Guideline

[Modify the initial memory requirement only for nested tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninitial_memory_requ_guidl.htm "Guideline")

Hints

-   Specifying the initial memory requirement is only recommended if the number of entries in the table has been determined in advance and the initial main memory requirement is to be dimensioned in the most suitable way. This can be especially important for internal tables that are components of table types and only contain a few lines.
-   Instead of APPEND SORTED BY, the statement SORT should be used so that the addition INITIAL SIZE is no longer necessary.

Continue
[TYPES, tabkind](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_tabcat.htm)
[TYPES, tabkeys](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_keydef.htm)
![Example](exa.gif "Example") [itab - Nested Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennested_internal_tables_abexa.htm)