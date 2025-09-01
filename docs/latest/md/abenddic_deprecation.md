  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Semantic Properties of Database Tables](javascript:call_link\('abenddic_database_tables_sema.htm'\)) →  [DDIC - Table-Specific Semantic Properties of Database Tables](javascript:call_link\('abenddic_database_tables_semasspec.htm'\)) →  [DDIC - Foreign Key Dependencies](javascript:call_link\('abenddic_database_tables_forkeyrel.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Flagging%20of%20Deprecated%20Data%20in%20Check%20Tables%2C%20ABENDDIC_DEPRECATION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20f
or%20improvement:)

DDIC - Flagging of Deprecated Data in Check Tables

Rows in [check tables](javascript:call_link\('abenddic_database_tables_checktab.htm'\)) can be flagged as deprecated or invalid. If the check on deprecated data is active, the flag modifies the [input check](javascript:call_link\('abenabap_dynpros_checks.htm'\)) and [input help](javascript:call_link\('abenabap_dynpros_value_help.htm'\)) in dynpros or Web Dynpros.

Checks on deprecated data are active by default when an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") is created. This setting can be modified and read using methods of the class CL\_CONFIGURATION\_DEPRECATION:

-   The parameter I\_RESPECT\_OBSOLETE\_VALUES of the method SET\_DEPRECATION\_ACTIVE can be used to enable and disable the deprecated data check for the current internal session.
-   If the check on deprecated data is active, the return value of the method DEPRECATION\_IS\_ACTIVE has the value of abap\_true.

A column with the predefined name CONFIGDEPRECATIONCODE is used to flag deprecated data in check tables. The data type of this column must be defined using the data element CONFIG\_DEPRECATION\_CODE. The following values are valid for this column:

Value

Meaning

Blank

The entry is valid.

W

The entry is deprecated and should no longer be used.

E

The entry is invalid and must not be used.

If the deprecated data check is enabled, the implicit [input checks](javascript:call_link\('abenabap_dynpros_checks.htm'\)) and [input helps](javascript:call_link\('abenabap_dynpros_value_help.htm'\)) in dynpros and in Web Dynpro that are based on check tables evaluate the column CONFIGDEPRECATIONCODE as follows:

-   Input check:
    -   If a deprecated value is entered, a warning occurs.
    -   If an invalid value is entered, an error message occurs.
-   Input help:
    -   Valid data and the deprecated data is displayed. Invalid data is not displayed.

Hints

-   If input helps are based on [search helps](javascript:call_link\('abensearch_help_glosry.htm'\) "Glossary Entry") linked with check tables, the deprecated data check is active and runs as described above.
-   If the input check is implemented using a [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") module, the column CONFIGDEPRECATIONCODE must be evaluated in the PAI module itself.
-   [SAP HANA databases](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") use the more universal concept of [data aging](javascript:call_link\('abendata_aging_glosry.htm'\) "Glossary Entry"), which is applied to each access using the [database interface](javascript:call_link\('abendatabase_interface_glosry.htm'\) "Glossary Entry").
-   Instead of CONFIGDEPRECATIONCODE, also the obsolete name CONFIGURATIONDEPRECATIONCODE can still be used.

Executable Example

[Flagging of Deprecated Data in Check Tables](javascript:call_link\('abenddic_deprecation_abexa.htm'\))

Continue
![Example](exa.gif "Example") [DDIC - Flagging of Deprecated Data in Check Tables](javascript:call_link\('abenddic_deprecation_abexa.htm'\))