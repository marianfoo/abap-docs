  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Maintenance](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_tests.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Unit%2C%20ABENABAP_UNIT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Unit

ABAP Unit is a test framework for [unit tests](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenunit_test_glosry.htm "Glossary Entry"). ABAP Unit can be used to:

-   run single tests or mass tests
-   evaluate test results

Single tests can be started directly in the tool for the corresponding program. More comprehensive test runs are executed from the ABAP Unit Browser in the ABAP Workbench or by using the ABAP Test Cockpit. ABAP Unit is closely linked with the [Coverage Analyzer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencoverage_analyzer_glosry.htm "Glossary Entry"), enabling test coverage to be measured as well.

In ABAP programs, unit tests are performed as [test methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentest_method_glosry.htm "Glossary Entry") in local [test classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentest_class_glosry.htm "Glossary Entry"). They are not part of the production code of a program, but are transported in the same way. Test methods of this type are executed and evaluated using the ABAP Unit Framework. The test methods generally call the units of the production code to be tested and then check the results using methods of the class CL\_ABAP\_UNIT\_ASSERT. Test classes and test methods are defined using the following language elements. Special [test includes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentest_include_glosry.htm "Glossary Entry") are used to define test classes in class pools and function pools.

-   [CLASS ... DEFINITION FOR TESTING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_for_testing.htm)
-   [METHODS ... FOR TESTING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_testing.htm)

If test classes implement interfaces, not all interface methods generally need to be implemented there. The error message or warning that otherwise occurs can be hidden in test classes by using an addition of the statement INTERFACES.

-   [INTERFACES ... PARTIALLY IMPLEMENTED](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinterfaces_partially.htm)

If production code contains parts that are not suitable for unit tests, sections of code can be flagged as [test seams](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentest_seams.htm). [Injections](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninjection_glosry.htm "Glossary Entry") can be defined in methods of test classes. Injections replace the test seams with test-friendly code when a unit test is executed.

In order to test repository objects that do not support test classes themselves in [ADT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadt_glosry.htm "Glossary Entry"), the special [ABAP Doc comment](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_doc_comment_glosry.htm "Glossary Entry") ["! @testing ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentest_relations.htm) can be used to define a [test relation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentest_relation_glosry.htm "Glossary Entry") that links a test class or a test method with such a repository object.

Hints

-   All components required for tests in the context of ABAP Unit should be defined exclusively in test classes. This ensures that they are not generated in production systems and cannot be addressed by production code. In addition to test classes with test methods, this also includes test doubles and other helper classes that do not contain test methods.
-   The [ABAP Test Double Framework](https://help.sap.com/docs/ABAP_PLATFORM_NEW/c238d694b825421f940829321ffa326a/804c251e9c19426cadd1395978d3f17b) based on class CL\_ABAP\_TESTDOUBLE simplifies and standardizes the creation and configuration of test doubles.
-   For more information, see the documentation [ABAP Unit](https://help.sap.com/docs/ABAP_PLATFORM_NEW/ba879a6e2ea04d9bb94c7ccd7cdac446/491cfd8926bc14cde10000000a42189b) in SAP Help Portal.
-   During a unit test, it is not allowed to exit the production code that is called from a test method with the statements [LEAVE PROGRAM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapleave_program.htm) [LEAVE TO TRANSACTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapleave_to_transaction.htm) and [SUBMIT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsubmit.htm) without AND RETURN.
-   In test classes, a [replacement service for ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_osql_replace.htm) enables access to data sources by ABAP SQL statements to be redirected to other database objects.

Continue
[CLASS, FOR TESTING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_for_testing.htm)
[METHODS, FOR TESTING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_testing.htm)
[INTERFACES, PARTIALLY IMPLEMENTED](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinterfaces_partially.htm)
[Test Seams](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentest_seams.htm)
[Test Relations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentest_relations.htm)