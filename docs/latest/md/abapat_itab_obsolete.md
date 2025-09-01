  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Internal Table Processing](javascript:call_link\('abenitab_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20AT%20field_symbol%2C%20ABAPAT_ITAB_OBSOLETE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

AT field\_symbol

Obsolete Syntax

[AT](javascript:call_link\('abapat_itab.htm'\)) *{*NEW*}**|**{*END OF*}* <fsi>.

Effect

If the additions INTO wa or ASSIGNING <fs> are used in the statement [LOOP](javascript:call_link\('abaploop_at_itab.htm'\)), a field symbol <fsi> can be specified after [AT *{*NEW*}**|**{*END OF*}*](javascript:call_link\('abapat_itab.htm'\)), outside of classes. The associated component of the work area wa or the field symbol <fs> is assigned to this field symbol.

Hint

This form of specifying components dynamically has been replaced by [(name)](javascript:call_link\('abenitab_components.htm'\)).

Bad Example

name = 'WA-COL1'.
ASSIGN (name) TO <comp>.
LOOP AT itab INTO wa.
  AT NEW <comp>.
    ...
  ENDAT.
ENDLOOP.

Good Example

name = 'COL1'.
LOOP AT itab INTO wa.
  AT NEW (name).
    ...
  ENDAT.
ENDLOOP.