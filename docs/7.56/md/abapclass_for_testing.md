  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Maintenance](javascript:call_link\('abenprogram_editing.htm'\)) →  [Testing and Checking Programs](javascript:call_link\('abenabap_tests.htm'\)) →  [ABAP Unit](javascript:call_link\('abenabap_unit.htm'\)) → 

CLASS, FOR TESTING

[Short Reference](javascript:call_link\('abapclass_shortref.htm'\))

Syntax

[CLASS class DEFINITION](javascript:call_link\('abapclass_definition.htm'\)) FOR TESTING *\[*RISK LEVEL *{*CRITICAL*|*DANGEROUS*|*HARMLESS*}**\]*
                                   *\[*DURATION *{*SHORT*|*MEDIUM*|*LONG*}**\]*.

Additions:

[1\. ... RISK LEVEL *{*CRITICAL*|*DANGEROUS*|*HARMLESS*}*](#!ABAP_ADDITION_1@1@)
[2\. ... DURATION *{*SHORT*|*MEDIUM*|*LONG*}*](#!ABAP_ADDITION_2@2@)

Effect

The FOR TESTING addition is used to defined a class as a [test class](javascript:call_link\('abentest_class_glosry.htm'\) "Glossary Entry") for the [ABAP Unit](javascript:call_link\('abenabap_unit_glosry.htm'\) "Glossary Entry") tool. Test classes can contain [test methods](javascript:call_link\('abentest_method_glosry.htm'\) "Glossary Entry") that are called as individual tests during a [test run](javascript:call_link\('abentest_run_glosry.htm'\) "Glossary Entry").

A test class is usually a local class. The source code in a test class is not part of the production code of the program and is not generated in production systems (controlled using the [profile parameter](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") abap/test\_generation) . A test class and its components cannot be addressed in the production code of the program therefore, only in other test classes. In particular, a subclass of a test class must be a test class itself and be declared using the FOR TESTING addition. The only exception to this rule is that test classes can be specified as [friends](javascript:call_link\('abenfriend_glosry.htm'\) "Glossary Entry") in the definition of production classes to make it possible to test private components.

A local test class can contain special private methods that implement the [fixture](javascript:call_link\('abenfixture_glosry.htm'\) "Glossary Entry") for the tests of the class. These methods have the following predefined names:

-   An [instance method](javascript:call_link\('abeninstance_method_glosry.htm'\) "Glossary Entry") setup, which is executed before each individual test that is before each execution of a test method of a class.
-   An instance method teardown, which is executed after each individual test that is after each execution of a test method of the class.
-   A [static method](javascript:call_link\('abenstatic_method_glosry.htm'\) "Glossary Entry") class\_setup, which is executed once before all tests of the class.
-   A static method class\_teardown, which is executed once after all tests of the class.

Hints

-   Test classes for class pools and function pools should only be created in the [test includes](javascript:call_link\('abentest_include_glosry.htm'\) "Glossary Entry") designed for them. In other programs, these tests should run at the end of the program.
-   In addition to the test methods and special methods for the fixture, a test class can also contain other components. These components can be used in a user's own test class only or in other test classes, depending on the visibility. In this way, help methods can be defined for tests.
-   All components required for tests in the context of ABAP Unit should be defined exclusively in test classes. This ensures that they cannot be generated in production systems and cannot be addressed by production code. In addition to test classes with test methods, this also includes test doubles and other helper classes that do not contain test methods.
-   Test classes can inherit from any other classes, especially global classes. This allows general global tests to be implemented that can be used in local test classes.
-   Global test classes can be created for reusing complex test preparations. Global test classes should always be abstract and can only be used in local test classes. Currently, all instance methods of a global test class are automatically test methods.
-   In test classes, the addition [PARTIALLY IMPLEMENTED](javascript:call_link\('abapinterfaces_partially.htm'\)) of the statement INTERFACES can be specified, which allows interfaces to be implemented only partially. This is particularly useful in test doubles.
-   The addition FOR TESTING in a local class created in the area for local types of the class pool of a global test class. The addition is not needed in auxiliary classes for the global test class, since its property test class affects the entire class pool with regard to its generation. In rare cases in which a global test class is to be tested itself, local test classes can be created as recommended for other global classes in the area local test classes.
-   The methods of the [fixture](javascript:call_link\('abenfixture_glosry.htm'\) "Glossary Entry") are not test methods and the addition [FOR TESTING](javascript:call_link\('abapmethods_testing.htm'\)) cannot be specified for their declaration.
-   Global test classes can also contain [AMDP method](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") as test methods. In this case, they must include the corresponding tag interface [IF\_AMDP\_MARKER\_...](javascript:call_link\('abenamdp_classes.htm'\)) for [AMDP classes](javascript:call_link\('abenamdp_class_glosry.htm'\) "Glossary Entry").

Addition 1   

... RISK LEVEL *{*CRITICAL*|*DANGEROUS*|*HARMLESS*}*

Addition 2   

... DURATION *{*SHORT*|*MEDIUM*|*LONG*}*

Effect

These additions assign test properties to a test class. RISK LEVEL defines the risk level for a test and DURATION the expected execution time. The test properties are checked during the test execution.

-   The meaning of the risk levels is as follows:
    
    -   CRITICAL - a test changes system settings or customizing data (default)
    -   DANGEROUS - a test changes persistent data
    -   HARMLESS - a test does not change system settings or persistent data
    
    Tests whose risk level is higher than allowed in a system are not executed.
    
-   The meaning of the expected execution time is as follows:
    
    -   SHORT - less than 5 seconds (default)
    -   MEDIUM - less than a minute
    -   LONG - more than one minute
    
    The behavior of tests that run longer than expected depends on the run mode and the runtime monitor.
    

Hints

-   A risk level must be defined for SAP test classes.
-   The additions RISK LEVEL and DURATION replace the [pseudo comments for test classes](javascript:call_link\('abenpseudo_comment_test_class.htm'\)). Existing pseudo comments are not ignored but should no longer be used.

Example

See the program DEMO\_ABAP\_UNIT.

-   A class demo represents the production part of the source code. A method get\_sum adds the values of the fields of a row of a DDIC database table and assigns the result to the private attribute sum.
-   The class test\_demo is a test class for the class demo.
    
    -   In the method setup, an object of demo is created and the DDIC database table is prepared with test data. Therefore, the addition DANGEROUS is specified for RISK LEVEL.
    -   The method test\_sum calls get\_sum and compares the private attribute sum with the expected value. For this reason, test\_demo must be a friend of the class demo.
    -   In the method teardown, the test data is removed from the DDIC database table again.
    
    The test method is called when the unit test of DEMO\_ABAP\_UNIT is executed and should not report an error.