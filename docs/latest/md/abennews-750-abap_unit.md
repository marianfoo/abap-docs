  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 7.5x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-75.htm) →  [News for ABAP Release 7.50](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-750.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Unit%20in%20ABAP%20Release%207.50%2C%20ABENNEWS-750-ABAP_UNIT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Unit in ABAP Release 7.50

Modification

Test Seams and Injections

[Test seams](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentest_seam_glosry.htm "Glossary Entry") and [injections](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninjection_glosry.htm "Glossary Entry") have been introduced for unit tests in ABAP Unit. When tests are executed, code wrapped in [TEST-SEAM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptest-seam.htm) and [END-TEST-SEAM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapend-test-seam.htm) as part of production code can be replaced by code from test classes wrapped by [TEST-INJECTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptest-injection.htm) and [END-TEST-INJECTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapend-test-injection.htm).

Test classes with injections must be created in [test includes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentest_include_glosry.htm "Glossary Entry"). With the exception of test includes for class pools and function groups, no test includes can currently be created.