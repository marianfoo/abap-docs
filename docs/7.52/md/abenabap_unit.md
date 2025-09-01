  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [program editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Testing and Checking Programs](javascript:call_link\('abenabap_tests.htm'\)) → 

ABAP Unit

ABAP Unit is a test framework for [unit tests](javascript:call_link\('abenunit_test_glosry.htm'\) "Glossary Entry"). ABAP Unit can be used to:

-   run single tests or mass tests

-   evaluate test results

Single texts can be started directly in the tool for the program in question. More comprehensive test runs are executed from ABAP Unit Browser in ABAP Workbench or by using ABAP Test Cockpit. ABAP Unit is closely associated with [Coverage Analyzer](javascript:call_link\('abencoverage_analyzer_glosry.htm'\) "Glossary Entry"), enabling test coverage to be measured as well.

In ABAP programs, unit tests are performed as [test methods](javascript:call_link\('abentest_method_glosry.htm'\) "Glossary Entry") in local [test classes](javascript:call_link\('abentest_class_glosry.htm'\) "Glossary Entry"). They are not part of the production code of a program, but are transported in the same way. Test methods of this type are executed and evaluated using ABAP Unit Framework. The test methods generally call the tested units of the production code and then check the results using methods of the class CL\_ABAP\_UNIT\_ASSERT. Test classes and test methods are defined using the following language elements. Special [test includes](javascript:call_link\('abentest_include_glosry.htm'\) "Glossary Entry") are used to define test classes in class pools and function groups.

-   [CLASS ... DEFINITION FOR TESTING](javascript:call_link\('abapclass_for_testing.htm'\))

-   [METHODS ... FOR TESTING](javascript:call_link\('abapmethods_testing.htm'\))

If test classes implement interfaces, not all interface methods generally need to be implemented there. The error message or warning that otherwise occurs can be hidden in test classes by using an addition of the statement INTERFACES.

-   [INTERFACES ... PARTIALLY IMPLEMENTED](javascript:call_link\('abapinterfaces_partially.htm'\))

If production code contains parts that are not suitable for unit tests, sections of code can be flagged as [test seams](javascript:call_link\('abentest_seams.htm'\)). [Injections](javascript:call_link\('abeninjection_glosry.htm'\) "Glossary Entry") can be defined in methods of test classes. Injections replace the test seams with test-friendly code when a unit test is executed.

Notes

-   All components required for tests in the context of ABAP Unit should be defined exclusively in test classes. This ensures that they are not generated in production systems and cannot be addressed by production code. Alongside test classes with test methods, this also includes test dummies and other helper classes that do not contain test methods.

-   In test classes, a [replacement service for Open SQL](javascript:call_link\('abencl_osql_replace.htm'\)) enables access to data sources by Open SQL statements to be redirected to other database objects.

-   For more information, see the ABAP Unit documentation on [SAP Help Portal](http://help.sap.com).

Continue
[CLASS - FOR TESTING](javascript:call_link\('abapclass_for_testing.htm'\))
[METHODS - FOR TESTING](javascript:call_link\('abapmethods_testing.htm'\))
[INTERFACES - PARTIALLY IMPLEMENTED](javascript:call_link\('abapinterfaces_partially.htm'\))
[Test Seams](javascript:call_link\('abentest_seams.htm'\))