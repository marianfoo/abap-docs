  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Transformations for XML](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [ST - Simple Transformations](javascript:call_link\('abenabap_st.htm'\)) →  [ST - Structure of ST Programs](javascript:call_link\('abenst_programs_structure.htm'\)) → 

ST - tt:transform, Root Element

Syntax

<tt:transform *\[*template="tmpl"*\]*\>
  ...
</tt:transform>

Effect

The keyword for the root element of an ST program is tt:transform. The name of a template tmpl can be specified for the template attribute (optional). The specified template forms the [main template](javascript:call_link\('abenst_tt_template_main.htm'\)) of the transformation. When the program is executed, this template is evaluated. If no explicit main template is specified, the template for which no name is specified is set as the main template by default.