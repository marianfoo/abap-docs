  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.40 and Its SPs](javascript:call_link\('abennews-740.htm'\)) →  [Changes in Release 7.40, SP02](javascript:call_link\('abennews-740_sp02.htm'\)) → 

Native SQL in Release 7.40, SP02

[1\. Bulk access in ADBC](#!ABAP_MODIFICATION_1@1@)

[2\. Recommended use](#!ABAP_MODIFICATION_2@2@)

Modification 1

Bulk Access in ADBC

The new method SET\_PARAM\_TABLE of the class CL\_SQL\_STATEMENT enables bulk access in [ADBC](javascript:call_link\('abenadbc.htm'\)) (see the [executable example](javascript:call_link\('abenadbc_dml_ddl_bulk_abexa.htm'\))).

Modification 2

Recommended Use

New developments in [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") are now only possible in [ADBC](javascript:call_link\('abenadbc_glosry.htm'\) "Glossary Entry"), which means that ADBC is now recommended in new programs instead of the [static embedding](javascript:call_link\('abennativesql.htm'\)) of Native SQL.