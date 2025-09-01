  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) → 

ABAP SQL

[ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_glosry.htm "Glossary Entry") is a set of ABAP statements, based on SQL, that are transformed to platform-dependent SQL by the [ABAP SQL interface](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_interface_glosry.htm "Glossary Entry") of the database interface and then passed to the database. When the statements are updated, ABAP-specific parts, such as conditions for [implicit client handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_client_handling.htm) or [CDS access control](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_access_control_glosry.htm "Glossary Entry"), are inserted into them. By default, the [standard connection](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_db_connection_glosry.htm "Glossary Entry") is used to access the [ABAP database schema](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_db_schema_glosry.htm "Glossary Entry") of the [standard AS ABAP database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_db_glosry.htm "Glossary Entry").

-   [ABAP SQL - Overview](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_oview.htm)
-   [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_operands.htm)
-   [ABAP SQL - Reads](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_reading.htm)
-   [ABAP SQL - Writes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_writing.htm)
-   [ABAP SQL - Work Areas in Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_wa.htm)
-   [ABAP SQL - Streaming and Locators](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstreams_locators.htm)
-   [ABAP SQL - Database Hints](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_db_hints.htm)
-   [ABAP SQL - Exceptions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_exceptions.htm)
-   [ABAP SQL - System Classes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencl_osql.htm)
-   [ABAP SQL - Performance Notes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_perfo.htm)

The statements [COMMIT WORK](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcommit.htm) and [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcommit.htm) are also part of ABAP SQL but are handled in the context of LUWs.

Programming Guideline

[Using ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_access_guidl.htm "Guideline")

Hint

In addition to the statements described here, there are [obsolete short forms](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_short_forms_obsolete.htm) of ABAP SQL statements that are based on the implicit use of [table work areas](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_work_area_glosry.htm "Glossary Entry").

Continue
[ABAP SQL - Overview](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_oview.htm)
[ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_operands.htm)
[ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_reading.htm)
[ABAP SQL - Write Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_writing.htm)
[ABAP SQL - Work Areas in Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_wa.htm)
[ABAP SQL - Streaming and Locators](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstreams_locators.htm)
[ABAP SQL - Exceptions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_exceptions.htm)
[ABAP SQL - Database Hints](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_db_hints.htm)
[ABAP SQL - System Classes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencl_osql.htm)
[ABAP SQL - Performance Notes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_perfo.htm)