  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Maintenance](javascript:call_link\('abenprogram_editing.htm'\)) →  [Testing and Checking Programs](javascript:call_link\('abenabap_tests.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP Unit, ABENABAP_UNIT, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for
 improvement:)

ABAP Unit

ABAP Unit is a test framework for [unit tests](javascript:call_link\('abenunit_test_glosry.htm'\) "Glossary Entry"). ABAP Unit can be used to:

-   run single tests or mass tests
-   evaluate test results

Single tests can be started directly in the tool for the corresponding program. More comprehensive test runs are executed from the ABAP Unit Browser in the ABAP Workbench or by using the ABAP Test Cockpit. ABAP Unit is closely linked with the [Coverage Analyzer](javascript:call_link\('abencoverage_analyzer_glosry.htm'\) "Glossary Entry"), enabling test coverage to be measured as well.

In ABAP programs, unit tests are performed as [test methods](javascript:call_link\('abentest_method_glosry.htm'\) "Glossary Entry") in local [test classes](javascript:call_link\('abentest_class_glosry.htm'\) "Glossary Entry"). They are not part of the production code of a program, but are transported in the same way. Test methods of this type are executed and evaluated using the ABAP Unit Framework. The test methods generally call the units of the production code to be tested and then check the results using methods of the class CL\_ABAP\_UNIT\_ASSERT. Test classes and test methods are defined using the following language elements. Special [test includes](javascript:call_link\('abentest_include_glosry.htm'\) "Glossary Entry") are used to define test classes in class pools and function pools.

-   [CLASS ... DEFINITION FOR TESTING](javascript:call_link\('abapclass_for_testing.htm'\))
-   [METHODS ... FOR TESTING](javascript:call_link\('abapmethods_testing.htm'\))

If test classes implement interfaces, not all interface methods generally need to be implemented there. The error message or warning that otherwise occurs can be hidden in test classes by using an addition of the statement INTERFACES.

-   [INTERFACES ... PARTIALLY IMPLEMENTED](javascript:call_link\('abapinterfaces_partially.htm'\))

If production code contains parts that are not suitable for unit tests, sections of code can be flagged as [test seams](javascript:call_link\('abentest_seams.htm'\)). [Injections](javascript:call_link\('abeninjection_glosry.htm'\) "Glossary Entry") can be defined in methods of test classes. Injections replace the test seams with test-friendly code when a unit test is executed.

In order to test repository objects that do not support test classes themselves in [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"), the special [ABAP Doc comment](javascript:call_link\('abenabap_doc_comment_glosry.htm'\) "Glossary Entry") ["! @testing ...](javascript:call_link\('abentest_relations.htm'\)) can be used to define a [test relation](javascript:call_link\('abentest_relation_glosry.htm'\) "Glossary Entry") that links a test class or a test method with such a repository object.

Hints

-   All components required for tests in the context of ABAP Unit should be defined exclusively in test classes. This ensures that they are not generated in production systems and cannot be addressed by production code. In addition to test classes with test methods, this also includes test doubles and other helper classes that do not contain test methods.
-   During a unit test, it is not allowed to exit the production code that is called from a test method with the statements [LEAVE PROGRAM](javascript:call_link\('abapleave_program.htm'\)) [LEAVE TO TRANSACTION](javascript:call_link\('abapleave_to_transaction.htm'\)) and [SUBMIT](javascript:call_link\('abapsubmit.htm'\)) without AND RETURN.
-   In test classes, a [replacement service for ABAP SQL](javascript:call_link\('abencl_osql_replace.htm'\)) enables access to data sources by ABAP SQL statements to be redirected to other database objects.
-   For more information, see the documentation ABAP Unit in SAP Help Portal.

Continue
[CLASS, FOR TESTING](javascript:call_link\('abapclass_for_testing.htm'\))
[METHODS, FOR TESTING](javascript:call_link\('abapmethods_testing.htm'\))
[INTERFACES, PARTIALLY IMPLEMENTED](javascript:call_link\('abapinterfaces_partially.htm'\))
[Test Seams](javascript:call_link\('abentest_seams.htm'\))
[Test Relations](javascript:call_link\('abentest_relations.htm'\))