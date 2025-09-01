  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Transformations](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [Simple Transformations (ST)](javascript:call_link\('abenabap_st.htm'\)) →  [ST - Serialization and Deserialization](javascript:call_link\('abenst_serial_deserial.htm'\)) →  [ST - Flow Control](javascript:call_link\('abenst_flow_control.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ST - tt:switch, Case Distinction, ABENST_TT_SWITCH, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

ST - tt:switch, Case Distinction

Syntax

<tt:switch>
  <tt:*\[*s-*|*d-*\]*cond ...
  <tt:*\[*s-*|*d-*\]*cond ...
  ...
</tt:switch>

Effect

The statement tt:switch can be used to execute a maximum of one conditional transformations from a set of conditional transformations. A list of cases is specified in tt:switch, where the syntax of each case is formulated by a conditional transformation, namely a subelement [tt:*\[*s-*|*d-*\]*cond](javascript:call_link\('abenst_tt_cond.htm'\)). In this case, tt:*\[*s-*\]*cond defines a serialization-relevant case, and tt:*\[*d-*\]*cond a deserialization-relevant case. Other direct subelements are not possible in tt:switch.

In contrast to conditional transformations positioned outside of tt:switch, for a case specifying at least one attribute [using](javascript:call_link\('abenst_using.htm'\)), [data](javascript:call_link\('abenst_data.htm'\)), or [check](javascript:call_link\('abenst_check.htm'\)) is not necessary, provided that the content of tt:*\[*s-*|*d-*\]*cond is not a [pattern](javascript:call_link\('abenst_pattern.htm'\)).

In the list of cases, the following must be noted:

-   Only one serialization-relevant case may be specified in which no attribute using, data, or check is specified. This case is called standard serialization.
-   A maximum of one deserialization-relevant case may be specified that does not contain a pattern. This case is called standard deserialization.

Serialization   

Serializations follow these rules:

1.  The first serialization-relevant case tt:*\[*s-*\]*cond whose explicitly specified prerequisites are met is serialized and the element tt:switch is exited.
2.  If the prerequisite is not met for any of the serialization-relevant cases with explicitly specified attributes using, data, or check, the standard serialization is executed (if it exists) and the element tt:switch is exited.
3.  If no standard serialization exists, the exception CX\_ST\_SWITCH\_NO\_CASE is raised.

In successful serializations, exactly one case is executed.

Deserialization   

Deserializations follow these rules:

1.  The first deserialization-relevant case tt:*\[*d-*\]*cond that contains a suitable [pattern](javascript:call_link\('abenst_pattern.htm'\)) and whose prerequisites are met is executed (the assertions are deserialized and met) and the element tt:switch is exited.
2.  If no deserialization-relevant case that contains a pattern can be executed, the system tries to execute a standard deserialization, if it exists. After the execution, the element tt:switch is exited. If the possible prerequisites using, data, or check of the standard deserialization are not met, the exception CX\_ST\_REF\_ACCESS is raised.
3.  If no standard deserialization exists, the exception CX\_ST\_SWITCH\_NO\_CASE is raised.

In successful deserializations, exactly one case is executed.

Hint

When case distinctions are programmed, serializations and deserializations should be formulated as far as possible in shared cases tt:cond, whereas the directional cases tt:s-cond and tt:d-cond should be used only if no shared formulation is possible.

Example

In serializations, the transformation below sets the attribute size of element Paragraph depending on the value of the data node SIZE to exactly one value of Small, Big, or Medium, where Medium is created in standard serializations.

<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="SIZE"/>
  <tt:template>
    <Paragraph>
      <tt:attribute name="size">
        <tt:switch>
          <tt:s-cond check="SIZE<10">
            <tt:text>Small</tt:text>
          </tt:s-cond>
          <tt:s-cond check="SIZE>20">
            <tt:text>Big</tt:text>
          </tt:s-cond>
          <tt:s-cond>
            <tt:text>Medium</tt:text>
          </tt:s-cond>
          <tt:d-cond using="exist(SIZE)" data="SIZE=8">
            <tt:text>Small</tt:text>
          </tt:d-cond>
          <tt:d-cond using="exist(SIZE)" data="SIZE=16">
            <tt:text>Medium</tt:text>
          </tt:d-cond>
          <tt:d-cond using="exist(SIZE)" data="SIZE=28">
            <tt:text>Big</tt:text>
          </tt:d-cond>
          <tt:d-cond using="exist(SIZE)" data="SIZE=12">
            <tt:skip/>
          </tt:d-cond>
        </tt:switch>
      </tt:attribute>
      <tt:text>Text</tt:text>
    </Paragraph>
  </tt:template>
</tt:transform>

If, for example, the input values for SIZE lie between 10 and 20, the result looks as follows:

<Paragraph size="Medium">Text</Paragraph>

In deserializations, data is used to assign to the data node SIZE a value 8, 16, or 28 for each of the three valid attribute values Small, Medium, and Big. If a different attribute value is specified, the value 12 is assigned to SIZE in standard deserializations and the invalid attribute is skipped with tt:skip.

In the above transformation, serializations and deserializations are handled completely separately and are divided within a single tt:switch element. Since there is no shared case for serializations and deserializations, tt:serialize and tt:deserialize and two tt:switch elements can also be used to achieve the same result. In this case, the identifiers s- and d- can be omitted in front of cond and the query about whether SIZE is bound to an ABAP data object must be queried only once:

<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="SIZE"/>
  <tt:template>
    <Paragraph>
      <tt:attribute name="size">
        <tt:serialize>
          <tt:switch>
            <tt:cond check="SIZE<10">
              <tt:text>Small</tt:text>
            </tt:cond>
            <tt:cond check="SIZE>20">
              <tt:text>Big</tt:text>
            </tt:cond>
            <tt:cond>
              <tt:text>Medium</tt:text>
            </tt:cond>
          </tt:switch>
        </tt:serialize>
        <tt:deserialize>
          <tt:cond using="exist(SIZE)">
            <tt:switch>
              <tt:cond data="SIZE=8">
                <tt:text>Small</tt:text>
              </tt:cond>
              <tt:cond data="SIZE=16">
                <tt:text>Medium</tt:text>
              </tt:cond>
              <tt:cond data="SIZE=28">
                <tt:text>Big</tt:text>
              </tt:cond>
              <tt:cond data="SIZE=12">
                <tt:skip/>
              </tt:cond>
            </tt:switch>
          </tt:cond>
        </tt:deserialize>
      </tt:attribute>
      <tt:text>Blahblah</tt:text>
    </Paragraph>
  </tt:template>
</tt:transform>