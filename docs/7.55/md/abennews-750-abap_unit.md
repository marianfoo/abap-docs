  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews.htm) →  [Changes in Releases 7.5x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-75.htm) →  [Changes in Release 7.50](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-750.htm) → 

ABAP Unit in Release 7.50

[1\. Test seams and injections](#!ABAP_MODIFICATION_1@1@)

Modification 1

Test Seams and Injections

[Test seams](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentest_seam_glosry.htm "Glossary Entry") and [injections](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninjection_glosry.htm "Glossary Entry") have been introduced for unit tests in ABAP Unit. When tests are executed, code wrapped in [TEST-SEAM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptest-seam.htm) and [END-TEST-SEAM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapend-test-seam.htm) as part of production code can be replaced by code from test classes wrapped by [TEST-INJECTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptest-injection.htm) and [END-TEST-INJECTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapend-test-injection.htm).

Test classes with injections must be created in [test includes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentest_include_glosry.htm "Glossary Entry"). With the exception of test includes for class pools and function groups, no test includes can currently be created.