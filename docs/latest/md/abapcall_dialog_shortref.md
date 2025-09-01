  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_shortref.htm) →  C

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CALL%20DIALOG%2C%20ABAPCALL_DIALOG_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CALL DIALOG - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_dialog.htm)

Syntax

CALL DIALOG dialog *\[* *{*AND SKIP FIRST SCREEN*}*
                   *|* *{*USING bdc\_tab *\[*MODE mode*\]**}* *\]*
                   *\[*EXPORTING p1 FROM a1 p2 FROM a2 ...*\]*
                   *\[*IMPORTING p1 TO a1 p2 TO a2 ...*\]*.

Effect

Obsolete: Calls the [dialog module](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendialog_module_object_glosry.htm "Glossary Entry") specified in dialog.

Additions   

-   AND SKIP FIRST SCREEN
    Suppresses the initial dynpro.
-   USING bdc\_tab *\[*MODE mode*\]*
    Executes the dialog module using a [batch input session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbatch_input_table_glosry.htm "Glossary Entry") in the internal table bdc\_tab. The processing mode can be specified in mode.
-   EXPORTING p1 FROM a1 p2 FROM a2 ...
    Passes actual parameters a1, a2, ... to input parameters p1, p2, ...
-   IMPORTING p1 TO a1 p2 TO a2 ...
    Passes output parameters p1, p2, ... to actual parameters a1, a2, ...