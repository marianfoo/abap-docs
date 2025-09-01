  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [Data Cluster](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_cluster.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DELETE FROM, ABAPDELETE_CLUSTER, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggest
ion for improvement:)

DELETE FROM

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_from_shortref.htm)

Syntax

DELETE FROM *{* *{*MEMORY ID id*}*
            *|* *{*DATABASE      dbtab(ar) *\[*CLIENT cl*\]* ID id*}*
            *|* *{*SHARED MEMORY dbtab(ar) *\[*CLIENT cl*\]* ID id*}*
            *|* *{*SHARED BUFFER dbtab(ar) *\[*CLIENT cl*\]* ID id*}* *}*.

Effect

This statement deletes a [data cluster](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_cluster_glosry.htm "Glossary Entry") stored in the [ABAP memory](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_memory_glosry.htm "Glossary Entry"), in a database table, or in a [cross-transaction application buffer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencrosstrans_app_buffer_glosry.htm "Glossary Entry") of the current [AS instance](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_instance_glosry.htm "Glossary Entry") using the statement [EXPORT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_data_cluster.htm). The data cluster is identified by its ID id and, except in the case of the ABAP memory, by the name of a database table dbtab, a range ar, and an optional client cl. The same rules apply to dbtab, ar, cl, and id as to accessing the appropriate repository with the [IMPORT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapimport_medium.htm) statement.

System Fields

sy-subrc

Meaning

0

The specified data cluster was found and deleted.

4

The specified data cluster was not found.

Hints

-   See also [Classes for Data Clusters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencl_abap_expimp.htm).
-   Since each client represents a self-contained unit, the addition CLIENT should not be used in application programs.

Example

In this example, two fields are written to a data cluster in an application buffer of the current AS instance, extracted, and then deleted. Accessing the same data cluster again sets sy-subrc to 4.

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

[Exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_EXPIMP\_DB\_SQL\_ERROR

-   Cause: SQL error in deletion from the database.
    Runtime error: [DBIF\_...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_exceptions.htm)

Uncatchable Exceptions

-   Cause: Error when deleting in cross-transaction application buffer
    Runtime error: DELETE\_BUFFER\_FAILED
    Runtime error: DELETE\_BUFFER\_EXTERNAL\_ERROR
    Runtime error: DELETE\_BUFFER\_INTERNAL\_ERROR
    Runtime error: DELETE\_BUFFER\_KEY\_NOT\_FOUND