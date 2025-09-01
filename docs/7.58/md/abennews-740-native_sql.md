  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews.htm) →  [News for ABAP Release 7.40 and its SPs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-740.htm) →  [News for ABAP Release 7.40, SP02](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-740_sp02.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Native%20SQL%20in%20ABAP%20Release%207.40%2C%20SP02%2C%20ABENNEWS-740-NATIVE_SQL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improve
ment:)

Native SQL in ABAP Release 7.40, SP02

[1\. Bulk Access in ADBC](#!ABAP_MODIFICATION_1@1@)
[2\. Recommended Use](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Bulk Access in ADBC

The new method SET\_PARAM\_TABLE of the class CL\_SQL\_STATEMENT enables bulk access in [ADBC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadbc.htm) (see the [executable example](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadbc_dml_ddl_bulk_abexa.htm)).

Modification 2   

Recommended Use

New developments in [Native SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennative_sql_glosry.htm "Glossary Entry") are now only possible in [ADBC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadbc_glosry.htm "Glossary Entry"), which means that ADBC is now recommended in new programs instead of the [static embedding](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennativesql.htm) of Native SQL.