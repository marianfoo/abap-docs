  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.50](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-750.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP Unit in Release 7.50, ABENNEWS-750-ABAP_UNIT, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%
0D%0A%0D%0ASuggestion for improvement:)

ABAP Unit in Release 7.50

Modification

Test Seams and Injections

[Test seams](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentest_seam_glosry.htm "Glossary Entry") and [injections](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninjection_glosry.htm "Glossary Entry") have been introduced for unit tests in ABAP Unit. When tests are executed, code wrapped in [TEST-SEAM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptest-seam.htm) and [END-TEST-SEAM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapend-test-seam.htm) as part of production code can be replaced by code from test classes wrapped by [TEST-INJECTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptest-injection.htm) and [END-TEST-INJECTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapend-test-injection.htm).

Test classes with injections must be created in [test includes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentest_include_glosry.htm "Glossary Entry"). With the exception of test includes for class pools and function groups, no test includes can currently be created.