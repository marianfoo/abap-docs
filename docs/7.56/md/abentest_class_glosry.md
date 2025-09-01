  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

test class

Special local or global [class](javascript:call_link\('abenclass_glosry.htm'\) "Glossary Entry") in which tests for [ABAP Unit](javascript:call_link\('abenabap_unit_glosry.htm'\) "Glossary Entry") are implemented in the form of test methods. [Test methods](javascript:call_link\('abentest_method_glosry.htm'\) "Glossary Entry") can be implemented in a test class. A test class groups together related tests that use the same [fixture](javascript:call_link\('abenfixture_glosry.htm'\) "Glossary Entry"). Furthermore, test dummies and other auxiliary classes required for testing should also be defined as test classes. These objects do not contain any test methods. Test classes are defined using the [FOR TESTING](javascript:call_link\('abapclass_for_testing.htm'\)) addition of the [CLASS](javascript:call_link\('abapclass_definition.htm'\)) statement. Test classes can only be used as part of [test runs](javascript:call_link\('abentest_run_glosry.htm'\) "Glossary Entry") and, by default, are not generated in production systems.