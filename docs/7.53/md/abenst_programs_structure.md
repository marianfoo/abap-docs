  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Transformations for XML](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [ST - Simple Transformations](javascript:call_link\('abenabap_st.htm'\)) → 

ST - Structure of ST Programs

Syntax

<?sap.transform simple?>
<tt:transform *\[*template="tmpl"*\]*
  xmlns:tt="http://www.sap.com/transformation-templates">
  *\[*<tt:type name="..." *\[*...*\]*\>
     ...
   </tt:type>
   ...*\]*
  *\[*<tt:root name="root1" *\[*...*\]* />
   <tt:root name="root2" *\[*...*\]* />
   ...*\]*
  *\[*<tt:parameter name="para1" *\[*...*\]* />
   <tt:parameter name="para2" *\[*...*\]* />
   ...*\]*
  *\[*<tt:variable name="vari1" *\[*...*\]* />
   <tt:variable name="vari2" *\[*...*\]* />
   ...*\]*
  <tt:template *\[*name=="tmpl"*\]*\>
    ...
  </tt:template>
  *\[*<tt:template *\[*name=="..."*\]*\>
     ...
   </tt:template>
  ...*\]*
</tt:transform>

Effect

An ST program must consist of valid XML data, structured as follows.

-   The first line <? ... ?> serves to identify the transformation type (ST). It does not need to be entered because the syntax check inserts it automatically.

-   The elements of namespace "http://www.sap.com/transformation-templates" are [ST commands](javascript:call_link\('abenst_statements.htm'\)). Namespace prefix tt is used in this documentation as a convention for this namespace. ST commands can be XML elements or attributes. All other components of an XML element are called literal elements, which means that they have no semantics within the ST language.

-   Possible elements of an ST program are:

-   Type definitions using [tt:type](javascript:call_link\('abenst_tt_type.htm'\)).

-   A root element [tt:transform](javascript:call_link\('abenst_tt_transform.htm'\)).

-   Various data declarations using [tt:root](javascript:call_link\('abenst_tt_root.htm'\)), [tt:parameter](javascript:call_link\('abenst_tt_parameter.htm'\)), and [tt:variable](javascript:call_link\('abenst_tt_variable.htm'\)).

-   A [main template](javascript:call_link\('abenst_tt_template_main.htm'\)) defined with tt:template and any number of [subtemplates](javascript:call_link\('abenst_tt_template_sub.htm'\)). A template is a pattern for the XML data into which ABAP data is serialized or from which data is deserialized, respectively.

These elements can be in any order.

Note

In this documentation and in the example programs, double quotation marks (") are used as outer quotation marks and single quotation marks (') as inner quotation marks. However, as usual in XML, this is not mandatory. For example, 'not-initial(ref("X.Y"))' can be written instead of "not-initial(ref('X.Y'))".

Executable Example

[Example of an ST program](javascript:call_link\('abenst_program_abexa.htm'\))

Continue
[ST - tt:transform, Root Element](javascript:call_link\('abenst_tt_transform.htm'\))
[ST - tt:type, tt:front, tt:node, Type Definitions](javascript:call_link\('abenst_tt_type.htm'\))
[ST - Data Declarations](javascript:call_link\('abenst_data_declarations.htm'\))
[ST - tt:template, Main Template](javascript:call_link\('abenst_tt_template_main.htm'\))
![Example](exa.gif "Example") [Simple Transformation, Example of an ST Program](javascript:call_link\('abenst_program_abexa.htm'\))