---
title: "REFRESH CONTROL"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaprefresh_control_shortref.htm) Syntax REFRESH CONTROL contrl FROM SCREEN dynnr. Effect This statement initializes the attributes of a table control(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_c
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaprefresh_control.htm"
abapFile: "abaprefresh_control.htm"
keywords: ["do", "if", "try", "data", "abaprefresh", "control"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpros.htm) →  [ABAP Statements for Dynpros](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpros_abap_statements.htm) → 

REFRESH CONTROL

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaprefresh_control_shortref.htm)

Syntax

REFRESH CONTROL contrl FROM SCREEN dynnr.

Effect

This statement initializes the attributes of a [table control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_control_glosry.htm "Glossary Entry") by assigning values to certain components of the corresponding structure contrl. For contrl, a structure must be specified that was created using the statement [CONTROLS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcontrols_tableview.htm) for a [table control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_control_glosry.htm "Glossary Entry"). The values are taken from the definition of the table control with the same name. Their [dynpro](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_glosry.htm "Glossary Entry") is specified in dynnr. The values of the components are set. These are the components for which the [start values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstart_value_glosry.htm "Glossary Entry") are taken from the definition of a table control (see description of the structure CXTAB\_CONTROL in [CONTROLS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcontrols_tableview.htm)). dynnr expects a data object of the type n of length 4. It must contain the number of a dynpro on which a table control name contrl is defined.