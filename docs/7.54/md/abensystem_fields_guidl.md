---
title: "System Fields"
description: |
  An ABAP program can request the status of the ABAP runtime environment using the system fields(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm). From a technical viewpoint, these system fields are a set of predefined variables - the components of the predefined sy
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields_guidl.htm"
abapFile: "abensystem_fields_guidl.htm"
keywords: ["do", "while", "case", "data", "abensystem", "fields", "guidl"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrobust_abap_guidl.htm) → 

System Fields

An ABAP program can request the status of the ABAP runtime environment using the [system fields](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm). From a technical viewpoint, these system fields are a set of predefined variables - the components of the predefined sy structure of data type SYST from the ABAP Dictionary - that are always available while the program is running.

The system field sy-repid is an exception. This field indicates the name of the program currently running. In this case, we are dealing with a predefined constant and not a component of the predefined sy structure.

-   [Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensyst_field_access_guidl.htm "Guideline")

-   [Obsolete and internal system fields](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobs_intern_system_field_guidl.htm "Guideline")

-   [Evaluation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenevaluation_guidl.htm "Guideline")

-   [Return value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreturn_value_guidl.htm "Guideline")

-   [Use as current parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuse_actual_parameters_guidl.htm "Guideline")

-   [Using system fields on the user interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuse_ui_guidl.htm "Guideline")

-   [Use in operand positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuse_operand_position_guidl.htm "Guideline")

Continue
[Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensyst_field_access_guidl.htm)
[Obsolete and Internal System Fields](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobs_intern_system_field_guidl.htm)
[Evaluation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenevaluation_guidl.htm)
[Return Code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreturn_value_guidl.htm)
[Using System Fields as Actual Parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuse_actual_parameters_guidl.htm)
[Using System Fields on the User Interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuse_ui_guidl.htm)
[Using Elements in Operand Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuse_operand_position_guidl.htm)