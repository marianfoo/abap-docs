---
title: "ABAP SQL - Locators"
description: |
  ABAP SQL supports locators(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlocator_glosry.htm 'Glossary Entry') for LOBs(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlob_glosry.htm 'Glossary Entry') in data sources. -   System Classes for Locators(#abenlocators
version: "7.53"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlocators.htm"
abapFile: "abenlocators.htm"
keywords: ["select", "loop", "do", "if", "try", "method", "class", "data", "types", "abenlocators"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Streaming and Locators](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstreams_locators.htm) → 

ABAP SQL - Locators

ABAP SQL supports [locators](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlocator_glosry.htm "Glossary Entry") for [LOBs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlob_glosry.htm "Glossary Entry") in data sources.

-   [System Classes for Locators](#abenlocators-1--------important-methods---@ITOC@@ABENLOCATORS_2)

-   [Creating Locators for LOBs](#abenlocators-3--------closing-locators---@ITOC@@ABENLOCATORS_4)

-   [Examples](#@@ITOC@@ABENLOCATORS_5)

System Classes for Locators

The associated [system classes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_class_glosry.htm "Glossary Entry") for the two types of LOBs are:

The instances of the classes are [LOB handles](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlob_handle_glosry.htm "Glossary Entry") and implement the [corresponding interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlob_interfaces.htm). Their use in ABAP SQL involves reference variables that point to the relevant LOB handles.

Important Methods

Locators contain the following methods that are implemented as [kernel methods](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenkernel_method_glosry.htm "Glossary Entry") . Access to LOBs is completed by the ABAP runtime environment.

Methods in Both Locator Types

-   GET\_LENGTH returns the length of the LOB that is connected to a locator.

-   FIND searches from an offset for a sub-sequence of an LOB which is connected to a locator, and returns its position. The length of a character-like substring that can be found using FIND is restricted to 1333 characters. The length of a binary substring is limited to 2666 bytes.

Methods from the IF\_ABAP\_CLOSE\_RESOURCE interface:

-   CLOSE closes the locator.

-   IS\_CLOSED returns "X", if the locator is closed.

Methods in Character-Like Locators

-   GET\_SUBSTRING returns the sub-sequence specified using offset and length, of a CLOB which is connected to a locator.

Methods in Binary Locators

-   GET\_BYTES returns the sub-sequence, specified using offset and length, of a BLOB which is connected to a locator.

Creating Locators for LOBs

A locator bound to an LOB (meaning an instance of the class CL\_ABAP\_DB\_C\_LOCATOR or CL\_ABAP\_DB\_X\_LOCATOR) can only be created if a LOB from the results set is assigned to a reference variable for a locator in the [INTO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinto_clause.htm) clause of the statement [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinto_clause.htm).

Refer to [SELECT - LOB Handles](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_into_lob_handles.htm).

Note

Locators cannot be created in modifying ABAP SQL statements. Locators created in a read statement can, however, be used to make changes.

Closing Locators

Due to high resource consumption, locators must always be closed as soon as possible using their CLOSE method. Especially when creating locators in SELECT loops, it must be remembered that locators are not closed implicitly using ENDSELECT, unlike reader streams, and must be closed explicitly. Furthermore, locators are closed implicitly at the end of a database LUW.

Examples

Executable Examples

-   [Locator, copy column](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendb_copy_abexa.htm)

-   [Locator, access to column content](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendb_locator_abexa.htm)