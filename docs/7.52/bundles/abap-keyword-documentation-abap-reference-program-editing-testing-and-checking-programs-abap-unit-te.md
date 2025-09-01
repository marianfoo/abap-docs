# ABAP - Keyword Documentation / ABAP - Reference / program editing / Testing and Checking Programs / ABAP Unit / Test Seams

Included pages: 7


### abentest_seams.htm

---
title: "Test Seams"
description: |
  Test seams are language constructs designed especially for unit tests(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunit_test_glosry.htm 'Glossary Entry') and are implemented using the following statements: -   TEST-SEAM - END-TEST-SEAM(https://help.sap.com/doc/abapdocu_752_inde
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentest_seams.htm"
abapFile: "abentest_seams.htm"
keywords: ["select", "do", "while", "if", "try", "method", "class", "data", "abentest", "seams"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [program editing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_tests.htm) →  [ABAP Unit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_unit.htm) → 

Test Seams

Test seams are language constructs designed especially for [unit tests](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunit_test_glosry.htm "Glossary Entry") and are implemented using the following statements:

-   [TEST-SEAM - END-TEST-SEAM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptest-seam.htm)

Defines a test seam as a replaceable area in the production code of a program.

-   [TEST-INJECTION - END-TEST-INJECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptest-injection.htm)

Replaces the executable statements of a test seam by the statements of an injection in a [test class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentest_class_glosry.htm "Glossary Entry") of the same program.

Test seams have the following properties:

-   Test seams are ignored in production use of programs.

-   A program can contain more than one test seam.

-   Multiple injections can be defined for a single test seam.

-   Injections can only be created in test classes that are defined in a [test include](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentest_include_glosry.htm "Glossary Entry"). Test seams can be used in all executable units of a master program that includes a test include, includingt local classes and subroutines.

-   Unit tests can make injections while [test methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentest_method_glosry.htm "Glossary Entry") or the setup method are being executed.

-   If injections are repeated in the same test seam, the last injection is the active injection.

Note

Test seams are a simple way of replacing or expanding source code in production parts of a program for test purposes. If, for example, the behavior of certain statements prevents tests from running, the unit test can replace them with suitable alternatives. Typical scenarios are:

-   Authorization checks

-   Reading persistent data

-   Modifying persistent data

-   Creating test doubles

Example for authorization checks

An injection can use the statement [AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapauthority-check.htm) to bypass the dependency of a unit test on the authorizations of the current user by setting a suitable return code.

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
[TEST-SEAM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptest-seam.htm)
[TEST-INJECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptest-injection.htm)


### abaptest-seam.htm

---
title: "TEST-SEAM"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptest-seam_shortref.htm) Syntax TEST-SEAM seam. statement_block END-TEST-SEAM. Effect The statement SEAM introduces a test seam(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentest_seam_glosry.h
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptest-seam.htm"
abapFile: "abaptest-seam.htm"
keywords: ["select", "insert", "do", "if", "try", "method", "class", "data", "abaptest", "seam"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [program editing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_tests.htm) →  [ABAP Unit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_unit.htm) →  [Test Seams](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentest_seams.htm) → 

TEST-SEAM

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptest-seam_shortref.htm)

Syntax

TEST-SEAM seam.
  *\[*statement\_block*\]*
END-TEST-SEAM.

Effect

The statement SEAM introduces a [test seam](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentest_seam_glosry.htm "Glossary Entry") called seam which is closed by END-TEST-SEAM. A [test class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentest_class_glosry.htm "Glossary Entry") of the current program can use the statement [TEST-INJECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptest-injection.htm) to replace the statement block statement\_block using an [injection](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninjection_glosry.htm "Glossary Entry") defined there. If no injection is performed for the test seam, the original code is executed.

Test seams have the following properties:

-   Multiple test seams can be defined in a single [compilation unit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencompilation_unit_glosry.htm "Glossary Entry"), but each must have a unique name.
    
-   The general [naming conventions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennaming_conventions.htm) apply to the name seam.
    
-   Test seams cannot be nested, which means that a test seam cannot contain further test seams.
    
-   A test seam cannot extend beyond the limits of a [statement block](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstatement_block_glosry.htm "Glossary Entry"), but can contain closed [control structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencontrol_structure_glosry.htm "Glossary Entry").
    
-   A test seam can include data declarations. These declarations are not replaced when an injection is performed and remain visible in their context.
    
-   Test seams can be defined in the [global declaration part](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenglobal_declaration_sect_glosry.htm "Glossary Entry") of a program but not in the [declaration part](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclaration_section_glosry.htm "Glossary Entry") of a class.
    
-   A test seam can be empty (that is, it does not contain any statements). An injection is inserted instead.
    
-   Test seams cannot be defined in test classes.
    

Note

[Injections](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninjection_glosry.htm "Glossary Entry") can only be created in test classes that are defined in a [test include](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentest_include_glosry.htm "Glossary Entry") of the current program. Test includes are currently only possible in [class pools](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_pool_glosry.htm "Glossary Entry") and [function groups](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunction_group_glosry.htm "Glossary Entry"). This means that test seams are only feasible in class pools and function groups.

Example

Here, the class CL\_DEMO\_TEST\_SEAMS is an example of production code. The method CHANGE\_PRICE multiplies the price of a flight in the database table SFLIGHT by a factor and (if successful) returns the modified price. If a database access fails, a specific invalid value is returned instead of the price.

Test seams are defined for both database accesses. This makes it possible to run a unit test without accessing real data. See the example for [TEST-INJECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptest-injection.htm).

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
[END-TEST-SEAM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapend-test-seam.htm)


### abapend-test-seam.htm

---
title: "END-TEST-SEAM"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptest-seam_shortref.htm) Syntax END-TEST-SEAM. Effect The statement END-TEST-SEAM closes a test seam introduced using TEST-SEAM(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptest-seam.htm).
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapend-test-seam.htm"
abapFile: "abapend-test-seam.htm"
keywords: ["do", "abapend", "test", "seam"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [program editing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_tests.htm) →  [ABAP Unit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_unit.htm) →  [Test Seams](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentest_seams.htm) →  [TEST-SEAM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptest-seam.htm) → 

END-TEST-SEAM

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptest-seam_shortref.htm)

Syntax

END-TEST-SEAM.

Effect

The statement END-TEST-SEAM closes a test seam introduced using [TEST-SEAM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptest-seam.htm).


### abaptest-seam.htm

---
title: "TEST-SEAM"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptest-seam_shortref.htm) Syntax TEST-SEAM seam. statement_block END-TEST-SEAM. Effect The statement SEAM introduces a test seam(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentest_seam_glosry.h
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptest-seam.htm"
abapFile: "abaptest-seam.htm"
keywords: ["select", "insert", "do", "if", "try", "method", "class", "data", "abaptest", "seam"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [program editing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_tests.htm) →  [ABAP Unit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_unit.htm) →  [Test Seams](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentest_seams.htm) → 

TEST-SEAM

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptest-seam_shortref.htm)

Syntax

TEST-SEAM seam.
  *\[*statement\_block*\]*
END-TEST-SEAM.

Effect

The statement SEAM introduces a [test seam](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentest_seam_glosry.htm "Glossary Entry") called seam which is closed by END-TEST-SEAM. A [test class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentest_class_glosry.htm "Glossary Entry") of the current program can use the statement [TEST-INJECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptest-injection.htm) to replace the statement block statement\_block using an [injection](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninjection_glosry.htm "Glossary Entry") defined there. If no injection is performed for the test seam, the original code is executed.

Test seams have the following properties:

-   Multiple test seams can be defined in a single [compilation unit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencompilation_unit_glosry.htm "Glossary Entry"), but each must have a unique name.
    
-   The general [naming conventions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennaming_conventions.htm) apply to the name seam.
    
-   Test seams cannot be nested, which means that a test seam cannot contain further test seams.
    
-   A test seam cannot extend beyond the limits of a [statement block](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstatement_block_glosry.htm "Glossary Entry"), but can contain closed [control structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencontrol_structure_glosry.htm "Glossary Entry").
    
-   A test seam can include data declarations. These declarations are not replaced when an injection is performed and remain visible in their context.
    
-   Test seams can be defined in the [global declaration part](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenglobal_declaration_sect_glosry.htm "Glossary Entry") of a program but not in the [declaration part](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclaration_section_glosry.htm "Glossary Entry") of a class.
    
-   A test seam can be empty (that is, it does not contain any statements). An injection is inserted instead.
    
-   Test seams cannot be defined in test classes.
    

Note

[Injections](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninjection_glosry.htm "Glossary Entry") can only be created in test classes that are defined in a [test include](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentest_include_glosry.htm "Glossary Entry") of the current program. Test includes are currently only possible in [class pools](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_pool_glosry.htm "Glossary Entry") and [function groups](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunction_group_glosry.htm "Glossary Entry"). This means that test seams are only feasible in class pools and function groups.

Example

Here, the class CL\_DEMO\_TEST\_SEAMS is an example of production code. The method CHANGE\_PRICE multiplies the price of a flight in the database table SFLIGHT by a factor and (if successful) returns the modified price. If a database access fails, a specific invalid value is returned instead of the price.

Test seams are defined for both database accesses. This makes it possible to run a unit test without accessing real data. See the example for [TEST-INJECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptest-injection.htm).

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
[END-TEST-SEAM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapend-test-seam.htm)


### abaptest-injection.htm

---
title: "TEST-INJECTION"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptest-injection_shortref.htm) Syntax TEST-INJECTION seam. statement_block END-TEST-INJECTION. Effect The statement TEST-INJECTION introduces an injection(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptest-injection.htm"
abapFile: "abaptest-injection.htm"
keywords: ["select", "do", "while", "if", "try", "method", "class", "data", "types", "abaptest", "injection"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [program editing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_tests.htm) →  [ABAP Unit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_unit.htm) →  [Test Seams](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentest_seams.htm) → 

TEST-INJECTION

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptest-injection_shortref.htm)

Syntax

TEST-INJECTION seam.
  *\[*statement\_block*\]*
END-TEST-INJECTION.

Effect

The statement TEST-INJECTION introduces an [injection](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninjection_glosry.htm "Glossary Entry") for a [test seam](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentest_seam_glosry.htm "Glossary Entry") seam, closed using END-TEST-INJECTION. The test seam seam must be defined in the production code of the current program using the statement [TEST-SEAM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptest-seam.htm). When a unit test is performed, the statement block statement\_block of the injection replaces the statement block of the test seam seam in production code.

An injection can only be defined in those methods of test classes created in a [test include](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentest_include_glosry.htm "Glossary Entry"). Injections have the following properties:

-   Injections can be made only while a test method or the setup method is being executed.
    
-   Injections cannot be nested, which means that an injection cannot contain further injections.
    
-   An injection cannot extend beyond the limits of a [statement block](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstatement_block_glosry.htm "Glossary Entry"), but can contain closed [control structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencontrol_structure_glosry.htm "Glossary Entry").
    
-   An injection can include local data declarations using the statement [DATA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata.htm). These variables are visible below their declaration in the current injection and all following injections of the current test class. The data objects declared in an injection are not visible outside of injections (in other parts of the test class or in production code). Injections that access data objects declared in a different injection can only be assigned to test seams defined in the production source code below the test seam (meaning the test seam assigned to the declaring injection).
    
-   An injection can be empty (that is, it is does not contain any statements). The code of the specified test seam is removed when the injection is executed.
    
-   Injections can access all types and objects that are visible in the location of the specified test seam.
    
-   In an injection, it is not possible to access types and objects of the test method, which the injection is defined in. These types and objects are placed in the location of the statement TEST-INJECTION, but are not visible in the injection.
    

The test seam remains replaced by the injection until the test seam encounters a new injection. This means that a test seam can be replaced more than once during a unit test and by different injections. All replacements are canceled at the end of a individual test or test method.

Notes

-   When the test runs, any data objects declared in injections are preserved in their context, even if the declaring injection is replaced by a different injection in its test seam.
    
-   Apart from DATA, no declarative statements are possible in injections.
    
-   Test includes can currently only be created for class pools and functions groups; this means that injections can only be created there as well.
    

Example

The [test include](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentest_include_glosry.htm "Glossary Entry") of the class CL\_DEMO\_TEST\_SEAMS is an example of a test class with injections:

The test method tests the method CHANGE\_PRICE (see the example for [TEST-SEAM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptest-seam.htm)). Before the test method runs, the injection replaces the injection in the setup method of the test seam selection. When the test method runs,

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
[END-TEST-INJECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapend-test-injection.htm)


### abapend-test-injection.htm

---
title: "END-TEST-INJECTION"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptest-injection_shortref.htm) Syntax END-TEST-INJECTION. Effect The statement END-TEST-INJECTION closes a test injection that was initiated using TEST-INJECTION(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-U
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapend-test-injection.htm"
abapFile: "abapend-test-injection.htm"
keywords: ["do", "abapend", "test", "injection"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [program editing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_tests.htm) →  [ABAP Unit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_unit.htm) →  [Test Seams](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentest_seams.htm) →  [TEST-INJECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptest-injection.htm) → 

END-TEST-INJECTION

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptest-injection_shortref.htm)

Syntax

END-TEST-INJECTION.

Effect

The statement END-TEST-INJECTION closes a test injection that was initiated using [TEST-INJECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptest-injection.htm).


### abaptest-injection.htm

---
title: "TEST-INJECTION"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptest-injection_shortref.htm) Syntax TEST-INJECTION seam. statement_block END-TEST-INJECTION. Effect The statement TEST-INJECTION introduces an injection(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptest-injection.htm"
abapFile: "abaptest-injection.htm"
keywords: ["select", "do", "while", "if", "try", "method", "class", "data", "types", "abaptest", "injection"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [program editing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_tests.htm) →  [ABAP Unit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_unit.htm) →  [Test Seams](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentest_seams.htm) → 

TEST-INJECTION

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptest-injection_shortref.htm)

Syntax

TEST-INJECTION seam.
  *\[*statement\_block*\]*
END-TEST-INJECTION.

Effect

The statement TEST-INJECTION introduces an [injection](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninjection_glosry.htm "Glossary Entry") for a [test seam](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentest_seam_glosry.htm "Glossary Entry") seam, closed using END-TEST-INJECTION. The test seam seam must be defined in the production code of the current program using the statement [TEST-SEAM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptest-seam.htm). When a unit test is performed, the statement block statement\_block of the injection replaces the statement block of the test seam seam in production code.

An injection can only be defined in those methods of test classes created in a [test include](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentest_include_glosry.htm "Glossary Entry"). Injections have the following properties:

-   Injections can be made only while a test method or the setup method is being executed.
    
-   Injections cannot be nested, which means that an injection cannot contain further injections.
    
-   An injection cannot extend beyond the limits of a [statement block](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstatement_block_glosry.htm "Glossary Entry"), but can contain closed [control structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencontrol_structure_glosry.htm "Glossary Entry").
    
-   An injection can include local data declarations using the statement [DATA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata.htm). These variables are visible below their declaration in the current injection and all following injections of the current test class. The data objects declared in an injection are not visible outside of injections (in other parts of the test class or in production code). Injections that access data objects declared in a different injection can only be assigned to test seams defined in the production source code below the test seam (meaning the test seam assigned to the declaring injection).
    
-   An injection can be empty (that is, it is does not contain any statements). The code of the specified test seam is removed when the injection is executed.
    
-   Injections can access all types and objects that are visible in the location of the specified test seam.
    
-   In an injection, it is not possible to access types and objects of the test method, which the injection is defined in. These types and objects are placed in the location of the statement TEST-INJECTION, but are not visible in the injection.
    

The test seam remains replaced by the injection until the test seam encounters a new injection. This means that a test seam can be replaced more than once during a unit test and by different injections. All replacements are canceled at the end of a individual test or test method.

Notes

-   When the test runs, any data objects declared in injections are preserved in their context, even if the declaring injection is replaced by a different injection in its test seam.
    
-   Apart from DATA, no declarative statements are possible in injections.
    
-   Test includes can currently only be created for class pools and functions groups; this means that injections can only be created there as well.
    

Example

The [test include](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentest_include_glosry.htm "Glossary Entry") of the class CL\_DEMO\_TEST\_SEAMS is an example of a test class with injections:

The test method tests the method CHANGE\_PRICE (see the example for [TEST-SEAM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptest-seam.htm)). Before the test method runs, the injection replaces the injection in the setup method of the test seam selection. When the test method runs,

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
[END-TEST-INJECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapend-test-injection.htm)
