  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Streaming and Locators](javascript:call_link\('abenstreams_locators.htm'\)) → 

ABAP SQL - Locators

ABAP SQL supports [locators](javascript:call_link\('abenlocator_glosry.htm'\) "Glossary Entry") for [LOBs](javascript:call_link\('abenlob_glosry.htm'\) "Glossary Entry") in data sources.

-   [System Classes for Locators](#@@ITOC@@ABENLOCATORS_1)
    -   [Important Methods](#@@ITOC@@ABENLOCATORS_2)
-   [Creating Locators for LOBs](#@@ITOC@@ABENLOCATORS_3)
-   [Closing Locators](#@@ITOC@@ABENLOCATORS_4)
-   [Examples](#@@ITOC@@ABENLOCATORS_5)

System Classes for Locators

The associated [system classes](javascript:call_link\('abensystem_class_glosry.htm'\) "Glossary Entry") for the two types of LOBs are:

-   CL\_ABAP\_DB\_C\_LOCATOR for [CLOBs](javascript:call_link\('abenclob_glosry.htm'\) "Glossary Entry").
-   CL\_ABAP\_DB\_X\_LOCATOR for [BLOBs](javascript:call_link\('abenblob_glosry.htm'\) "Glossary Entry").

The instances of the classes are [LOB handles](javascript:call_link\('abenlob_handle_glosry.htm'\) "Glossary Entry") and implement the [corresponding interfaces](javascript:call_link\('abenlob_interfaces.htm'\)). Their use in ABAP SQL involves reference variables that point to LOB handles of this type.

Important Methods

Locators contain the following methods that are implemented as [kernel methods](javascript:call_link\('abenkernel_method_glosry.htm'\) "Glossary Entry"). The actual access to LOBs is performed by the ABAP runtime framework.

Methods in Both Locator Types

-   GET\_LENGTH returns the length of the LOB that is bound to a locator.
-   FIND searches from an offset for a substring of an LOB which is bound to a locator, and returns its position. The length of a character-like substring that can be found using FIND is limited to 1333 characters. The length of a binary substring is limited to 2666 bytes.

Methods from the IF\_ABAP\_CLOSE\_RESOURCE interface:

-   CLOSE closes the locator.
-   IS\_CLOSED returns "X", if the locator is closed.

Methods in Character-Like Locators

-   GET\_SUBSTRING returns the substring specified using offset and length, of a CLOB which is bound to a locator.

Methods in Binary Locators

-   GET\_BYTES returns the substring, specified using offset and length, of a BLOB which is bound to a locator.

Creating Locators for LOBs

A locator bound to an LOB, that is, an instance of the class CL\_ABAP\_DB\_C\_LOCATOR or CL\_ABAP\_DB\_X\_LOCATOR, can only be created by assigning a LOB from the result set to a reference variable for a locator in the [INTO](javascript:call_link\('abapinto_clause.htm'\)) clause of the statement [SELECT](javascript:call_link\('abapinto_clause.htm'\)).

See [SELECT - LOB Handles](javascript:call_link\('abenselect_into_lob_handles.htm'\)).

Hint

Locators cannot be created in modifying ABAP SQL statements. Locators created in a read statement can, however, be used to make changes.

Closing Locators

Due to high resource consumption, locators must always be closed as soon as possible using their CLOSE method. Especially when creating locators in SELECT loops, it must be ensured that locators are not closed implicitly using ENDSELECT, unlike reader streams, and must be closed explicitly. Furthermore, locators are closed implicitly at the end of a database LUW.

Examples

Executable Examples

-   [Locator, copy column](javascript:call_link\('abendb_copy_abexa.htm'\))
-   [Locator, access to column content](javascript:call_link\('abendb_locator_abexa.htm'\))