  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.40 and Its SPs](javascript:call_link\('abennews-740.htm'\)) →  [News for Release 7.40, SP02](javascript:call_link\('abennews-740_sp02.htm'\)) → 

Native SQL in Release 7.40, SP02

[1\. Bulk Access in ADBC](#!ABAP_MODIFICATION_1@1@)
[2\. Recommended Use](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Bulk Access in ADBC

The new method SET\_PARAM\_TABLE of the class CL\_SQL\_STATEMENT enables bulk access in [ADBC](javascript:call_link\('abenadbc.htm'\)) (see the [executable example](javascript:call_link\('abenadbc_dml_ddl_bulk_abexa.htm'\))).

Modification 2   

Recommended Use

New developments in [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") are now only possible in [ADBC](javascript:call_link\('abenadbc_glosry.htm'\) "Glossary Entry"), which means that ADBC is now recommended in new programs instead of the [static embedding](javascript:call_link\('abennativesql.htm'\)) of Native SQL.