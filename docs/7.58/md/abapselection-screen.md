  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Selection Screens - Create](javascript:call_link\('abenselection_screen_create.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECTION-SCREEN%2C%20ABAPSELECTION-SCREEN%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SELECTION-SCREEN

Syntax Forms

[Create Selection Screens](javascript:call_link\('abapselection-screen_definition.htm'\))

1\. SELECTION-SCREEN BEGIN OF SCREEN ...
  ...
  SELECTION-SCREEN END OF SCREEN ...

[Layout of Selection Screens](javascript:call_link\('abapselection-screen_layout.htm'\))

2\. SELECTION-SCREEN screen\_elements.

[Use Elements from Other Selection Screens](javascript:call_link\('abapselection-screen_include.htm'\))

3\. SELECTION-SCREEN INCLUDE ...

[Variants for the Selection Screens of Logical Databases (Obsolete)](javascript:call_link\('abapselection-screen_ldb.htm'\))

4\. SELECTION-SCREEN ldb\_options.

Effect

The keyword SELECTION-SCREEN introduces statements for creating and changing the layout of [selection screens](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry"). All screen elements and properties of selection screens that are not determined using [PARAMETERS](javascript:call_link\('abapparameters.htm'\)) (single fields) and [SELECT-OPTIONS](javascript:call_link\('abapselect-options.htm'\)) are defined using SELECTION-SCREEN. These statements can be divided into the above areas and are covered in the corresponding sections.

Continue
[SELECTION-SCREEN, BEGIN OF](javascript:call_link\('abapselection-screen_definition.htm'\))
[SELECTION-SCREEN, screen\_elements](javascript:call_link\('abapselection-screen_layout.htm'\))
[SELECTION-SCREEN INCLUDE](javascript:call_link\('abapselection-screen_include.htm'\))