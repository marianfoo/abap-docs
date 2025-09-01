  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [Data Cluster](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_cluster.htm) → 

DELETE FROM

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdelete_from_shortref.htm)

Syntax

DELETE FROM *{* *{*MEMORY ID id*}*
            *|* *{*DATABASE      dbtab(ar) *\[*CLIENT cl*\]* ID id*}*
            *|* *{*SHARED MEMORY dbtab(ar) *\[*CLIENT cl*\]* ID id*}*
            *|* *{*SHARED BUFFER dbtab(ar) *\[*CLIENT cl*\]* ID id*}* *}*.

Effect

This statement deletes a [data cluster](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_cluster_glosry.htm "Glossary Entry") stored in the [ABAP memory](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_memory_glosry.htm "Glossary Entry"), in a database table, or in a [cross-transaction application buffer](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencrosstrans_app_buffer_glosry.htm "Glossary Entry") of the current [AS Instance](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapplication_server_glosry.htm "Glossary Entry") by the statement [EXPORT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapexport_data_cluster.htm). The data cluster is identified by its ID id and, except in the case of the ABAP memory, by the name of a database table dbtab, a range ar, and an optional client cl. The same rules apply to dbtab, ar, cl, and id as apply when accessing the appropriate repository with the [IMPORT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapimport_medium.htm) statement.

System Fields

sy-subrc

Meaning

0

The specified data cluster was found and deleted.

4

The specified data cluster was not found.

Notes

-   See also [Classes for Data Clusters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencl_abap_expimp.htm).
    
-   Since each client represents a self-contained unit, the addition CLIENT must not be used in application programs.
    

Example

In this example, two fields are written to a data cluster in an application buffer of the current AS Instance, extracted, and then deleted. Accessing the same data cluster again sets sy-subrc to 4.

DATA: id    TYPE c LENGTH 4 VALUE 'TEXT',
      text1 TYPE string     VALUE 'Tina',
      text2 TYPE string     VALUE 'Ike'.
EXPORT p1 = text1
       p2 = text2 TO SHARED BUFFER demo\_indx\_blob(XY) ID id.
IMPORT p1 = text2
       p2 = text1 FROM SHARED BUFFER demo\_indx\_blob(XY) ID id.
ASSERT sy-subrc = 0.
DELETE FROM SHARED BUFFER demo\_indx\_blob(XY) ID id.
IMPORT p1 = text2
       p2 = text1 FROM SHARED BUFFER demo\_indx\_blob(XY) ID id.
ASSERT sy-subrc = 4.

[Exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_exceptions.htm)

Handleable Exceptions

CX\_SY\_EXPIMP\_DB\_SQL\_ERROR

-   Cause: SQL error in deletion from the database.
    Runtime error: [DBIF\_...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql_exceptions.htm)
    

Non-Handleable Exceptions

-   Cause: Error when deleting in cross-transaction application buffer
    Runtime error: DELETE\_BUFFER\_FAILED
    Runtime error: DELETE\_BUFFER\_EXTERNAL\_ERROR
    Runtime error: DELETE\_BUFFER\_INTERNAL\_ERROR
    Runtime error: DELETE\_BUFFER\_KEY\_NOT\_FOUND