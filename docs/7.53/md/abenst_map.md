  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Transformations for XML](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [ST - Simple Transformations](javascript:call_link\('abenabap_st.htm'\)) →  [ST - Serialization and Deserialization](javascript:call_link\('abenst_serial_deserial.htm'\)) →  [ST - Transformation of ABAP Values](javascript:call_link\('abenst_abap_values.htm'\)) →  [ST - tt:value, Elementary Data Objects](javascript:call_link\('abenst_tt_value_elementary.htm'\)) → 

ST - map, Mapping List

Syntax

... map="..., val(a1, a2, ...) > xml(x), ..." ...
... map="..., xml(x1, x2, ...) > val(a), ..." ...
... map="..., val(a) = xml(x), ..." ...
... map="..., xml(x) = val(a), ..." ...

Effect

The attribute map is used to specify a mapping list for [tt:value](javascript:call_link\('abenst_tt_value_elementary.htm'\)), [tt:write](javascript:call_link\('abenst_tt_write.htm'\)), and [tt:read](javascript:call_link\('abenst_tt_read.htm'\)). This is done to map a list of explicitly specified values to precisely one value when serializing or deserializing. A mapping list consists of a single mapping rule or a comma-delimited list of multiple mapping rules. The following mapping rules are possible:

-   val(a1, a2, ...) > xml(x)

This mapping rule is analyzed in serializations. If the value of the current data node matches one of the specified values a1, a2, ... it is transformed to the value x.

-   xml(x1, x2, ...) > val(a)

This mapping rule is analyzed in deserializations. If the value of the current node matches one of the specified values x1, x2, ... it is transformed to the ABAP value a.

-   val(a) = xml(x) and xml(x) = val(a)

These mapping rules both mean the same thing and are analyzed in both serializations and deserializations. If the value of the current node corresponds to the specified value a, it is converted into value x, and vice versa.

The values a, a1, a2, ... must be specified in accordance with the [representation of ABAP values](javascript:call_link\('abenst_abap_representation.htm'\)). The XML values x, x1, x2, ... must be put in quotation marks.

Note

If mapping rules with more than one argument are used, transformation is usually no longer [symmetrical](javascript:call_link\('abenst_symmetry.htm'\)).

Example

Serialization of ABAP data using a mapping list:

<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT1"/>
  <tt:root name="ROOT2"/>
  <tt:template>
    <X0>
      <X1>
        <tt:value  ref="ROOT1"
            map="val(C('Woman'), C('Man')) > xml('Person')" />
      </X1>
      <X2>
        <tt:value  ref="ROOT2"
            map="val(C('Woman'), C('Man')) > xml('Person')" />
      </X2>
    </X0>
  </tt:template>
</tt:transform>

The transformation is not [symmetrical](javascript:call_link\('abenst_symmetry.htm'\)). In the following ABAP program, field1 and field2 contain the value "Person" after deserialization.

DATA xml\_string TYPE string.
DATA field1 TYPE string VALUE 'Woman'.
DATA field2 TYPE string VALUE 'Man'.
CALL TRANSFORMATION ...
  SOURCE root1 = field1
         root2 = field2
  RESULT XML xml\_string.
CALL TRANSFORMATION ...
  SOURCE XML xml\_string
  RESULT root1 = field1
         root2 = field2.