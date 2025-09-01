  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Transformations for XML](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [ST - Simple Transformations](javascript:call_link\('abenabap_st.htm'\)) →  [ST - Serialization and Deserialization](javascript:call_link\('abenst_serial_deserial.htm'\)) →  [ST - Flow Control](javascript:call_link\('abenst_flow_control.htm'\)) →  [ST - tt:cond, Conditional Transformations](javascript:call_link\('abenst_tt_cond.htm'\)) → 

ST - Pattern

When [conditional transformations](javascript:call_link\('abenst_tt_cond.htm'\)) are deserialized, the fact that the template content is also a pattern is used as a criterion for the assessment. A pattern contains one or more constructs that are used as markers. The most common form of a marker is a literal XML element: If the content of the condition consists of exactly one XML element, the condition has a positive result if an XML with this name follows in the current position in the XML input stream.

Marker constructs are:

-   [Literal XML element](javascript:call_link\('abenst_xml_literals.htm'\)) with or without content

-   [Non-literal attribute](javascript:call_link\('abenst_tt_attribute.htm'\)) with content

-   Non-empty [literal text](javascript:call_link\('abenst_tt_text.htm'\))

-   Explict [empty template content](javascript:call_link\('abenst_tt_empty.htm'\))

Each of these constructs can be compared with the input stream in an obvious way.

A pattern can usually contain multiple markers. For example, the sequence

<tt:cond>
  <X> ... </X>
</tt:cond>
<Y> ... </Y>

is also a pattern; it contains the markers <X> and <Y>. A condition with this pattern is determined positively by element X as well as by element Y in the input stream (in the second case, condition is determined negatively with X).

The number of marker constructs M(c) contained in template content c is defined recursively below. Template content c is a pattern if M(c) is not empty. In summary, M(c) consists of the markers that can be used to positively determine pattern c, where conditions in an initial part of c can also be determined negatively.

-   M(c) = {c} for marker c. This means that each marker is a (primitive) pattern and the marker set for this pattern consists of the marker itself.

Some constructs propagate markers externally:

-   M(tt:deserialize) = M(tt:ref) = M(c) for the content c of the construct in question.

-   M(tt:apply) = M(c) for the body c of the called template.

-   M(tt:loop) = M(c) for the loop body c.

Transformations with conditions also propagate markers. If differences in cases exist or groupings, the union of all cases is determined:

-   M(tt:*\[*d-*\]*cond) = M(c) for the condition body c.

-   M(tt:group) = M(tt:switch) = M(c1) U ... U M(cn) for all cases ci = tt:*\[*d-*\]*cond

For all other instructions c, M(c) is empty.

For c1 c2 ... sequences in template content, the following applies:

-   M(c1 c2 ...) = M(c1) U M(c2 ...), if c1 is a prepattern, otherwise M(c1)

Template content is a pre-pattern if its deserialization is possible without the use of content from the input stream. In detail:

-   All constructs with an empty deserialization are pre-patterns. These are tt:s-cond, tt:assign, tt:clear, tt:serialize, tt:write, and compositions of these with tt:cond-var, tt:switch-var, and tt:apply.

-   tt:*\[*d-*\]*cond is a pre-pattern if the condition body is a pattern. (If the pattern cannot be compared, the condition is determined negatively and is skipped.)

tt:deserialize, tt:ref, and tt:apply propagate the pre-pattern property.

Example

The content of the following element tt:cond is a pattern with marker elements {f1, f2, f3} (but not fx).

<tt:cond s-check="not-initial(F3) and initial(F6)">
  <tt:clear ref="F3"/>
  <tt:cond check="not-initial(F1) or not-initial(F2)">
    <tt:cond check="not-initial(F1)">
      <tt:clear ref="F1"/>
      <tt:serialize>
        <f1 a="v" tt:value-ref="F1"/>
      </tt:serialize>
      <tt:deserialize>
        <f1 tt:value-ref="F1"/>
      </tt:deserialize>
    </tt:cond>
    <f2 tt:value-ref="F2"/>
  </tt:cond>
  <f3 tt:value-ref="F3"/>
  <fx> ... </fx>
</tt:cond>