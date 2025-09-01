  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Program Maintenance](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_tests.htm) →  [ABAP Unit](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_unit.htm) → 

CLASS, FOR TESTING

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclass_shortref.htm)

Syntax

[CLASS class DEFINITION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclass_definition.htm) FOR TESTING *\[*RISK LEVEL *{*CRITICAL*|*DANGEROUS*|*HARMLESS*}**\]*
                                   *\[*DURATION *{*SHORT*|*MEDIUM*|*LONG*}**\]*.

Additions:

[1\. ... RISK LEVEL *{*CRITICAL*|*DANGEROUS*|*HARMLESS*}*](#!ABAP_ADDITION_1@1@)
[2\. ... DURATION *{*SHORT*|*MEDIUM*|*LONG*}*](#!ABAP_ADDITION_2@2@)

Effect

The FOR TESTING addition is used to defined a class as a [test class](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentest_class_glosry.htm "Glossary Entry") for the [ABAP Unit](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_unit_glosry.htm "Glossary Entry") tool. Test classes can contain [test methods](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentest_method_glosry.htm "Glossary Entry") that are called as individual tests during a [test run](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentest_run_glosry.htm "Glossary Entry").

A test class is usually a local class. The source code in a test class is not part of the production code of the program and is not generated in production systems (controlled using the [profile parameter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") abap/test\_generation) . A test class and its components cannot be addressed in the production code of the program therefore, only in other test classes. In particular, a subclass of a test class must be a test class itself and be declared using the FOR TESTING addition. The only exception to this rule is that test classes can be specified as [friends](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfriend_glosry.htm "Glossary Entry") in the definition of production classes to make it possible to test private components.

A local test class can contain special private methods that implement the [fixture](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfixture_glosry.htm "Glossary Entry") for the tests of the class. These methods have the following predefined names:

-   An [instance method](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninstance_method_glosry.htm "Glossary Entry") setup, which is executed before each individual test or before each execution of a test method.
    

-   An instance method teardown, which is executed after each individual test or after each execution of a test method.
    

-   A [static method](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstatic_method_glosry.htm "Glossary Entry") class\_setup, which is executed once before all tests of the class.
    

-   A static method class\_teardown, which is executed once after every test of the class.
    

Hints

-   Create test classes for class pools and function pools only in the [test includes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentest_include_glosry.htm "Glossary Entry") designed for them. In other programs, these tests should run at the end of the program.
    

-   In addition to the test methods and special methods for the fixture, a test class can also contain other components. These components can be used in a user's own test class only or in other test classes, depending on the visibility. In this way, help methods can be defined for tests, for example.
    

-   All components required for tests in the context of ABAP Unit should be defined exclusively in test classes. This ensures that they are not generated in production systems and cannot be addressed by production code. Alongside test classes with test methods, this also includes test dummies and other helper classes that do not contain test methods.
    

-   Test classes can inherit from any other classes, in particular from global classes. This allows general global tests to be implemented that can be used in local test classes.
    

-   Global test classes can be created for reusing complex test preparations. Global test classes should always be abstract and can only be used in local test classes. Currently, all instance methods of a global test class are automatically test methods.
    

-   In test classes, the addition [PARTIALLY IMPLEMENTED](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinterfaces_partially.htm) of the statement INTERFACES can be specified, which allows interfaces to be implemented only partially. This is particularly useful in test doubles.
    

-   The addition FOR TESTING in a local class created in the area for local types of the class pool of a global test class. The addition is not needed in auxiliary classes for the global test class, since its property test class has an effect on the entire class pool with regard to its generation. In rare cases in which a global test class is to be tested itself, local test classes can be created as recommended for other global classes in the area local test classes.
    

-   The methods of the [fixture](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfixture_glosry.htm "Glossary Entry") are not test methods and the addition [FOR TESTING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmethods_testing.htm) cannot be specified for their declaration.
    

-   Global test classes can also contain [AMDP method](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_method_glosry.htm "Glossary Entry") as test methods. In this case, they must include the corresponding tag interface [IF\_AMDP\_MARKER\_...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_classes.htm) for [AMDP classes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_class_glosry.htm "Glossary Entry").
    

Addition 1

... RISK LEVEL *{*CRITICAL*|*DANGEROUS*|*HARMLESS*}*

Addition 2

... DURATION *{*SHORT*|*MEDIUM*|*LONG*}*

Effect

These additions assign test properties to a test class. RISK LEVEL defines the risk level for a test and DURATION the expected execution time. The test properties are checked during when the test is executed.

-   Tests whose risk level is higher than allowed in a system are not executed.

-   The behavior of tests that run longer than expected is determined by the run mode and the runtime monitor.

Hints

-   A risk level must be defined for SAP test classes.

-   The additions RISK LEVEL and DURATION replace the [pseudo comments for test classes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpseudo_comment_test_class.htm). Existing pseudo comments are not ignored, but should no longer be used.

Example

See the program DEMO\_ABAP\_UNIT.

-   A class demo represents the productive part of the source code. A method get\_sum adds the values of the fields of a row of a DDIC database table and assigns the result to the private attribute sum.

-   The class test\_demo is a test class for the class demo.

-   In the method setup, an object of demo is created and the DDIC database table is prepared with test data. Therefore, the addition DANGEROUS is specified for RISK LEVEL.

-   The method test\_sum calls get\_sum and compares the private attribute sum with the expected value. For this reason, test\_demo must be a friend of the class demo.

-   In the method teardown, the test data is removed from the DDIC database table.

The test method is called when the unit test of DEMO\_ABAP\_UNIT is executed and should not produce an error.