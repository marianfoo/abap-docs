---
title: "RETRY"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapretry_shortref.htm) Syntax RETRY. Effect This statement exits the CATCH(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcatch_try.htm) handling of a class-based exception(https://help.sap.com/doc/abap
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapretry.htm"
abapFile: "abapretry.htm"
keywords: ["delete", "loop", "do", "if", "try", "catch", "class", "data", "exception-handling", "abapretry"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_exceptions.htm) →  [Class-Based Exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexceptions.htm) →  [TRY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptry.htm) → 

RETRY

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapretry_shortref.htm)

Syntax

RETRY.

Effect

This statement exits the [CATCH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcatch_try.htm) handling of a [class-based exception](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclass_based_exception_glosry.htm "Glossary Entry") and continues processing with the [TRY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptry.htm) statement of the current TRY control structure.

The RETRY statement can only be executed in a CATCH block of a TRY control structure.

Notes

-   The RETRY statement enables a TRY block that raised an exception to be executed again right from the start.
    
-   If the BEFORE UNWIND addition is declared for a CATCH block, exiting using RETRY deletes the context of the exception and creates it again in the TRY block. With respect to the context, therefore, RETRY responds like any exit of a CATCH block (with the exception of [RESUME](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapresume.htm).
    
-   The cause of the exception must be removed either before RETRY in the CATCH block or after RETRY in the TRY block. If a TRY block is repeated and the cause of the exception is not removed, an endless loop results.
    

Example

The following exception handling extends the ABAP-specific handling of a division by zero to dividends not equal to zero, by setting these to the value zero before a second pass.

DATA: number1 TYPE i,
      number2 TYPE i.
cl\_demo\_input=>add\_field( CHANGING field = number1 ).
cl\_demo\_input=>request(   CHANGING field = number2 ).
DATA result  TYPE p DECIMALS 2.
TRY.
    result = number1 / number2.
    cl\_demo\_output=>display( |Result: { result ALIGN = LEFT }| ).
  CATCH cx\_sy\_zerodivide.
    number1 = 0.
    RETRY.
ENDTRY.