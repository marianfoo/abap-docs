  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [ABAP and SAP HANA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_hana.htm) → 

Cached Views in SAP HANA

The [SAP HANA database](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhana_database_glosry.htm "Glossary Entry") supports the concept of cached views. Subject to certain prerequisites, the results of reads of a view are cached in a cache to avoid repeated aggregation. For more information, see the [SAP HANA](http://help.sap.com/hana) documentation.

Caching can also be used for such views in read Open SQL statements. The following conditions must be met:

-   The type of an ABAP Dictionary view known in Open SQL (classic [database view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_view_glosry.htm "Glossary Entry") or [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry")) must be defined for the caching. There is no tool support for this at present. Instead, the SQL statement ALTER TABLE (described in the documentation for [HANA-specific SQL](https://help.sap.com/viewer/4fe29514fd584807ac9f2a04f6754767/2.0.00/en-us)) can be used with the addition ADD CACHE.

-   The use of the cache must be activated in the Open SQL [query](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenquery_glosry.htm "Glossary Entry") by using the [database hint](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_hint_glosry.htm "Glossary Entry") [%\_HINTS HDB](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenosql_db_hints.htm) 'RESULT\_CACHE'.

-   The Open SQL [query](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenquery_glosry.htm "Glossary Entry") must have [aggregate expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_aggregate.htm) and a [GROUP BY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapgroupby_clause.htm) clause.

If these prerequisites are met and a suitable cache exists, queries of the same type read from the cache. To find out whether a cache was used, how old its data is, and the maximum lifetime of the data in the cache, the addition [EXTENDED RESULT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_extended_result.htm) of the [INTO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinto_clause.htm) clause can be used to provide the result object with the corresponding information. To do this, the value ABAP\_TRUE must be passed to the parameter IV\_CACHED\_VIEW of the instance constructor of the class [CL\_OSQL\_EXTENDED\_RESULT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_osql_extended_result.htm) when the object is created. The methods for reading the relevant values start with the prefix CVIEW\_.

Note

For cached views, an alternative for handling the exception CX\_OSQL\_EXTENDED\_RESULT is to execute the method CVIEW\_VALID for the result object of [EXTENDED RESULT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_extended_result.htm) to determine the validity of the extended result.

Example

See [SAP HANA, Cached Views](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhana_cached_views_abexa.htm)