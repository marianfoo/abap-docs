---
title: "ABAP SQL - Locators"
description: |
  ABAP SQL supports locators(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlocator_glosry.htm 'Glossary Entry') for LOBs(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlob_glosry.htm 'Glossary Entry') in data sources. -   System Classes for Locators(#abenlocators
version: "7.58"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlocators.htm"
abapFile: "abenlocators.htm"
keywords: ["select", "loop", "do", "if", "try", "method", "class", "data", "types", "abenlocators"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Streaming and Locators](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstreams_locators.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20-%20Locators%2C%20ABENLOCATORS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP SQL - Locators

ABAP SQL supports [locators](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlocator_glosry.htm "Glossary Entry") for [LOBs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlob_glosry.htm "Glossary Entry") in data sources.

-   [System Classes for Locators](#abenlocators-1-----------important-methods---@ITOC@@ABENLOCATORS_2)
-   [Creating Locators for LOBs](#abenlocators-3-------closing-locators---@ITOC@@ABENLOCATORS_4)
-   [Examples](#@@ITOC@@ABENLOCATORS_5)

System Classes for Locators   

The associated [system classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensystem_class_glosry.htm "Glossary Entry") for the two types of LOBs are:

-   CL\_ABAP\_DB\_C\_LOCATOR for [CLOBs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclob_glosry.htm "Glossary Entry").
-   CL\_ABAP\_DB\_X\_LOCATOR for [BLOBs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenblob_glosry.htm "Glossary Entry").

The instances of the classes are [LOB handles](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlob_handle_glosry.htm "Glossary Entry") and implement the [corresponding interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlob_interfaces.htm). Their use in ABAP SQL involves reference variables that point to LOB handles of this type.

Important Methods   

Locators contain the following methods that are implemented as [kernel methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenkernel_method_glosry.htm "Glossary Entry"). The actual access to LOBs is performed by the ABAP runtime framework.

Methods in Both Locator Types

-   GET\_LENGTH returns the length of the LOB that is bound to a locator.
-   FIND searches from an offset for a substring of an LOB which is bound to a locator, and returns its position. The length of a character-like substring that can be found using FIND is limited to 1333 characters. The length of a binary substring is limited to 2666 bytes.

Methods from the IF\_ABAP\_CLOSE\_RESOURCE interface:

-   CLOSE closes the locator.
-   IS\_CLOSED returns X, if the locator is closed.

Methods in Character-Like Locators

-   GET\_SUBSTRING returns the substring specified using offset and length, of a CLOB which is bound to a locator.

Methods in Binary Locators

-   GET\_BYTES returns the substring, specified using offset and length, of a BLOB which is bound to a locator.

Creating Locators for LOBs   

A locator bound to an LOB, that is, an instance of the class CL\_ABAP\_DB\_C\_LOCATOR or CL\_ABAP\_DB\_X\_LOCATOR, can only be created by assigning a LOB from the result set to a reference variable for a locator in the [INTO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinto_clause.htm) clause of the statement [SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinto_clause.htm).

See [SELECT - LOB Handles](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_into_lob_handles.htm).

Hint

Locators cannot be created in modifying ABAP SQL statements. Locators created in a read statement can, however, be used to make changes.

Closing Locators   

Due to high resource consumption, locators must always be closed as soon as possible using their CLOSE method. Especially when creating locators in SELECT loops, it must be ensured that locators are not closed implicitly using ENDSELECT, unlike reader streams, and must be closed explicitly. Furthermore, locators are closed implicitly at the end of a database LUW.

Examples   

Executable Examples

-   [Locator, copy column](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_copy_abexa.htm)
-   [Locator, access to column content](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_locator_abexa.htm)