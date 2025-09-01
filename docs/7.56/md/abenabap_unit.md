---
title: "ABAP Unit"
description: |
  ABAP Unit is a test framework for unit tests(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenunit_test_glosry.htm 'Glossary Entry'). ABAP Unit can be used to: -   run single tests or mass tests -   evaluate test results Single tests can be started directly in the tool for the corres
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_unit.htm"
abapFile: "abenabap_unit.htm"
keywords: ["do", "if", "try", "method", "class", "data", "abenabap", "unit"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Program Maintenance](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_tests.htm) → 

ABAP Unit

ABAP Unit is a test framework for [unit tests](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenunit_test_glosry.htm "Glossary Entry"). ABAP Unit can be used to:

-   run single tests or mass tests
-   evaluate test results

Single tests can be started directly in the tool for the corresponding program. More comprehensive test runs are executed from the ABAP Unit Browser in the ABAP Workbench or by using the ABAP Test Cockpit. ABAP Unit is closely linked with the [Coverage Analyzer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencoverage_analyzer_glosry.htm "Glossary Entry"), enabling test coverage to be measured as well.

In ABAP programs, unit tests are performed as [test methods](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentest_method_glosry.htm "Glossary Entry") in local [test classes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentest_class_glosry.htm "Glossary Entry"). They are not part of the production code of a program, but are transported in the same way. Test methods of this type are executed and evaluated using the ABAP Unit Framework. The test methods generally call the units of the production code to be tested and then check the results using methods of the class CL\_ABAP\_UNIT\_ASSERT. Test classes and test methods are defined using the following language elements. Special [test includes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentest_include_glosry.htm "Glossary Entry") are used to define test classes in class pools and function pools.

-   [CLASS ... DEFINITION FOR TESTING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_for_testing.htm)
-   [METHODS ... FOR TESTING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_testing.htm)

If test classes implement interfaces, not all interface methods generally need to be implemented there. The error message or warning that otherwise occurs can be hidden in test classes by using an addition of the statement INTERFACES.

-   [INTERFACES ... PARTIALLY IMPLEMENTED](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinterfaces_partially.htm)

If production code contains parts that are not suitable for unit tests, sections of code can be flagged as [test seams](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentest_seams.htm). [Injections](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninjection_glosry.htm "Glossary Entry") can be defined in methods of test classes. Injections replace the test seams with test-friendly code when a unit test is executed.

During a unit test, it is not allowed to exit the production code that is called from a test method with the statements [LEAVE PROGRAM](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapleave_program.htm) [LEAVE TO TRANSACTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapleave_to_transaction.htm) and [SUBMIT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsubmit.htm) without AND RETURN.

Hints

-   All components required for tests in the context of ABAP Unit should be defined exclusively in test classes. This ensures that they are not generated in production systems and cannot be addressed by production code. In addition to test classes with test methods, this also includes test doubles and other helper classes that do not contain test methods.
-   The syntax @testing ... in [ABAP Doc comments](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_doc_comment_glosry.htm "Glossary Entry") can be used to associate test classes and test methods with repository objects. This makes it possible to display them in the [ADT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenadt_glosry.htm "Glossary Entry") for the repository objects and execute them as external unit tests.
-   In test classes, a [replacement service for ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencl_osql_replace.htm) enables access to data sources by ABAP SQL statements to be redirected to other database objects.
-   For more information, see the documentation ABAP Unit in SAP Help Portal.

Continue
[CLASS, FOR TESTING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_for_testing.htm)
[METHODS, FOR TESTING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_testing.htm)
[INTERFACES, PARTIALLY IMPLEMENTED](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinterfaces_partially.htm)
[Test Seams](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentest_seams.htm)