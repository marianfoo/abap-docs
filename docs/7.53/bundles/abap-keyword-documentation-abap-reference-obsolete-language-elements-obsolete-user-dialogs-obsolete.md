# ABAP Keyword Documentation / ABAP − Reference / Obsolete Language Elements / Obsolete User Dialogs / Obsolete Editor Calls

Included pages: 3



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.53](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abentexteditor.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentexteditor.htm)
- [abapeditor-call_for_itab.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapeditor-call_for_itab.htm)
- [abapeditor-call_for_report.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapeditor-call_for_report.htm)

**Bundle Contains**: 3 documentation pages
**Version**: ABAP 7.53
**Generated**: 2025-09-01T11:25:46.201Z

---

### abentexteditor.htm

> **📖 Official SAP Documentation**: [abentexteditor.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentexteditor.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete User Dialogs](javascript:call_link\('abengui_obsolete.htm'\)) → 

Obsolete Editor Calls

The following statements affect calls of editors integrated into [GUI windows](javascript:call_link\('abengui_window_glosry.htm'\) "Glossary Entry").

-   [EDITOR-CALL FOR itab.](javascript:call_link\('abapeditor-call_for_itab.htm'\))

-   [EDITOR-CALL FOR REPORT](javascript:call_link\('abapeditor-call_for_report.htm'\))

Continue
[EDITOR-CALL FOR itab](javascript:call_link\('abapeditor-call_for_itab.htm'\))
[EDITOR-CALL FOR REPORT](javascript:call_link\('abapeditor-call_for_report.htm'\))



**📖 Source**: [abentexteditor.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentexteditor.htm)

### abapeditor-call_for_itab.htm

> **📖 Official SAP Documentation**: [abapeditor-call_for_itab.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapeditor-call_for_itab.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete User Dialogs](javascript:call_link\('abengui_obsolete.htm'\)) →  [Obsolete Editor Calls](javascript:call_link\('abentexteditor.htm'\)) → 

EDITOR-CALL FOR itab

[Quick Reference](javascript:call_link\('abapeditor-call_shortref.htm'\))

Obsolete Syntax

EDITOR-CALL FOR itab *\[*TITLE title*\]*
                     *\[**{*DISPLAY-MODE*}**|**{*BACKUP INTO jtab*}**\]*.

Extras:

[1\. ... TITLE title](#!ABAP_ADDITION_1@1@)
[2\. ... DISPLAY-MODE](#!ABAP_ADDITION_2@2@)
[3\. ... BACKUP INTO jtab](#!ABAP_ADDITION_3@3@)

Effect

This statement passes the content of the internal table itab to a text editor and starts this text editor. The internal table has to be a [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") without [secondary table keys](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") with a character-like row type.

The text editor is based on a GUI control displayed in the current GUI window and has its own GUI status, part of which is the same as in ABAP Editor. The text editor has, depending its configuration, a line width of 255 or 72 characters. This setting can be made in the GUI status and also applies to ABAP Editor.

The content of the table rows is converted row by row in accordance with the [conversion rules for elementary data types](javascript:call_link\('abenconversion_elementary.htm'\)) into a field of the type c with length 255 or 72 and passed to the text editor. If the text editor is exited using the function Save, the previous content of the table is deleted and the content of each row of the editor is appended (from top to bottom) to the internal table. If necessary, this process involves a conversion of the type c of length 255 or 72 to the row type of the internal table.

Return Value

sy-subrc

Meaning

0

The text editor was exited using the Save function after the content was modified.

2

The text editor was exited using the Save function and no content was modified.

4

The text editor was not exited using the Save function.

Note

This statement is replaced when using [Control Framework](javascript:call_link\('abencontrol_framework_glosry.htm'\) "Glossary Entry"). Here, the class CL\_GUI\_TEXTEDIT wraps the corresponding [GUI control](javascript:call_link\('abengui_control_glosry.htm'\) "Glossary Entry").

Addition 1

... TITLE title

Effect

A character-like data object title can be specified after the addition TITLE. The first 50 characters of title are displayed in the header of the text editor.

Addition 2

... DISPLAY-MODE

Effect

If the addition DISPLAY-MODE is specified, the text editor is started in display mode.

Note

The text editor is started in display mode but can be toggled to change mode using a key combination.

Addition 3

... BACKUP INTO jtab

Effect

If the addition BACKUP INTO is specified, the content of the internal table itab is assigned to an internal table jtab before the text editor is called. jtab can have any table category. The row types have to be [compatible](javascript:call_link\('abencompatible_glosry.htm'\) "Glossary Entry") or [convertible](javascript:call_link\('abenconvertible_glosry.htm'\) "Glossary Entry").

Example

Calls a text editor for a table with text rows. The processing in the IF control structure is only executed if the content of the table was actually modified; sy-subrc = 0 does not necessarily indicate this.

TYPES text   TYPE c LENGTH 255.
DATA: text\_tab TYPE TABLE OF text,
      back\_tab LIKE text\_tab.
EDITOR-CALL FOR text\_tab BACKUP INTO back\_tab.
IF sy-subrc = 0 AND
   text\_tab <> back\_tab.
  ...
ENDIF.



**📖 Source**: [abapeditor-call_for_itab.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapeditor-call_for_itab.htm)

### abapeditor-call_for_report.htm

> **📖 Official SAP Documentation**: [abapeditor-call_for_report.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapeditor-call_for_report.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abapeditor-call_for_report.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapeditor-call_for_report.htm)


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete User Dialogs](javascript:call_link\('abengui_obsolete.htm'\)) →  [Obsolete Editor Calls](javascript:call_link\('abentexteditor.htm'\)) → 

EDITOR-CALL FOR REPORT

[Quick Reference](javascript:call_link\('abapeditor-call_shortref.htm'\))

Obsolete Syntax

EDITOR-CALL FOR REPORT prog *\[*DISPLAY-MODE*\]*.

Addition:

[... DISPLAY-MODE](#!ABAP_ONE_ADD@1@)

Effect

This statement starts the ABAP editor for the source text of the program specified in prog. prog has to be a character-type data object, which contains the name of a program in capital letters that exists in the [Repository](javascript:call_link\('abenrepository_glosry.htm'\) "Glossary Entry"). If not, a message is displayed in the status line.

Once ABAP Editor is started, it offers the full range of functions (as when called in ABAP Workbench or the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry")). You can navigate forward to branch to other tools. After returning from ABAP Editor, the current program continues after the statement EDITOR-CALL.

Notes

-   If an inactive version of the program exists, then this version is loaded.
    
-   This statement bypasses the authorization checks triggered when using a transaction code to call ABAP Editor, however the editor still checks the development authorization of the user in question.
    
-   The statement EDITOR-CALL FOR REPORT calls the function module EDITOR\_PROGRAM internally for the specified program prog, which starts the editor in the current environment (SAP GUI or Eclipse), including the required authorization checks.
    
-   Do not use this method of calling ABAP Editor any longer. Instead, use official ABAP Workbench interfaces, such as the function module RS\_TOOL\_ACCESS. If only the properties of the editor control are needed, the GUI class CL\_GUI\_SOURCEEDIT or its subclass CL\_GUI\_ABAPEDIT is used.
    

Addition

... DISPLAY-MODE

Effect

In the default setting, the ABAP editor is started in change mode. The addition DISPLAY-MODE causes ABAP Editor to start in display mode.

Note

ABAP Editor is started in display mode but can be switched to change mode.
