---
title: "TEST-INJECTION"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptest-injection_shortref.htm) Syntax TEST-INJECTION seam. statement_block END-TEST-INJECTION. Effect The statement TEST-INJECTION introduces an injection(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptest-injection.htm"
abapFile: "abaptest-injection.htm"
keywords: ["select", "do", "while", "if", "try", "method", "class", "data", "types", "abaptest", "injection"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [program editing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_tests.htm) →  [ABAP Unit](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_unit.htm) →  [Test Seams](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentest_seams.htm) → 

TEST-INJECTION

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptest-injection_shortref.htm)

Syntax

TEST-INJECTION seam.
  *\[*statement\_block*\]*
END-TEST-INJECTION.

Effect

The statement TEST-INJECTION introduces an [injection](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninjection_glosry.htm "Glossary Entry") for a [test seam](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentest_seam_glosry.htm "Glossary Entry") seam, closed using END-TEST-INJECTION. The test seam seam must be defined in the production code of the current program using the statement [TEST-SEAM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptest-seam.htm). When a unit test is performed, the statement block statement\_block of the injection replaces the statement block of the test seam seam in production code.

An injection can only be defined in those methods of test classes created in a [test include](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentest_include_glosry.htm "Glossary Entry"). Injections have the following properties:

-   Injections can be made only while a test method or the setup method is being executed.
    
-   Injections cannot be nested, which means that an injection cannot contain further injections.
    
-   An injection cannot extend beyond the limits of a [statement block](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstatement_block_glosry.htm "Glossary Entry"), but can contain closed [control structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencontrol_structure_glosry.htm "Glossary Entry").
    
-   An injection can include local data declarations using the statement [DATA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdata.htm). These variables are visible below their declaration in the current injection and all following injections of the current test class. The data objects declared in an injection are not visible outside of injections (in other parts of the test class or in production code). Injections that access data objects declared in a different injection can only be assigned to test seams defined in the production source code below the test seam (meaning the test seam assigned to the declaring injection).
    
-   An injection can be empty (that is, it is does not contain any statements). The code of the specified test seam is removed when the injection is executed.
    
-   Injections can access all types and objects that are visible in the location of the specified test seam.
    
-   In an injection, it is not possible to access types and objects of the test method, which the injection is defined in. These types and objects are placed in the location of the statement TEST-INJECTION, but are not visible in the injection.
    

The test seam remains replaced by the injection until the test seam encounters a new injection. This means that a test seam can be replaced more than once during a unit test and by different injections. All replacements are canceled at the end of a individual test or test method.

Notes

-   When the test runs, any data objects declared in injections are preserved in their context, even if the declaring injection is replaced by a different injection in its test seam.
    
-   Apart from DATA, no declarative statements are possible in injections.
    
-   Test includes can currently only be created for class pools and functions groups; this means that injections can only be created there as well.
    

Example

The [test include](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentest_include_glosry.htm "Glossary Entry") of the class CL\_DEMO\_TEST\_SEAMS is an example of a test class with injections:

The test method tests the method CHANGE\_PRICE (see the example for [TEST-SEAM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptest-seam.htm)). Before the test method runs, the injection replaces the injection in the setup method of the test seam selection. When the test method runs,

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
[END-TEST-INJECTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapend-test-injection.htm)