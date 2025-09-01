  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Structure](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Program-Initiating Statements](javascript:call_link\('abenabap_program_statement.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20TYPE-POOL%2C%20ABAPTYPE-POOL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

TYPE-POOL

[Short Reference](javascript:call_link\('abaptype-pool_shortref.htm'\))

Syntax

TYPE-POOL tpool.

Effect

The statement TYPE-POOL introduces a [type pool](javascript:call_link\('abentype_pool_glosry.htm'\) "Glossary Entry") called tpool. It must be the first statement of a type pool after any [include programs](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry") are resolved. Type pools are only defined in the [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry") tool in the [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry"), where an ABAP program is generated automatically, including the statement TYPE-POOL. The actual name of the program of a type pool in the repository does not completely match the name of the type pool and is only relevant internally.

Type pools can only contain the statements

-   [INCLUDE](javascript:call_link\('abapinclude_prog.htm'\)),
-   [INCLUDE TYPE*|*STRUCTURE](javascript:call_link\('abapinclude_type.htm'\))
-   [TYPES](javascript:call_link\('abaptypes.htm'\)),
-   [CONSTANTS](javascript:call_link\('abapconstants.htm'\)),
-   [DEFINE](javascript:call_link\('abapdefine.htm'\)) and [END-OF-DEFINITION](javascript:call_link\('abapend-of-definition.htm'\))
-   [CLASS ... DEFINITION DEFERRED PUBLIC](javascript:call_link\('abapclass_deferred.htm'\))

Here, the declared data types, constants, and [macros](javascript:call_link\('abenmacro_glosry.htm'\) "Glossary Entry") must start with the prefix tpool of the type pool. The elements declared in a type pool can be addressed statically or dynamically by their name in every ABAP program in which the type pool can be used. This program is loaded when an element of a type pool is first accessed.

Hints

-   Types in type pools are the predecessors for general type definitions in the ABAP Dictionary.
-   Since you can also define data types and constants in the public visibility section of global classes, type pools are obsolete and should no longer be created. Existing type pools can still be used.
-   To avoid conflicts in the type reference with the addition LIKE, you must ensure that constants in type pools do not have the same name as existing flat structures or database tables in ABAP Dictionary.
-   The name of a type pool can contain a maximum of five characters.
-   Previously, type pools had to be declared in ABAP programs using the [TYPE-POOLS](javascript:call_link\('abaptype-pools.htm'\)) statement before their elements could be accessed statically or dynamically. This restriction is now obsolete. The statement TYPE-POOLS is no longer necessary.

Example

Type pools with the definition of a table type.

TYPE-POOL mytgr.
TYPES mytgr\_spfli\_tab TYPE HASHED TABLE
                      OF spfli
                      WITH UNIQUE KEY carrid connid.