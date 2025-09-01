  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [program editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Testing and Checking Programs](javascript:call_link\('abenabap_tests.htm'\)) →  [ABAP Unit](javascript:call_link\('abenabap_unit.htm'\)) → 

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
    
-   FAIL
    

The data is evaluated using the [ABAP Unit](javascript:call_link\('abenabap_unit_glosry.htm'\) "Glossary Entry") Framework.

The same applies to the additions ABSTRACT, FINAL, and RAISING as to the [general instance methods](javascript:call_link\('abapmethods_general.htm'\)). Furthermore, the addition [AMDP OPTIONS](javascript:call_link\('abapmethods_amdp_options.htm'\)) can be specified for test methods, since these methods can also be implemented as [AMDP methods](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry").

Notes

-   Test methods should be private, or protected if the methods are inherited. Since test classes implicitly offer friendship to the test driver in the runtime environment, the driver can call them. Test methods only need to be public in rare cases where a test executes tests from other test classes.
    
-   At present, all instance methods in global test classes are automatically test methods, that is the addition FOR TESTING is added implicitly.
    
-   When a test method is executed, the same applies to [resumable exceptions](javascript:call_link\('abenresumable_exception_glosry.htm'\) "Glossary Entry") as to all other methods. If processing can be resumed successfully, the interrupted test can be resumed.
    
-   The special methods setup, teardown, class\_setup, and class\_teardown of the [fixture](javascript:call_link\('abenfixture_glosry.htm'\) "Glossary Entry") are not test methods and the addition FOR TESTING cannot be used for this methods.
    

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