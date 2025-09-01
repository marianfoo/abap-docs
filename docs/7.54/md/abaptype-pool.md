  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Layout](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Introductory Statements for Programs](javascript:call_link\('abenabap_program_statement.htm'\)) → 

TYPE-POOL

[Quick Reference](javascript:call_link\('abaptype-pool_shortref.htm'\))

Syntax

TYPE-POOL tpool.

Effect

The statement TYPE-POOL introduces a [type group](javascript:call_link\('abentype_group_1_glosry.htm'\) "Glossary Entry") called tpool. It must be the first statement of a type group after any [include programs](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry") are resolved. Type groups are only defined in [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry"). Here, an ABAP program is generated automatically, including the statement TYPE-POOL. The actual name of the program of a type group in the repository does not completely match the name of the type group and is of internal relevance only.

Type groups can only contain the statements

-   [INCLUDE](javascript:call_link\('abapinclude_prog.htm'\)),
    
-   [INCLUDE TYPE*|*STRUCTURE](javascript:call_link\('abapinclude_type.htm'\))
    
-   [TYPES](javascript:call_link\('abaptypes.htm'\)),
    
-   [CONSTANTS](javascript:call_link\('abapconstants.htm'\)),
    
-   [DEFINE](javascript:call_link\('abapdefine.htm'\)) and [END-OF-DEFINITION](javascript:call_link\('abapend-of-definition.htm'\))
    
-   [CLASS ... DEFINITION DEFERRED PUBLIC](javascript:call_link\('abapclass_deferred.htm'\))
    

Here, the declared data types, constants, and [macros](javascript:call_link\('abenmacro_glosry.htm'\) "Glossary Entry") must be prefixed with the name tpool of the type group. The elements declared in a type group can be addressed statically or dynamically by name in every ABAP program in which the type group can be used. This is loaded when an element of a type group is first accessed.

Notes

-   Types in type groups are the predecessors for general type definitions in ABAP Dictionary.
    
-   Since you can also define data types and constants in the public visibility section of global classes, type groups are obsolete and should no longer be created. Existing type groups can still be used.
    
-   To avoid conflicts in the type reference with the addition LIKE, you must ensure that constants in type groups do not have the same name as existing flat structures or database tables in ABAP Dictionary.
    
-   The name of a type group may contain a maximum of five characters.
    
-   Previously, type groups had to be made known in ABAP programs using the [TYPE-POOLS](javascript:call_link\('abaptype-pools.htm'\)) statement before its elements could be accessed statically or dynamically. This restriction is now obsolete. The statement TYPE-POOLS is no longer necessary.
    

Example

Type groups with the definition of a table type.

TYPE-POOL mytgr.
TYPES mytgr\_spfli\_tab TYPE HASHED TABLE
                      OF spfli
                      WITH UNIQUE KEY carrid connid.