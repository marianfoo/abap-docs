  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [program editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Testing and Checking Programs](javascript:call_link\('abenabap_tests.htm'\)) →  [ABAP Unit](javascript:call_link\('abenabap_unit.htm'\)) → 

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

-   Injections can only be created in test classes that are defined in a [test include](javascript:call_link\('abentest_include_glosry.htm'\) "Glossary Entry"). Test seams can be used in all executable units of a master program that includes a test include, includingt local classes and subroutines.

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