  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Transformations](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [Simple Transformations (ST)](javascript:call_link\('abenabap_st.htm'\)) →  [ST - Reusing ST Programs](javascript:call_link\('abenst_reuse.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ST - tt:include, Include Transformations, ABENST_TT_INCLUDE, 757%0D%0A%0D%0AError:%0D
%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ST - tt:include, Include Transformations

Syntax

<tt:include name="trafo" *\[*templates="tmpl1 tmpl2 ..."*\]* />

Effect

In an ST program, the statement tt:include can be used to include a different ST program trafo, as follows: This statement makes the templates and type definitions of the included program usable in the current ST program. The ST program trafo must exist in the repository. trafo is not case-sensitive.

The ST statement tt:include can be listed in an ST program only outside of templates. By default, it includes all named templates of transformation trafo at transformation level (unnamed [main templates](javascript:call_link\('abenst_tt_template_main.htm'\)) are not included). No namespace conflicts can occur and transformations must not include themselves.

If the attribute templates is specified, only the templates tmpl1 tmpl2 specified there and the templates called by them using [tt:apply](javascript:call_link\('abenst_tt_apply.htm'\)) are included.

Hint

Only those transformations can be included in another transformation whose named templates are not in conflict with the existing named templates. [tt:apply](javascript:call_link\('abenst_tt_apply.htm'\)) can be used to use the included named templates as subtemplates in the including template.

Example

The ST program below corresponds to the example from [Subtemplates Without Their Own Data Roots](javascript:call_link\('abenst_tt_template_sub.htm'\)), except that the subtemplate of an included ST program is used.

<tt:transform template="TEMP\_MAIN"
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT"/>
  <tt:template name="TEMP\_MAIN">
    <week>
      <day1 tt:ref="ROOT.DAY1">
        <tt:apply name="TEMP\_SUB" />
      </day1>
      <day2 tt:ref="ROOT.DAY2">
        <tt:apply name="TEMP\_SUB" />
      </day2>
      ...
    </week>
  </tt:template>
  <tt:include name="..." />
</tt:transform>

The statement tt:include could also be placed in front of the main template. The included ST program can be implemented as follows:

<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:template>
    ...
  </tt:template>
  <tt:template name="TEMP\_SUB">
    <name>
      <tt:value ref="$ref.name" />
    </name>
    <work>
      <tt:value ref="$ref.work" />
    </work>
  </tt:template>
</tt:transform>