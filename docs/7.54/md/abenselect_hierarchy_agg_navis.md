  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Reads](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_reading.htm) →  [SELECT clauses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_clauses.htm) →  [SELECT - FROM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfrom_clause.htm) →  [SELECT - FROM data\_source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) →  [SELECT - FROM hierarchy\_data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_data.htm) →  [SELECT - FROM hierarchy\_navigator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_navigators.htm) → 

SELECT - FROM hierarchy\_aggregate\_navigator

Syntax

... [HIERARCHY\_DESCENDANTS\_AGGREGATE( ... )](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_desc_agg.htm)
  *|* [HIERARCHY\_ANCESTORS\_AGGREGATE( ... )](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_ancs_agg.htm) ...

Effect

Specifies a [hierarchy aggregate navigator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_agg_navi_glosry.htm "Glossary Entry") as a data source [data\_source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) in a ABAP SQL [query](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenquery_glosry.htm "Glossary Entry"). A hierarchy aggregate navigator accesses a [hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_glosry.htm "Glossary Entry") and uses [aggregate functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenaggregate_function_glosry.htm "Glossary Entry") to evaluate it. The following hierarchy aggregate navigators are available:

-   [HIERARCHY\_DESCENDANTS\_AGGREGATE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_desc_agg.htm)

-   [HIERARCHY\_ANCESTORS\_AGGREGATE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_ancs_agg.htm)

Continue
[SELECT - FROM HIERARCHY\_DESCENDANTS\_AGGREGATE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_desc_agg.htm)
[SELECT - FROM HIERARCHY\_ANCESTORS\_AGGREGATE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_ancs_agg.htm)