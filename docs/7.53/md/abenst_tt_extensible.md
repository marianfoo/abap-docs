  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Transformations for XML](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [ST - Simple Transformations](javascript:call_link\('abenabap_st.htm'\)) →  [ST - Serialization and Deserialization](javascript:call_link\('abenst_serial_deserial.htm'\)) →  [ST - Literal Template Content](javascript:call_link\('abenst_literals.htm'\)) →  [ST - Literal XML Elements and Attributes](javascript:call_link\('abenst_xml_literals.htm'\)) → 

ST - tt:extensible, Extensibility of Literal XML Elements

Syntax

... tt:extensible="on"*|*"deep-static"*|*"deep-dynamic"*|*"off"*|*"deep-off"  ...

Effect

In deserializations, XML elements in the input stream that are not specified in the ST program normally produce an error. If the processed XML format is to be extensible, elements that are not specified explicitly can be skipped without further processing through specification of the optional attribute tt:extensible. The attribute can accept the following values:

-   The value ″on" states that the current element may have direct subelements that are not explicitly specified. This is the standard setting.

-   Values ″deep-static" and ″deep-dynamic" state that the current element and its subelements can be extended. The value "off" deactivates extensibility for the current element but not its subelements. In other words, direct subelements cannot be added to the element but (specified) subelements can be.

-   The value "deep-off" deactivates extensibility for the current element and its subelements. These settings can be overwritten locally in individual subelements.

The values "deep-static" and "deep-dynamic" have different areas of validity:

-   "deep-static" only has an effect within the part of the program in which it is set.

-   "deep-dynamic" is effective across template calls using [tt:apply](javascript:call_link\('abenst_tt_apply.htm'\)) and [tt:call](javascript:call_link\('abenst_tt_call.htm'\)).

The deep extensibility that is configured using ″deep-static" and ″deep-dynamic" also takes effect in case distinctions with [tt:switch](javascript:call_link\('abenst_tt_switch.htm'\)) and groupings with [tt:group](javascript:call_link\('abenst_tt_group.htm'\)) by skipping unexpected elements that are not covered by a case.

Example

This example shows that extensibility together with optional elements (such as elements that are only deserialized when a condition occurs) causes problems, since extensibility generally means that such optional elements are not found. For example, the following section of program

<r tt:extensible="on">
  <tt:cond> <a tt:value-ref="A"/> </tt:cond>
  <b tt:value-ref="B"/>
</r>

with the input stream

<r><x/><a>1</a><b>2</b></r>

would not produce the deserialization A=1 since the unexpected element x determines the condition negatively using a. Both x and a are skipped as "extension elements" are only mandatory element b is deserialized as B=2. The problem can be solved by using [tt:group](javascript:call_link\('abenst_tt_group.htm'\)), although this also resolves the order of a and b:

<r tt:extensible="on">
  <tt:group>
    <tt:cond frq="?"> <a tt:value-ref="A"/> </tt:cond>
    <tt:cond>         <b tt:value-ref="B"/> </tt:cond>
  </tt:group>
</r>