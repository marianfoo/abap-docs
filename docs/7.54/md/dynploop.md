  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpros.htm) →  [Statements in the Dynpro Flow Logic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpros_dynpro_statements.htm) →  [Table Controls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynp_table_controls.htm) → 

LOOP - WITH CONTROL

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

Definition of a loop in the [dynpro flow logic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_flow_logic_glosry.htm "Glossary Entry") associated with a [table control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_control_glosry.htm "Glossary Entry") contrl. The loop sequentially processes the visible rows of the table control contrl by executing one loop pass for reach table control row. contrl expects the name of a table control of the dynpro. If the table control does not exist, the loop is ignored. The statement block between LOOP and ENDLOOP can contain the keywords [FIELD](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/dynpfield.htm), [MODULE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/dynpmodule.htm), [CHAIN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/dynpchain.htm), and [ENDCHAIN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/dynpendchain.htm) from the flow logic. Nesting of loops is not possible. Loops can be executed either with or without reference to an internal table.

If table controls are defined in a dynpro, one loop must be defined for each table control both in the [PBO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpbo_glosry.htm "Glossary Entry") processing block and in the [PAI](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpai_glosry.htm "Glossary Entry") processing block.

System Fields

Within the loop pass, the system field sy-stepl contains the number of the current table control row, starting at the top visible row. The system field sy-loopc contains the total number of table control rows displayed on the screen.

Note

The loop is associated with a table control using the addition WITH CONTROL. The statement [LOOP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/dynploop_obsolete.htm) without this addition processes standalone [step loops](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstep_loop_glosry.htm "Glossary Entry") and is obsolete.

Variant 1

LOOP WITH CONTROL contrl.
  ...
ENDLOOP.

Effect

If the addition AT itab is not specified, the content of the dynpro fields of the current row of the table control contrl is transported in a loop pass from (at event PBO) or to (at event PAI) the data objects with the same names in the ABAP program. In PBO processing, the transport is performed at the end of the loop pass and in PAI processing, at the start of the loop pass. The addition WITH CONTROL must be specified both at PBO and PAI.

Notes

-   For dynpro fields of the table control defined with a reference to flat structures in ABAP Dictionary, the data objects with the same names in the ABAP program must be declared in the same way as regular dynpro fields using [TABLES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptables.htm); otherwise no data transport takes place.
    
-   In the loop, dialog modules can be called to process the relevant data objects of the ABAP program. For example, data from an internal table can be read at PBO and written back to the table at PAI, after being processed on the screen.
    

Variant 2

LOOP AT itab CURSOR cur *\[*INTO wa*\]*
     *\[*CURSOR top\_line*\]* *\[*FROM n1*\]* *\[*TO n2*\]*
     WITH CONTROL contrl.
  ...
ENDLOOP.

Effect

If the addition AT itab is specified, the internal table itab of the associated ABAP program is processed sequentially in parallel to the loop processing of the table control. For each row of the table control, one row of the internal table is processed. The internal table itab must be an index table. The additions INTO, CURSOR, FROM, TO, and WITH CONTROL can be specified only at PBO and not at PAI. At PAI, the internal table is used to create a reference to the table control.

The addition INTO is used to specify a work area wa to which the current row of the internal table is assigned at PBO at the end of each loop pass. If the addition wa is not specified, an internal table with header line must be used, which is then used implicitly instead of wa. After the assignment, the content of wa or of the header line is transported to fields with the same names in the current row of the table control. The work area wa must be a global data object of the ABAP program that matches the row type of the internal table. At PAI time, only the work area wa or the header line of the internal table is filled with the content of the table control rows at the beginning of each loop pass. The content of the internal table is not modified automatically.

The syntax of the additions CURSOR, FROM, and TO is the same as in the processing of [step loops](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/dynploop_obsolete.htm). In loops across table controls, additions are possible but not necessary, because the table controls are designed to be controlled by the structure of type CXTAB\_CONTROL created using [CONTROLS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcontrols_tableview.htm) in the ABAP program. Here, top\_line of component TOP\_LINE corresponds to this structure while the number of rows to be displayed can be controlled using the component LINES instead of n1 and n2. If n1 is still specified for table controls, the content of component CURRENT\_LINE is calculated as follows, differing from the method shown at [CONTROLS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcontrols_tableview.htm): sy-stepl\+ (TOP\_LINE - 1) + (n1 - 1).

Notes

-   For dynpro fields of the table control defined with a reference to flat structures in ABAP Dictionary, the data objects with the same names in the ABAP program must be declared in the same way as regular dynpro fields using [TABLES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptables.htm); otherwise no data transport takes place.
    
-   Between LOOP and ENDLOOP, no dialog module must be called at PBO to read the data from the internal table. At PAI, however, this is necessary provided the transported data needs to be evaluated. For example, the internal table can be modified in accordance with the user entries.
    

Example

If a table control FLIGHT\_TAB is defined on the screen of a dynpro, the associated dynpro flow logic may look like this. The loop is executed with reference to the internal table spfli\_tab. At PBO, the loop calls a dialog module prepare\_tab to fill the internal table. In the loop, no dialog module is called at PBO, because the table control in this case is filled automatically. At PAI, a dialog module modify\_tab is called in the loop to save the changes the user entered in the table control to the internal table. The associated programming section of the ABAP program is in the example for [CONTROLS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcontrols_tableview.htm).

PROCESS BEFORE OUTPUT.
  MODULE prepare\_tab.
  LOOP AT spfli\_tab INTO spfli WITH CONTROL flight\_tab.
  ENDLOOP.
PROCESS AFTER INPUT.
  LOOP AT spfli\_tab.
    MODULE modify\_tab.
  ENDLOOP.

Continue
[ENDLOOP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/dynpendloop.htm)