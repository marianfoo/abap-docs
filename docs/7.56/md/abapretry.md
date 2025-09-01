  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Exception Handling](javascript:call_link\('abenabap_exceptions.htm'\)) →  [Class-Based Exceptions](javascript:call_link\('abenexceptions.htm'\)) →  [TRY](javascript:call_link\('abaptry.htm'\)) → 

RETRY

[Short Reference](javascript:call_link\('abapretry_shortref.htm'\))

Syntax

RETRY.

Effect

This statement exits the [CATCH](javascript:call_link\('abapcatch_try.htm'\)) handling of a [class-based exception](javascript:call_link\('abenclass_based_exception_glosry.htm'\) "Glossary Entry") and continues processing with the [TRY](javascript:call_link\('abaptry.htm'\)) statement of the current TRY control structure.

The RETRY statement can only be executed within a CATCH block of a TRY control structure.

Hints

-   The RETRY statement enables a TRY block that raised an exception to be executed again completely.
-   If the BEFORE UNWIND addition is specified for a CATCH block, exiting using RETRY deletes the context of the exception and recreates it in the TRY block. With respect to the context, therefore, RETRY behaves like any exit of a CATCH block, with the exception of [RESUME](javascript:call_link\('abapresume.htm'\)).
-   The cause of the exception must be removed either before RETRY in the CATCH block or after RETRY in the TRY block. If a TRY block is repeated and the cause of the exception is not removed, an endless loop occurs.

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