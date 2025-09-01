  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_program_layout.htm) →  [Introductory Statements for Programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_program_statement.htm) → 

TYPE-POOL

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptype-pool_shortref.htm)

Syntax

TYPE-POOL tpool.

Effect

The statement TYPE-POOL introduces a [type group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentype_group_1_glosry.htm "Glossary Entry") called tpool. It must be the first statement of a type group after any [include programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninclude_program_glosry.htm "Glossary Entry") are resolved. Type groups are only defined in [ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary_glosry.htm "Glossary Entry") in [ABAP Workbench](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_workbench_glosry.htm "Glossary Entry"). Here, an ABAP program is generated automatically, including the statement TYPE-POOL. The actual name of the program of a type group in the repository does not completely match the name of the type group and is of internal relevance only.

Type groups can only contain the following statements:

-   [INCLUDE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinclude_prog.htm),
    
-   [INCLUDE TYPE*|*STRUCTURE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinclude_type.htm)
    
-   [TYPES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes.htm),
    
-   [CONSTANTS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapconstants.htm),
    
-   [DEFINE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdefine.htm) and [END-OF-DEFINITION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapend-of-definition.htm)
    
-   [CLASS ... DEFINITION DEFERRED PUBLIC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass_deferred.htm)
    

Here, the declared data types, constants, and [macros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmacro_glosry.htm "Glossary Entry") must be prefixed with the name tpool of the type group. The elements declared in a type group can be addressed statically or dynamically by name in every ABAP program in which the type group can be used. The type group is loaded when an element of a type group is first accessed.

Notes

-   Types in type groups are the predecessors for general type definitions in ABAP Dictionary.
    
-   Since it is possible to also define data types and constants in the public visibility section of global classes, type groups are obsolete and should no longer be created. Existing type groups can still be used.
    
-   To avoid conflicts in the type reference with the addition LIKE, it must be ensured that constants in type groups do not have the same name as existing flat structures or database tables in ABAP Dictionary.
    
-   The name of a type group may contain a maximum of five characters.
    
-   Previously, type groups had to be made known in ABAP programs using the statement [TYPE-POOLS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptype-pools.htm) before their elements could be accessed statically or dynamically. This restriction is now obsolete. The statement TYPE-POOLS is no longer necessary.
    

Example

Type group with the definition of a table type.

TYPE-POOL mytgr.
TYPES mytgr\_spfli\_tab TYPE HASHED TABLE
                      OF spfli
                      WITH UNIQUE KEY carrid connid.