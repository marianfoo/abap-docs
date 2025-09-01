  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  E

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: EDITOR-CALL, ABAPEDITOR-CALL_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0AS
uggestion for improvement:)

EDITOR-CALL - Short Reference

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