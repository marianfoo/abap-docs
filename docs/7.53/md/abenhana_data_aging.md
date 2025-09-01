  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP and SAP HANA](javascript:call_link\('abenabap_hana.htm'\)) → 

Data Aging in SAP HANA

The data aging concept makes it possible to distinguish between current ("HOT") data and old ("COLD") data within [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") tables. Application programmers define which data is current or old in a special [temperature column](javascript:call_link\('abentemperature_column_glosry.htm'\) "Glossary Entry") in the database table with the mandatory name \_DATAAGING. The entries in this column partition the data in the database table and make it possible to archive obsolete data in a transparent way for application programmers. Only the data from the current partition is held in the working memory of the SAP HANA database. Partitions with old data, on the other hand, remain in persistent memory. This partitioning is performed in tasks called data aging runs.

By default, AS ABAP respects data aging by instructing the database interface to read only current data when a database table on the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") is accessed implicitly, and to not read any old data. This also applies to access using AMDP. The way data aging is handled can be modified as follows:

-   The profile parameter abap/data\_aging enables and disables data aging.

-   The enabling of data aging for [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") and [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") can be overridden for ABAP SQL access using the annotation [@DataAging.noAgingRestriction:true](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)). If a CDS entity with this annotation is accessed using ABAP SQL, all data is read.

-   The classes CL\_ABAP\_SESSION\_TEMPERATURE and CL\_ABAP\_STACK\_TEMPERATURE can be used to override the current temperature of specific contexts in the current ABAP program and the database interface reads the data with this temperature if data aging is enabled.

If tables are not accessed using the AS ABAP database interface, such as when using [non-ABAP-managed Native SQL](javascript:call_link\('abenabap_managed_db_objects_nsql.htm'\)), data aging is not respected.

If database tables have a \_DATAAGING column (and hence the data aging concept applies) and data is accessed that does not have the current temperature, it is usually the case that all partitions must first be loaded into the main memory of the SAP HANA database. This can have a negative affect on performance. [Dependency rules](javascript:call_link\('abenhana_data_aging_druls.htm'\)) can be used to optimize access in such a way that only the required partitions are loaded.

Notes

-   Current and old data can be handled implicitly only on [SAP HANA databases](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"). On other databases, the database interface always reads all data. The value false for the annotation @DataAging.noAgingRestriction of a CDS entity is ignored here.

-   From a technical perspective, the database interface appends the addition WITH RANGE\_RESTRICTION('CURRENT'); to every SQL statement, including calls of [AMDP procedures](javascript:call_link\('abenamdp_procedure_glosry.htm'\) "Glossary Entry") and [functions](javascript:call_link\('abenamdp_function_glosry.htm'\) "Glossary Entry"). For this reason, Native SQL statements should not be ended with a semicolon ; when using [EXEC SQL](javascript:call_link\('abapexec.htm'\)) or [ADBC](javascript:call_link\('abenadbc.htm'\)) for the SAP HANA database.

-   Generally speaking, only current data is of interest for transactional applications, whereas analytical applications require access to old data too.

Example

The database table DAAG\_SFLIGHT has a \_DATAAGING column, which means that the data aging concept applies on a SAP HANA database. A data aging run partitions the data and only data where the \_DATAAGING column contains the value '00000000' is loaded into the working memory of the database. The database interface selects only this data by default. This is why the results set of the first SELECT statement is empty. The method SET\_TEMPERATURE of the class CL\_ABAP\_SESSION\_TEMPERATURE sets the temperature of the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") so that data from the whole of the past year is respected. If data like this exists, the results set of the second SELECT statement is not empty. For this to happen, data from additional partitions must be loaded into the working memory.

SELECT \*
       FROM daag\_sflight
       WHERE \_dataaging <> '00000000'
       INTO TABLE @DATA(result1).
cl\_demo\_output=>write( result1 ).
TRY.
    cl\_abap\_session\_temperature=>get\_session\_control(
      )->set\_temperature( im\_temperature = CONV d( sy-datlo - 363 ) ).
  CATCH cx\_abap\_session\_temperature INTO DATA(exc).
    cl\_demo\_output=>display( exc->get\_text( ) ).
    RETURN.
ENDTRY.
SELECT \*
       FROM daag\_sflight
       WHERE \_dataaging <> '00000000'
       INTO TABLE @DATA(result2).
cl\_demo\_output=>display( result2 ).

This example is for demonstration purposes only. ABAP programs should never access the temperature column explicitly or read it.

Continue
[Dependency Rules for Optimization of Access to Old Data](javascript:call_link\('abenhana_data_aging_druls.htm'\))