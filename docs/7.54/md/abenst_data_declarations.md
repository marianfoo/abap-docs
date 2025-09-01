---
title: "ST - Data Declarations"
description: |
  In ST programs, data can be declared using the following statements: -   tt:root(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_tt_root.htm) defines data roots for ABAP data interfaces. -   tt:parameter(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_tt_param
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_data_declarations.htm"
abapFile: "abenst_data_declarations.htm"
keywords: ["do", "if", "data", "abenst", "declarations"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xml.htm) →  [Transformations for XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xml_trafos.htm) →  [ST - Simple Transformations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_st.htm) →  [ST - Structure of ST Programs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_programs_structure.htm) → 

ST - Data Declarations

In ST programs, data can be declared using the following statements:

-   [tt:root](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_tt_root.htm) defines data roots for ABAP data interfaces.

-   [tt:parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_tt_parameter.htm) defines parameters as formal parameters.

-   [tt:variable](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_tt_variable.htm) defines variables as local data.

If these statements are specified outside of a template in the context of the transformation, the data declarations apply to the [main template](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_tt_template_main.htm).

Within a [subtemplate](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_tt_template_sub.htm), the statements can be used in the element tt:context to declare local data of the subtemplate.

Continue
[ST - tt:root, Data Roots](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_tt_root.htm)
[ST - tt:parameter, Parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_tt_parameter.htm)
[ST - tt:variable, Variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_tt_variable.htm)