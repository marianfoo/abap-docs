  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_program_layout.htm) →  [Program-Initiating Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_program_statement.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: INTERFACE-POOL, ABAPINTERFACE-POOL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugg
estion for improvement:)

INTERFACE-POOL

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinterface-pool_shortref.htm)

Syntax

INTERFACE-POOL.

Effect

The statement INTERFACE-POOL introduces an [interface pool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninterface_pool_glosry.htm "Glossary Entry"). It must be the first statement of an interface pool after any [include programs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninclude_program_glosry.htm "Glossary Entry") are resolved.

Interface pools are maintained exclusively with the [Class Builder](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_builder_glosry.htm "Glossary Entry") tool in the [ABAP Workbench](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_workbench_glosry.htm "Glossary Entry") or with the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadt_glosry.htm "Glossary Entry"), where a [master program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmaster_program_glosry.htm "Glossary Entry") for a global interface including the statement INTERFACE-POOL is generated automatically.

The full name of the master program of an interface pool in the [repository](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrepository_glosry.htm "Glossary Entry") starts with the name of the global interface, is padded with the character \= up to and including position 30, and ends with IP.

The names of the include programs of an interface pool included by the master program are constructed in exactly the same way as the name of the interface pool itself, however they have different endings. Unlike in [function pools](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunction_pool_glosry.htm "Glossary Entry"), the actual structure of an interface pool constructed from include programs is the internal responsibility of the [ABAP development environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dev_envir_glosry.htm "Glossary Entry") and the ABAP runtime framework and does not show up in the Class Builder.

Hints

-   The statements that are allowed in an interface pool are listed under [Statements in Class Pools and Interface Pools](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_interace_pools.htm).
-   It is not recommended manipulating an interface pool with the statements of [dynamic program development](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_dynamic.htm). Instead, appropriate APIs should be used.

Example

The name of the master program of the interface pool of the global interface IF\_DEMO\_CR\_CAR\_RENTL\_SERVICE is IF\_DEMO\_CR\_CAR\_RENTL\_SERVICE==IP.