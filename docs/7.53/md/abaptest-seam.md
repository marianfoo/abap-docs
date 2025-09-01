---
title: "TEST-SEAM"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptest-seam_shortref.htm) Syntax TEST-SEAM seam. statement_block END-TEST-SEAM. Effect The statement SEAM introduces a test seam(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentest_seam_glosry.h
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptest-seam.htm"
abapFile: "abaptest-seam.htm"
keywords: ["select", "insert", "do", "if", "try", "method", "class", "data", "abaptest", "seam"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Editing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_tests.htm) →  [ABAP Unit](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_unit.htm) →  [Test Seams](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentest_seams.htm) → 

TEST-SEAM

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptest-seam_shortref.htm)

Syntax

TEST-SEAM seam.
  *\[*statement\_block*\]*
END-TEST-SEAM.

Effect

The statement SEAM introduces a [test seam](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentest_seam_glosry.htm "Glossary Entry") called seam which is closed by END-TEST-SEAM. A [test class](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentest_class_glosry.htm "Glossary Entry") of the current program can use the statement [TEST-INJECTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptest-injection.htm) to replace the statement block statement\_block using an [injection](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninjection_glosry.htm "Glossary Entry") defined there. If no injection is performed for the test seam, the original code is executed.

Test seams have the following properties:

-   Multiple test seams can be defined in a single [compilation unit](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencompilation_unit_glosry.htm "Glossary Entry"), but each must have a unique name.
    
-   The general [naming conventions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennaming_conventions.htm) apply to the name seam.
    
-   Test seams cannot be nested, which means that a test seam cannot contain further test seams.
    
-   A test seam cannot extend beyond the limits of a [statement block](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstatement_block_glosry.htm "Glossary Entry"), but can contain closed [control structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencontrol_structure_glosry.htm "Glossary Entry").
    
-   A test seam can include data declarations. These declarations are not replaced when an injection is performed and remain visible in their context.
    
-   Test seams can be defined in the [global declaration part](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenglobal_declaration_sect_glosry.htm "Glossary Entry") of a program but not in the [declaration part](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclaration_section_glosry.htm "Glossary Entry") of a class.
    
-   A test seam can be empty (that is, it does not contain any statements). An injection is inserted instead.
    
-   Test seams cannot be defined in test classes.
    

Note

[Injections](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninjection_glosry.htm "Glossary Entry") can only be created in test classes that are defined in a [test include](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentest_include_glosry.htm "Glossary Entry") of the current program. Test includes are currently only possible in [class pools](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_pool_glosry.htm "Glossary Entry") and [function groups](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunction_group_glosry.htm "Glossary Entry"). This means that test seams are only feasible in class pools and function groups.

Example

Here, the class CL\_DEMO\_TEST\_SEAMS is an example of production code. The method CHANGE\_PRICE multiplies the price of a flight in the database table SFLIGHT by a factor and (if successful) returns the modified price. If a database access fails, a specific invalid value is returned instead of the price.

Test seams are defined for both database accesses. This makes it possible to run a unit test without accessing real data. See the example for [TEST-INJECTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptest-injection.htm).

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
[END-TEST-SEAM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapend-test-seam.htm)