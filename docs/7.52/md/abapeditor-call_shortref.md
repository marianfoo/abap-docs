  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  E

EDITOR-CALL - Quick reference

[Reference](javascript:call_link\('abapeditor-call_for_report.htm'\))

Syntax

EDITOR-CALL FOR *{* *{*REPORT prog *\[*DISPLAY-MODE*\]**}*
                *|* *{*itab *\[*TITLE title*\]*
                        *\[**{*DISPLAY-MODE*}**|**{*BACKUP INTO jtab*}**\]**}* *}*.

Effect

Obsolete: Calls ABAP Editor for a [program](javascript:call_link\('abapeditor-call_for_report.htm'\)) prog or a text editor for text in an [internal table](javascript:call_link\('abapeditor-call_for_itab.htm'\)) itab.

Additions

-   [DISPLAY-MODE](javascript:call_link\('abapeditor-call_for_report.htm'\))
    Opens the editor in display mode
    
-   [TITLE title](javascript:call_link\('abapeditor-call_for_itab.htm'\))
    Displays the title title in the title bar of the text editor.
    
-   [BACKUP INTO jtab](javascript:call_link\('abapeditor-call_for_itab.htm'\))
    Assigns the content of itab to the table jtab before opening the editor.