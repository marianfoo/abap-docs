---
title: "System Fields"
description: |
  An ABAP program can request the state of the ABAP runtime framework using the system fields(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensystem_fields.htm). From a technical viewpoint, these system fields are a set of built-in variables (the components of the built-in sy structur
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensystem_fields_gdl.htm"
abapFile: "abensystem_fields_gdl.htm"
keywords: ["do", "case", "data", "abensystem", "fields", "gdl"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrobust_abap_gdl.htm) → 

System Fields

An ABAP program can request the state of the ABAP runtime framework using the [system fields](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensystem_fields.htm). From a technical viewpoint, these system fields are a set of built-in variables (the components of the built-in sy structure with the data type SYST from ABAP Dictionary) that always exist when the program is running.

The system field sy-repid is an exception. This field indicates the name of the program currently running. In this case, we are dealing with a built-in constant and not a component of the built-in sy structure.

-   [Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensyst_field_access_guidl.htm "Guideline")
-   [Obsolete and internal system fields](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenobs_intern_system_field_guidl.htm "Guideline")
-   [Evaluation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenevaluation_guidl.htm "Guideline")
-   [Return code](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenreturn_code_guidl.htm "Guideline")
-   [Use as actual parameter](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenuse_actual_parameters_guidl.htm "Guideline")
-   [Using system fields on the user interface](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenuse_ui_guidl.htm "Guideline")
-   [Use in operand positions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenuse_operand_position_guidl.htm "Guideline")

Continue
[Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensyst_field_access_guidl.htm)
[Obsolete and Internal System Fields](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenobs_intern_system_field_guidl.htm)
[Evaluation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenevaluation_guidl.htm)
[Return Code](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenreturn_code_guidl.htm)
[Using System Fields as Actual Parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenuse_actual_parameters_guidl.htm)
[Using System Fields on the User Interface](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenuse_ui_guidl.htm)
[Using Elements in Operand Positions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenuse_operand_position_guidl.htm)