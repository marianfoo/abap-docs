# ABAP Keyword Documentation / ABAP − Reference / Program Editing / Testing and Checking Programs / ABAP Unit

Included pages: 12



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.53](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenabap_unit.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_unit.htm)
- [abapclass_for_testing.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass_for_testing.htm)
- [abapmethods_testing.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethods_testing.htm)
- [abapinterfaces_partially.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinterfaces_partially.htm)
- [abentest_seams.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentest_seams.htm)
- [abaptest-seam.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptest-seam.htm)
- [abapend-test-seam.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapend-test-seam.htm)
- [abaptest-injection.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptest-injection.htm)
- [abapend-test-injection.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapend-test-injection.htm)

**Bundle Contains**: 9 documentation pages
**Version**: ABAP 7.53
**Generated**: 2025-09-01T11:25:46.223Z

---

### abenabap_unit.htm

> **📖 Official SAP Documentation**: [abenabap_unit.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_unit.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Testing and Checking Programs](javascript:call_link\('abenabap_tests.htm'\)) → 

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

-   The new syntax @testing ... in [ABAP Doc comments](javascript:call_link\('abenabap_doc_comment_glosry.htm'\) "Glossary Entry") associates test classes and test methods with repository objects. This makes it possible to display and execute these classes and methods in the [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") of the repository objects.

-   In test classes, a [replacement service for ABAP SQL](javascript:call_link\('abencl_osql_replace.htm'\)) enables access to data sources by ABAP SQL statements to be redirected to other database objects.

-   For more information, see the ABAP Unit documentation on [SAP Help Portal](http://help.sap.com).

Continue
[CLASS - FOR TESTING](javascript:call_link\('abapclass_for_testing.htm'\))
[METHODS - FOR TESTING](javascript:call_link\('abapmethods_testing.htm'\))
[INTERFACES - PARTIALLY IMPLEMENTED](javascript:call_link\('abapinterfaces_partially.htm'\))
[Test Seams](javascript:call_link\('abentest_seams.htm'\))



**📖 Source**: [abenabap_unit.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_unit.htm)

### abapclass_for_testing.htm

> **📖 Official SAP Documentation**: [abapclass_for_testing.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass_for_testing.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Testing and Checking Programs](javascript:call_link\('abenabap_tests.htm'\)) →  [ABAP Unit](javascript:call_link\('abenabap_unit.htm'\)) → 

CLASS - FOR TESTING

[Quick Reference](javascript:call_link\('abapclass_shortref.htm'\))

Syntax

[CLASS class DEFINITION](javascript:call_link\('abapclass_definition.htm'\)) FOR TESTING *\[*RISK LEVEL *{*CRITICAL*|*DANGEROUS*|*HARMLESS*}**\]*
                                   *\[*DURATION   *{*SHORT*|*MEDIUM*|*LONG*}**\]*.

Extras:

[1\. ... RISK LEVEL *{*CRITICAL*|*DANGEROUS*|*HARMLESS*}*](#!ABAP_ADDITION_1@1@)
[2\. ... DURATION *{*SHORT*|*MEDIUM*|*LONG*}*](#!ABAP_ADDITION_2@2@)

Effect

The FOR TESTING addition is used to defined a class as a [test class](javascript:call_link\('abentest_class_glosry.htm'\) "Glossary Entry") for the [ABAP Unit](javascript:call_link\('abenabap_unit_glosry.htm'\) "Glossary Entry") tool. Test classes can contain [test methods](javascript:call_link\('abentest_method_glosry.htm'\) "Glossary Entry") that are called as individual tests during a [test run](javascript:call_link\('abentest_run_glosry.htm'\) "Glossary Entry").

A test class is usually a local class. The source code in a test class is not part of the production code of the program and is not generated in production systems (controlled using the [profile parameter](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") abap/test\_generation) . A test class and its components cannot be addressed in the production code of the program therefore, only in other test classes. In particular, a subclass of a test class must be a test class itself and be declared using the FOR TESTING addition. The only exception to this rule is that test classes can be specified as [friends](javascript:call_link\('abenfriend_glosry.htm'\) "Glossary Entry") in the definition of production classes to make it possible to test private components.

A local test class can contain special private methods that implement the [fixture](javascript:call_link\('abenfixture_glosry.htm'\) "Glossary Entry") for the tests of the class. These methods have the following predefined names:

-   An [instance method](javascript:call_link\('abeninstance_method_glosry.htm'\) "Glossary Entry") setup, which is executed before each individual test or before each execution of a test method.
    
-   An instance method teardown, which is executed after each individual test or after each execution of a test method.
    
-   A [static method](javascript:call_link\('abenstatic_method_glosry.htm'\) "Glossary Entry") class\_setup, which is executed once before all tests of the class.
    
-   A static method class\_teardown, which is executed once after every test of the class.
    

Notes

-   Create test classes for class pools and function groups only in the [test includes](javascript:call_link\('abentest_include_glosry.htm'\) "Glossary Entry") designed for them. In other programs, these tests should run at the end of the program.
    
-   In addition to the test methods and special methods for the fixture, a test class can also contain other components. These components can be used in a user's own test class only or in other test classes, depending on the visibility. In this way, help methods can be defined for tests, for example.
    
-   All components required for tests in the context of ABAP Unit should be defined exclusively in test classes. This ensures that they are not generated in production systems and cannot be addressed by production code. Alongside test classes with test methods, this also includes test dummies and other helper classes that do not contain test methods.
    
-   Test classes can inherit from any other classes, in particular from global classes. This allows general global tests to be implemented that can be used in local test classes.
    
-   Global test classes can be created for reusing complex test preparations. Global test classes should always be abstract and can only be used in local test classes. Currently, all instance methods of a global test class are automatically test methods.
    
-   In test classes, the addition [PARTIALLY IMPLEMENTED](javascript:call_link\('abapinterfaces_partially.htm'\)) of the statement INTERFACES can be specified, which allows interfaces to be implemented only partially. This is particularly useful in test doubles.
    
-   The addition FOR TESTING in a local class created in the area for local types of the class pool of a global test class. The addition is not needed in auxiliary classes for the global test class, since its property test class has an effect on the entire class pool with regard to its generation. In rare cases in which a global test class is to be tested itself, local test classes can be created as recommended for other global classes in the area local test classes.
    
-   The methods of the [fixture](javascript:call_link\('abenfixture_glosry.htm'\) "Glossary Entry") are not test methods and the addition [FOR TESTING](javascript:call_link\('abapmethods_testing.htm'\)) cannot be specified for their declaration.
    
-   Global test classes can also contain [AMDP methods](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") as test methods, in which case they must include the appropriate tag interface [IF\_AMDP\_MARKER\_...](javascript:call_link\('abenamdp_classes.htm'\)) for [AMDP classes](javascript:call_link\('abenamdp_class_glosry.htm'\) "Glossary Entry").
    

Addition 1

... RISK LEVEL *{*CRITICAL*|*DANGEROUS*|*HARMLESS*}*

Addition 2

... DURATION *{*SHORT*|*MEDIUM*|*LONG*}*

Effect

These additions assign test properties to a test class. RISK LEVEL defines the risk level for a test and DURATION the expected execution time. The test properties are checked during when the test is executed.

-   Tests whose risk level is higher than allowed in a system are not executed.
    
-   The behavior of tests that run longer than expected is determined by the run mode and the runtime monitor.
    

Notes

-   A risk level must be defined for SAP test classes.
    
-   The additions RISK LEVEL and DURATION replace the [pseudo comments for test classes](javascript:call_link\('abenpseudo_comment_test_class.htm'\)). Existing pseudo comments are not ignored, but should no longer be used.
    

Example

See the program DEMO\_ABAP\_UNIT.

-   A class demo represents the productive part of the source code. A method get\_sum adds the values of the fields of a row of a database table and assigns the result to the private attribute sum.
    
-   The class test\_demo is a test class for the class demo.
    

-   In the method setup, an object of demo is created and the database table is prepared with test data. Therefore, the addition DANGEROUS is specified for RISK LEVEL.

-   The method test\_sum calls get\_sum and compares the private attribute sum with the expected value. For this reason, test\_demo must be a friend of the class demo.

-   In the method teardown, the test data is removed from the database table.

The test method is called when the module test of DEMO\_ABAP\_UNIT is executed and should not produce an error.



**📖 Source**: [abapclass_for_testing.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass_for_testing.htm)

### abapmethods_testing.htm

> **📖 Official SAP Documentation**: [abapmethods_testing.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethods_testing.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Testing and Checking Programs](javascript:call_link\('abenabap_tests.htm'\)) →  [ABAP Unit](javascript:call_link\('abenabap_unit.htm'\)) → 

METHODS - FOR TESTING

[Quick Reference](javascript:call_link\('abapmethods_testing_shortref.htm'\))

Syntax

[METHODS](javascript:call_link\('abapmethods.htm'\)) meth *\[*[ABSTRACT*|*FINAL](javascript:call_link\('abapmethods_abstract_final.htm'\))*\]*
             *\[*[AMDP OPTIONS *\[*READ-ONLY*\]* *\[*CDS SESSION CLIENT clnt*|*CURRENT*\]*](javascript:call_link\('abapmethods_amdp_options.htm'\))*\]*
  FOR TESTING
  *\[*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*\]*.

Effect

This statement is only possible in a [test class](javascript:call_link\('abentest_class_glosry.htm'\) "Glossary Entry"). It declares a [test method](javascript:call_link\('abentest_method_glosry.htm'\) "Glossary Entry") that is called during as a single test during a [test run](javascript:call_link\('abentest_run_glosry.htm'\) "Glossary Entry"). A test can be programmed in the method implementation. To check the test assumptions, static methods from the class CL\_ABAP\_UNIT\_ASSERT are used, such as:

-   ASSERT\_EQUALS
    
-   ASSERT\_BOUND
    
-   ASSERT\_NOT\_BOUND
    
-   ASSERT\_INITIAL
    
-   ASSERT\_NOT\_INITIAL
    
-   ASSERT\_SUBRC
    
-   FAIL
    

The data is evaluated using the [ABAP Unit](javascript:call_link\('abenabap_unit_glosry.htm'\) "Glossary Entry") Framework.

The same applies to the additions ABSTRACT, FINAL, and RAISING as to the [general instance methods](javascript:call_link\('abapmethods_general.htm'\)). Furthermore, the addition [AMDP OPTIONS](javascript:call_link\('abapmethods_amdp_options.htm'\)) can be specified for test methods, since these methods can also be implemented as [AMDP methods](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry").

Notes

-   Test methods should be private, or protected if the methods are inherited. Since test classes implicitly offer friendship to the test driver in the runtime environment, the driver can call them. Test methods only need to be public in rare cases where a test executes tests from other test classes.
    
-   When a test method is executed, the same applies to [resumable exceptions](javascript:call_link\('abenresumable_exception_glosry.htm'\) "Glossary Entry") as to all other methods. If processing can be resumed successfully, the interrupted test can be resumed.
    
-   The special methods setup, teardown, class\_setup, and class\_teardown of the [fixture](javascript:call_link\('abenfixture_glosry.htm'\) "Glossary Entry") are not test methods and the addition FOR TESTING cannot be used for this methods.
    
-   To prevent inaccurate test results, the [rule](javascript:call_link\('abenuse_actual_parameters_guidl.htm'\) "Guideline") that no system fields are passed as actual parameters must be observed, most specifically for the ASSERT methods of the class CL\_ABAP\_UNIT\_ASSERT. The special method ASSERT\_SUBRC is only used for checking the return code.
    

Example

Definition of a test class mytest with a test method mytest that checks the value of the text attribute after the method set\_text\_to\_x of the class myclass has been called. In this example, the ABAP Unit test reports an error since the value "X" is expected instead of "U".

\* Productive classes
CLASS myclass DEFINITION.
  PUBLIC SECTION.
    CLASS-DATA text TYPE string.
    CLASS-METHODS set\_text\_to\_x.
ENDCLASS.
CLASS myclass IMPLEMENTATION.
  METHOD set\_text\_to\_x.
    text = 'U'.
  ENDMETHOD.
ENDCLASS.
\* Test classes
CLASS mytest DEFINITION FOR TESTING RISK LEVEL HARMLESS.
  PRIVATE SECTION.
    METHODS mytest FOR TESTING.
ENDCLASS.
CLASS mytest IMPLEMENTATION.
  METHOD mytest.
    myclass=>set\_text\_to\_x( ).
    cl\_abap\_unit\_assert=>assert\_equals( act = myclass=>text
                                        exp = 'X' ).
  ENDMETHOD.
ENDCLASS.



**📖 Source**: [abapmethods_testing.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethods_testing.htm)

### abapinterfaces_partially.htm

> **📖 Official SAP Documentation**: [abapinterfaces_partially.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinterfaces_partially.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Testing and Checking Programs](javascript:call_link\('abenabap_tests.htm'\)) →  [ABAP Unit](javascript:call_link\('abenabap_unit.htm'\)) → 

INTERFACES - PARTIALLY IMPLEMENTED

[Quick Reference](javascript:call_link\('abapinterfaces_shortref.htm'\))

Syntax

[INTERFACES](javascript:call_link\('abapinterfaces_class.htm'\)) intf
  PARTIALLY IMPLEMENTED
  ...

Effect

The addition PARTIALLY IMPLEMENTED for statement [INTERFACES](javascript:call_link\('abapinterfaces_class.htm'\)) for implementing interfaces in classes can only be used in [test classes](javascript:call_link\('abentest_class_glosry.htm'\) "Glossary Entry"). This addition prevents the syntax check error/warning from occurring if not all of the concrete non-optional interface methods are implemented in the test class. The addition must be specified before the additions that list the attributes or methods.

If an interface method that is not implemented is called during a test, an exception from the class CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD is raised.

Note

The addition is particularly useful when classes (acting as test doubles) implement interfaces and not all the methods of these implements are called by the code being tested. Without this addition, it would be necessary to implement all unnecessary methods without values and assign these methods the needed pragma. This is because implementing methods without values produces a warning from the extended program check.

Example

The class [CL\_HTTP\_EXT\_SERVICE\_DEMO](javascript:call_link\('abenicf_service_abexa.htm'\)), described under [Calling an HTTP Service](javascript:call_link\('abenicf_service_abexa.htm'\)), is an example of production code. This class demonstrates the function of a simple HTTP service. If the service is used normally, the method IF\_HTTP\_EXTENSION~HANDLE\_REQUEST from [ICF](javascript:call_link\('abenicf_glosry.htm'\) "Glossary Entry") is called. ICF-independent tests can be run for the class: In its [test include](javascript:call_link\('abentest_include_glosry.htm'\) "Glossary Entry"), local classes are declared as test doubles for the classes of ICF, which are implemented by the following interfaces:

CLASS mock\_server DEFINITION FOR TESTING FINAL.
  PUBLIC SECTION.
    INTERFACES if\_http\_server PARTIALLY IMPLEMENTED.
ENDCLASS.
CLASS mock\_server IMPLEMENTATION.
ENDCLASS.
CLASS mock\_request DEFINITION FOR TESTING FINAL.
  PUBLIC SECTION.
    INTERFACES if\_http\_request PARTIALLY IMPLEMENTED.
ENDCLASS.
CLASS mock\_request IMPLEMENTATION.
  METHOD if\_http\_request~get\_form\_field.
    value = SWITCH spfli-carrid( name WHEN 'carrid' THEN 'LH'
                                      ELSE space ) ##no\_text.
  ENDMETHOD.
ENDCLASS.
CLASS mock\_response DEFINITION FOR TESTING FINAL.
  PUBLIC SECTION.
    INTERFACES if\_http\_response PARTIALLY IMPLEMENTED.
    DATA output TYPE string.
ENDCLASS.
CLASS mock\_response IMPLEMENTATION.
  METHOD if\_http\_response~set\_cdata.
    me->output = data.
  ENDMETHOD.
ENDCLASS.

Only the interface methods required to execute tests are implemented. The interfaces have numerous other methods. These methods must not be implemented when empty due to the addition PARTIALLY IMPLEMENTED.

The actual test class looks as follows:

CLASS test\_http\_service DEFINITION FOR TESTING
                        DURATION SHORT
                        RISK LEVEL HARMLESS
                        FINAL.
  PRIVATE SECTION.
    DATA mock\_request  TYPE REF TO mock\_request.
    DATA mock\_response TYPE REF TO mock\_response.
    DATA mock\_server   TYPE REF TO mock\_server.
    DATA handler  TYPE REF TO cl\_http\_ext\_service\_demo.
    METHODS test\_service FOR TESTING.
ENDCLASS.
CLASS test\_http\_service IMPLEMENTATION.
  METHOD test\_service.
    CREATE OBJECT mock\_request.
    CREATE OBJECT mock\_response.
    CREATE OBJECT mock\_server.
    CREATE OBJECT handler.
    mock\_server->if\_http\_server~request  = mock\_request.
    mock\_server->if\_http\_server~response = mock\_response.
    handler->if\_http\_extension~handle\_request( mock\_server ).
    IF mock\_response->output NS \`<meta name="Output" content="Data">\`.
      cl\_abap\_unit\_assert=>fail( msg = \`Wrong output data\` ).
    ENDIF.
  ENDMETHOD.
ENDCLASS.

In the test method, ICF is simulated by directly creating objects of the test doubles. The REQUEST test double simulates the form field. The RESPONSE test double contains the result that is checked after the method HANDLER is called for testing.



**📖 Source**: [abapinterfaces_partially.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinterfaces_partially.htm)

### abentest_seams.htm

> **📖 Official SAP Documentation**: [abentest_seams.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentest_seams.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Testing and Checking Programs](javascript:call_link\('abenabap_tests.htm'\)) →  [ABAP Unit](javascript:call_link\('abenabap_unit.htm'\)) → 

Test Seams

Test seams are language constructs designed especially for [unit tests](javascript:call_link\('abenunit_test_glosry.htm'\) "Glossary Entry") and are implemented using the following statements:

-   [TEST-SEAM - END-TEST-SEAM](javascript:call_link\('abaptest-seam.htm'\))

Defines a test seam as a replaceable area in the production code of a program.

-   [TEST-INJECTION - END-TEST-INJECTION](javascript:call_link\('abaptest-injection.htm'\))

Replaces the executable statements of a test seam by the statements of an injection in a [test class](javascript:call_link\('abentest_class_glosry.htm'\) "Glossary Entry") of the same program.

Test seams have the following properties:

-   Test seams are ignored in production use of programs.

-   A program can contain more than one test seam.

-   Multiple injections can be defined for a single test seam.

-   Injections can only be created in test classes that are defined in a [test include](javascript:call_link\('abentest_include_glosry.htm'\) "Glossary Entry"). Test seams can be used in all executable units of a master program that includes a test include , including local classes and subroutines .

-   Unit tests can make injections while [test methods](javascript:call_link\('abentest_method_glosry.htm'\) "Glossary Entry") or the setup method are being executed.

-   If injections are repeated in the same test seam, the last injection is the active injection.

Note

Test seams are a simple way of replacing or expanding source code in production parts of a program for test purposes. If, for example, the behavior of certain statements prevents tests from running, the unit test can replace them with suitable alternatives. Typical scenarios are:

-   Authorization checks

-   Reading persistent data

-   Modifying persistent data

-   Creating test doubles

Example for authorization checks

An injection can use the statement [AUTHORITY-CHECK](javascript:call_link\('abapauthority-check.htm'\)) to bypass the dependency of a unit test on the authorizations of the current user by setting a suitable return code.

Test Seam

Injection

TEST-SEAM authorization\_seam.
  AUTHORITY-CHECK OBJECT 'S\_CTS\_ADMI'
     ID 'CTS\_ADMFCT' FIELD 'TABL'.
END-TEST-SEAM.
IF sy-subrc = 0.
  is\_authorized = abap\_true.
ENDIF.

TEST-INJECTION authorization\_seam.
  sy-subrc = 0.
END-TEST-INJECTION.

Example for reading persistent data

It is often not possible to make assumptions about the content of database tables or other repositories in unit tests. Using test seams, unit tests can bypass the dependencies of persistent data by replacing it with constructed data.

Test Seam

Injection

TEST-SEAM read\_content\_seam.
  SELECT \*
         FROM sflight
         WHERE  carrid IN @carrid\_range AND
               fldate EQ @sy-datum
      INTO TABLE @flights.
END-TEST-SEAM.

TEST-INJECTION read\_content\_seam.
  flights =
    VALUE #( ( carrid = 'LHA'
               connid = 100 )
             ( carrid = 'AFR'
              connid = 900 ) ).
END-TEST-INJECTION.

Example for changing persistent data

When they run, unit tests must not modify production content of database tables or other repositories. Using test seams, unit tests can record the operands of modifying database operations or compare actual changes with expected changes. In the following source code section compares, the injection compares the change values with a public static attribute.

Test Seam

Injection

TEST-SEAM store\_content\_seam.
  MODIFY sflight
    FROM TABLE @new\_flights.
END-TEST-SEAM.

TEST-INJECTION store\_content\_seam.
  cl\_abap\_unit\_assert=>assert\_equals(
    act = new\_flights
     exp = global\_buffer=>exp\_flights ).
END-TEST-INJECTION.

Example for a test double

In the following source code section, the production source text of class that is dependent on database content is instantiated. The unit test injects the instantiated test double at the location of the production object.

Test Seam

Injection

TEST-SEAM instantiation\_seam.
  me->oref = NEW #( ).
END-TEST-SEAM.

TEST-INJECTION instantiation\_seam.
  me->oref = NEW dummy\_class( ).
END-TEST-INJECTION.

Example

See also the class CL\_AU\_SAMPLE\_TEST\_SEAMS in the package SABP\_UNIT\_SAMPLE.

Continue
[TEST-SEAM](javascript:call_link\('abaptest-seam.htm'\))
[TEST-INJECTION](javascript:call_link\('abaptest-injection.htm'\))



**📖 Source**: [abentest_seams.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentest_seams.htm)

### abaptest-seam.htm

> **📖 Official SAP Documentation**: [abaptest-seam.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptest-seam.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Testing and Checking Programs](javascript:call_link\('abenabap_tests.htm'\)) →  [ABAP Unit](javascript:call_link\('abenabap_unit.htm'\)) →  [Test Seams](javascript:call_link\('abentest_seams.htm'\)) → 

TEST-SEAM

[Quick Reference](javascript:call_link\('abaptest-seam_shortref.htm'\))

Syntax

TEST-SEAM seam.
  *\[*statement\_block*\]*
END-TEST-SEAM.

Effect

The statement SEAM introduces a [test seam](javascript:call_link\('abentest_seam_glosry.htm'\) "Glossary Entry") called seam which is closed by END-TEST-SEAM. A [test class](javascript:call_link\('abentest_class_glosry.htm'\) "Glossary Entry") of the current program can use the statement [TEST-INJECTION](javascript:call_link\('abaptest-injection.htm'\)) to replace the statement block statement\_block using an [injection](javascript:call_link\('abeninjection_glosry.htm'\) "Glossary Entry") defined there. If no injection is performed for the test seam, the original code is executed.

Test seams have the following properties:

-   Multiple test seams can be defined in a single [compilation unit](javascript:call_link\('abencompilation_unit_glosry.htm'\) "Glossary Entry"), but each must have a unique name.
    
-   The general [naming conventions](javascript:call_link\('abennaming_conventions.htm'\)) apply to the name seam.
    
-   Test seams cannot be nested, which means that a test seam cannot contain further test seams.
    
-   A test seam cannot extend beyond the limits of a [statement block](javascript:call_link\('abenstatement_block_glosry.htm'\) "Glossary Entry"), but can contain closed [control structures](javascript:call_link\('abencontrol_structure_glosry.htm'\) "Glossary Entry").
    
-   A test seam can include data declarations. These declarations are not replaced when an injection is performed and remain visible in their context.
    
-   Test seams can be defined in the [global declaration part](javascript:call_link\('abenglobal_declaration_sect_glosry.htm'\) "Glossary Entry") of a program but not in the [declaration part](javascript:call_link\('abendeclaration_section_glosry.htm'\) "Glossary Entry") of a class.
    
-   A test seam can be empty (that is, it does not contain any statements). An injection is inserted instead.
    
-   Test seams cannot be defined in test classes.
    

Note

[Injections](javascript:call_link\('abeninjection_glosry.htm'\) "Glossary Entry") can only be created in test classes that are defined in a [test include](javascript:call_link\('abentest_include_glosry.htm'\) "Glossary Entry") of the current program. Test includes are currently only possible in [class pools](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry") and [function groups](javascript:call_link\('abenfunction_group_glosry.htm'\) "Glossary Entry"). This means that test seams are only feasible in class pools and function groups.

Example

Here, the class CL\_DEMO\_TEST\_SEAMS is an example of production code. The method CHANGE\_PRICE multiplies the price of a flight in the database table SFLIGHT by a factor and (if successful) returns the modified price. If a database access fails, a specific invalid value is returned instead of the price.

Test seams are defined for both database accesses. This makes it possible to run a unit test without accessing real data. See the example for [TEST-INJECTION](javascript:call_link\('abaptest-injection.htm'\)).

METHOD change\_price.
  DATA wa TYPE sflight.
  TEST-SEAM selection.
    SELECT SINGLE \*
           FROM sflight
           INTO wa
           WHERE carrid = carrid AND
                 connid = connid AND
                 fldate = fldate.
  END-TEST-SEAM.
  IF sy-subrc <> 0.
    new\_price = - 1.
    RETURN.
  ENDIF.
  wa-price = wa-price \* factor / 100.
  TEST-SEAM modification.
    MODIFY sflight FROM wa.
  END-TEST-SEAM.
  IF sy-subrc = 0.
    new\_price = wa-price.
  ELSE.
    new\_price = - 2.
  ENDIF.
ENDMETHOD.

Continue
[END-TEST-SEAM](javascript:call_link\('abapend-test-seam.htm'\))



**📖 Source**: [abaptest-seam.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptest-seam.htm)

### abapend-test-seam.htm

> **📖 Official SAP Documentation**: [abapend-test-seam.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapend-test-seam.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Testing and Checking Programs](javascript:call_link\('abenabap_tests.htm'\)) →  [ABAP Unit](javascript:call_link\('abenabap_unit.htm'\)) →  [Test Seams](javascript:call_link\('abentest_seams.htm'\)) →  [TEST-SEAM](javascript:call_link\('abaptest-seam.htm'\)) → 

END-TEST-SEAM

[Quick Reference](javascript:call_link\('abaptest-seam_shortref.htm'\))

Syntax

END-TEST-SEAM.

Effect

The statement END-TEST-SEAM closes a test seam introduced using [TEST-SEAM](javascript:call_link\('abaptest-seam.htm'\)).



**📖 Source**: [abapend-test-seam.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapend-test-seam.htm)

### abaptest-seam.htm

> **📖 Official SAP Documentation**: [abaptest-seam.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptest-seam.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Testing and Checking Programs](javascript:call_link\('abenabap_tests.htm'\)) →  [ABAP Unit](javascript:call_link\('abenabap_unit.htm'\)) →  [Test Seams](javascript:call_link\('abentest_seams.htm'\)) → 

TEST-SEAM

[Quick Reference](javascript:call_link\('abaptest-seam_shortref.htm'\))

Syntax

TEST-SEAM seam.
  *\[*statement\_block*\]*
END-TEST-SEAM.

Effect

The statement SEAM introduces a [test seam](javascript:call_link\('abentest_seam_glosry.htm'\) "Glossary Entry") called seam which is closed by END-TEST-SEAM. A [test class](javascript:call_link\('abentest_class_glosry.htm'\) "Glossary Entry") of the current program can use the statement [TEST-INJECTION](javascript:call_link\('abaptest-injection.htm'\)) to replace the statement block statement\_block using an [injection](javascript:call_link\('abeninjection_glosry.htm'\) "Glossary Entry") defined there. If no injection is performed for the test seam, the original code is executed.

Test seams have the following properties:

-   Multiple test seams can be defined in a single [compilation unit](javascript:call_link\('abencompilation_unit_glosry.htm'\) "Glossary Entry"), but each must have a unique name.
    
-   The general [naming conventions](javascript:call_link\('abennaming_conventions.htm'\)) apply to the name seam.
    
-   Test seams cannot be nested, which means that a test seam cannot contain further test seams.
    
-   A test seam cannot extend beyond the limits of a [statement block](javascript:call_link\('abenstatement_block_glosry.htm'\) "Glossary Entry"), but can contain closed [control structures](javascript:call_link\('abencontrol_structure_glosry.htm'\) "Glossary Entry").
    
-   A test seam can include data declarations. These declarations are not replaced when an injection is performed and remain visible in their context.
    
-   Test seams can be defined in the [global declaration part](javascript:call_link\('abenglobal_declaration_sect_glosry.htm'\) "Glossary Entry") of a program but not in the [declaration part](javascript:call_link\('abendeclaration_section_glosry.htm'\) "Glossary Entry") of a class.
    
-   A test seam can be empty (that is, it does not contain any statements). An injection is inserted instead.
    
-   Test seams cannot be defined in test classes.
    

Note

[Injections](javascript:call_link\('abeninjection_glosry.htm'\) "Glossary Entry") can only be created in test classes that are defined in a [test include](javascript:call_link\('abentest_include_glosry.htm'\) "Glossary Entry") of the current program. Test includes are currently only possible in [class pools](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry") and [function groups](javascript:call_link\('abenfunction_group_glosry.htm'\) "Glossary Entry"). This means that test seams are only feasible in class pools and function groups.

Example

Here, the class CL\_DEMO\_TEST\_SEAMS is an example of production code. The method CHANGE\_PRICE multiplies the price of a flight in the database table SFLIGHT by a factor and (if successful) returns the modified price. If a database access fails, a specific invalid value is returned instead of the price.

Test seams are defined for both database accesses. This makes it possible to run a unit test without accessing real data. See the example for [TEST-INJECTION](javascript:call_link\('abaptest-injection.htm'\)).

METHOD change\_price.
  DATA wa TYPE sflight.
  TEST-SEAM selection.
    SELECT SINGLE \*
           FROM sflight
           INTO wa
           WHERE carrid = carrid AND
                 connid = connid AND
                 fldate = fldate.
  END-TEST-SEAM.
  IF sy-subrc <> 0.
    new\_price = - 1.
    RETURN.
  ENDIF.
  wa-price = wa-price \* factor / 100.
  TEST-SEAM modification.
    MODIFY sflight FROM wa.
  END-TEST-SEAM.
  IF sy-subrc = 0.
    new\_price = wa-price.
  ELSE.
    new\_price = - 2.
  ENDIF.
ENDMETHOD.

Continue
[END-TEST-SEAM](javascript:call_link\('abapend-test-seam.htm'\))



**📖 Source**: [abaptest-seam.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptest-seam.htm)

### abaptest-injection.htm

> **📖 Official SAP Documentation**: [abaptest-injection.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptest-injection.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Testing and Checking Programs](javascript:call_link\('abenabap_tests.htm'\)) →  [ABAP Unit](javascript:call_link\('abenabap_unit.htm'\)) →  [Test Seams](javascript:call_link\('abentest_seams.htm'\)) → 

TEST-INJECTION

[Quick Reference](javascript:call_link\('abaptest-injection_shortref.htm'\))

Syntax

TEST-INJECTION seam.
  *\[*statement\_block*\]*
END-TEST-INJECTION.

Effect

The statement TEST-INJECTION introduces an [injection](javascript:call_link\('abeninjection_glosry.htm'\) "Glossary Entry") for a [test seam](javascript:call_link\('abentest_seam_glosry.htm'\) "Glossary Entry") seam, closed using END-TEST-INJECTION. The test seam seam must be defined in the production code of the current program using the statement [TEST-SEAM](javascript:call_link\('abaptest-seam.htm'\)). When a unit test is performed, the statement block statement\_block of the injection replaces the statement block of the test seam seam in production code.

An injection can only be defined in those methods of test classes created in a [test include](javascript:call_link\('abentest_include_glosry.htm'\) "Glossary Entry"). Injections have the following properties:

-   Injections can be made only while a test method or the setup method is being executed.
    
-   Injections cannot be nested, which means that an injection cannot contain further injections.
    
-   An injection cannot extend beyond the limits of a [statement block](javascript:call_link\('abenstatement_block_glosry.htm'\) "Glossary Entry"), but can contain closed [control structures](javascript:call_link\('abencontrol_structure_glosry.htm'\) "Glossary Entry").
    
-   An injection can include local data declarations using the statement [DATA](javascript:call_link\('abapdata.htm'\)). These variables are visible below their declaration in the current injection and all following injections of the current test class. The data objects declared in an injection are not visible outside of injections (in other parts of the test class or in production code). Injections that access data objects declared in a different injection can only be assigned to test seams defined in the production source code below the test seam (meaning the test seam assigned to the declaring injection).
    
-   An injection can be empty (that is, it is does not contain any statements). The code of the specified test seam is removed when the injection is executed.
    
-   Injections can access all types and objects that are visible in the location of the specified test seam.
    
-   In an injection, it is not possible to access types and objects of the test method, which the injection is defined in. These types and objects are placed in the location of the statement TEST-INJECTION, but are not visible in the injection.
    

The test seam remains replaced by the injection until the test seam encounters a new injection. This means that a test seam can be replaced more than once during a unit test and by different injections. All replacements are canceled at the end of a individual test or test method.

Notes

-   When the test runs, any data objects declared in injections are preserved in their context, even if the declaring injection is replaced by a different injection in its test seam.
    
-   Apart from DATA, no declarative statements are possible in injections.
    
-   Test includes can currently only be created for class pools and functions groups; this means that injections can only be created there as well.
    

Example

The [test include](javascript:call_link\('abentest_include_glosry.htm'\) "Glossary Entry") of the class CL\_DEMO\_TEST\_SEAMS is an example of a test class with injections:

The test method tests the method CHANGE\_PRICE (see the example for [TEST-SEAM](javascript:call_link\('abaptest-seam.htm'\))). Before the test method runs, the injection replaces the injection in the setup method of the test seam selection. When the test method runs,

-   the statements of the test seam modification are removed when replaced by an empty injection and the successful closing of the method is confirmed,

-   the statements of the test seam modification are replaced in such a way that an unsuccessful modification of the table content is simulated, and the associated return code checked,

-   the statements of the test seam selection are replaced in such a way that an unsuccessful selection of the table content is simulated, and the associated return code checked.

CLASS test\_demo\_test\_seam DEFINITION FOR TESTING
                          RISK LEVEL HARMLESS
                          DURATION SHORT
                          FINAL.
  PRIVATE SECTION.
    METHODS: setup,
      test\_change\_price FOR TESTING,
      invoke\_and\_assert IMPORTING exp TYPE i.
ENDCLASS.
CLASS test\_demo\_test\_seam IMPLEMENTATION.
  METHOD setup.
    TEST-INJECTION selection.
      wa-price = 100.
    END-TEST-INJECTION.
  ENDMETHOD.
  METHOD test\_change\_price.
    TEST-INJECTION modification.
    END-TEST-INJECTION.
    invoke\_and\_assert( 90 ).
    TEST-INJECTION modification.
      sy-subrc = 4.
    END-TEST-INJECTION.
    invoke\_and\_assert( -2 ).
    TEST-INJECTION selection.
      sy-subrc = 4.
    END-TEST-INJECTION.
    TEST-INJECTION modification.
    END-TEST-INJECTION.
    invoke\_and\_assert( -1 ).
  ENDMETHOD.
  METHOD invoke\_and\_assert.
    NEW cl\_demo\_test\_seams( )->change\_price(
      EXPORTING
         carrid = '   '
         connid = '0000'
         fldate = '00000000'
         factor = 90
       IMPORTING new\_price = DATA(new\_price) ).
    cl\_abap\_unit\_assert=>assert\_equals(
     EXPORTING
       exp                  = exp
       act = new\_price  ).
  ENDMETHOD.
ENDCLASS.

Continue
[END-TEST-INJECTION](javascript:call_link\('abapend-test-injection.htm'\))



**📖 Source**: [abaptest-injection.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptest-injection.htm)

### abapend-test-injection.htm

> **📖 Official SAP Documentation**: [abapend-test-injection.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapend-test-injection.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Testing and Checking Programs](javascript:call_link\('abenabap_tests.htm'\)) →  [ABAP Unit](javascript:call_link\('abenabap_unit.htm'\)) →  [Test Seams](javascript:call_link\('abentest_seams.htm'\)) →  [TEST-INJECTION](javascript:call_link\('abaptest-injection.htm'\)) → 

END-TEST-INJECTION

[Quick Reference](javascript:call_link\('abaptest-injection_shortref.htm'\))

Syntax

END-TEST-INJECTION.

Effect

The statement END-TEST-INJECTION closes a test injection that was initiated using [TEST-INJECTION](javascript:call_link\('abaptest-injection.htm'\)).



**📖 Source**: [abapend-test-injection.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapend-test-injection.htm)

### abaptest-injection.htm

> **📖 Official SAP Documentation**: [abaptest-injection.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptest-injection.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Testing and Checking Programs](javascript:call_link\('abenabap_tests.htm'\)) →  [ABAP Unit](javascript:call_link\('abenabap_unit.htm'\)) →  [Test Seams](javascript:call_link\('abentest_seams.htm'\)) → 

TEST-INJECTION

[Quick Reference](javascript:call_link\('abaptest-injection_shortref.htm'\))

Syntax

TEST-INJECTION seam.
  *\[*statement\_block*\]*
END-TEST-INJECTION.

Effect

The statement TEST-INJECTION introduces an [injection](javascript:call_link\('abeninjection_glosry.htm'\) "Glossary Entry") for a [test seam](javascript:call_link\('abentest_seam_glosry.htm'\) "Glossary Entry") seam, closed using END-TEST-INJECTION. The test seam seam must be defined in the production code of the current program using the statement [TEST-SEAM](javascript:call_link\('abaptest-seam.htm'\)). When a unit test is performed, the statement block statement\_block of the injection replaces the statement block of the test seam seam in production code.

An injection can only be defined in those methods of test classes created in a [test include](javascript:call_link\('abentest_include_glosry.htm'\) "Glossary Entry"). Injections have the following properties:

-   Injections can be made only while a test method or the setup method is being executed.
    
-   Injections cannot be nested, which means that an injection cannot contain further injections.
    
-   An injection cannot extend beyond the limits of a [statement block](javascript:call_link\('abenstatement_block_glosry.htm'\) "Glossary Entry"), but can contain closed [control structures](javascript:call_link\('abencontrol_structure_glosry.htm'\) "Glossary Entry").
    
-   An injection can include local data declarations using the statement [DATA](javascript:call_link\('abapdata.htm'\)). These variables are visible below their declaration in the current injection and all following injections of the current test class. The data objects declared in an injection are not visible outside of injections (in other parts of the test class or in production code). Injections that access data objects declared in a different injection can only be assigned to test seams defined in the production source code below the test seam (meaning the test seam assigned to the declaring injection).
    
-   An injection can be empty (that is, it is does not contain any statements). The code of the specified test seam is removed when the injection is executed.
    
-   Injections can access all types and objects that are visible in the location of the specified test seam.
    
-   In an injection, it is not possible to access types and objects of the test method, which the injection is defined in. These types and objects are placed in the location of the statement TEST-INJECTION, but are not visible in the injection.
    

The test seam remains replaced by the injection until the test seam encounters a new injection. This means that a test seam can be replaced more than once during a unit test and by different injections. All replacements are canceled at the end of a individual test or test method.

Notes

-   When the test runs, any data objects declared in injections are preserved in their context, even if the declaring injection is replaced by a different injection in its test seam.
    
-   Apart from DATA, no declarative statements are possible in injections.
    
-   Test includes can currently only be created for class pools and functions groups; this means that injections can only be created there as well.
    

Example

The [test include](javascript:call_link\('abentest_include_glosry.htm'\) "Glossary Entry") of the class CL\_DEMO\_TEST\_SEAMS is an example of a test class with injections:

The test method tests the method CHANGE\_PRICE (see the example for [TEST-SEAM](javascript:call_link\('abaptest-seam.htm'\))). Before the test method runs, the injection replaces the injection in the setup method of the test seam selection. When the test method runs,

-   the statements of the test seam modification are removed when replaced by an empty injection and the successful closing of the method is confirmed,

-   the statements of the test seam modification are replaced in such a way that an unsuccessful modification of the table content is simulated, and the associated return code checked,

-   the statements of the test seam selection are replaced in such a way that an unsuccessful selection of the table content is simulated, and the associated return code checked.

CLASS test\_demo\_test\_seam DEFINITION FOR TESTING
                          RISK LEVEL HARMLESS
                          DURATION SHORT
                          FINAL.
  PRIVATE SECTION.
    METHODS: setup,
      test\_change\_price FOR TESTING,
      invoke\_and\_assert IMPORTING exp TYPE i.
ENDCLASS.
CLASS test\_demo\_test\_seam IMPLEMENTATION.
  METHOD setup.
    TEST-INJECTION selection.
      wa-price = 100.
    END-TEST-INJECTION.
  ENDMETHOD.
  METHOD test\_change\_price.
    TEST-INJECTION modification.
    END-TEST-INJECTION.
    invoke\_and\_assert( 90 ).
    TEST-INJECTION modification.
      sy-subrc = 4.
    END-TEST-INJECTION.
    invoke\_and\_assert( -2 ).
    TEST-INJECTION selection.
      sy-subrc = 4.
    END-TEST-INJECTION.
    TEST-INJECTION modification.
    END-TEST-INJECTION.
    invoke\_and\_assert( -1 ).
  ENDMETHOD.
  METHOD invoke\_and\_assert.
    NEW cl\_demo\_test\_seams( )->change\_price(
      EXPORTING
         carrid = '   '
         connid = '0000'
         fldate = '00000000'
         factor = 90
       IMPORTING new\_price = DATA(new\_price) ).
    cl\_abap\_unit\_assert=>assert\_equals(
     EXPORTING
       exp                  = exp
       act = new\_price  ).
  ENDMETHOD.
ENDCLASS.

Continue
[END-TEST-INJECTION](javascript:call_link\('abapend-test-injection.htm'\))



**📖 Source**: [abaptest-injection.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptest-injection.htm)

### abentest_seams.htm

> **📖 Official SAP Documentation**: [abentest_seams.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentest_seams.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abentest_seams.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentest_seams.htm)


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Testing and Checking Programs](javascript:call_link\('abenabap_tests.htm'\)) →  [ABAP Unit](javascript:call_link\('abenabap_unit.htm'\)) → 

Test Seams

Test seams are language constructs designed especially for [unit tests](javascript:call_link\('abenunit_test_glosry.htm'\) "Glossary Entry") and are implemented using the following statements:

-   [TEST-SEAM - END-TEST-SEAM](javascript:call_link\('abaptest-seam.htm'\))

Defines a test seam as a replaceable area in the production code of a program.

-   [TEST-INJECTION - END-TEST-INJECTION](javascript:call_link\('abaptest-injection.htm'\))

Replaces the executable statements of a test seam by the statements of an injection in a [test class](javascript:call_link\('abentest_class_glosry.htm'\) "Glossary Entry") of the same program.

Test seams have the following properties:

-   Test seams are ignored in production use of programs.

-   A program can contain more than one test seam.

-   Multiple injections can be defined for a single test seam.

-   Injections can only be created in test classes that are defined in a [test include](javascript:call_link\('abentest_include_glosry.htm'\) "Glossary Entry"). Test seams can be used in all executable units of a master program that includes a test include , including local classes and subroutines .

-   Unit tests can make injections while [test methods](javascript:call_link\('abentest_method_glosry.htm'\) "Glossary Entry") or the setup method are being executed.

-   If injections are repeated in the same test seam, the last injection is the active injection.

Note

Test seams are a simple way of replacing or expanding source code in production parts of a program for test purposes. If, for example, the behavior of certain statements prevents tests from running, the unit test can replace them with suitable alternatives. Typical scenarios are:

-   Authorization checks

-   Reading persistent data

-   Modifying persistent data

-   Creating test doubles

Example for authorization checks

An injection can use the statement [AUTHORITY-CHECK](javascript:call_link\('abapauthority-check.htm'\)) to bypass the dependency of a unit test on the authorizations of the current user by setting a suitable return code.

Test Seam

Injection

TEST-SEAM authorization\_seam.
  AUTHORITY-CHECK OBJECT 'S\_CTS\_ADMI'
     ID 'CTS\_ADMFCT' FIELD 'TABL'.
END-TEST-SEAM.
IF sy-subrc = 0.
  is\_authorized = abap\_true.
ENDIF.

TEST-INJECTION authorization\_seam.
  sy-subrc = 0.
END-TEST-INJECTION.

Example for reading persistent data

It is often not possible to make assumptions about the content of database tables or other repositories in unit tests. Using test seams, unit tests can bypass the dependencies of persistent data by replacing it with constructed data.

Test Seam

Injection

TEST-SEAM read\_content\_seam.
  SELECT \*
         FROM sflight
         WHERE  carrid IN @carrid\_range AND
               fldate EQ @sy-datum
      INTO TABLE @flights.
END-TEST-SEAM.

TEST-INJECTION read\_content\_seam.
  flights =
    VALUE #( ( carrid = 'LHA'
               connid = 100 )
             ( carrid = 'AFR'
              connid = 900 ) ).
END-TEST-INJECTION.

Example for changing persistent data

When they run, unit tests must not modify production content of database tables or other repositories. Using test seams, unit tests can record the operands of modifying database operations or compare actual changes with expected changes. In the following source code section compares, the injection compares the change values with a public static attribute.

Test Seam

Injection

TEST-SEAM store\_content\_seam.
  MODIFY sflight
    FROM TABLE @new\_flights.
END-TEST-SEAM.

TEST-INJECTION store\_content\_seam.
  cl\_abap\_unit\_assert=>assert\_equals(
    act = new\_flights
     exp = global\_buffer=>exp\_flights ).
END-TEST-INJECTION.

Example for a test double

In the following source code section, the production source text of class that is dependent on database content is instantiated. The unit test injects the instantiated test double at the location of the production object.

Test Seam

Injection

TEST-SEAM instantiation\_seam.
  me->oref = NEW #( ).
END-TEST-SEAM.

TEST-INJECTION instantiation\_seam.
  me->oref = NEW dummy\_class( ).
END-TEST-INJECTION.

Example

See also the class CL\_AU\_SAMPLE\_TEST\_SEAMS in the package SABP\_UNIT\_SAMPLE.

Continue
[TEST-SEAM](javascript:call_link\('abaptest-seam.htm'\))
[TEST-INJECTION](javascript:call_link\('abaptest-injection.htm'\))
