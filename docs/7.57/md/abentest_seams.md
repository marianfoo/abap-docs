---
title: "Test Seams"
description: |
  Test seams are language constructs designed especially for unit tests(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunit_test_glosry.htm 'Glossary Entry') and are implemented using the following statements: -   TEST-SEAM - END-TEST-SEAM(https://help.sap.com/doc/abapdocu_757_inde
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentest_seams.htm"
abapFile: "abentest_seams.htm"
keywords: ["select", "do", "while", "if", "try", "method", "class", "data", "abentest", "seams"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Maintenance](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_tests.htm) →  [ABAP Unit](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_unit.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Test Seams, ABENTEST_SEAMS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion f
or improvement:)

Test Seams

Test seams are language constructs designed especially for [unit tests](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunit_test_glosry.htm "Glossary Entry") and are implemented using the following statements:

-   [TEST-SEAM - END-TEST-SEAM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptest-seam.htm)
    
    Defines a test seam as a replaceable area in the production code of a program.
    
-   [TEST-INJECTION - END-TEST-INJECTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptest-injection.htm)
    
    Replaces the executable statements of a test seam with the statements of an injection in a [test class](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentest_class_glosry.htm "Glossary Entry") of the same program.
    

Test seams have the following properties:

-   Test seams do not affect the use of programs in production. No injection takes place, rather the original code is executed.
-   A program can contain multiple test seams.
-   Multiple injections can be defined for a single test seam.
-   Injections can only be created in test classes that are defined in a [test include](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentest_include_glosry.htm "Glossary Entry"). Test seams can be used in all executable units of a master program that includes a test include, including methods of local classes and subroutines.
-   Unit tests can make injections while [test methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentest_method_glosry.htm "Glossary Entry") or the setup method are being executed.
-   If injections are repeated in the same test seam, the last injection is performed as an active injection.

Hints

-   Test seams are a simple way of replacing or expanding source code in the production parts of a program for test purposes. If, for example, the behavior of certain statements prevents tests from running, the unit test can replace them with suitable alternatives. Typical scenarios are:
    -   Authorization checks
    -   Reading persistent data
    -   Modifying persistent data
    -   Creating test doubles
-   Test seams are intended mainly for use with legacy code that, due to insufficient [separation of concerns](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenseperation_concerns_guidl.htm "Guideline"), is not suitable for unit tests. New programs, on the other hand, should be modularized in such a way that test seams are made unnecessary.

Example for Authorization Checks

An injection can replace the statement [AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapauthority-check.htm) to bypass the dependency of a unit test on the authorizations of the current user by setting a suitable return code.

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

Example for Reading Persistent Data

It is often not possible to make assumptions about the content of database tables or other repositories in unit tests. Test seams enable unit tests to bypass the dependencies of persistent data by replacing it with self-constructed data.

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

Example for Changing Persistent Data

The execution of unit tests must not modify content of database tables or other repositories used in production. Using test seams, unit tests can record the operands of modifying database operations or compare them with expected changes instead of actual changes. In the following source code section compares, the injection compares the change values with a public static attribute.

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

Example for a Test Double

In the following source code section, the production source code of a class that depends on database content is instantiated. The unit test injects the instantiated test double instead of the production object.

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
[TEST-SEAM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptest-seam.htm)
[TEST-INJECTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptest-injection.htm)