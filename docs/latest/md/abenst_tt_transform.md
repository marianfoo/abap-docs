---
title: "Syntax"
description: |
  <tt:transform template='tmpl'> ... </tt:transform> Effect The keyword for the root element of an ST program is tt:transform. The name of a template tmpl can optionally be specified for the template attribute. The specified template forms the main template(https://help.sap.com/doc/abapdocu
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_transform.htm"
abapFile: "abenst_tt_transform.htm"
keywords: ["do", "if", "data", "abenst", "transform"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_st.htm) →  [ST - Structure of ST Programs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_programs_structure.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ST%20-%20tt%3Atransform%2C%20Root%20Element%2C%20ABENST_TT_TRANSFORM%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ST - tt:transform, Root Element

Syntax

<tt:transform *\[*template="tmpl"*\]*\>
  ...
</tt:transform>

Effect

The keyword for the root element of an ST program is tt:transform. The name of a template tmpl can optionally be specified for the template attribute. The specified template forms the [main template](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_template_main.htm) of the transformation. When the program is executed, this template is evaluated. If no explicit main template is specified, the template for which no name is specified is set as the main template by default.