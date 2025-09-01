  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Transformations](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [Simple Transformations (ST)](javascript:call_link\('abenabap_st.htm'\)) →  [ST - Serialization and Deserialization](javascript:call_link\('abenst_serial_deserial.htm'\)) →  [ST - Flow Control](javascript:call_link\('abenst_flow_control.htm'\)) → 

ST - tt:group, Grouping

Syntax

<tt:group>
  <tt:*\[*s-*|*d-*\]*cond *\[*frq="..."*\]* ...
  <tt:*\[*s-*|*d-*\]*cond *\[*frq="..."*\]* ...
  ...
</tt:group>

Effect

In deserializations, variable inbound XML streams containing groups of related elements in any order can be responded to using the statement tt:group. Hereby, a list of cases is specified in tt:group, where the syntax of each case is formulated by a conditional transformation, namely a subelement [tt:*\[*s-*|*d-*\]*cond](javascript:call_link\('abenst_tt_cond.htm'\)). In this case, tt:*\[*s-*\]*cond defines a serialization-relevant case, and tt:*\[*d-*\]*cond a deserialization-relevant case. Other direct subelements are not possible in tt:group. The statement tt:group can be a subelement of tt:*\[*s-*|*d-*\]*cond.

In contrast to conditional transformations positioned outside of tt:group, there is no need to specify at least one attribute [using](javascript:call_link\('abenst_using.htm'\)), [data](javascript:call_link\('abenst_data.htm'\)) or [check](javascript:call_link\('abenst_check.htm'\)) for a case, provided that the content of tt:*\[*s-*|*d-*\]*cond is not a [pattern](javascript:call_link\('abenst_pattern.htm'\)).

In the list of cases, the following must be noted:

-   Any number of serialization-relevant cases can be specified in which no attribute using, data, or check is specified.

-   Only one deserialization-relevant case that does not contain a [pattern](javascript:call_link\('abenst_pattern.htm'\)) can be specified. This case is called standard deserialization.

To control how often a deserialization-relevant case must or can be executed in deserializations, tt:*\[*d-*\]*cond within tt:group can contain the additional attribute frq (frequency) with one of three allowed values:

-   </tt:*\[*d-*\]*cond ... frq="1" >

Required case. The case must be executed exactly once while the group is processed.

-   </tt:*\[*d-*\]*cond ... frq="?" >

Optional case. The case is executed up to once while the group is processed.

-   </tt:*\[*d-*\]*cond ... frq="\*" >

Multiple case. The case can be executed any number of times while the group is processed.

For frq="?" and frq="\*", the expected element must not necessarily exist in the inbound XML stream.

Implicit frequency: If the attribute frq is not specified explicitly,

-   frq="1" is used implicitly in tt:cond cases that do not contain data conditions (that must be executed in serializations).

-   frq="?" is used implicitly in tt:cond cases that contain a data condition (that need not be executed in serializations).

Serialization

In serializations, the element tt:group is executed once as follows: All serialization-relevant cases with a met prerequisite or no prerequisite using, data, or check are executed in the given order.

Deserialization

In deserializations, the element tt:group initiates a loop. The system tries to select every required case (frequency 1) once. As soon as this happens, the loop ends. Until then, optional cases (frequency ?, up to once) and multiple cases (frequency \*, also multiple) can also be selected. In every loop pass, one of the deserialization-relevant cases whose maximum case frequency has not yet been reached is selected as follows:

1.  The first case that contains a suitable pattern is executed (deserialization and assertions met).
    
2.  If no such case exists, the system tries to execute the standard deserialization, if it exists. If the possible prerequisites using, data, or check of the standard deserialization are not met, the exception CX\_ST\_REF\_ACCESS is raised.
    
3.  If no standard deserialization exists, the exception CX\_ST\_GROUP\_MISSING\_CASE is raised.
    

Example

The following transformation shows how groupings work:

<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT1"/>
  <tt:root name="ROOT2"/>
  <tt:root name="ROOT3"/>
  <tt:root name="ROOT4"/>
  <tt:template>
    <X0>
      <tt:group>
        <tt:cond>
          <X3>
            <tt:value ref="ROOT3"/>
          </X3>
        </tt:cond>
        <tt:cond frq="?">
          <X2>
            <tt:value ref="ROOT2"/>
          </X2>
        </tt:cond>
        <tt:cond frq="\*">
          <X1>
            <tt:value ref="ROOT1"/>
          </X1>
        </tt:cond>
        <tt:cond>
          <tt:skip count="1"/>
        </tt:cond>
      </tt:group>
      <X4>
        <tt:value ref="ROOT4"/>
      </X4>
    </X0>
  </tt:template>
</tt:transform>

Assume that an inbound XML stream has the following form:

<X0>
   <X1>1</X1>
   <X1>2</X1>
   <X2>3</X2>
   <X2>4</X2>
   <X3>5</X3>
   <X4>6</X4>
</X0>

The deserialization proceeds as follows:

1.  In the first loop pass, element X1 is used and the first element X1 deserialized; ROOT1 is set to 1.
    
2.  In the second loop pass, element X1 is used again because of condition tt:cond frq="\*" and the second element X1 deserialized; ROOT1 is set to 2.
    
3.  In the third loop pass, element X2 is used and the first element X2 deserialized; ROOT2 is set to 3.
    
4.  In the fourth loop pass, element X2 cannot be used again because of condition tt:cond frq="?". Instead, the second element X2 is skipped in the standard deserialization with tt:skip. Specifying count is necessary because otherwise all subsequent elements would be skipped.
    
5.  In the fifth loop pass, element X3 is used and the first element X3 deserialized; ROOT3 is set to 5.
    
6.  All required cases of the group have been selected, so the loop ends. The element X4 is deserialized outside of tt:group and ROOT4 is set to 6.