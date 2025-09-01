  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.50](javascript:call_link\('abennews-750.htm'\)) → 

ABAP Unit in Release 7.50

Modification

Test Seams and Injections

[Test seams](javascript:call_link\('abentest_seam_glosry.htm'\) "Glossary Entry") and [injections](javascript:call_link\('abeninjection_glosry.htm'\) "Glossary Entry") have been introduced for unit tests in ABAP Unit. When tests are executed, code wrapped in [TEST-SEAM](javascript:call_link\('abaptest-seam.htm'\)) and [END-TEST-SEAM](javascript:call_link\('abapend-test-seam.htm'\)) as part of production code can be replaced by code from test classes wrapped by [TEST-INJECTION](javascript:call_link\('abaptest-injection.htm'\)) and [END-TEST-INJECTION](javascript:call_link\('abapend-test-injection.htm'\)).

Test classes with injections must be created in [test includes](javascript:call_link\('abentest_include_glosry.htm'\) "Glossary Entry"). With the exception of test includes for class pools and function groups, no test includes can currently be created.