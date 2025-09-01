  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and exiting program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Programs](javascript:call_link\('abenabap_program_call.htm'\)) →  [Calling Transactions](javascript:call_link\('abenabap_call_transaction.htm'\)) →  [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)) → 

CALL TRANSACTION, standard

[Short Reference](javascript:call_link\('abapcall_transaction_shortref.htm'\))

Syntax

CALL TRANSACTION ta [WITH*|*WITHOUT AUTHORITY-CHECK](javascript:call_link\('abapcall_transaction_authority.htm'\)) *\[*AND SKIP FIRST SCREEN*\]*.

Addition:

[... AND SKIP FIRST SCREEN](#!ABAP_ONE_ADD@1@)

Effect

This variant calls the version specified in ta as described under the statement [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)). The additions [WITH*|*WITHOUT AUTHORITY-CHECK](javascript:call_link\('abapcall_transaction_authority.htm'\)) are used to control the authorization check. AND SKIP FIRST SCREEN can be used to suppress the initial screen.

Hint

This variant does not set the system field sy-subrc.

Addition

... AND SKIP FIRST SCREEN

Effect

This addition can be used to suppress the display of a [screen](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") of the initial dynpro of a called dialog transaction. The addition AND SKIP FIRST SCREEN suppresses the first screen only under the following prerequisites:

-   For the initial dynpro, its own dynpro number must not be entered as the static next dynpro in [Screen Painter](javascript:call_link\('abenscreen_painter_glosry.htm'\) "Glossary Entry").

-   All mandatory input fields of the initial dynpro must be filled completely and with the correct values by the [SPA/GPA parameters](javascript:call_link\('abenspa_gpa_parameter_glosry.htm'\) "Glossary Entry").

If these prerequisites are met, the screen of the dynpro is displayed that is specified in the Screen Painter as the [next dynpro](javascript:call_link\('abennext_dynpro_glosry.htm'\) "Glossary Entry") of the initial dynpro.

Example

If the static next dynpro of the initial dynpro of the called dialog transaction FLIGHT\_TA is not the initial dynpro itself, its screen is suppressed because its input fields are filled using the SPA/GPA parameters CAR and CON.

DATA: carrid TYPE spfli-carrid,
      connid TYPE spfli-connid.
...
SET PARAMETER ID: 'CAR' FIELD carrid,
                  'CON' FIELD connid.
TRY.
    CALL TRANSACTION 'FLIGHT\_TA' WITH AUTHORITY-CHECK
                                 AND SKIP FIRST SCREEN.
    CATCH cx\_sy\_authorization\_error.
      RETURN.
ENDTRY.

Continue
[CALL TRANSACTION, AUTHORITY-CHECK](javascript:call_link\('abapcall_transaction_authority.htm'\))