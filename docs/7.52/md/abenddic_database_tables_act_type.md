  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [Technical Attributes of Database Tables](javascript:call_link\('abenddic_database_tables_tech.htm'\)) →  [Table-Specific Technical Attributes of Database Tables](javascript:call_link\('abenddic_database_tables_techspec.htm'\)) → 

Activation Type of Database Tables

The activation type defines whether a database table can be activated interactively in an ABAP Dictionary [tool](javascript:call_link\('abenddic_tools.htm'\)) or whether the ABAP runtime environment needs to be used instead. This setting is not relevant for database tables in application programming. In these tables, the default value 00 should be preserved. The following settings are possible:

-   Activation type 00

The default setting in which a database table can be activated interactively in an ABAP Dictionary [tool](javascript:call_link\('abenddic_tools.htm'\)). Database tables in application programming should always have this activation type.

-   The following values for the activation type only apply to those database tables required by the ABAP runtime environment itself (and hence only to internal SAP developments):

-   Activation type 01
    The [runtime object](javascript:call_link\('abenruntime_object_glosry.htm'\) "Glossary Entry") of the database table must be created using an [ABAP kernel](javascript:call_link\('abenkernel_glosry.htm'\) "Glossary Entry") program before the table is activated in an ABAP Dictionary [tool](javascript:call_link\('abenddic_tools.htm'\)). This may make it impossible to modify and activate important system tables directly.

-   Activation type 02
    The database table is used in the [ABAP kernel](javascript:call_link\('abenkernel_glosry.htm'\) "Glossary Entry"), but the [runtime object](javascript:call_link\('abenruntime_object_glosry.htm'\) "Glossary Entry") can be activated (and hence created) in an ABAP Dictionary [tool](javascript:call_link\('abenddic_tools.htm'\)). It may be necessary to adjust the consumer programs of the kernel. This is indicated by a note in the activation log.

-   Activation type 10
    The database table is required before other objects are modified as part of a transport.