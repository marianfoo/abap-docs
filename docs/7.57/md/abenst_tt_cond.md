  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_st.htm) →  [ST - Serialization and Deserialization](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_serial_deserial.htm) →  [ST - Flow Control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_flow_control.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ST - tt:cond, Conditional Transformations, ABENST_TT_COND, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ST - tt:cond, Conditional Transformations

Syntax

<tt:*\[*s-*|*d-*\]*cond *\[*using="..."*\]*
                *\[*data="..."*\]*
                *\[**\[*s-*|*d-*\]*check="..."*\]*\>
  ...
</tt:*\[*s-*|*d-*\]*cond>

Effect

Conditional transformations are realized as the content of an element tt:\[s-|d-\]cond. They represent parts of ST programs that are respected only if certain prerequisites are met. Conditional transformations are normally used as cases in [tt:switch](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_tt_switch.htm) and [tt:group](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_tt_group.htm).

The content of tt:*\[*s-*|*d-*\]*cond depends on

-   a precondition in the attribute [using](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_using.htm)
-   an assertion in the attribute [data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_data.htm)
-   a condition in the attribute [check](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_check.htm)

If the content of tt:*\[*s-*|*d-*\]*cond is not a [pattern](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_pattern.htm), at least one attribute using, data, or check must be specified.

-   The element tt:cond is evaluated in serializations and deserializations.
-   The element tt:s-cond is evaluated only in serializations and skipped in deserializations. The content of tt:s-cond is never deserialized.
-   The element tt:d-cond is evaluated only in deserializations and skipped in serializations. The content of tt:s-cond is never serialized.

The condition [check](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_check.htm) can also be used directionally:

-   The condition check is evaluated in serializations and deserializations.
-   The condition s-check is evaluated only in serializations.
-   The condition d-check is evaluated only in deserializations.

It makes no sense to specify s-check in tt:d-cond or d-check in tt:s-cond.

Serialization   

In serializations, the

-   [precondition using](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_using.htm)
-   the [assertion data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_data.htm)
-   the [condition check](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_check.htm)

are evaluated. The content of element tt:*\[*s-*\]*cond is serialized only if all three prerequisites are met. Otherwise the comparison is terminated at the first false prerequisite and the content of tt:*\[*s-*\]*cond is skipped.

If none of the three possible attributes is specified in tt:*\[*s-*\]*cond, the prerequisite is considered fulfilled. If the content of tt:*\[*s-*\]*cond is empty in serializations, the element is ignored.

Deserialization   

In deserializations, before and during the check of the [precondition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_using.htm), the system distinguishes whether or not the content of tt:*\[*d-*\]*cond is a [pattern](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_pattern.htm). The deserialization proceeds as follows:

1.  Check whether the content of tt:*\[*d-*\]*cond is a [pattern](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_pattern.htm).
    -   If the content of tt:*\[*d-*\]*cond is a [pattern](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_pattern.htm), it is compared to the current element of the XML inbound stream. If the pattern does not fit the current element, the element tt:*\[*d-*\]*cond is skipped and the current element of the XML inbound stream is not consumed. Otherwise Step 2 follows.
    -   If the content of tt:*\[*d-*\]*cond is not a [pattern](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_pattern.htm), Step 2 follows.
2.  Check of the [precondition using](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_using.htm)
    -   If the content of tt:*\[*d-*\]*cond is a [pattern](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_pattern.htm) and the precondition is not met, the element tt:*\[*d-*\]*cond is skipped and the current element of the inbound XML stream is consumed without being deserialized. If the precondition is met, Step 3 follows.
    -   If the content of tt:*\[*d-*\]*cond is not a [pattern](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_pattern.htm) and the precondition is not met, the deserialization is canceled with the exception CX\_ST\_REF\_ACCESS. If the precondition is met, Step 3 follows.
3.  Evaluation of the instruction body
    
    The body of the instruction is evaluated. In this process, data nodes are deserialized. Their existence or type can have been ensured in Step 2; the result of the deserialization can be checked for plausibility in Step 5.
    
4.  Establishment of the [assertion data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_data.htm)
    
    The value asserted in the assertion is assigned to all data nodes specified in this assertion. If, during deserialization of the current element of the XML inbound stream, a different value is assigned to one of these data nodes, the deserialization is terminated with exception CX\_ST\_COND\_CHECK\_FAIL.
    
5.  Check of the [condition check](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_check.htm)
    
    The condition *\[*d-*\]*check is checked. If the condition is not met, the deserialization is canceled with the exception CX\_ST\_COND\_CHECK\_FAIL.
    

If none of the three possible attributes using, data, or check is specified in tt:*\[*d-*\]*cond, the content of tt:*\[*d-*\]*cond must not be empty and it is evaluated in Step 1, depending on whether or not it is a [pattern](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_pattern.htm). The other prerequisites (Steps 3 to 4) are considered fulfilled.

Hints

-   An assertion can be used to assign a value to a data node without the node being filled by the inbound stream. Instead of an empty element tt:*\[*d-*\]*cond, the statement tt:assign should be used in this case.
-   The empty element tt:*\[*d-*\]*cond can be used to check the current content of data nodes in deserializations.
-   The element tt:*\[*d-*\]*cond without explicit conditions can be used to flag optional content in deserializations. This means, if a pattern does not exist in the XML inbound stream, its evaluation is skipped without raising an exception.

Example

The transformation below demonstrates conditions:

<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT1"/>
  <tt:root name="ROOT2"/>
  <tt:root name="ROOT3"/>
  <tt:template>
    <X>
      <tt:d-cond>
        <X0>
          ...
        </X0>
      </tt:d-cond>
      <tt:d-cond data="ROOT3=333"/>
      <tt:cond  using="type-I(ROOT1), type-I(ROOT2)"
                data="ROOT1=111"
                d-check="ROOT2<ROOT3">
        <X1>
          <tt:value ref="ROOT1"/>
        </X1>
        <X2>
          <tt:value ref="ROOT2"/>
        </X2>
      </tt:cond>
      <tt:cond d-check="ROOT2>111"/>
    </X>
  </tt:template>
</tt:transform>

If the ABAP data objects bound to ROOT1 and ROOT2 are of type i and ROOT1 has the value 111, then the transformation generates the following XML fragment, regardless of the ABAP data object bound to the data root ROOT3:

<X>
  <X1>111</X1>
  <X2>222</X2>
</X>

The same transformation can deserialize this XML fragment, thereby setting ROOT3 to the value 333. The deserialization fails if X1 does not have the value 111 and if X2 does not lie between 111 and 333. The element X0 of the transformation is optional. It would also be possible to deserialize the following XML fragment:

<X>
  <X0>...</X0>
  <X1>111</X1>
  <X2>222</X2>
</X>

However, if the first subelement of the XML fragment has a name other than X0, the exception CX\_ST\_MATCH\_ELEMENT would be raised.

Continue
[ST - using, Preconditions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_using.htm)
[ST - data, Assertions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_data.htm)
[ST - check, Conditions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_check.htm)
[ST - Pattern](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_pattern.htm)
[ST - tt:empty, Empty Content](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_tt_empty.htm)