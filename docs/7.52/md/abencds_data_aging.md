  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP and SAP HANA](javascript:call_link\('abenabap_hana.htm'\)) → 

Data Aging in SAP HANA

The data aging concept makes it possible to distinguish between current, "HOT", data and old, "COLD"), data within [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") tables. Application programmers define which data is hot or cold in a special temperature column in a database table. The entries in this column partition the data in the database table and makes it possible to archive obsolete data in a transparent way for application programmers.

Data aging coverage can be enabled and disabled for an AS ABAP using the profile parameter abap/data\_aging. If data aging coverage is enabled, the database interface reads only current data (and no obsolete data) each time an [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") is accessed. This setting can only be overridden for [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") and [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") with the annotation [@DataAging.noAgingRestriction:true](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)). If a CDS entity with this annotation is accessed using Open SQL, all data is read.

Notes

-   Hot and cold data can be handled implicitly only on [SAP HANA databases](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"). On other databases, the database interface always reads all data. The value false for the annotation @DataAging.noAgingRestriction of a CDS entity is ignored here.

-   From a technical perspective, the database interface is appended to every SQL statement using the addition WITH RANGE\_RESTRICTION('CURRENT');. For this reason, Native SQL statements should not be ended with a semicolon ; when using [EXEC SQL](javascript:call_link\('abapexec.htm'\)) or [ADBC](javascript:call_link\('abenadbc.htm'\)) for the SAP HANA database.

Example

When the CDS view sales\_order\_12 is accessed, all data is read on [SAP HANA databases](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry")and not just data flagged as "HOT" in the database table snwd\_so.

@AbapCatalog.sqlViewName: 'SALES\_ORDER\_2012'
@DataAging.noAgingRestriction:true
define view sales\_order\_2012 as
  select from snwd\_so
         { key snwd\_so.so\_id,
               snwd\_so.buyer\_guid as customer\_guid }
  where snwd\_so.created\_at >= 20120101000000.0
    and snwd\_so.created\_at < 20130101000000.0;