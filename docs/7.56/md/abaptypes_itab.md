  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Declaring Data Types](javascript:call_link\('abentypes_statements.htm'\)) →  [TYPES](javascript:call_link\('abaptypes.htm'\)) → 

TYPES, TABLE OF

[Short Reference](javascript:call_link\('abaptypes_shortref.htm'\))

Syntax

TYPES table\_type *{* *{*TYPE [tabkind](javascript:call_link\('abaptypes_tabcat.htm'\)) OF *\[*REF TO*\]* type*}*
                 *|* *{*LIKE [tabkind](javascript:call_link\('abaptypes_tabcat.htm'\)) OF dobj*}* *}*
                 *\[*[tabkeys](javascript:call_link\('abaptypes_keydef.htm'\))*\]*
                 *\[*INITIAL SIZE n*\]*.

Addition:

[... INITIAL SIZE n](#!ABAP_ONE_ADD@1@)

Effect

This statement defines a table type table\_type with a specific line type, a table category tabkind, and table keys tabkeys.

The line type is determined by entering the data type type after TYPE and data type dobj after LIKE:

-   type can be a non-generic data type from ABAP Dictionary, a non-generic public data type of a public data type of a global class, a non-generic data type local to a program, or any ABAP type from the [tables](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) of [built-in ABAP types](javascript:call_link\('abenbuiltin_abap_type_glosry.htm'\) "Glossary Entry"). The generic ABAP types c, n, p, and x are extended implicitly to the standard length without [decimal places](javascript:call_link\('abendecimal_place_glosry.htm'\) "Glossary Entry") from the [tables](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) of built-in ABAP types.
    
    If the addition REF TO is specified before type or dobj, the line type is a reference type. The information specified in the section [reference types](javascript:call_link\('abaptypes_references.htm'\)) can then be specified for type and dobj.
    
-   The same applies to dobj as to [TYPES ... LIKE](javascript:call_link\('abaptypes_referring.htm'\)).

Example

Definition of a non-generic sorted table type. The line type corresponds to the structure of the database table SPFLI. Two key fields are defined for the primary table key.

TYPES spfli\_sort TYPE SORTED TABLE OF spfli
      WITH UNIQUE KEY carrid connid.

Addition   

... INITIAL SIZE n

Effect

The optional addition INITIAL SIZE has two meanings:

-   Note for the internal memory management of internal tables
    
    Internal tables are stored in blocks in the memory. After the optional addition INITIAL SIZE, a number of lines n can be specified directly as a positive number without +/- sign or as a numeric constant to notify the system of the size of the initial block in the memory reserved by the system for an internal table of the table type. By default, and if 0 is specified for n, the system automatically allocates a suitable initial memory area.
    
    If the initial memory area becomes insufficient, further blocks are created using an internal duplicate strategy until a maximum size is reached. After this, all blocks are created with a constant size between 8 and 16 KB.
    
    If the value of n would cause the initial blocks to become too big, the size of the initial memory area is also determined by the system.
    
-   Size of Ranking Lists
    
    To create a ranking list in the internal table using the addition SORTED BY of the statement [APPEND](javascript:call_link\('abapappend.htm'\)), a value greater than 0 must be specified after INITIAL SIZE. This value determines the size of the ranking list.
    

Programming Guideline

[Modify the initial memory requirements only for nested tables](javascript:call_link\('abeninitial_memory_requ_guidl.htm'\) "Guideline")

Hints

-   Specifying the initial memory requirement is only recommended if the number of entries in the table has been determined in advance and the initial main memory requirement is to be dimensioned in the most suitable way. This can be especially important for internal tables that are components of table types and only contain a few lines.
-   Instead of APPEND SORTED BY, the statement SORT should be used so that the addition INITIAL SIZE is no longer necessary.

Continue
[TYPES, tabkind](javascript:call_link\('abaptypes_tabcat.htm'\))
[TYPES, tabkeys](javascript:call_link\('abaptypes_keydef.htm'\))
![Example](exa.gif "Example") [itab - Nested Tables](javascript:call_link\('abennested_internal_tables_abexa.htm'\))