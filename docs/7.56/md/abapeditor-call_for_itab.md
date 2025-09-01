  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete User Dialogs](javascript:call_link\('abengui_obsolete.htm'\)) →  [Obsolete Editor Calls](javascript:call_link\('abentexteditor.htm'\)) → 

EDITOR-CALL FOR itab

[Short Reference](javascript:call_link\('abapeditor-call_shortref.htm'\))

Obsolete Syntax

EDITOR-CALL FOR itab *\[*TITLE title*\]*
                     *\[**{*DISPLAY-MODE*}**|**{*BACKUP INTO jtab*}**\]*.

Additions:

[1\. ... TITLE title](#!ABAP_ADDITION_1@1@)
[2\. ... DISPLAY-MODE](#!ABAP_ADDITION_2@2@)
[3\. ... BACKUP INTO jtab](#!ABAP_ADDITION_3@3@)

Effect

This statement passes the content of the internal table itab to a text editor and starts this text editor. The internal table must be a [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") without [secondary table keys](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") with a character-like line type.

The text editor is based on a GUI control displayed in the current GUI window and has its own GUI status, part of which matches that of the ABAP Editor. The text editor has, depending its settings, a line width of 255 or 72 characters. This setting can be made in the GUI status and also applies to the ABAP Editor.

The content of the table lines is converted line by line in accordance with the [conversion rules for elementary data types](javascript:call_link\('abenconversion_elementary.htm'\)) into a field of the type c with length 255 or 72 and passed to the text editor. If the text editor is exited using the function Save, the previous content of the table is deleted and the content of each line of the editor is appended to the internal table from top to bottom. If necessary, this process involves a conversion of the type c of length 255 or 72 to the line type of the internal table.

Return Code

sy-subrc

Meaning

0

The text editor was exited using the Save function after the content was modified.

2

The text editor was exited using the Save function and no content was modified.

4

The text editor was not exited using the Save function.

Hint

This statement is replaced by using the [Control Framework](javascript:call_link\('abencontrol_framework_glosry.htm'\) "Glossary Entry"). Here, the class CL\_GUI\_TEXTEDIT wraps the corresponding [GUI control](javascript:call_link\('abengui_control_glosry.htm'\) "Glossary Entry").

Addition 1   

... TITLE title

Effect

A character-like data object title can be specified after the addition TITLE. The first 50 characters of title are displayed in the header of the text editor.

Addition 2   

... DISPLAY-MODE

Effect

If the addition DISPLAY-MODE is specified, the text editor is started in display mode.

Hint

The text editor is started in display mode but can be switched to change mode using a key combination.

Addition 3   

... BACKUP INTO jtab

Effect

If the addition BACKUP INTO is specified, the content of the internal table itab is assigned to an internal table jtab before the text editor is called. jtab can have any table category. The line types must be [compatible](javascript:call_link\('abencompatible_glosry.htm'\) "Glossary Entry") or [convertible](javascript:call_link\('abenconvertible_glosry.htm'\) "Glossary Entry").

Example

Calls a text editor for a table with text lines. The processing in the IF control structure is only executed if the content of the table was actually modified. sy-subrc = 0 does not necessarily indicate this.

TYPES text TYPE c LENGTH 255.
DATA: text\_tab TYPE TABLE OF text,
      back\_tab LIKE text\_tab.
EDITOR-CALL FOR text\_tab BACKUP INTO back\_tab.
IF sy-subrc = 0 AND
   text\_tab <> back\_tab.
  ...
ENDIF.