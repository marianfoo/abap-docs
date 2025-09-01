  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.40 and its SPs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740.htm) →  [News for Release 7.40, SP02](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740_sp02.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Native SQL in Release 7.40, SP02, ABENNEWS-740-NATIVE_SQL, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Native SQL in Release 7.40, SP02

[1\. Bulk Access in ADBC](#!ABAP_MODIFICATION_1@1@)
[2\. Recommended Use](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Bulk Access in ADBC

The new method SET\_PARAM\_TABLE of the class CL\_SQL\_STATEMENT enables bulk access in [ADBC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadbc.htm) (see the [executable example](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadbc_dml_ddl_bulk_abexa.htm)).

Modification 2   

Recommended Use

New developments in [Native SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennative_sql_glosry.htm "Glossary Entry") are now only possible in [ADBC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadbc_glosry.htm "Glossary Entry"), which means that ADBC is now recommended in new programs instead of the [static embedding](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennativesql.htm) of Native SQL.