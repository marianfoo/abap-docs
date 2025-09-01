# ABAP - Keyword Documentation / ABAP - Programming Language / SAP GUI User Dialogs / General Dynpros / dynpro - ABAP Statements / SET HOLD DATA

Included pages: 2


### abapset_hold_data.htm

---
title: "SET HOLD DATA"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_hold_data_shortref.htm) Syntax SET HOLD DATA ONOFF. Effect During PBO(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpbo_glosry.htm 'Glossary Entry') processing, this statement turns the f
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_hold_data.htm"
abapFile: "abapset_hold_data.htm"
keywords: ["select", "delete", "do", "if", "try", "data", "abapset", "hold"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dynpros.htm) →  [dynpro - ABAP Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dynpros_abap_statements.htm) → 

SET HOLD DATA

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_hold_data_shortref.htm)

Syntax

SET HOLD DATA *{*ON*|*OFF*}*.

Effect

During [PBO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpbo_glosry.htm "Glossary Entry") processing, this statement turns the following standard menu items in the GUI status of the [dynpro](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_glosry.htm "Glossary Entry") either on using the addition ON or off using the addition OFF:

-   System → User Profile → Hold Data
    This function saves the entries made by the user in the input fields of the dynpro for the duration of the current user session. Each time the [screen](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenscreen_glosry.htm "Glossary Entry") of the dynpro is displayed, these values are passed to the corresponding input fields as default values. This overwrites the values transported from the ABAP program.
    

-   System → User Profile → Set Data
    This function works like the 'Hold Data' function except that here, the corresponding input fields are no longer ready for input for all subsequent calls of the dynpro.
    

-   System → User Profile → Delete Data
    This function deletes all saved data and makes the input fields that were locked using 'Set Data' ready for input again for all subsequent calls of the dynpro.
    

Each time PBO processing starts, the setting made in the static properties of the dynpro under Hold Data is configured so that execution of SET HOLD DATA during [PAI](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpai_glosry.htm "Glossary Entry") processing does not have an effect on the display of the subsequent screen.

Hint

The menu items above can be selected in every GUI status but only take effect when they are activated in the static properties of the dynpro using Hold Data or the statement SET HOLD DATA.

Continue
![Example](exa.gif "Example") [dynpro - Holding Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_hold_data_abexa.htm)


### abendynpro_hold_data_abexa.htm

---
title: "Source Code"
description: |
  REPORT demo_dynpro_set_hold_data. DATA field(10) TYPE c. CALL SCREEN 100. field = 'XXXXXXXXXX'. CALL SCREEN 100. MODULE hold_data OUTPUT. SET HOLD DATA ON. ENDMODULE. Description The static next dynpro of dynpro 100 is 0. It contains a single input/output field field. The dynpro flow logic is:
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_hold_data_abexa.htm"
abapFile: "abendynpro_hold_data_abexa.htm"
keywords: ["delete", "do", "if", "try", "data", "abendynpro", "hold", "abexa"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dynpros.htm) →  [dynpro - ABAP Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dynpros_abap_statements.htm) →  [SET HOLD DATA](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_hold_data.htm) → 

dynpro - Holding Data

This example demonstrates how to hold input data across transactions.

Source Code

REPORT demo\_dynpro\_set\_hold\_data.
DATA field(10) TYPE c.
CALL SCREEN 100.
field = 'XXXXXXXXXX'.
CALL SCREEN 100.
MODULE hold\_data OUTPUT.
  SET HOLD DATA ON.
ENDMODULE.

Description

The static next dynpro of dynpro 100 is 0. It contains a single input/output field field. The dynpro flow logic is:

PROCESS BEFORE OUTPUT.
  MODULE hold\_data.
PROCESS AFTER INPUT.

In the PBO event of the dynpro, the Hold Data attribute is activated regardless of the static default. If, after entering a value, the user chooses System → User Profile → Hold Data or Set Data, the value is displayed again when the dynpro is called a second time and whenever the program is subsequently called (in the same [ABAP session](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_session_glosry.htm "Glossary Entry")) unless the user chooses Delete Data. This overwrites any value assigned to the field field in the ABAP program.
