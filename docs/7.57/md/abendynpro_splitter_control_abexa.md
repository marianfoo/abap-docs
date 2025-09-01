  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Statements in the Dynpro Flow Logic](javascript:call_link\('abenabap_dynpros_dynpro_statements.htm'\)) →  [dynpro - Subscreens, Tabstrips, and Splitter Controls](javascript:call_link\('abendynp_subscreens.htm'\)) →  [dynpro - Examples of Subscreens, Tabstrips, and Splitter Controls](javascript:call_link\('abentab_strip_control_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Splitter Control, ABENDYNPRO_SPLITTER_CONTROL_ABEXA, 757%0D%0A%0D%0AError:%0
D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

dynpro - Splitter Control

This example demonstrates a [splitter control](javascript:call_link\('abensplitter_control_glosry.htm'\) "Glossary Entry").

Source Code   

REPORT demo\_dynpro\_splitter\_control.
DATA splitter TYPE REF TO cl\_dynpro\_splitter.
START-OF-SELECTION.
  CREATE OBJECT splitter
    EXPORTING
      splitter\_name = 'SPLITTER'.
  CALL SCREEN 100.
MODULE set\_status OUTPUT.
  SET PF-STATUS 'SCREEN\_100'.
ENDMODULE.
MODULE set\_sash OUTPUT.
  splitter->set\_sash( ).
ENDMODULE.
MODULE cancel.
  LEAVE PROGRAM.
ENDMODULE.
MODULE get\_sash INPUT.
  splitter->get\_guisash( ).
ENDMODULE.

Description   

A subscreen is assigned to both parts of the splitter control. The subscreens are called in the dynpro flow logic.