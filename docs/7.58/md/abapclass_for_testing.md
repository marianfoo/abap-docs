  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Maintenance](javascript:call_link\('abenprogram_editing.htm'\)) →  [Testing and Checking Programs](javascript:call_link\('abenabap_tests.htm'\)) →  [ABAP Unit](javascript:call_link\('abenabap_unit.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CLASS%2C%20FOR%20TESTING%2C%20ABAPCLASS_FOR_TESTING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CLASS, FOR TESTING

[Short Reference](javascript:call_link\('abapclass_shortref.htm'\))

Syntax

[CLASS class DEFINITION](javascript:call_link\('abapclass_definition.htm'\)) FOR TESTING *\[*RISK LEVEL *{*CRITICAL*|*DANGEROUS*|*HARMLESS*}**\]*
                                   *\[*DURATION *{*SHORT*|*MEDIUM*|*LONG*}**\]*.

Additions:

[1\. ... RISK LEVEL *{*CRITICAL*|*DANGEROUS*|*HARMLESS*}*](#!ABAP_ADDITION_1@1@)
[2\. ... DURATION *{*SHORT*|*MEDIUM*|*LONG*}*](#!ABAP_ADDITION_2@2@)

Effect

The FOR TESTING addition defines a class to be used in [ABAP Unit](javascript:call_link\('abenabap_unit_glosry.htm'\) "Glossary Entry"). A class with the FOR TESTING addition can have different purposes:

-   [Test class](javascript:call_link\('abentest_class_glosry.htm'\) "Glossary Entry") in a narrower sense. A test class contains [test methods](javascript:call_link\('abentest_method_glosry.htm'\) "Glossary Entry") that are called by the ABAP Unit framework during a [test run](javascript:call_link\('abentest_run_glosry.htm'\) "Glossary Entry").
-   Represent a test double for use as dependent-on component in unit tests. For more information, see [Managing Dependencies with ABAP Unit](https://help.sap.com/docs/ABAP_PLATFORM_NEW/c238d694b825421f940829321ffa326a/04a2d0fc9cd940db8aedf3fa29e5f07e).
-   Provide helper functions (test infrastructure) for writing ABAP unit tests.

A test class and its components cannot be addressed in the production code of the program therefore, only in other test classes. In particular, a subclass of a test class must be a test class itself and be declared using the FOR TESTING addition. The only exception to this rule is that test classes can be specified as [friends](javascript:call_link\('abenfriend_glosry.htm'\) "Glossary Entry") in the definition of production classes to make it possible to test private components.

A local test class can contain special private methods that implement the [fixture](javascript:call_link\('abenfixture_glosry.htm'\) "Glossary Entry") for the tests of the class. These methods have the following predefined names:

-   An [instance method](javascript:call_link\('abeninstance_method_glosry.htm'\) "Glossary Entry") setup, which is executed before each individual test that is before each execution of a test method of a class.
-   An instance method teardown, which is executed after each individual test that is after each execution of a test method of the class.
-   A [static method](javascript:call_link\('abenstatic_method_glosry.htm'\) "Glossary Entry") class\_setup, which is executed once before all tests of the class.
-   A static method class\_teardown, which is executed once after all tests of the class.

The source code of a test class is not part of the production code of its program and is not generated in production systems (controlled using the [profile parameter](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") abap/test\_generation). The code of such a class is not counted in code coverage measurements.

Hints

-   Local test classes of class pools and function pools should only be created in the [test includes](javascript:call_link\('abentest_include_glosry.htm'\) "Glossary Entry") designed for them. In other programs, these tests should located at the end of the program.
-   In addition to the test methods and special methods for the fixture, a test class can also contain other components. These components can be used in a user's own test class only or in other test classes, depending on the visibility. In this way, help methods can be defined for tests.
-   All components required for tests in the context of ABAP Unit should be defined exclusively in test classes. This ensures that they cannot be generated in production systems and cannot be addressed by production code. In addition to test classes with test methods, this also includes test doubles and other helper classes that do not contain test methods.
-   Test classes can inherit from any other classes, especially global classes. This allows general global tests to be implemented that can be used in local test classes.
-   Global test classes (in a narrower sense) always have to define the code under test by means of a [test relation](javascript:call_link\('abentest_relation_glosry.htm'\) "Glossary Entry").
-   In test classes, the addition [PARTIALLY IMPLEMENTED](javascript:call_link\('abapinterfaces_partially.htm'\)) of the statement INTERFACES can be specified, which allows interfaces to be implemented only partially. This is particularly useful in test doubles.
-   The addition FOR TESTING in a local class created in the area for local types of the class pool of a global test class. The addition is not needed in auxiliary classes for the global test class, since its property test class affects the entire class pool with regard to its generation. In rare cases in which a global test class is to be tested itself, local test classes can be created as recommended for other global classes in the area local test classes.
-   The methods of the [fixture](javascript:call_link\('abenfixture_glosry.htm'\) "Glossary Entry") are not test methods and the addition [FOR TESTING](javascript:call_link\('abapmethods_testing.htm'\)) cannot be specified for their declaration.
-   Global test classes can also contain [AMDP method](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") as test methods. In this case, they must include the corresponding tag interface [IF\_AMDP\_MARKER\_...](javascript:call_link\('abenamdp_classes.htm'\)) for [AMDP classes](javascript:call_link\('abenamdp_class_glosry.htm'\) "Glossary Entry").
-   The special [ABAP Doc comment](javascript:call_link\('abenabap_doc_comment_glosry.htm'\) "Glossary Entry") ["! @testing](javascript:call_link\('abentest_relations.htm'\)) can be written in front of the declaration of a test class in order to define a [test relation](javascript:call_link\('abentest_relation_glosry.htm'\) "Glossary Entry") for that class. This allows repository objects to be tested that do not support test classes themselves.

Addition 1   

... RISK LEVEL *{*CRITICAL*|*DANGEROUS*|*HARMLESS*}*

Addition 2   

... DURATION *{*SHORT*|*MEDIUM*|*LONG*}*

Effect

These additions assign test properties to a test class.

-   RISK LEVEL defines the risk level for a test.
-   DURATION specifies the expected execution time.

During test execution, the test properties are checked against values that are maintained in transaction SAUNIT\_CLIENT\_SETUP.

-   The meaning of the risk levels is as follows:
    
    -   CRITICAL - a test changes system settings or customizing data (default)
    -   DANGEROUS - a test changes persistent data
    -   HARMLESS - a test does not change system settings or persistent data
    
    Tests whose risk level is higher than specified in transaction SAUNIT\_CLIENT\_SETUP are not executed.
    
-   The meaning of the expected execution time is as follows:
    
    -   SHORT - an imperceptible execution time of some few seconds is expected.
    -   MEDIUM - a noticeable execution time of around a minute is expected.
    -   LONG - a very noticeable execution time of more than one minute is expected.
    
    For each of these expected execution times, upper limits are specified in transaction SAUNIT\_CLIENT\_SETUP. These limits are usually greater than the expected execution times in order to include processes, for example compilations, that are not part of the test itself. If a test exceeds the upper limit associated with the expected time, the system behavior depends on the execution mode of the test and whether the ABAP Unit runtime monitoring is switched on or off. For more information about execution mode and runtime monitoring, see the documentation of transaction SAUNIT\_CLIENT\_SETUP or [ABAP Unit](https://help.sap.com/docs/ABAP_PLATFORM_NEW/ba879a6e2ea04d9bb94c7ccd7cdac446/491cfd8926bc14cde10000000a42189b) in SAP Help Portal.
    

Hints

-   Note the difference between expected execution time specified by DURATION and the allowed execution time specified by the respective upper limit in transaction SAUNIT\_CLIENT\_SETUP. The expected execution time must be defined according to the actual expectation and not to the upper limit, in order to avoid system-dependent test abortions.
-   The additions RISK LEVEL and DURATION replace the [pseudo comments for test classes](javascript:call_link\('abenpseudo_comment_test_class.htm'\)). Existing pseudo comments are not ignored but should no longer be used.

Example

See the class CL\_DEMO\_ABAP\_UNIT.

-   The global class itself represents the production part of the source code. A method get\_sum adds the values of the fields of a row of a DDIC database table and assigns the result to the private attribute sum.
-   The class test\_demo in the CCAU include is a test class for the global class.
    
    -   In the method setup, an object of the global class is created and the DDIC database table is prepared with test data. Therefore, the addition DANGEROUS is specified for RISK LEVEL.
    -   The method test\_sum calls get\_sum and compares the private attribute sum with the expected value. For this reason, test\_demo must be a local friend of the global class.
    -   In the method teardown, the test data is removed from the DDIC database table again.
    
    The test method is called when the unit test of CL\_DEMO\_ABAP\_UNIT is executed and should not report an error.