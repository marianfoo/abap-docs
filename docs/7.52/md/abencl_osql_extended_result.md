  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) →  [Open SQL - System Classes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_osql.htm) → 

CL\_OSQL\_EXTENDED\_RESULT - Extended Result

An object of the system class CL\_OSQL\_EXTENDED\_RESULT can be specified with the addition [EXTENDED RESULT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_extended_result.htm) of a [INTO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinto_clause.htm) clause as the target object for an extended result of a [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm), [WITH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwith.htm), or [FETCH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfetch.htm)statement. First, the object must be created and the instance constructor must be told which values the extended result will contain.

Currently, an extended result can be used to check whether a [query](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenquery_glosry.htm "Glossary Entry") can read data from the cache when accessing a [cached view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhana_cached_views.htm) of the [SAP HANA database](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhana_database_glosry.htm "Glossary Entry").

Example

See [SAP HANA, Cached Views](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhana_cached_views_abexa.htm)