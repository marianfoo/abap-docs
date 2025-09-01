  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Transformations](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [Simple Transformations (ST)](javascript:call_link\('abenabap_st.htm'\)) →  [ST - Structure of ST Programs](javascript:call_link\('abenst_programs_structure.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ST - tt:transform, Root Element, ABENST_TT_TRANSFORM, 757%0D%0A%0D%0AError:%0D%0A%0D%
0A%0D%0A%0D%0ASuggestion for improvement:)

ST - tt:transform, Root Element

Syntax

<tt:transform *\[*template="tmpl"*\]*\>
  ...
</tt:transform>

Effect

The keyword for the root element of an ST program is tt:transform. The name of a template tmpl can optionally be specified for the template attribute. The specified template forms the [main template](javascript:call_link\('abenst_tt_template_main.htm'\)) of the transformation. When the program is executed, this template is evaluated. If no explicit main template is specified, the template for which no name is specified is set as the main template by default.