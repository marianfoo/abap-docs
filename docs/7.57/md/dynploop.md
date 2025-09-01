  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Statements in the Dynpro Flow Logic](javascript:call_link\('abenabap_dynpros_dynpro_statements.htm'\)) →  [dynpro - Table Controls](javascript:call_link\('abendynp_table_controls.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - LOOP, WITH CONTROL, DYNPLOOP, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0AS
uggestion for improvement:)

dynpro - LOOP, WITH CONTROL

Syntax

LOOP *\[*AT itab *\[*INTO wa*\]* *\[*CURSOR top\_line*\]* *\[*FROM n1*\]* *\[*TO n2*\]**\]*
     WITH CONTROL contrl.
  ...
ENDLOOP.

Variants:

[1\. LOOP WITH CONTROL contrl.](#!ABAP_VARIANT_1@1@)
[2\. LOOP AT itab CURSOR cur *\[*INTO wa*\]*](#!ABAP_VARIANT_2@2@)
       *\[*CURSOR top\_line*\]* *\[*FROM n1*\]* *\[*TO n2*\]*
       WITH CONTROL contrl.

Effect

Definition of a loop in the [dynpro flow logic](javascript:call_link\('abendynpro_flow_logic_glosry.htm'\) "Glossary Entry") linked with a [table control](javascript:call_link\('abentable_control_glosry.htm'\) "Glossary Entry") contrl. The loop sequentially processes the displayed lines of the table control contrl by executing one loop pass for each table control line. contrl expects the name of a table control of the dynpro directly. If the table control does not exist, the loop is ignored. The statement block between LOOP and ENDLOOP can contain the keywords [FIELD](javascript:call_link\('dynpfield.htm'\)), [MODULE](javascript:call_link\('dynpmodule.htm'\)), [CHAIN](javascript:call_link\('dynpchain.htm'\)), and [ENDCHAIN](javascript:call_link\('dynpendchain.htm'\)) from the flow logic. Nesting of loops is not possible. Loops can be executed either with or without reference to an internal table.

If table controls are defined in a dynpro, a loop must be defined for each table control both in the [PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry") processing block and in the [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") processing block.

System Fields

Within the loop pass, the system field sy-stepl contains the number of the current table control line, starting at the top visible line. The system field sy-loopc contains the total number of table control lines displayed on the screen layout.

Hint

The loop is linked with a table control using the addition WITH CONTROL. The statement [LOOP](javascript:call_link\('dynploop_obsolete.htm'\)) without this addition processes standalone [step loops](javascript:call_link\('abenstep_loop_glosry.htm'\) "Glossary Entry") and is obsolete.

Variant 1   

LOOP WITH CONTROL contrl.
  ...
ENDLOOP.

Effect

If the addition AT itab is not specified, the content of the dynpro fields of the current line of the table control contrl is transported in a loop pass from (at event PBO) or to (at event PAI) the identically named data objects in the ABAP program. In PBO processing, the transport is performed at the end of the loop pass and in PAI processing, at the start of the loop pass. The addition WITH CONTROL must be specified both at PBO and PAI.

Hints

-   For dynpro fields of the table control defined with a reference to flat structures in the ABAP Dictionary, the identically named data objects in the ABAP program must be declared in the same way as regular dynpro fields using [TABLES](javascript:call_link\('abaptables.htm'\)); otherwise no data transport takes place.
-   In the loop, dialog modules can be called to process the relevant data objects of the ABAP program. For example, data from an internal table can be read at PBO and written back to the table at PAI, after being processed on the screen.

Variant 2   

LOOP AT itab CURSOR cur *\[*INTO wa*\]*
     *\[*CURSOR top\_line*\]* *\[*FROM n1*\]* *\[*TO n2*\]*
     WITH CONTROL contrl.
  ...
ENDLOOP.

Effect

If the addition AT itab is specified, the internal table itab of the associated ABAP program is processed sequentially in parallel to the loop processing of the table control. For each line of the table control, one line of the internal table is processed. The internal table itab must be an index table. The additions INTO, CURSOR, FROM, TO, and WITH CONTROL can be specified only at PBO and not at PAI. At PAI, the internal table is used to create a reference to the table control.

The addition INTO is used to specify a work area wa to which the current line of the internal table is assigned at PBO at the end of each loop pass. If the addition wa is not specified, an internal table with header line must be used, which is then used implicitly instead of wa. After the assignment, the content of wa or of the header line is transported to the identically named fields in the current line of the table control. The work area wa must be a global data object of the ABAP program that matches the line type of the internal table. At PAI time, only the work area wa or the header line of the internal table is filled with the content of the table control lines at the beginning of each loop pass. The content of the internal table is not modified automatically.

The syntax of the additions CURSOR, FROM, and TO is the same as in the processing of [step loops](javascript:call_link\('dynploop_obsolete.htm'\)). In loops across table controls, additions are possible but not necessary, because the table controls are designed to be controlled by the structure of type cxtab\_control created using [CONTROLS](javascript:call_link\('abapcontrols_tableview.htm'\)) in the ABAP program. Here, top\_line corresponds to component top\_line of this structure while the number of lines to be displayed can be controlled using the component lines instead of n1 and n2. If n1 is still specified for table controls, the content of component current\_line is calculated as follows, differing from the method shown at [CONTROLS](javascript:call_link\('abapcontrols_tableview.htm'\)): sy-stepl + ( top\_line -1 ) + ( n1 - 1 ).

Hints

-   For dynpro fields of the table control defined with a reference to flat structures in the ABAP Dictionary, the identically named data objects in the ABAP program must be declared in the same way as regular dynpro fields using [TABLES](javascript:call_link\('abaptables.htm'\)); otherwise no data transport takes place.
-   Between LOOP and ENDLOOP, no dialog module must be called at PBO to read the data from the internal table. At PAI, however, this is necessary if the transported data is to be evaluated. For example, the internal table can be modified in accordance with the user input.

Example

If a table control FLIGHT\_TAB is defined on the screen of a dynpro, the associated dynpro flow logic may look like this. The loop is executed with reference to the internal table spfli\_tab. At PBO, the loop calls a dialog module prepare\_tab to fill the internal table. In the loop, no dialog module is called at PBO because the table control in this case is filled automatically. At PAI, a dialog module modify\_tab is called in the loop to save the changes the user entered in the table control to the internal table. The associated programming section of the ABAP program is in the example for [CONTROLS](javascript:call_link\('abapcontrols_tableview.htm'\)).

PROCESS BEFORE OUTPUT.
  MODULE prepare\_tab.
  LOOP AT spfli\_tab INTO spfli WITH CONTROL flight\_tab.
  ENDLOOP.
PROCESS AFTER INPUT.
  LOOP AT spfli\_tab.
    MODULE modify\_tab.
  ENDLOOP.

Continue
[dynpro - ENDLOOP](javascript:call_link\('dynpendloop.htm'\))