  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_shortref.htm) →  C

CALL DIALOG - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_dialog.htm)

Syntax

CALL DIALOG dialog *\[* *{*AND SKIP FIRST SCREEN*}*
                   *|* *{*USING bdc\_tab *\[*MODE mode*\]**}* *\]*
                   *\[*EXPORTING p1 FROM a1 p2 FROM a2 ...*\]*
                   *\[*IMPORTING p1 TO a1 p2 TO a2 ...*\]*.

Effect

Obsolete: Calls the [dialog module](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendialog_module_object_glosry.htm "Glossary Entry") specified in dialog.

Additions

-   AND SKIP FIRST SCREEN
    Suppresses the initial screen.
    
-   USING bdc\_tab *\[*MODE mode*\]*
    Executes the dialog module using a [batch input session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbatch_input_table_glosry.htm "Glossary Entry") in the internal table bdc\_tab. The processing mode can be specified in mode.
    
-   EXPORTING p1 FROM a1 p2 FROM a2 ...
    Passes actual parameters a1, a2, ... to input parameters p1, p2, ...
    
-   IMPORTING p1 TO a1 p2 TO a2 ...
    Passes output parameters p1, p2, ... to actual parameters a1, a2, ...