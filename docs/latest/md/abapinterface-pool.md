---
title: "INTERFACE-POOL"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinterface-pool_shortref.htm) Syntax INTERFACE-POOL. Effect The statement INTERFACE-POOL introduces an interface pool(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninterface_pool_glosry.htm '
version: "latest"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinterface-pool.htm"
abapFile: "abapinterface-pool.htm"
keywords: ["do", "if", "try", "class", "abapinterface", "pool"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_program_layout.htm) →  [Program-Initiating Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_program_statement.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20INTERFACE-POOL%2C%20ABAPINTERFACE-POOL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

INTERFACE-POOL

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinterface-pool_shortref.htm)

Syntax

INTERFACE-POOL.

Effect

The statement INTERFACE-POOL introduces an [interface pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninterface_pool_glosry.htm "Glossary Entry") for a [global interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenglobal_interface_glosry.htm "Glossary Entry"). It must be the first statement of an interface pool after any [include programs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninclude_program_glosry.htm "Glossary Entry") are resolved.

Interface pools are maintained exclusively with the [Class Builder](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_builder_glosry.htm "Glossary Entry") tool in the [ABAP Workbench](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_workbench_glosry.htm "Glossary Entry") or with the [ABAP development tools for Eclipse (ADT)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry"). A [master program](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmaster_program_glosry.htm "Glossary Entry") and an associated [include program](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninclude_program_glosry.htm "Glossary Entry") are generated automatically. The statement INTERFACE-POOL is created in the master program.

The full name of the master program of an interface pool in the [repository](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrepository_glosry.htm "Glossary Entry") starts with the name of the global interface, is padded with the character \= up to and including position 30, and ends with IP.

The name of the include program of an interface pool included by the master program is constructed in exactly the same way as the name of the interface pool itself, however with an different ending. An interface pool is organized in the following include program:

-   An include program with the ending IU that contains the complete code of the global interface between the statements [INTERFACE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinterface.htm) and [ENDINTERFACE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapendinterface.htm)

Hints

-   The statements that are allowed in an interface pool are listed under [Statements in Class Pools and Interface Pools](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_interace_pools.htm).
-   It is not recommended manipulating an interface pool with the statements of [dynamic program development](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_dynamic.htm). Instead, appropriate APIs should be used.

Example

The name of the master program of the interface pool of the global interface IF\_DEMO\_INTERFACE\_POOL is IF\_DEMO\_INTERFACE\_POOL========IP and it includes IF\_DEMO\_INTERFACE\_POOL========IU