  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_st.htm) →  [ST - Structure of ST Programs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_programs_structure.htm) → 

ST - tt:template, Main Template

Syntax

<tt:template *\[*name="tmpl"*\]*\>
  ...
</tt:template>

Effect

The statement tt:template defines a template. An ST program must contain at least one definition of a template: Each template of the transformation must be uniquely addressable. To achieve this, each template can be given a unique name, tmpl, using the name attribute and exactly one template without a name can be specified. The latter is implicitly the main template of the transformation if no template is specified in the root element, [tt:transform](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_transform.htm). Template names are not case-sensitive.

The content of the main template (which can call subtemplates) represents the structure of the XML data to which the ABAP data is serialized or from which the data is deserialized.

The content of a template can consist of literal XML elements and ST statements.