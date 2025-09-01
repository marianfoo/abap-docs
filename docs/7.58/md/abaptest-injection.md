  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Maintenance](javascript:call_link\('abenprogram_editing.htm'\)) →  [Testing and Checking Programs](javascript:call_link\('abenabap_tests.htm'\)) →  [ABAP Unit](javascript:call_link\('abenabap_unit.htm'\)) →  [Test Seams](javascript:call_link\('abentest_seams.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20TEST-INJECTION%2C%20ABAPTEST-INJECTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

TEST-INJECTION

[Short Reference](javascript:call_link\('abaptest-injection_shortref.htm'\))

Syntax

TEST-INJECTION seam.
  *\[*statement\_block*\]*
END-TEST-INJECTION.

Effect

The statement TEST-INJECTION introduces an [injection](javascript:call_link\('abeninjection_glosry.htm'\) "Glossary Entry") for a [test seam](javascript:call_link\('abentest_seam_glosry.htm'\) "Glossary Entry") seam, which is closed using END-TEST-INJECTION. The test seam seam must be defined in the production code of the current program using the statement [TEST-SEAM](javascript:call_link\('abaptest-seam.htm'\)). When a unit test is performed, the statement block statement\_block of the injection replaces the statement block of the test seam seam in production code.

An injection can only be defined in the methods of test classes created in a [test include](javascript:call_link\('abentest_include_glosry.htm'\) "Glossary Entry"). Injections have the following properties:

-   Injections can be made only while a test method or the setup method is being executed.
-   Injections cannot be nested, which means that an injection cannot contain further injections.
-   An injection cannot extend beyond the limits of a [statement block](javascript:call_link\('abenstatement_block_glosry.htm'\) "Glossary Entry") but can contain closed [control structures](javascript:call_link\('abencontrol_structure_glosry.htm'\) "Glossary Entry").
-   An injection can include local data declarations using the statement [DATA](javascript:call_link\('abapdata.htm'\)). These variables are visible below their declaration in the current injection and all following injections of the current test class. The data objects declared in an injection are not visible outside of injections, that is, neither in other parts of the test class nor in production code. Injections that access data objects declared in a different injection can only be assigned to test seams defined in the production source code below the test seam, that is, the test seam assigned to the declaring injection.
-   An injection can be empty, that is, it is does not contain any statements. The code of the specified test seam is removed when the injection is executed.
-   Injections can access all types and objects that are visible in the location of the specified test seam.
-   In an injection, it is not possible to access types and objects of the test method, in which the injection is defined. These types and objects are visible in the position of the statement TEST-INJECTION, but not in the injection.

The test seam remains replaced by the injection until the test seam encounters a new injection. This means that a test seam can be replaced more than once during a unit test and by different injections. All replacements are canceled at the end of an individual test or test method.

Hints

-   When the test runs, any data objects declared in injections are preserved in their context, even if the declaring injection is replaced by a different injection in its test seam.
-   Apart from DATA, no declarative statements are possible in injections.
-   The injections for a test seam must be defined in the same [compilation unit](javascript:call_link\('abencompilation_unit_glosry.htm'\) "Glossary Entry").
-   Test includes can currently only be created for class pools and function groups, which means that injections can only be created there as well.

Example

The test include of the class CL\_DEMO\_TEST\_SEAMS is an example of a test class with injections:

The test method tests the method CHANGE\_PRICE (see the example for [TEST-SEAM](javascript:call_link\('abaptest-seam.htm'\))). Before the test method is executed, the injection replaces the injection in the setup method of the test seam selection. When the test method is executed,

-   the statements of the test seam modification are removed when replaced by an empty injection and the successful closing of the method is checked,
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
          subrc = 4.
        END-TEST-INJECTION.
        invoke\_and\_assert( -2 ).
        TEST-INJECTION selection.
          subrc = 4.
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
           exp = exp
           act = new\_price  ).
      ENDMETHOD.
    ENDCLASS.
    

Continue
[END-TEST-INJECTION](javascript:call_link\('abapend-test-injection.htm'\))