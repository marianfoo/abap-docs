  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Selection Screens - Create](javascript:call_link\('abenselection_screen_create.htm'\)) →  [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SELECTION-SCREEN, BEGIN OF, ABAPSELECTION-SCREEN_DEFINITION, 757%0D%0A%0D%0AError:%0D
%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

SELECTION-SCREEN, BEGIN OF

[Short Reference](javascript:call_link\('abapselection-screen_bos_shortref.htm'\))

Syntax Forms

[Selection screens as regular dynpros](javascript:call_link\('abapselection-screen_normal.htm'\))
1\. SELECTION-SCREEN BEGIN OF SCREEN dynnr *\[*TITLE title*\]*
                                         *\[*AS WINDOW*\]*.
  ...
  SELECTION-SCREEN END OF SCREEN dynnr.
[Selection screens as subscreen dynpros](javascript:call_link\('abapselection-screen_subscreen.htm'\))
2\. SELECTION-SCREEN BEGIN OF SCREEN dynnr AS SUBSCREEN
                                        *\[*NO INTERVALS*\]*
                                        *\[*NESTING LEVEL n*\]*.
  ...
  SELECTION-SCREEN END OF SCREEN dynnr.

Effect

These variants of the statement SELECTION-SCREEN create selection screens. Selection screens can be created as regular [dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") or as [subscreen dynpros](javascript:call_link\('abensubscreen_dynpro_glosry.htm'\) "Glossary Entry").

The [standard selection screen](javascript:call_link\('abapselection-screen_standard.htm'\)) for executable programs is created automatically.

Continue
[SELECTION-SCREEN, SCREEN](javascript:call_link\('abapselection-screen_normal.htm'\))
[SELECTION-SCREEN, AS SUBSCREEN](javascript:call_link\('abapselection-screen_subscreen.htm'\))
[SELECTION-SCREEN, Standard Selection Screens](javascript:call_link\('abapselection-screen_standard.htm'\))