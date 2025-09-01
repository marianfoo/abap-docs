  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Logical Databases (LDB, Obsolete)](javascript:call_link\('abenldb.htm'\)) →  [LDB - Statements](javascript:call_link\('abenldb_abap_statements.htm'\)) → 

LDB - Interface Work Areas

The following statement declares an [interface work area](javascript:call_link\('abeninterface_work_area_glosry.htm'\) "Glossary Entry") intended for use with logical databases only:

-   [NODES](javascript:call_link\('abapnodes.htm'\))

The statement NODES must be specified both in the [database program](javascript:call_link\('abendatabase_program_glosry.htm'\) "Glossary Entry") of the logical database and in the [executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry") linked with the logical database. In the database program, NODES determines which data can be passed from the logical database. In the executable program, NODES determines the data received and also controls the creation of the selection screen of the logical database.

If flat structures are used, the statement [TABLES](javascript:call_link\('abaptables.htm'\)) can also be used.

Hints

-   If logical databases are no longer used, the statement NODES is obsolete.
-   If logical databases are still used, NODES should be used instead of TABLES. This specifies clearly that the interface is intended for logical databases.

Continue
[NODES](javascript:call_link\('abapnodes.htm'\))