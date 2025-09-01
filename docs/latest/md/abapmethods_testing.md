---
title: "METHODS, FOR TESTING"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_testing_shortref.htm) Syntax METHODS(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods.htm) meth ABSTRACTFINAL(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_testing.htm"
abapFile: "abapmethods_testing.htm"
keywords: ["do", "if", "case", "try", "method", "class", "data", "abapmethods", "testing"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Maintenance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_tests.htm) →  [ABAP Unit](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_unit.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20METHODS%2C%20FOR%20TESTING%2C%20ABAPMETHODS_TESTING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

METHODS, FOR TESTING

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_testing_shortref.htm)

Syntax

[METHODS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods.htm) meth *\[*[ABSTRACT*|*FINAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_abstract_final.htm)*\]*
             *\[*[AMDP OPTIONS *\[*READ-ONLY*\]* *\[*CDS SESSION CLIENT clnt*|*CURRENT*\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_amdp_options.htm)*\]*
  FOR TESTING
  *\[*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*\]*.

Effect

This statement is only possible in a [test class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentest_class_glosry.htm "Glossary Entry"). It declares a [test method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentest_method_glosry.htm "Glossary Entry") that is called as a single test during a [test run](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentest_run_glosry.htm "Glossary Entry"). A test can be programmed in the method implementation. To check the test assumptions, static methods from the class CL\_ABAP\_UNIT\_ASSERT are used, such as:

-   ASSERT\_EQUALS
-   ASSERT\_BOUND
-   ASSERT\_NOT\_BOUND
-   ASSERT\_INITIAL
-   ASSERT\_NOT\_INITIAL
-   ASSERT\_SUBRC
-   FAIL

The data is evaluated using the [ABAP Unit](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_unit_glosry.htm "Glossary Entry") Framework.

The same applies to the additions ABSTRACT, FINAL, and RAISING as to the [general instance methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm). Furthermore, the addition [AMDP OPTIONS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_amdp_options.htm) can be specified for test methods, since these methods can also be implemented as [AMDP methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_method_glosry.htm "Glossary Entry").

Test methods are usually used to call units of production code and to check the result. Production code units that are called from a test method must be exited [regularly](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenend_processing_blocks.htm) or by a dedicated statement like [RETURN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapreturn.htm). The statements [LEAVE PROGRAM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapleave_program.htm) [LEAVE TO TRANSACTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapleave_to_transaction.htm) and [SUBMIT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsubmit.htm) without AND RETURN that exit the complete program are not allowed in production code called during a unit test.

Hints

-   Test methods should be private or protected if the methods are inherited. Since test classes implicitly offer friendship to the test driver in the runtime framework, the driver can call them. Test methods only need to be public in rare cases where a test executes tests from other test classes.
-   When a test method is executed, the same applies to [resumable exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenresumable_exception_glosry.htm "Glossary Entry") as to all other methods. If processing can be resumed successfully, the interrupted test can be resumed.
-   The special methods setup, teardown, class\_setup, and class\_teardown of the [fixture](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfixture_glosry.htm "Glossary Entry") are not test methods and the addition FOR TESTING cannot be used for this methods.
-   The special [ABAP Doc comment](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_doc_comment_glosry.htm "Glossary Entry") ["! @testing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentest_relations.htm) can be written in front of the declaration of a test method in order to define a [test relation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentest_relation_glosry.htm "Glossary Entry") for that method. This allows repository objects to be tested that do not support test classes themselves.
-   To prevent inaccurate test results, the [rule](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuse_actual_parameters_guidl.htm "Guideline") that no system fields are passed as actual parameters must be observed, especially for the ASSERT methods of the class CL\_ABAP\_UNIT\_ASSERT. The special method ASSERT\_SUBRC is only used for checking the return value.

Example

Definition of a test class mytest with a test method mytest that checks the value of the text attribute after the method set\_text\_to\_x of the class myclass has been called. In this example, the ABAP Unit test reports an error since the value X is expected instead of U.

\* Production classes
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