  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_program_call.htm) →  [Calling Transactions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_call_transaction.htm) →  [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_transaction.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CALL%20TRANSACTION%2C%20standard%2C%20ABAPCALL_TRANSACTION_STANDARD%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CALL TRANSACTION, standard

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_transaction_shortref.htm)

Syntax

CALL TRANSACTION ta [WITH*|*WITHOUT AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_transaction_authority.htm) *\[*AND SKIP FIRST SCREEN*\]*.

Addition:

[... AND SKIP FIRST SCREEN](#!ABAP_ONE_ADD@1@)

Effect

This variant calls the version specified in ta as described under the statement [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_transaction.htm). The additions [WITH*|*WITHOUT AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_transaction_authority.htm) are used to control the authorization check. AND SKIP FIRST SCREEN can be used to suppress the initial screen.

Hint

This variant does not set the system field sy-subrc.

Addition   

... AND SKIP FIRST SCREEN

Effect

This addition can be used to suppress the display of a [screen layout](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenscreen_glosry.htm "Glossary Entry") of the initial dynpro of a called dialog transaction. The addition AND SKIP FIRST SCREEN suppresses the first screen only under the following prerequisites:

-   For the initial dynpro, its own dynpro number must not be entered as the static next dynpro in [Screen Painter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenscreen_painter_glosry.htm "Glossary Entry").
-   All mandatory input fields of the initial dynpro must be filled completely and with the correct values by the [SPA/GPA parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenspa_gpa_parameter_glosry.htm "Glossary Entry").

If these prerequisites are met, the screen of the dynpro is displayed that is specified in the Screen Painter as the [next dynpro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennext_dynpro_glosry.htm "Glossary Entry") of the initial dynpro.

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
[CALL TRANSACTION, AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_transaction_authority.htm)