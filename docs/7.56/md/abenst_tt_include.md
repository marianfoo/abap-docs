---
title: "Syntax"
description: |
  <tt:include name='trafo' templates='tmpl1 tmpl2 ...' /> Effect In an ST program, the statement tt:include can be used to include a different ST program trafo, as follows: This statement makes the templates and type definitions of the included program usable in the current ST program. The ST
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenst_tt_include.htm"
abapFile: "abenst_tt_include.htm"
keywords: ["do", "if", "case", "data", "abenst", "include"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_st.htm) →  [ST - Reusing ST Programs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenst_reuse.htm) → 

ST - tt:include, Include Transformations

Syntax

<tt:include name="trafo" *\[*templates="tmpl1 tmpl2 ..."*\]* />

Effect

In an ST program, the statement tt:include can be used to include a different ST program trafo, as follows: This statement makes the templates and type definitions of the included program usable in the current ST program. The ST program trafo must exist in the repository. trafo is not case-sensitive.

The ST statement tt:include can be listed in an ST program only outside of templates. By default, it includes all named templates of transformation trafo at transformation level (unnamed [main templates](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenst_tt_template_main.htm) are not included). No namespace conflicts can occur and transformations must not include themselves.

If the attribute templates is specified, only the templates tmpl1 tmpl2 specified there and the templates called by them using [tt:apply](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenst_tt_apply.htm) are included.

Hint

Only those transformations can be included in another transformation whose named templates are not in conflict with the existing named templates. [tt:apply](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenst_tt_apply.htm) can be used to use the included named templates as subtemplates in the including template.

Example

The ST program below corresponds to the example from [Subtemplates Without Their Own Data Roots](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenst_tt_template_sub.htm), except that the subtemplate of an included ST program is used.

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