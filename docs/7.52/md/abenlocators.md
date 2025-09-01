  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) →  [Open SQL - Streaming and Locators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstreams_locators.htm) → 

Open SQL - Locators

Open SQL supports [locators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlocator_glosry.htm "Glossary Entry") for [LOBs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlob_glosry.htm "Glossary Entry") in data sources.

-   [System Classes for Locators](#@@ITOC@@ABENLOCATORS_1)

-   [Important Methods](#@@ITOC@@ABENLOCATORS_2)

-   [Creating Locators for LOBs](#@@ITOC@@ABENLOCATORS_3)

-   [Closing Locators](#@@ITOC@@ABENLOCATORS_4)

-   [Examples](#@@ITOC@@ABENLOCATORS_5)

System Classes for Locators

The associated [system classes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_class_glosry.htm "Glossary Entry") for the two types of LOBs are:

-   CL\_ABAP\_DB\_C\_LOCATOR for [CLOBs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclob_glosry.htm "Glossary Entry").

-   CL\_ABAP\_DB\_X\_LOCATOR for [BLOBs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenblob_glosry.htm "Glossary Entry").

The instances of the classes are [LOB handles](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlob_handle_glosry.htm "Glossary Entry") and implement the [corresponding interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlob_interfaces.htm). Their use in Open SQL involves reference variables that point to the relevant LOB handles.

Important Methods

Locators contain the following methods that are implemented as [kernel methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenkernel_method_glosry.htm "Glossary Entry"). This means that access to the LOBs is the responsibility of the ABAP runtime environment.

Methods in Both Locator Types

-   GET\_LENGTH returns the length of the LOB bound to a locator.

-   FIND searches from an offset for a substring of an LOB bound to a locator, and returns its position. The length of a character-like substring that can be found using FIND is restricted to 1333 characters. The length of a binary substring is limited to 2666 bytes.

Methods from the IF\_ABAP\_CLOSE\_RESOURCE interface:

-   CLOSE closes the locator.

-   IS\_CLOSED returns "X", if the locator is closed.

Methods in Character-Like Locators

-   GET\_SUBSTRING returns the substring, specified using an offset and length, of a CLOB bound to a locator.

Methods in Binary Locators

-   GET\_BYTES returns the substring, specified using an offset and length, of a BLOB bound to a locator.

Creating Locators for LOBs

A locator bound to an LOB (meaning an instance of the class CL\_ABAP\_DB\_C\_LOCATOR or CL\_ABAP\_DB\_X\_LOCATOR) can only be created if a LOB from the results set is assigned to a reference variable for a locator in the [INTO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinto_clause.htm) clause of the statement [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinto_clause.htm).

See [SELECT - LOB Handles](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselect_into_lob_handles.htm).

Note

Locators cannot be created in modifying Open SQL statements. Locators created in a read statement can, however, be used to make changes.

Closing Locators

Due to high resource consumption, locators must always be closed as soon as possible using their CLOSE method. Especially when creating locators in SELECT loops, it must be remembered that locators are not closed implicitly using ENDSELECT, unlike reader streams, and must be closed explicitly. Furthermore, locators are closed implicitly at the end of a database LUW.

Examples

Executable Examples

-   [Locator, Copy Column](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendb_copy_abexa.htm)

-   [Locator, Access to Column Content](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendb_locator_abexa.htm)