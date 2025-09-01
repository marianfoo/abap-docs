  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Selection Screens - Create](javascript:call_link\('abenselection_screen_create.htm'\)) →  [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECTION-SCREEN%2C%20BEGIN%20OF%2C%20ABAPSELECTION-SCREEN_DEFINITION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SELECTION-SCREEN, BEGIN OF

[Short Reference](javascript:call_link\('abapselection-screen_bos_shortref.htm'\))

Syntax Forms

[Selection Screens as Regular Dynpros](javascript:call_link\('abapselection-screen_normal.htm'\))

1\. SELECTION-SCREEN BEGIN OF SCREEN dynnr *\[*TITLE title*\]*
                                         *\[*AS WINDOW*\]*.
  ...
  SELECTION-SCREEN END OF SCREEN dynnr.

[Selection Screens as Subscreen Dynpros](javascript:call_link\('abapselection-screen_subscreen.htm'\))

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