  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Logical Databases (LDB, Obsolete)](javascript:call_link\('abenldb.htm'\)) →  [LDB - Statements](javascript:call_link\('abenldb_abap_statements.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20LDB%20-%20Statements%20in%20Logical%20Databases%2C%20ABENLDB_STATEMENTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

LDB - Statements in Logical Databases

The following statements or additions for statements can be used in logical databases only. If logical databases are no longer created, these statements are no longer needed.

Database Program   

The database program of a logical database provides other programs with data about interface work areas. The name of a database program is SAPDBldb, where ldb is the name of the logical database. A special addition and statement both exist for the database program of a logical database.

-   Addition [DEFINING DATABASE](javascript:call_link\('abapreport_defining.htm'\)) for the statement REPORT
-   Statement [PUT](javascript:call_link\('abapput.htm'\))

Selection Include   

A [standard selection screen](javascript:call_link\('abenstandard_selscreen_glosry.htm'\) "Glossary Entry") can be defined in the selection include of a [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry"). The standard selection screen of the logical database is combined with the standard selection screen of an [executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry") that is linked to the logical database, to form a shared standard selection screen. The name of this selection include is DBldbSEL, where ldb is the name of the logical database.

The elements of the standard selection screen of a logical database are defined using the usual statements: [PARAMETERS](javascript:call_link\('abapparameters.htm'\)), [SELECT-OPTIONS](javascript:call_link\('abapselect-options.htm'\)) and [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)).

The following elements are using exclusively for creating the selection screen of a logical database:

-   Special variants of the statement [SELECTION-SCREEN](javascript:call_link\('abapselection-screen_ldb.htm'\))
-   Special additions of the statement [PARAMETERS](javascript:call_link\('abapparameters_ldb.htm'\))
-   Special additions of the statement [SELECT-OPTIONS](javascript:call_link\('abapselect-options_ldb.htm'\))

Continue
[REPORT, DEFINING DATABASE](javascript:call_link\('abapreport_defining.htm'\))
[PUT](javascript:call_link\('abapput.htm'\))
[SELECTION-SCREEN, ldb\_options](javascript:call_link\('abapselection-screen_ldb.htm'\))
[PARAMETERS, ldb\_options](javascript:call_link\('abapparameters_ldb.htm'\))
[SELECT-OPTIONS, ldb\_options](javascript:call_link\('abapselect-options_ldb.htm'\))