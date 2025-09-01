  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_st.htm) →  [ST - Modularization with Subtemplates](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_modularization.htm) → 

ST - tt:template, tt:context, Create Subtemplate

Syntax

<tt:template name="tmpl">
  *\[*<tt:context>
    *\[*<tt:root name="root1" *\[**\[*line-*\]*type=...*\]* />
     <tt:root name="root2" *\[**\[*line-*\]*type=...*\]* />
     ...*\]*
    *\[*<tt:parameter name="para1" *\[**\[*s-*|*d-*\]*val="def1"*\]*
                                *\[*kind="knd1"*\]* />
     <tt:parameter name="para2" *\[**\[*s-*|*d-*\]*val="def2"*\]*
                                *\[*kind="knd2"*\]* />
     ...*\]*
    *\[*<tt:variable name="vari1" *\[**\[*s-*|*d-*\]*val="val1"*\]* />
     <tt:variable name="vari2" *\[**\[*s-*|*d-*\]*val="val2"*\]* />
     ...*\]*
   </tt:context>*\]*
  ...
</tt:template>

Effect

Like the [main template](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_template_main.htm), subtemplates are defined with tt:template. Using the attribute name, define a unique name tmpl for the subtemplate.

Data in Subtemplates

In a subtemplate, custom data can be declared: tt:context can be used to define a context for the statements [tt:root](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_root.htm), [tt:variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_variable.htm), and [tt:parameter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_parameter.htm). The statement tt:context is allowed only in subtemplates and the statements tt:root, tt:variable, and tt:parameter are allowed in a template only within tt:context.

Like in the main template, there are three categories of data, all in a single namespace:

-   Data roots

The data roots declared with tt:root have the same meaning for the subtemplate as the data roots declared at the highest hierarchy level for the main template. This means that they also spread independent tree structures. In contrast to the data roots of the main template, the local data roots of subtemplates do not form a simple transformation interface to the ABAP program, but instead an interface to the including template, to which an ABAP data object can be bound with [tt:with-root](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_apply.htm).

The data roots of the subtemplates can be typed in exactly the same way as the main templates using attribute *\[*line-*\]*type.

-   Parameters

The parameters declared using tt:parameter are formal parameters of the subtemplate, to which a value can be passed using [tt:with-parameter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_apply.htm). Otherwise, the same applies as for the parameters of the main template.

-   Variables

The variables declared with tt:variable are local variables of the subtemplate; they are visible only there. Otherwise, the same applies as for the variables of the main template.

Note

Local types cannot be defined in subtemplates using [tt:type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_type.htm).

Addressing Data in Subtemplates

A subtemplate without separate data roots creates a separate tree structure of data nodes whose root node is the [current node](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_ref.htm) from the calling position in the calling template. As a prerequisite for calling a template like this, the current node must be defined at the call position. At the start of the subtemplate, this root node is also the current node of the subtemplate. In a subtemplate like this, the current node can be [set](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_ref.htm) as described for main templates, but in contrast to main templates, it is never undefined. Data nodes outside of the tree structure of the subtemplate cannot be addressed. In particular, the data roots of the main template cannot be addressed with .name.

Addressing the data nodes of a subtemplate with own data roots happens exactly as described for the main template. As long as no current node is defined, the data roots of the subtemplate can be addressed using name. After they are hidden by a current node, the only way to address them is with .name.

Hint

Figuratively speaking, a subtemplate without separate data roots works exclusively with the substructure of the main template tree structure whose root nodes are bound.

Examples

See [Call Subtemplate](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_apply.htm).