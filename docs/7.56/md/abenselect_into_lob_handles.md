---
title: "SELECT, LOB Handles"
description: |
  In a standalone SELECT(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect.htm) statement or a WITH(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwith.htm) statement, but not in a FETCH(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfetch.htm)
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselect_into_lob_handles.htm"
abapFile: "abenselect_into_lob_handles.htm"
keywords: ["select", "do", "while", "if", "case", "try", "method", "class", "data", "abenselect", "into", "lob", "handles"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselect_clauses.htm) →  [SELECT, INTO, APPENDING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinto_clause.htm) → 

SELECT, LOB Handles

In a standalone [SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect.htm) statement or a [WITH](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwith.htm) statement, but not in a [FETCH](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfetch.htm) statement, [LOB handles](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlob_handle_glosry.htm "Glossary Entry") can be created as [reader streams](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenreader_stream_glosry.htm "Glossary Entry") and as [locators](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlocator_glosry.htm "Glossary Entry") in the [INTO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinto_clause.htm) clause.

-   [Prerequisites](#abenselect-into-lob-handles-1-------rules---@ITOC@@ABENSELECT_INTO_LOB_HANDLES_2)
-   [Restrictions](#abenselect-into-lob-handles-3-------examples---@ITOC@@ABENSELECT_INTO_LOB_HANDLES_4)

Prerequisites

An [LOB](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlob_glosry.htm "Glossary Entry") from the result set can be assigned to an [LOB handle component](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlob_handle_component_glosry.htm "Glossary Entry") of a work area, or to an individual reference variable for an LOB handle. The static type of all LOB handle components must contain the [interface](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenoo_intf_glosry.htm "Glossary Entry") IF\_ABAP\_DB\_LOB\_HANDLE and match the corresponding [data source](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_data_source.htm) component, that is, they must be less specific or the same as one of the following system classes for [streaming](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_streaming.htm) or [locators](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlocators.htm):

-   CL\_ABAP\_DB\_C\_READER or CL\_ABAP\_DB\_C\_LOCATOR in the case of [CLOBs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclob_glosry.htm "Glossary Entry").
-   CL\_ABAP\_DB\_X\_READER or CL\_ABAP\_DB\_X\_LOCATOR in the case of [BLOBs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenblob_glosry.htm "Glossary Entry").

The [stream type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstream_type_glosry.htm "Glossary Entry") or [locator type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlocator_type_glosry.htm "Glossary Entry") must match the data type of the LOBs.

Rules

If an [LOB](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlob_glosry.htm "Glossary Entry") from the result set of a selection is assigned to an LOB handle component of a work area or to an individual reference variable for an [LOB handle](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlob_handle_glosry.htm "Glossary Entry"), either

-   a [reader stream](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenreader_stream_glosry.htm "Glossary Entry") is created as an instance of one of the classes CL\_ABAP\_DB\_C\_READER, CL\_ABAP\_DB\_X\_READER or,
-   a [locator](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlocator_glosry.htm "Glossary Entry") is created as an instance of one of the classes CL\_ABAP\_DB\_C\_LOCATOR or CL\_ABAP\_DB\_X\_LOCATOR

and after the execution of the SELECT statement the reference variable points to the object. The class used is determined using the data type of the column of the result sets and the static type of the target variable, or using the addition [CREATING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_creating.htm) if required. The LOB to be read can be evaluated or forwarded using LOB handle methods.

A LOB handle created in this way, that is, a reader stream or a locator, exists until it:

-   is closed explicitly using its CLOSE method from the IF\_ABAP\_CLOSE\_RESOURCE interface,
-   is closed implicitly at the end of the current [database LUW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_luw_glosry.htm "Glossary Entry").

Reader streams, but not locators, are also closed implicitly by the statement [ENDSELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapendselect.htm).

Accessing a closed LOB handle produces a runtime error.

Special properties of open reader streams and locators:

-   As long as a reader stream for an ABAP SQL statement is still open, the associated database is not closed. This state can only occur with [SELECT SINGLE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_single.htm), since there is no implicit termination of the reader stream using ENDSELECT. In this case, a reference to an object of the class CL\_ABAP\_SQL\_SELECT\_STATEMENT, a subclass of CL\_ABAP\_SQL\_STATEMENT\_HANDLE, can be obtained from the interface IF\_ABAP\_DB\_READER using the method GET\_STATEMENT\_HANDLE before closing the reader stream. The methods of the abstract superclass implemented there can be used to check the state of the ABAP SQL statement, and all streams that are still open can be closed.
-   It is guaranteed that, once created, a locator always works with the same LOB data. If the associated LOB column is modified while a locator is open, an internal copy of the LOB data for the locator is created on the database first.

Restrictions

The following restrictions apply:

-   A maximum of 16 data streams can be opened for an ABAP SQL statement.
-   In a [database LUW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_luw_glosry.htm "Glossary Entry") there can be a maximum of 16 ABAP SQL statements whose data streams are open at the same time.
-   A maximum of 1000 LOB handles can be open in a [database LUW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_luw_glosry.htm "Glossary Entry").
-   If LOB handles are created together with the addition [SINGLE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_single.htm), all primary key fields in logical expressions joined using AND in the [WHERE condition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwhere.htm) are checked for equality.

Hint

A LOB handle should always be closed as soon as possible using its method CLOSE. See also [Streaming and Locators](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstreams_locators.htm).

Examples

Example

Reading of a BLOB to a reader stream.

DATA reader TYPE REF TO cl\_abap\_db\_x\_reader.
SELECT SINGLE picture
       FROM demo\_blob\_table
       WHERE name = '...'
       INTO @reader.

Executable Examples

-   [Reader stream, read database table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_reader_abexa.htm)
-   [Locator, copy column](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_copy_abexa.htm)
-   [Locator, access to column content](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_locator_abexa.htm)

Continue
[SELECT, CREATING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_creating.htm)