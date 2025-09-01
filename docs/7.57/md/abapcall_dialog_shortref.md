  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  C

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CALL DIALOG, ABAPCALL_DIALOG_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0AS
uggestion for improvement:)

CALL DIALOG - Short Reference

[Reference](javascript:call_link\('abapcall_dialog.htm'\))

Syntax

CALL DIALOG dialog *\[* *{*AND SKIP FIRST SCREEN*}*
                   *|* *{*USING bdc\_tab *\[*MODE mode*\]**}* *\]*
                   *\[*EXPORTING p1 FROM a1 p2 FROM a2 ...*\]*
                   *\[*IMPORTING p1 TO a1 p2 TO a2 ...*\]*.

Effect

Obsolete: Calls the [dialog module](javascript:call_link\('abendialog_module_object_glosry.htm'\) "Glossary Entry") specified in dialog.

Additions   

-   AND SKIP FIRST SCREEN
    Suppresses the initial dynpro.
-   USING bdc\_tab *\[*MODE mode*\]*
    Executes the dialog module using a [batch input session](javascript:call_link\('abenbatch_input_table_glosry.htm'\) "Glossary Entry") in the internal table bdc\_tab. The processing mode can be specified in mode.
-   EXPORTING p1 FROM a1 p2 FROM a2 ...
    Passes actual parameters a1, a2, ... to input parameters p1, p2, ...
-   IMPORTING p1 TO a1 p2 TO a2 ...
    Passes output parameters p1, p2, ... to actual parameters a1, a2, ...