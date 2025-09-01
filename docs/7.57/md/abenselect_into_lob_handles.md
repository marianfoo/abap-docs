  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [SELECT, clauses](javascript:call_link\('abenselect_clauses.htm'\)) →  [SELECT, INTO, APPENDING](javascript:call_link\('abapinto_clause.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SELECT, LOB Handles, ABENSELECT_INTO_LOB_HANDLES, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0
D%0A%0D%0ASuggestion for improvement:)

SELECT, LOB Handles

In a standalone [SELECT](javascript:call_link\('abapselect.htm'\)) statement or a [WITH](javascript:call_link\('abapwith.htm'\)) statement, but not in a [FETCH](javascript:call_link\('abapfetch.htm'\)) statement, [LOB handles](javascript:call_link\('abenlob_handle_glosry.htm'\) "Glossary Entry") can be created as [reader streams](javascript:call_link\('abenreader_stream_glosry.htm'\) "Glossary Entry") and as [locators](javascript:call_link\('abenlocator_glosry.htm'\) "Glossary Entry") in the [INTO](javascript:call_link\('abapinto_clause.htm'\)) clause.

-   [Prerequisites](#@@ITOC@@ABENSELECT_INTO_LOB_HANDLES_1)
-   [Rules](#@@ITOC@@ABENSELECT_INTO_LOB_HANDLES_2)
-   [Restriction](#@@ITOC@@ABENSELECT_INTO_LOB_HANDLES_3)
-   [Examples](#@@ITOC@@ABENSELECT_INTO_LOB_HANDLES_4)

Prerequisites   

An [LOB](javascript:call_link\('abenlob_glosry.htm'\) "Glossary Entry") from the result set can be assigned to an [LOB handle component](javascript:call_link\('abenlob_handle_component_glosry.htm'\) "Glossary Entry") of a work area, or to an individual reference variable for an LOB handle. The static type of all LOB handle components must contain the [interface](javascript:call_link\('abenoo_intf_glosry.htm'\) "Glossary Entry") IF\_ABAP\_DB\_LOB\_HANDLE and match the corresponding [data source](javascript:call_link\('abapselect_data_source.htm'\)) component, that is, they must be less specific or the same as one of the following system classes for [streaming](javascript:call_link\('abenabap_sql_streaming.htm'\)) or [locators](javascript:call_link\('abenlocators.htm'\)):

-   CL\_ABAP\_DB\_C\_READER or CL\_ABAP\_DB\_C\_LOCATOR in the case of [CLOBs](javascript:call_link\('abenclob_glosry.htm'\) "Glossary Entry").
-   CL\_ABAP\_DB\_X\_READER or CL\_ABAP\_DB\_X\_LOCATOR in the case of [BLOBs](javascript:call_link\('abenblob_glosry.htm'\) "Glossary Entry").

The [stream type](javascript:call_link\('abenstream_type_glosry.htm'\) "Glossary Entry") or [locator type](javascript:call_link\('abenlocator_type_glosry.htm'\) "Glossary Entry") must match the data type of the LOBs.

Rules   

If an [LOB](javascript:call_link\('abenlob_glosry.htm'\) "Glossary Entry") from the result set of a selection is assigned to an LOB handle component of a work area or to an individual reference variable for an [LOB handle](javascript:call_link\('abenlob_handle_glosry.htm'\) "Glossary Entry"), either

-   a [reader stream](javascript:call_link\('abenreader_stream_glosry.htm'\) "Glossary Entry") is created as an instance of one of the classes CL\_ABAP\_DB\_C\_READER, CL\_ABAP\_DB\_X\_READER or,
-   a [locator](javascript:call_link\('abenlocator_glosry.htm'\) "Glossary Entry") is created as an instance of one of the classes CL\_ABAP\_DB\_C\_LOCATOR or CL\_ABAP\_DB\_X\_LOCATOR

and after the execution of the SELECT statement the reference variable points to the object. The class used is determined using the data type of the column of the result sets and the static type of the target variable, or using the addition [CREATING](javascript:call_link\('abapselect_creating.htm'\)) if required. The LOB to be read can be evaluated or forwarded using LOB handle methods.

A LOB handle created in this way, that is, a reader stream or a locator, exists until it:

-   is closed explicitly using its CLOSE method from the IF\_ABAP\_CLOSE\_RESOURCE interface,
-   is closed implicitly at the end of the current [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry").

Reader streams, but not locators, are also closed implicitly by the statement [ENDSELECT](javascript:call_link\('abapendselect.htm'\)).

Accessing a closed LOB handle produces a runtime error.

Special properties of open reader streams and locators:

-   As long as a reader stream for an ABAP SQL statement is still open, the associated database is not closed. This state can only occur with [SELECT SINGLE](javascript:call_link\('abapselect_single.htm'\)), since there is no implicit termination of the reader stream using ENDSELECT. In this case, a reference to an object of the class CL\_ABAP\_SQL\_SELECT\_STATEMENT, a subclass of CL\_ABAP\_SQL\_STATEMENT\_HANDLE, can be obtained from the interface IF\_ABAP\_DB\_READER using the method GET\_STATEMENT\_HANDLE before closing the reader stream. The methods of the abstract superclass implemented there can be used to check the state of the ABAP SQL statement, and all streams that are still open can be closed.
-   It is guaranteed that, once created, a locator always works with the same LOB data. If the associated LOB column is modified while a locator is open, an internal copy of the LOB data for the locator is created on the database first.

Restriction   

The following restrictions apply:

-   A maximum of 16 data streams can be opened for an ABAP SQL statement.
-   In a [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry") there can be a maximum of 16 ABAP SQL statements whose data streams are open at the same time.
-   A maximum of 1000 LOB handles can be open in a [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry").
-   If LOB handles are created together with the addition [SINGLE](javascript:call_link\('abapselect_single.htm'\)), all primary key fields in logical expressions joined using AND in the [WHERE condition](javascript:call_link\('abapwhere.htm'\)) are checked for equality.

Hint

A LOB handle should always be closed as soon as possible using its method CLOSE. See also [Streaming and Locators](javascript:call_link\('abenstreams_locators.htm'\)).

Examples   

Example

Reading of a BLOB to a reader stream.

DATA reader TYPE REF TO cl\_abap\_db\_x\_reader.
SELECT SINGLE picture
       FROM demo\_blob\_table
       WHERE name = '...'
       INTO @reader.

Executable Examples

-   [Reader stream, read database table](javascript:call_link\('abendb_reader_abexa.htm'\))
-   [Locator, copy column](javascript:call_link\('abendb_copy_abexa.htm'\))
-   [Locator, access to column content](javascript:call_link\('abendb_locator_abexa.htm'\))

Continue
[SELECT, CREATING](javascript:call_link\('abapselect_creating.htm'\))