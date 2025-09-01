  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_program_layout.htm) →  [Program-Initiating Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_program_statement.htm) → 

TYPE-POOL

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype-pool_shortref.htm)

Syntax

TYPE-POOL tpool.

Effect

The statement TYPE-POOL introduces a [type pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentype_pool_glosry.htm "Glossary Entry") called tpool. It must be the first statement of a type pool after any [include programs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninclude_program_glosry.htm "Glossary Entry") are resolved. Type pools are only defined in the [ABAP Dictionary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dictionary_glosry.htm "Glossary Entry") tool in the [ABAP Workbench](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_workbench_glosry.htm "Glossary Entry"), where an ABAP program is generated automatically, including the statement TYPE-POOL. The actual name of the program of a type pool in the repository does not completely match the name of the type pool and is only relevant internally.

Type pools can only contain the statements

-   [INCLUDE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinclude_prog.htm),
-   [INCLUDE TYPE*|*STRUCTURE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinclude_type.htm)
-   [TYPES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes.htm),
-   [CONSTANTS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapconstants.htm),
-   [DEFINE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdefine.htm) and [END-OF-DEFINITION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapend-of-definition.htm)
-   [CLASS ... DEFINITION DEFERRED PUBLIC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_deferred.htm)

Here, the declared data types, constants, and [macros](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmacro_glosry.htm "Glossary Entry") must start with the prefix tpool of the type pool. The elements declared in a type pool can be addressed statically or dynamically by their name in every ABAP program in which the type pool can be used. This program is loaded when an element of a type pool is first accessed.

Hints

-   Types in type pools are the predecessors for general type definitions in the ABAP Dictionary.
-   Since you can also define data types and constants in the public visibility section of global classes, type pools are obsolete and should no longer be created. Existing type pools can still be used.
-   To avoid conflicts in the type reference with the addition LIKE, you must ensure that constants in type pools do not have the same name as existing flat structures or database tables in ABAP Dictionary.
-   The name of a type pool can contain a maximum of five characters.
-   Previously, type pools had to be declared in ABAP programs using the [TYPE-POOLS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype-pools.htm) statement before their elements could be accessed statically or dynamically. This restriction is now obsolete. The statement TYPE-POOLS is no longer necessary.

Example

Type pools with the definition of a table type.

TYPE-POOL mytgr.
TYPES mytgr\_spfli\_tab TYPE HASHED TABLE
                      OF spfli
                      WITH UNIQUE KEY carrid connid.