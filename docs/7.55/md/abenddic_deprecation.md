  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Semantic Attributes of Database Tables](javascript:call_link\('abenddic_database_tables_sema.htm'\)) →  [DDIC - Table-Specific Semantic Attributes of Database Tables](javascript:call_link\('abenddic_database_tables_semasspec.htm'\)) →  [DDIC - Foreign Key Dependencies](javascript:call_link\('abenddic_database_tables_forkeyrel.htm'\)) → 

DDIC - Flagging of Deprecated Data in Check Tables

Rows in [check tables](javascript:call_link\('abenddic_database_tables_checktab.htm'\)) can be flagged as deprecated or invalid data. If the associated check on deprecated data is active, the flag modifies the [input check](javascript:call_link\('abenabap_dynpros_checks.htm'\)) and [input help](javascript:call_link\('abenabap_dynpros_value_help.htm'\)) in dynpros and in Web Dynpro.

Checks on deprecated data are active by default when an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") is created. This setting can be modified and read using methods of the class CL\_CONFIGURATION\_DEPRECATION:

-   The parameter I\_RESPECT\_OBSOLETE\_VALUES of the method SET\_DEPRECATION\_ACTIVE can be used to enable and disable the deprecated data check for the current session.

-   If the check on deprecated data is active, the return value of the method DEPRECATION\_IS\_ACTIVE has the value of abap\_true.

A column with the predefined name CONFIGURATIONDEPRECATIONCODE is used to flag deprecated data in check tables. The data type of this column must be defined using the data element CONFIG\_DEPRECATION\_CODE. The following values are valid for this column:

Value

Meaning

Blank

The entry is valid.

W

The entry is deprecated and should no longer be used.

E

The entry is invalid and can no longer be used.

If the deprecated data check is enabled, the implicit [input checks](javascript:call_link\('abenabap_dynpros_checks.htm'\)) and [input helps](javascript:call_link\('abenabap_dynpros_value_help.htm'\)) in dynpros and in Web Dynpro that are based on check tables evaluate the column CONFIGURATIONDEPRECATIONCODE as follows:

-   The input check creates the following:

-   A warning (if a deprecated value is entered)

-   An error message (if an invalid value is entered)

-   The input help offers the following:

-   Only the valid data and the deprecated data

-   No invalid data

Hints

-   If input helps are based on [search helps](javascript:call_link\('abensearch_help_glosry.htm'\) "Glossary Entry") associated with check tables, the deprecated data check runs accordingly.

-   If the input check is implemented using a [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") module, the column CONFIGURATIONDEPRECATIONCODE must be evaluated in the PAI module itself.

-   [SAP HANA databases](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") use the more universal concept of [data aging](javascript:call_link\('abendata_aging_glosry.htm'\) "Glossary Entry"). This is applied each time the database is accessed using the [database interface](javascript:call_link\('abendatabase_interface_glosry.htm'\) "Glossary Entry").

Executable Example

[Flagging of Deprecated Data in Check Tables](javascript:call_link\('abenddic_deprecation_abexa.htm'\))

Continue
![Example](exa.gif "Example") [DDIC - Flagging of Deprecated Data in Check Tables](javascript:call_link\('abenddic_deprecation_abexa.htm'\))