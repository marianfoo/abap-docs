  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Transformations](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [Simple Transformations (ST)](javascript:call_link\('abenabap_st.htm'\)) →  [ST - Structure of ST Programs](javascript:call_link\('abenst_programs_structure.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ST%20-%20tt%3Atemplate%2C%20Main%20Template%2C%20ABENST_TT_TEMPLATE_MAIN%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ST - tt:template, Main Template

Syntax

<tt:template *\[*name="tmpl"*\]*\>
  ...
</tt:template>

Effect

The statement tt:template defines a template. An ST program must contain at least one definition of a template: Each template of the transformation must be uniquely addressable. To achieve this, each template can be given a unique name, tmpl, using the name attribute and exactly one template without a name can be specified. The latter is implicitly the main template of the transformation if no template is specified in the root element, [tt:transform](javascript:call_link\('abenst_tt_transform.htm'\)). Template names are not case-sensitive.

The content of the main template (which can call subtemplates) represents the structure of the XML data to which the ABAP data is serialized or from which the data is deserialized.

The content of a template can consist of literal XML elements and ST statements.