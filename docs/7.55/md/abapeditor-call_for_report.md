  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete User Dialogs](javascript:call_link\('abengui_obsolete.htm'\)) →  [Obsolete Editor Calls](javascript:call_link\('abentexteditor.htm'\)) → 

EDITOR-CALL FOR REPORT

[Short Reference](javascript:call_link\('abapeditor-call_shortref.htm'\))

Obsolete Syntax

EDITOR-CALL FOR REPORT prog *\[*DISPLAY-MODE*\]*.

Addition:

[... DISPLAY-MODE](#!ABAP_ONE_ADD@1@)

Effect

This statement starts ABAP Editor for the source code of the program specified in prog. prog has to be a character-like data object, which contains the name of a program in uppercase letters that exists in the [repository](javascript:call_link\('abenrepository_glosry.htm'\) "Glossary Entry"). If not, a message is displayed in the status line.

Once ABAP Editor is started, it offers the full range of functions (as when called in ABAP Workbench or the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry")). Forward navigation to other tools is also possible. After returning from ABAP Editor, the current program continues after the statement EDITOR-CALL.

Hints

-   If an inactive version of the program exists, then this version is loaded.

-   This statement bypasses the authorization checks triggered when using a transaction code to call ABAP Editor, however the editor still checks the development authorization of the user in question.

-   The statement EDITOR-CALL FOR REPORT calls the function module EDITOR\_PROGRAM internally for the specified program prog, which starts the editor in the current environment (SAP GUI or Eclipse), including the required authorization checks.

-   Do not use this method of calling ABAP Editor any longer. Instead, use official ABAP Workbench interfaces, such as the function module RS\_TOOL\_ACCESS. If only the properties of the editor control are needed, the GUI class CL\_GUI\_SOURCEEDIT or its subclass CL\_GUI\_ABAPEDIT is used.
    

Addition

... DISPLAY-MODE

Effect

In the default setting, the ABAP Editor is started in change mode. The addition DISPLAY-MODE causes ABAP Editor to start in display mode.

Hint

ABAP Editor is started in display mode but can be switched to change mode.