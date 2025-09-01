---
title: "INSERT, UPDATE, MODIFY dbtab - LOB Handles"
description: |
  In the INSERT(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_dbtab.htm), UPDATE(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapupdate.htm), or MODIFY(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_dbtab.htm) statements, LOB handles
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninsert_update_modify_lob.htm"
abapFile: "abeninsert_update_modify_lob.htm"
keywords: ["select", "insert", "update", "delete", "do", "if", "case", "try", "method", "class", "data", "abeninsert", "modify", "lob"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) →  [Open SQL - Write Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_writing.htm) → 

INSERT, UPDATE, MODIFY dbtab - LOB Handles

In the [INSERT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_dbtab.htm), [UPDATE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapupdate.htm), or [MODIFY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_dbtab.htm) statements, [LOB handles](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlob_handle_glosry.htm "Glossary Entry") can be created as [writer streams](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwriter_stream_glosry.htm "Glossary Entry") and specified as [locators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlocator_glosry.htm "Glossary Entry").

-   [Prerequisites](#abeninsert-update-modify-lob-1--------rules---@ITOC@@ABENINSERT_UPDATE_MODIFY_LOB_2)

-   [Changing Accesses Using Writer Streams](#abeninsert-update-modify-lob-3--------changing-accesses-using-locators----@ITOC@@ABENINSERT_UPDATE_MODIFY_LOB_4)

-   [Restrictions](#abeninsert-update-modify-lob-5--------examples---@ITOC@@ABENINSERT_UPDATE_MODIFY_LOB_6)

Prerequisites

An [LOB](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlob_glosry.htm "Glossary Entry") in a row to be inserted or changed can be supplied from an [LOB handle component](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlob_handle_glosry.htm "Glossary Entry") of a work area or an individual reference variable for an LOB handle (at UPDATE with SET). The static type of each LOB handle component must be one of the following system classes for [streaming](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_streaming.htm) or [locators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlocators.htm):

-   CL\_ABAP\_DB\_C\_WRITER or CL\_ABAP\_DB\_C\_LOCATOR in the case of [CLOBs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclob_glosry.htm "Glossary Entry").

-   CL\_ABAP\_DB\_X\_WRITER or CL\_ABAP\_DB\_X\_LOCATOR in the case of [BLOBs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenblob_glosry.htm "Glossary Entry").

The [stream type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstream_type_glosry.htm "Glossary Entry") or [locator type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlocator_type_glosry.htm "Glossary Entry") must match the data type of the LOBs.

Rules

Unlike in [reads](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselect_into_lob_handles.htm), the behavior for streams does not match the behavior for locators.

Changing Accesses Using Writer Streams

If, in a changing access, an [LOB](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlob_glosry.htm "Glossary Entry") is associated with a reference variable of the type CL\_ABAP\_DB\_C\_WRITER or CL\_ABAP\_DB\_X\_WRITER, a corresponding writer stream is usually created and the reference variable points to the object after execution. The LOB to be changed can be edited using the methods of the writer stream. When an LOB is associated with a writer stream referenced by an [LOB handle component](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlob_handle_component_glosry.htm "Glossary Entry") from the source work area, the following various platform-dependent behavior may occur:

-   On some database systems (MaxDB, Oracle), the components of the work area which are not LOB handle components are written directly to the database when executing the statement. If the rows cannot be added or changed, sy-subrc and sy-dbcnt respectively are set immediately and no writer stream is created for the LOB handle components. If the rows can be added or changed, writer streams are created and their content is passed to the database when closing the last writer stream of the Open SQL statement at the latest.

-   On other database systems, the components of the work area which are not LOB handle components are not written directly to the database when executing the statement. Instead, writer streams are always created for the LOB handle components. The contents of the remaining components are also delayed, that is, they are passed when closing the last writer stream of the Open SQL statement at the latest. Between executing the statement and actually writing the remaining components, the status is undefined since it is not yet determined whether the operation can be executed at all. In this case, sy-subrc statement is set to the value 2 and sy-dbcnt is set to -1 after the execution of the statement. Before a writer stream is closed, a reference to an object from the class CL\_ABAP\_SQL\_CHANGING\_STMNT, a subclass of CL\_ABAP\_SQL\_STATEMENT\_HANDLE, from the interface IF\_ABAP\_DB\_WRITER, can be obtained using the method GET\_STATEMENT\_HANDLE. The GET\_STATE method provides information about the status of the Open SQL statement, and the GET\_DB\_COUNT method returns the number of added or changed rows after the last writer stream of the Open SQL statement was closed. The methods of the abstract superclass can be used to check the status of the Open SQL statement and all streams that are still open can be closed. if the Open SQL statement is not closed by the closing of the last writer stream, GET\_DB\_COUNT also returns the value -1. If the operation cannot be executed, for example due to duplicate key entries, the exception CX\_STREAM\_IO\_EXCEPTION or CX\_CLOSE\_RESOURCE\_ERROR is raised when the data is passed to the database, depending on exactly when the data is passed.

A writer stream created in this way exists until it is explicitly closed using its method CLOSE from the IF\_ABAP\_CLOSE\_RESOURCE interface. As long as a writer stream for an Open SQL statement is still open, the corresponding database operation is not finished. The state of the Open SQL statement is described using an object of the CL\_ABAP\_SQL\_STATEMENT\_HANDLE class, for which the GET\_STATEMENT\_HANDLE method returns a reference for every writer stream.

When using writer streams, a non-handleable exception is raised in the following cases:

-   If a writer stream is still open when closing a [database LUW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_luw_glosry.htm "Glossary Entry") using a [database commit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_commit_glosry.htm "Glossary Entry").

-   When accessing a writer stream that is already closed.

Notes

-   Exactly when the data of a writer stream is passed to the database is not defined. The data is passed at the latest when the last writer stream is closed but can also occur during writing in the stream, for example because a buffer is no longer large enough.

-   Always close a writer stream explicitly and as soon as possible using its method CLOSE. Also refer to [Streaming and Locators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstreams_locators.htm).

Changing Accesses Using Locators.

If, in a changing access, an [LOB](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlob_glosry.htm "Glossary Entry") is associated with a reference variable of type CL\_ABAP\_DB\_C\_LOCATOR or CL\_ABAP\_DB\_X\_LOCATOR, this variable must point to an appropriate locator, [created](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselect_into_lob_handles.htm) in a statement SELECT for a LOB in a different database table or the same table. If the statement can be executed (sy-subrc is 0), the LOB to be changed is replaced directly in the database system using the complete LOB of the locator.

Restrictions

The following restrictions apply:

-   A maximum of 16 data streams can be opened for an Open SQL statement.

-   In a [database LUW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_luw_glosry.htm "Glossary Entry") there can be a maximum of 16 Open SQL statements whose streams are open at the same time.

-   A maximum of 1000 LOB handles can be open in a [database LUW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_luw_glosry.htm "Glossary Entry").

Note

Always close a LOB handle as soon as possible using its method CLOSE. Also refer to [Streaming and Locators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstreams_locators.htm).

Examples

Example

Components string1 and string2 in structure wa are declared as LOB handles for character-like writer streams. Statement MODIFY creates the writer streams. Character strings are passed to both writer streams via reference variable stmnt. Once the writer streams have been closed, the associated database fields STRING1 und STRING2 contain the chained content of the streams.

DATA wa TYPE demo\_expressions WRITER FOR COLUMNS string1 string2.
wa = VALUE #( id = 'X' ).
MODIFY demo\_expressions FROM wa.
DATA(stmnt) = wa-string1->get\_statement\_handle( ).
DO 10 TIMES.
  wa-string1->write( CONV #( sy-index ) ).
ENDDO.
wa-string1->close( ).
stmnt = wa-string2->get\_statement\_handle( ).
DO 26 TIMES.
  wa-string2->write( substring( val = sy-abcde
                                off = sy-index - 1
                                len = 1 ) ).
ENDDO.
wa-string2->close( ).
SELECT SINGLE string1, string2
       FROM demo\_expressions
       WHERE id = 'X'
       INTO @DATA(result).
cl\_demo\_output=>display( result ).

Example

In statement UPDATE, column STRING2 is modified with a locator, which was created in a SELECT statement for column STRING1 of the same database table. Afterwards STRING1 and STRING2 have the same content.

DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM @( VALUE #( id = 'X' string1 = sy-abcde ) ).
DATA locator TYPE REF TO cl\_abap\_db\_c\_locator.
SELECT SINGLE string1
       FROM   demo\_expressions
       WHERE  id = 'X'
       INTO   @locator.
UPDATE demo\_expressions SET string2 = @locator WHERE id = 'X'.
SELECT SINGLE string1, string2
       FROM demo\_expressions
       WHERE id = 'X'
       INTO @DATA(result).
cl\_demo\_output=>display( result ).

Executable Examples

-   [Writer stream, fill database](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendb_writer_abexa.htm)

-   [Locator, Copy Column](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendb_copy_abexa.htm)