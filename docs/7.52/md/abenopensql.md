  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) → 

Open SQL

[Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry") is a set of ABAP statements, based on SQL, that asre transformed to platform-specific SQL by the [Open SQL interface](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_interface_glosry.htm "Glossary Entry") of the database interface and then passed to the database. When the statements are transformed, ABAP-specific parts, such as conditions for automatic [client handling](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_handling_glosry.htm "Glossary Entry") or [CDS access control](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_access_control_glosry.htm "Glossary Entry"), are inserted into the statements. By default, the [standard connection](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_db_connection_glosry.htm "Glossary Entry") is used to access the [ABAP database schema](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_db_schema_glosry.htm "Glossary Entry") of the [standard AS ABAP database](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_db_glosry.htm "Glossary Entry").

-   [Open SQL - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_oview.htm)

-   [Open SQL - Operands](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_operands.htm)

-   [Open SQL - Reads](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_reading.htm)

-   [Open SQL - Writes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_writing.htm)

-   [Open SQL - Work Areas in Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_wa.htm)

-   [Open SQL - Streaming and Locators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstreams_locators.htm)

-   [Open SQL - Database Hints](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenosql_db_hints.htm)

-   [Open SQL - Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_exceptions.htm)

-   [System Classes for Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_osql.htm)

-   [Open SQL - Performance Notes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_perfo.htm)

The statements [COMMIT WORK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcommit.htm) and [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcommit.htm) are also part of Open SQL but are handled in the context of LUWs.

Programming Guideline

[Using Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_access_guidl.htm "Guideline")

Note

The statements described here are accompanied by [obsolete short forms](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_obsolete.htm) of Open SQL statements, based on the implicit use of [table work areas](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_work_area_glosry.htm "Glossary Entry").

Continue
[Open SQL - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_oview.htm)
[Open SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_operands.htm)
[Open SQL - Reads](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_reading.htm)
[Open SQL - Write Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_writing.htm)
[Open SQL - Work Areas in Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_wa.htm)
[Open SQL - Streaming and Locators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstreams_locators.htm)
[Open SQL - Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_exceptions.htm)
[Open SQL - Database Hints](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenosql_db_hints.htm)
[Open SQL - System Classes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_osql.htm)
[Open SQL - Performance Notes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_perfo.htm)