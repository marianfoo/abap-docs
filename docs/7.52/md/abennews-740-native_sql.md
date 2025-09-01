  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Release 7.40 and Its SPs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-740.htm) →  [Changes in Release 7.40, SP02](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-740_sp02.htm) → 

Native SQL in Release 7.40, SP02

[1\. Bulk access in ADBC](#!ABAP_MODIFICATION_1@1@)

[2\. Recommended use](#!ABAP_MODIFICATION_2@2@)

Modification 1

Bulk Access in ADBC

The new method SET\_PARAM\_TABLE of the class CL\_SQL\_STATEMENT enables bulk access in [ADBC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenadbc.htm) (see the [executable example](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenadbc_dml_ddl_bulk_abexa.htm)).

Modification 2

Recommended Use

New developments in [Native SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennative_sql_glosry.htm "Glossary Entry") are now only possible in [ADBC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenadbc_glosry.htm "Glossary Entry"), which means that ADBC is now recommended in new programs instead of the [static embedding](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennativesql.htm) of Native SQL.