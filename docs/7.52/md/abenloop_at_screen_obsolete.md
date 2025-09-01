  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete User Dialogs](javascript:call_link\('abengui_obsolete.htm'\)) →  [Obsolete ABAP Statements for Dynpros](javascript:call_link\('abenabap_dynpro_obsolet.htm'\)) → 

LOOP AT SCREEN - Short Form

Obsolete Syntax

LOOP AT SCREEN.
  ...
ENDLOOP.

Effect

This is a short form of the statement

[LOOP AT SCREEN INTO screen.](javascript:call_link\('abaploop_at_screen.htm'\))
  ...
[ENDLOOP.](javascript:call_link\('abaploop_at_screen.htm'\))

The short form uses a structure with the name screen implicitly instead of an explicitly declared work area wa. This is either the obsolete predefined structure [screen](javascript:call_link\('abenscreen_structure_obsolete.htm'\)) or a structure declared in the current context called screen, which must have the data type SCREEN.

Notes

-   Use the [long form](javascript:call_link\('abaploop_at_screen.htm'\)) with an explicitly declared work area instead of the short form.

-   The short form of the statement LOOP AT SCREEN behaves like the statement [LOOP](javascript:call_link\('abaploop_at_itab.htm'\)) in a loop across an internal table with a [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry"), where the predefined structure is used as the header line.