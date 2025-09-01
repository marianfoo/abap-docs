  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_storage_obsolete.htm) →  [Logical Databases (LDB, Obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenldb.htm) →  [LDB - Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenldb_abap_statements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20LDB%20-%20Interface%20Work%20Areas%2C%20ABENLDB_INTERFACES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

LDB - Interface Work Areas

The following statement declares an [interface work area](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninterface_work_area_glosry.htm "Glossary Entry") intended for use with logical databases only:

-   [NODES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapnodes.htm)

The statement NODES must be specified both in the [database program](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_program_glosry.htm "Glossary Entry") of the logical database and in the [executable program](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexecutable_program_glosry.htm "Glossary Entry") linked with the logical database. In the database program, NODES determines which data can be passed from the logical database. In the executable program, NODES determines the data received and also controls the creation of the selection screen of the logical database.

If flat structures are used, the statement [TABLES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptables.htm) can also be used.

Hints

-   If logical databases are no longer used, the statement NODES is obsolete.
-   If logical databases are still used, NODES should be used instead of TABLES. This specifies clearly that the interface is intended for logical databases.

Continue
[NODES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapnodes.htm)