  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Selection Screens - Create](javascript:call_link\('abenselection_screen_create.htm'\)) → 

SELECTION-SCREEN

Syntax Forms

[Create selection screens](javascript:call_link\('abapselection-screen_definition.htm'\))
1\. SELECTION-SCREEN BEGIN OF SCREEN ...
  ...
  SELECTION-SCREEN END OF SCREEN ...
[Layout of selection screens](javascript:call_link\('abapselection-screen_layout.htm'\))
2\. SELECTION-SCREEN screen\_elements.
[Use elements from other selection screens](javascript:call_link\('abapselection-screen_include.htm'\))
3\. SELECTION-SCREEN INCLUDE ...
[Variants for the selection screens of logical databases (obsolete)](javascript:call_link\('abapselection-screen_ldb.htm'\))
4\. SELECTION-SCREEN ldb\_options.

Effect

The keyword SELECTION-SCREEN introduces statements for creating and changing the layout of [selection screens](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry"). All screen elements and attributes of selection screens that are not determined using [PARAMETERS](javascript:call_link\('abapparameters.htm'\)) (single fields) and [SELECT-OPTIONS](javascript:call_link\('abapselect-options.htm'\)) are defined using SELECTION-SCREEN. These statements can be divided into the above areas and are covered in the corresponding sections.

Continue
[SELECTION-SCREEN, BEGIN OF](javascript:call_link\('abapselection-screen_definition.htm'\))
[SELECTION-SCREEN, screen\_elements](javascript:call_link\('abapselection-screen_layout.htm'\))
[SELECTION-SCREEN INCLUDE](javascript:call_link\('abapselection-screen_include.htm'\))