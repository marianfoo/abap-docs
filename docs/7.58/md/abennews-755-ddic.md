  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for ABAP Release 7.55](javascript:call_link\('abennews-755.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Dictionary%20in%20ABAP%20Release%207.55%2C%20ABENNEWS-755-DDIC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Dictionary in ABAP Release 7.55

[1\. Internal Handling of the Name Table](#!ABAP_MODIFICATION_1@1@)
[2\. Load Unit](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Internal Handling of the Name Table

The internal handling of the [name table (nametab)](javascript:call_link\('abenname_table_glosry.htm'\) "Glossary Entry") that stores the runtime objects of data types in the ABAP Dictionary has changed.

This has the following consequences:

-   The internal ABAP statement [EXPORT NAMETAB](javascript:call_link\('abapexport_nametab.htm'\)) cannot be used any more and leads to a runtime error.
-   The internal ABAP statement [IMPORT NAMETAB](javascript:call_link\('abapimport_nametab.htm'\)) is still partly supported for reasons of downward compatibility. Any access to entries for [DDIC table types](javascript:call_link\('abenddic_table_type_glosry.htm'\) "Glossary Entry") leads to a runtime error. Any other access leads to errors from [ATC](javascript:call_link\('abenatc_glosry.htm'\) "Glossary Entry").
-   The former native database table DDNTF for separate nametab field descriptions is not supported any more and will be deleted.

Modification 2   

Load Unit

In ABAP Dictionary, a new technical setting for database tables is available: the [load unit](javascript:call_link\('abenddic_database_tables_load_unit.htm'\)). It specifies how the data of the table is loaded into the main memory of the SAP HANA database. It can be used to reduce the memory consumption in the HANA database server.