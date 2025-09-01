---
title: "CONTROLS, TYPE TABSTRIP"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcontrols_shortref.htm) Syntax CONTROLS contrl TYPE TABSTRIP. Effect Declares a tabstrip control(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentabstrip_control_glosry.htm 'Glossary Entry'). I
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcontrols_tabstrip.htm"
abapFile: "abapcontrols_tabstrip.htm"
keywords: ["select", "do", "if", "case", "try", "data", "abapcontrols", "tabstrip"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dynpros.htm) →  [dynpro - ABAP Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dynpros_abap_statements.htm) →  [CONTROLS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcontrols.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CONTROLS%2C%20TYPE%20TABSTRIP%2C%20ABAPCONTROLS_TABSTRIP%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CONTROLS, TYPE TABSTRIP

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcontrols_shortref.htm)

Syntax

CONTROLS contrl TYPE TABSTRIP.

Effect

Declares a [tabstrip control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentabstrip_control_glosry.htm "Glossary Entry"). If the type TABSTRIP is specified in the statement CONTROLS, a [deep structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeep_structure_glosry.htm "Glossary Entry") is created with the name of the [control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencontrol_glosry.htm "Glossary Entry") and the type cx\_tabstrip of the [type pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentype_pool_glosry.htm "Glossary Entry") CXTAB. From this structure, only the component activetab is required in the program.

In [PBO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpbo_glosry.htm "Glossary Entry") processing, the active tabstrip page is specified by assigning the function code of a [tab title](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentab_title_glosry.htm "Glossary Entry") to the component activetab. The first tabstrip page is active by default. When scrolling in the SAP GUI, the tabstrip control can be initialized in this way. When scrolling in an ABAP program, the tabstrip page selected by the user must be activated by this assignment. At the same time, it must be ensured that the required [subscreen](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensubscreen_glosry.htm "Glossary Entry") is included in the [dynpro flow logic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_flow_logic_glosry.htm "Glossary Entry") using the statement [CALL SUBSCREEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/dynpcall.htm).

In [PAI](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpai_glosry.htm "Glossary Entry") processing, the component activetab contains the function code of the active tab title. When scrolling in the SAP GUI, the tabstrip page currently being displayed can be determined in this way.

Hint

The same applies to the inclusion of subscreens of tabstrips using [CALL SUBSCREEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/dynpcall.htm) as to regular subscreens.

Example

If, on a dynpro, a tabstrip control is defined with three untyped tab titles with the function codes TAB1, TAB2, and TAB3 and a subscreen area SUB, scrolling can be programmed in ABAP as follows. In a PBO module prepare\_tabstrip, the component activetab of the structure tab\_strip created using CONTROLS is assigned the function code of the first tab title. After a tab title has been selected, this component is set to the corresponding function code in the PAI module handle\_user\_command. The number of the required [subscreen dynpro](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensubscreen_dynpro_glosry.htm "Glossary Entry") is assigned to the data object dynnr that is used for including the subscreen in the dynpro flow logic. The associated programming of the dynpro flow logic can be seen in the example for [CALL SUBSCREEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/dynpcall.htm).

CONTROLS tab\_strip TYPE TABSTRIP.
DATA: ok\_code      TYPE sy-ucomm,
      dynnr        TYPE sy-dynnr.
...
MODULE prepare\_tabstrip OUTPUT.
  IF tab\_strip-activetab IS INITIAL OR
     dynnr IS INITIAL.
    tab\_strip-activetab = 'TAB1'.
    dynnr = '0110'.
  ENDIF.
ENDMODULE.
MODULE handle\_user\_command INPUT.
  CASE ok\_code.
    WHEN 'TAB1'.
      dynnr = '0110'.
    WHEN 'TAB2'.
      dynnr = '0120'.
    WHEN 'TAB3'.
      dynnr = '0130'.
    ...
  ENDCASE.
  IF ok\_code(3) = 'TAB'.
    tab\_strip-activetab = ok\_code.
  ENDIF.
ENDMODULE.