  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Transformations](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [Simple Transformations (ST)](javascript:call_link\('abenabap_st.htm'\)) →  [ST - Serialization and Deserialization](javascript:call_link\('abenst_serial_deserial.htm'\)) →  [ST - Literal Template Content](javascript:call_link\('abenst_literals.htm'\)) →  [ST - Literal XML Elements and Attributes](javascript:call_link\('abenst_xml_literals.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ST - tt:lax, Name Comparisons of Literal XML Elements, ABENST_TT_LAX, 757%0D%0A%0D%0A
Error:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ST - tt:lax, Name Comparisons of Literal XML Elements

Syntax

... tt:lax="on"*|*"off"*|*"deep-on"*|*"deep-off" ...

Effect

When deserializing literal XML elements, the optional attribute tt:lax can be used to control whether the name of an element is respected.

-   If tt:lax is specified with the value off, the inbound XML stream must contain an identically named element with all literal attributes attr of the same content.
-   If tt:lax is specified with the value on, the element in the inbound XML stream can have any name, but the expected attributes must still match.
-   The values deep-on and deep-off for tt:lax are used to set the setting on and off for all subelements of the current element; however, they can be overwritten locally there.

If tt:lax is not specified, the setting depends on the surrounding context. By default, a template has the setting deep-off.

Example

The following XML fragment is to be assumed:

<X my\_attr="attr">abc</X>

Due to tt:lax="on", the ST program below can still deserialize this fragment despite different element names:

<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
<tt:root name="ROOT"/>
  <tt:template>
     <Y tt:lax="on">
       <tt:value ref="ROOT" />
     </Y>
   </tt:template>
</tt:transform>