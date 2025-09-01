  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables.htm) →  [DDIC - Semantic Attributes of Database Tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_sema.htm) →  [DDIC - Table-Dependent Semantic Attributes of Database Tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_semasspec.htm) →  [DDIC - Foreign Key Dependencies](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_forkeyrel.htm) → 

DDIC - Flagging of Deprecated Data in Check Tables

Lines in [check tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_checktab.htm) can be flagged as deprecated or invalid data. If the associated check on deprecated data is active, the flag modifies the [input check](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros_checks.htm) and [input help](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros_value_help.htm) in dynpros or Web Dynpros.

Checks on deprecated data are active by default when an [internal session](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninternal_session_glosry.htm "Glossary Entry") is created. This setting can be modified and read using methods of the class CL\_CONFIGURATION\_DEPRECATION:

-   The parameter I\_RESPECT\_OBSOLETE\_VALUES of the method SET\_DEPRECATION\_ACTIVE can be used to enable and disable the deprecated data check for the current internal session.
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

If the deprecated data check is enabled, the implicit [input checks](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros_checks.htm) and [input helps](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros_value_help.htm) in dynpros and in Web Dynpro that are based on check tables evaluate the column CONFIGURATIONDEPRECATIONCODE as follows:

-   The input check creates the following:
    -   A warning if a deprecated value is entered
    -   An error message if an invalid value is entered
-   The input help displays the following:
    -   Only the valid data and the deprecated data
    -   No invalid data

Hints

-   If input helps are based on [search helps](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensearch_help_glosry.htm "Glossary Entry") linked with check tables, the deprecated data check runs accordingly.
-   If the input check is implemented using a [PAI](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpai_glosry.htm "Glossary Entry") module, the column CONFIGURATIONDEPRECATIONCODE must be evaluated in the PAI module itself.
-   [SAP HANA databases](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhana_database_glosry.htm "Glossary Entry") use the more universal concept of [data aging](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_aging_glosry.htm "Glossary Entry"), which is applied for each access using the [database interface](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_interface_glosry.htm "Glossary Entry").

Executable Example

[Flagging of Deprecated Data in Check Tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_deprecation_abexa.htm)

Continue
![Example](exa.gif "Example") [DDIC - Flagging of Deprecated Data in Check Tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_deprecation_abexa.htm)