  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.40 and Its SPs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-740.htm) →  [News for Release 7.40, SP02](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-740_sp02.htm) → 

Native SQL in Release 7.40, SP02

[1\. Bulk Access in ADBC](#!ABAP_MODIFICATION_1@1@)
[2\. Recommended Use](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Bulk Access in ADBC

The new method SET\_PARAM\_TABLE of the class CL\_SQL\_STATEMENT enables bulk access in [ADBC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenadbc.htm) (see the [executable example](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenadbc_dml_ddl_bulk_abexa.htm)).

Modification 2   

Recommended Use

New developments in [Native SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennative_sql_glosry.htm "Glossary Entry") are now only possible in [ADBC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenadbc_glosry.htm "Glossary Entry"), which means that ADBC is now recommended in new programs instead of the [static embedding](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennativesql.htm) of Native SQL.